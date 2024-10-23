// src/components/Kids.jsx
import React from 'react';
import { Box, Grid, Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
// Sample product data for kids' collection
const products = [
  {
    id: 1,
    name: 'Cute Dinosaur T-Shirt',
    category: 'T-Shirts',
    price: 499,
    originalPrice: 749,
    discount: 33,
    imageUrl: 'https://sslimages.shoppersstop.com/sys-master/images/h1a/he6/32914587353118/PCF134_PURPLE.jpg_2000Wx3000H',
  },
  {
    id: 2,
    name: 'Adorable Bunny Hoodie',
    category: 'Hoodies',
    price: 799,
    originalPrice: 1199,
    discount: 33,
    imageUrl: 'https://sslimages.shoppersstop.com/sys-master/images/h38/h55/33246216716318/A24PB58698088BL_BLUE.jpg_2000Wx3000H',
  },
  {
    id: 3,
    name: 'Classic Denim Shorts',
    category: 'Shorts',
    price: 599,
    originalPrice: 899,
    discount: 33,
    imageUrl: 'https://sslimages.shoppersstop.com/sys-master/images/h1a/he6/32914587353118/PCF134_PURPLE.jpg_2000Wx3000H',
  },
  {
    id: 4,
    name: 'Colorful Striped Dress',
    category: 'Dresses',
    price: 799,
    originalPrice: 1199,
    discount: 33,
    imageUrl: 'https://sslimages.shoppersstop.com/sys-master/images/h38/h55/33246216716318/A24PB58698088BL_BLUE.jpg_2000Wx3000H',
  },
  {
    id: 5,
    name: 'Superhero Cape',
    category: 'Costumes',
    price: 399,
    originalPrice: 599,
    discount: 33,
    imageUrl: 'https://sslimages.shoppersstop.com/sys-master/images/h1a/he6/32914587353118/PCF134_PURPLE.jpg_2000Wx3000H',
  },
  {
    id: 6,
    name: 'Floral Printed Leggings',
    category: 'Leggings',
    price: 499,
    originalPrice: 749,
    discount: 33,
    imageUrl: 'https://sslimages.shoppersstop.com/sys-master/images/h38/h55/33246216716318/A24PB58698088BL_BLUE.jpg_2000Wx3000H',
  },
  {
    id: 7,
    name: 'Comfy Pajama Set',
    category: 'Pajamas',
    price: 699,
    originalPrice: 999,
    discount: 30,
    imageUrl: 'https://sslimages.shoppersstop.com/sys-master/images/h38/h55/33246216716318/A24PB58698088BL_BLUE.jpg_2000Wx3000H',
  },
  {
    id: 8,
    name: 'Classic Sports Shoes',
    category: 'Shoes',
    price: 999,
    originalPrice: 1399,
    discount: 29,
    imageUrl: 'https://sslimages.shoppersstop.com/sys-master/images/h38/h55/33246216716318/A24PB58698088BL_BLUE.jpg_2000Wx3000H',
  }
];

const Kids = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Kids' Collection
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card sx={{ transition: '0.3s', '&:hover': { boxShadow: 3 } }}>
              <CardMedia
                component="img"
                alt={product.name}
                image={product.imageUrl}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '4px 4px 0 0',
                }}
              />
              <CardContent sx={{ padding: '16px' }}>
                <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
                  {product.category}
                </Typography>
                <Box sx={{ marginTop: '10px' }}>
                  <Typography variant="h6" sx={{ color: '#FF5722', fontWeight: 'bold' }}>
                    ₹{product.price}
                    <span style={{ textDecoration: 'line-through', marginLeft: '8px', color: '#999' }}>
                      ₹{product.originalPrice}
                    </span>
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    ({product.discount}% off)
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{ marginTop: '10px', backgroundColor: '#FF4081', color: '#fff' }}
                  startIcon={<FavoriteIcon />} // Add the icon to the button
                >
                  Wishlist
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Kids;
