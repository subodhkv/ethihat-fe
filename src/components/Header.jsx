import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#001F3F" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img
            src={logo}
            alt="Ethihat Logo"
            style={{ height: "40px", verticalAlign: "middle" }}
          />
        </Typography>
        <Button
          variant="outlined"
          onClick={handleLoginClick}
          sx={{
            color: "#FFFFFF", 
            fontWeight: "bold",
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
