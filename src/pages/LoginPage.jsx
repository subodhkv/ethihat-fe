import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Import axios
import "../css/LoginPage.css";

const LoginPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const emailOrUsername = event.target.email.value;
    const password = event.target.password.value;

    // // Email format validation
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(emailOrUsername)) {
    //   setError("Please enter a valid email address.");
    //   return;
    // }

    try {
      // Update the base URL to the correct endpoint
      const response = await axios.post("http://localhost:8081/api/login", {
        username: emailOrUsername,
        password,
      });

      if (response.data) {
        setError(""); // Clear any previous error
        navigate("/home"); // Navigate to the home page after successful login
      }
    } catch (error) {
      setError("Invalid email or password."); // Set error if credentials don't match
    }
  };

  const handleSignUpClick = () => {
    navigate("/register"); // Navigate to the registration page
  };

  return (
    <Container maxWidth="sm" className="container">
      <Box className="box">
        <Typography variant="h4" gutterBottom className="title">
          Login
        </Typography>
        {error && (
          <Alert severity="error" className="alert">
            {error}
          </Alert>
        )}
        <Box component="form" onSubmit={handleLogin} className="form">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder="Email Address or Username"
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
            className="submit-button"
          >
            Sign In
          </Button>
        </Box>
        <br />
        {/* Sign Up Prompt */}
        <Typography
          variant="body2"
          className="signup-prompt"
          onClick={handleSignUpClick}
        >
          {"Don't have an account? Sign Up"}
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginPage;
