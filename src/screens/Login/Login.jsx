import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const { setLoggedIn, setEmail: setParentEmail } = props; // Destructure props

  const onButtonClick = () => {
    setEmailError('');
    setPasswordError('');

    // Check if the user has entered both fields correctly
    if ('' === email) {
      setEmailError('Please enter your email');
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email');
      return;
    }

    if ('' === password) {
      setPasswordError('Please enter a password');
      return;
    }

    if (password.length < 8) {
      setPasswordError('The password must be 8 characters or longer');
      return;
    }

    // Check if email has an account associated with it
    checkAccountExists((accountExists) => {
      // If yes, log in
      if (accountExists) logIn();
      // Else, ask user if they want to create a new account and if yes, then log in
      else if (
        window.confirm(
          'An account does not exist with this email address: ' + email + '. Do you want to create a new account?',
        )
      ) {
        logIn();
      }
    });
  };

  // Call the server API to check if the given email ID already exists
  const checkAccountExists = (callback) => {
    fetch('http://localhost:3080/check-account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((r) => r.json())
      .then((r) => {
        callback(r?.userExists);
      });
  };

  // Log in a user using email and password
  const logIn = () => {
    fetch('http://localhost:3080/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((r) => r.json())
      .then((r) => {
        if ('success' === r.message) {
          localStorage.setItem('user', JSON.stringify({ email, token: r.token }));
          setLoggedIn(true);
          setParentEmail(email); // Use setParentEmail to update the parent's email state
          navigate('/');
        } else {
          window.alert('Wrong email or password');
        }
      });
  };

  useEffect(() => {
    // Fetch the user email and token from local storage
    const user = JSON.parse(localStorage.getItem('user'));

    // If the token/email does not exist, mark the user as logged out
    if (!user || !user.token) {
      setLoggedIn(false);
      return;
    }

    // If the token exists, verify it with the auth server to see if it is valid
    fetch('http://localhost:3080/verify', {
      method: 'POST',
      headers: {
        'jwt-token': user.token,
      },
    })
      .then((r) => r.json())
      .then((r) => {
        setLoggedIn('success' === r.message);
        setParentEmail(user.email || ''); // Use setParentEmail to update the parent's email state
      });
  }, [setLoggedIn, setParentEmail]); // Add dependencies

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <div>Login</div>
      </div>
      <br />
      <div className={styles.inputContainer}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={styles.inputBox}
        />
        <label className={styles.errorLabel}>{emailError}</label>
      </div>
      <br />
      <div className={styles.inputContainer}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={styles.inputBox}
          type="password"
        />
        <label className={styles.errorLabel}>{passwordError}</label>
      </div>
      <br />
      <div className={styles.inputContainer}>
        <input className={styles.inputButton} type="button" onClick={onButtonClick} value={'Log in'} />
        <span className={styles.newUserLink} onClick={() => navigate('/createuser')}>I am a new user</span>
      </div>
    </div>
  );
};

export default Login;
