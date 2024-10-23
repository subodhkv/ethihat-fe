// src/components/Women.jsx
import React from 'react';
import { Box, Grid, Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
const products = [
  {
    id: 1,
    name: 'Floral Maxi Dress',
    category: 'Dresses',
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    imageUrl: 'https://sslimages.shoppersstop.com/sys-master/images/hfd/hed/31265486045214/A23MSET1234_YELLOW.jpg_2000Wx3000H',
  },
  {
    id: 2,
    name: 'Casual Denim Jacket',
    category: 'Jackets',
    price: 1499,
    originalPrice: 2199,
    discount: 32,
    imageUrl: 'https://sslimages.shoppersstop.com/sys-master/images/hfd/hed/31265486045214/A23MSET1234_YELLOW.jpg_2000Wx3000H',
  },
  {
    id: 3,
    name: 'Chic Off-Shoulder Top',
    category: 'Tops',
    price: 899,
    originalPrice: 1299,
    discount: 31,
    imageUrl: 'https://sslimages.shoppersstop.com/sys-master/images/hfd/hed/31265486045214/A23MSET1234_YELLOW.jpg_2000Wx3000H',
  },
  {
    id: 4,
    name: 'Stylish Palazzos',
    category: 'Pants',
    price: 799,
    originalPrice: 1199,
    discount: 33,
    imageUrl: 'https://sslimages.shoppersstop.com/sys-master/images/hfd/hed/31265486045214/A23MSET1234_YELLOW.jpg_2000Wx3000H',
  },
  {
    id: 5,
    name: 'Printed A-line Skirt',
    category: 'Skirts',
    price: 699,
    originalPrice: 999,
    discount: 30,
    imageUrl: 'https://sslimages.shoppersstop.com/sys-master/images/hfd/hed/31265486045214/A23MSET1234_YELLOW.jpg_2000Wx3000H',
  },
  {
    id: 6,
    name: 'Trendy Crop Top',
    category: 'Tops',
    price: 499,
    originalPrice: 749,
    discount: 33,
    imageUrl: 'https://sslimages.shoppersstop.com/sys-master/images/hfd/hed/31265486045214/A23MSET1234_YELLOW.jpg_2000Wx3000H',
  },
  {
    id: 7,
    name: 'Elegant Midi Dress',
    category: 'Dresses',
    price: 1099,
    originalPrice: 1699,
    discount: 35,
    imageUrl: 'https://sslimages.shoppersstop.com/sys-master/images/hfd/hed/31265486045214/A23MSET1234_YELLOW.jpg_2000Wx3000H',
  },
  {
    id: 8,
    name: 'Classic High-Waist Jeans',
    category: 'Jeans',
    price: 999,
    originalPrice: 1399,
    discount: 29,
    imageUrl: 'https://sslimages.shoppersstop.com/sys-master/images/hfd/hed/31265486045214/A23MSET1234_YELLOW.jpg_2000Wx3000H',
  }
];

const Women = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Women's Collection
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
                  startIcon={<FavoriteIcon />}
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

export default Women;
