const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

// Initialize Express app
const app = express();

// Set up CORS and JSON middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a JWT secret key. This should be isolated by using env variables for security
const jwtSecretKey = 'your_jwt_secret_key';

// Dynamic import lowdb module
const lowPromise = import('lowdb');
const FileSyncPromise = import('lowdb/adapters/FileSync');

Promise.all([lowPromise, FileSyncPromise])
  .then(async ([lowModule, FileSyncModule]) => {
    const low = lowModule.default;
    const FileSync = FileSyncModule.default;

    // Initialize lowdb database
    const adapter = new FileSync('./database.json');
    const db = low(adapter);
    db.defaults({ users: [] }).write();

    // Define routes
    app.get('/', (_req, res) => {
      res.send('Auth API.\nPlease use POST /auth & POST /verify for authentication');
    });

    app.post('/auth', async (req, res) => {
      const { email, password } = req.body;

      try {
        // Look up the user entry in the database
        const user = db
          .get('users')
          .find({ email })
          .value();

        if (!user) {
          // User not found, create a new user
          const hash = await bcrypt.hash(password, 10);
          db.get('users').push({ email, password: hash }).write();
          const token = jwt.sign({ email }, jwtSecretKey);
          res.status(200).json({ message: 'success', token });
        } else {
          // User found, compare passwords
          const result = await bcrypt.compare(password, user.password);
          if (!result) {
            return res.status(401).json({ message: 'Invalid password' });
          }
          const token = jwt.sign({ email }, jwtSecretKey);
          res.status(200).json({ message: 'success', token });
        }
      } catch (error) {
        console.error('Error during authentication:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    });

    app.post('/verify', (req, res) => {
      const tokenHeaderKey = 'jwt-token';
      const authToken = req.headers[tokenHeaderKey];
      if (!authToken) {
        return res.status(401).json({ status: 'invalid auth', message: 'error' });
      }
      try {
        const decoded = jwt.verify(authToken, jwtSecretKey);
        return res.status(200).json({ status: 'logged in', message: 'success', user: decoded });
      } catch (error) {
        return res.status(401).json({ status: 'invalid auth', message: 'error' });
      }
    });

    app.post('/check-account', (req, res) => {
      const { email } = req.body;
      const user = db
        .get('users')
        .find({ email })
        .value();
      res.status(200).json({ userExists: !!user });
    });

    // Listen on port 3080
    const port = 3080;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error importing lowdb or FileSync module:', error);
  });
