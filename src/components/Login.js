import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import '../styles/Login.css';
import LogoImg from '../Assets/logo.png';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the username and password are valid
    if (username === 'foo' && password === 'bar') {
      handleLogin(username, password);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-details">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            label="Username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            type="password"
            label="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <br />
          {error && <p className="error-message">{error}</p>}
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
      </div>
      <div className="login-image">
        <img src={LogoImg} alt="Logo" />
      </div>
    </div>
  );
};

export default Login;
