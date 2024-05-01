// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './screens/Home/Home.jsx';
import Login from './screens/Login/Login.jsx';
import SignUp from './screens/SignUp/SignUp.jsx';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <Router>
    <div>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path='/login' element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
      <Route exact path='/createuser' element={<SignUp />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
