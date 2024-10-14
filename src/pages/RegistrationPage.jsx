import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import '../css/RegistrationPage.css';

const RegistrationPage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Create a navigate function

  const handleRegister = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const repeatPassword = event.target.repeatPassword.value;

    if (!username || !email || !password || !repeatPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== repeatPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    // Handle registration logic here
  };

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <Container maxWidth="sm" className="container">
      <Box className="box">
        <Typography variant="h4" gutterBottom className="title">
          Register
        </Typography>

        {error && <Alert severity="error" className="alert">{error}</Alert>}

        <Box component="form" onSubmit={handleRegister} className="form">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            placeholder="Username"
            name="username"
            autoFocus
            InputProps={{
              className: "input",
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder="Email Address"
            name="email"
            autoComplete="email"
            InputProps={{
              className: "input",
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            placeholder="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            InputProps={{
              className: "input",
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="repeatPassword"
            placeholder="Repeat Password"
            type="password"
            id="repeatPassword"
            autoComplete="new-password"
            InputProps={{
              className: "input",
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="submit-button"
          >
            Register
          </Button>
        </Box>
        <br />

        {/* Login Prompt */}
        <Typography variant="body2" className="login-prompt" onClick={handleLoginClick}>
          Already have an account? Log In
        </Typography>
      </Box>
    </Container>
  );
};

export default RegistrationPage;
