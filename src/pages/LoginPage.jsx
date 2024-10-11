import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Alert } from '@mui/material';
import '../css/LoginPage.css';

const LoginPage = () => {
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Dummy validation for demonstration
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    
    // Reset error if login is successful
    setError('');
    // Handle login logic here
  };

  return (
    <Container maxWidth="sm" className="container">
      <Box className="box">
        <Typography variant="h4" gutterBottom className="title">
          Login
        </Typography>
        
        {error && <Alert severity="error" className="alert">{error}</Alert>} {/* Error message */}

        <Box component="form" onSubmit={handleLogin} className="form">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder='Email Address'
            name="email"
            autoComplete="email"
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
            name="password"
            placeholder="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            InputProps={{
              className: "input",
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="submit-button" // Class for hover effect
          >
            Sign In
          </Button>
        </Box>
        <br />
        {/* Sign Up Prompt */}
        <Typography variant="body2" className="signup-prompt">
  {"Don't have an account? Sign Up"}
</Typography>

      </Box>
    </Container>
  );
};

export default LoginPage;
