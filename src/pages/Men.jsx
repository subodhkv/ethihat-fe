// src/components/Men.jsx
import React from 'react';
import { Box, Grid, Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom'; 

// Sample product data
const products = [
  {
    id: 1,
    name: 'Red Moneyfesting Oversized T-Shirt',
    category: 'Oversized T-shirt',
    price: 549,
    originalPrice: 915,
    discount: 40,
    imageUrl: 'https://www.beyoung.in/api/cache/catalog/products/printed_oversized_t-shirt/red_moneyfesting_oversized_t_shirt_base_04_10_2024_700x933.jpg',
  },
  {
    id: 2,
    name: 'Dark Grey Cut And Sew Oversized T-Shirt',
    category: 'Oversized T-shirt',
    price: 799,
    originalPrice: 1199,
    discount: 33,
    imageUrl: 'https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/dark_grey_cut_and_sew_oversized_t-shirt_base_09_10_2024_700x933.jpg',
  },
  {
    id: 3,
    name: 'Grey Zipper Collar Polo T-Shirt',
    category: 'Zipper T-Shirt',
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    imageUrl: 'https://www.beyoung.in/api/cache/catalog/products/polo_new_update_images_10_1_2022/grey_zipper_collar_polo_t_shirt_base_10_10_2024_700x933.jpg',
  },
  // Add more products as needed
];

const Men = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Men's Collection
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Link to={`/home/men/${product.id}`} style={{ textDecoration: 'none' }}> {/* Updated Link Path */}
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
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Men;
