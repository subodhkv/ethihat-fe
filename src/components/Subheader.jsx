// src/components/Subheader.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const Subheader = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#F2F4F4',
        padding: '10px 0',
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
      }}
    >
      <Button component={Link} to="/home/men" sx={{ color: '#000000', fontWeight: 'bold' }}>
        Men
      </Button>
      <Button component={Link} to="/home/women" sx={{ color: '#000000', fontWeight: 'bold' }}>
        Women
      </Button>
      <Button component={Link} to="/home/kids" sx={{ color: '#000000', fontWeight: 'bold' }}>
        Kids
      </Button>
    </Box>
  );
};

export default Subheader;
