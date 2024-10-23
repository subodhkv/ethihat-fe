import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#001F3F",
        color: "#ffffff",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* About Us Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: "15px" }}>
            About Us
          </Typography>
          <Typography variant="body2" sx={{ color: "#bbbbbb", lineHeight: 1.6 }}>
            At Ethihat Store, we bring you the latest fashion trends with high-quality clothing designed to make you feel your best.
          </Typography>
        </Grid>
          {/* Location Section */}
          <Grid item xs={12} md={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: "15px" }}>
            Location
          </Typography>
          <Typography variant="body2" sx={{ color: "#bbbbbb", marginBottom: "5px" }}>
            Tendort GP, Bodakdev, Ahmedabad, Gujarat 380015
          </Typography>
          <Typography variant="body2" sx={{ color: "#bbbbbb" }}>
            Email: <a href="mailto:support@ethihat.in" style={{ color: "#ffffff", textDecoration: "underline" }}>support@ethihat.in</a>
          </Typography>
        </Grid>
        {/* Secure Payment Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: "15px" }}>
            100% Secure Payment
          </Typography>
          <Typography variant="body2" sx={{ color: "#bbbbbb", marginBottom: "20px" }}>
            We support all major UPI platforms and card payments for safe transactions.
          </Typography>
          <Box display="flex" justifyContent="center" gap={3}>
            <IconButton sx={{ color: '#ffffff' }}>
              <CreditCardIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ color: '#ffffff' }}>
              <AccountBalanceWalletIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ color: '#ffffff' }}>
              <PaymentIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ color: '#ffffff' }}>
              <LocalAtmIcon fontSize="small" />
            </IconButton>
          </Box>
        </Grid>

        {/* Follow Us Section */}
        <Grid item xs={12} md={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: "15px" }}>
            Follow Us
          </Typography>
          <Box display="flex" justifyContent="center" gap={3}>
            <IconButton href="https://www.facebook.com" target="_blank" sx={{ color: '#ffffff' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://www.instagram.com" target="_blank" sx={{ color: '#ffffff' }}>
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://www.twitter.com" target="_blank" sx={{ color: '#ffffff' }}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://www.linkedin.com" target="_blank" sx={{ color: '#ffffff' }}>
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Attribution and Copyright Section */}
      <Box sx={{ marginTop: "40px", textAlign: "center" }}>
        <Typography
          variant="body2"
          sx={{
            color: "#bbbbbb",
            marginTop: "10px",
            fontSize: "14px",
          }}
        >
          Designed and developed by <strong>Subodh</strong>.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#bbbbbb",
            marginTop: "10px",
            fontSize: "14px",
          }}
        >
          Copyright © 2024 Ethihat Pvt Ltd. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
