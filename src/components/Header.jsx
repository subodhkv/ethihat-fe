import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Importing ShoppingCart icon
import LoginIcon from '@mui/icons-material/Login'; // Importing Login icon

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSearchClick = () => {
    console.log("Search Query: ", searchQuery);
  };
  const handleLogoClick = () => {
    navigate("/"); // Redirect to home page
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#001F3F" }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img
            src={logo}
            alt="Ethihat Logo"
            style={{ height: "40px", verticalAlign: "middle" }}
            onClick={handleLogoClick}
          />
        </Typography>

        {/* Centered Search Box */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <TextField
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            variant="outlined"
            size="medium"
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "40px",
              width: "1000px",
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderRadius: '40px',
                  borderColor: "#005f5f", // Custom border color
                },
                '&:hover fieldset': {
                  borderColor: "#007f7f", // Change border color on hover
                },
              },
              '& .MuiInputBase-input': {
                padding: "10px 20px", // Padding inside the input field
                fontSize: "16px", // Larger font size for better readability
              },
            }}
          />

          {/* Search Button */}
          <Button
            variant="contained"
            onClick={handleSearchClick}
            sx={{
              backgroundColor: "#005f5f",
              color: "#FFFFFF",
              fontWeight: "bold",
              borderRadius: "40px",
              marginLeft: "10px",
              '&:hover': {
                backgroundColor: "#007f7f", // Change background color on hover
              },
            }}
          >
            Search
          </Button>
        </Box>

        {/* Login Button with Icon */}
        <Button
          variant="outlined"
          onClick={handleLoginClick}
          sx={{
            color: "#FFFFFF",
            fontWeight: "bold",
            marginLeft: "10px",
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <LoginIcon sx={{ marginRight: "5px" }} />
          Login
        </Button>

        {/* Cart Icon Button */}
        <Button
          variant="outlined"
          sx={{
            color: "#FFFFFF",
            marginLeft: "10px",
          }}
        >
          <ShoppingCartIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
