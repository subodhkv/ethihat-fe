import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, Rating, ButtonGroup, TextField, Divider, CardContent, Select, MenuItem, FormControl, InputLabel } from '@mui/material';


const productList = {
  id: 1,
  name: 'Mauve Polo T-shirt',
  category: 'Solid Polo',
  price: 549,
  originalPrice: 915,
  discount: 40,
  images: [
    'https://www.beyoung.in/api/cache/catalog/products/printed_oversized_t-shirt/red_moneyfesting_oversized_t_shirt_base_04_10_2024_700x933.jpg',
    'https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/dark_grey_cut_and_sew_oversized_t-shirt_base_09_10_2024_700x933.jpg',
  ],
  description: 'This Mauve Polo T-shirt is made from high-quality fabric and designed for comfort and style.',
  material: '100% Cotton',
  careInstructions: 'Machine wash cold, tumble dry low, do not bleach.',
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['#E91E63', '#3F51B5', '#FFC107'],
  rating: 4.5,
  reviews: [
    { id: 1, name: 'John Doe', rating: 5, comment: 'Great quality! Love the color.' },
    { id: 2, name: 'Jane Smith', rating: 4, comment: 'Very comfortable, but a bit loose.' },
  ],
};

// Sample similar products data
const similarProducts = [
  {
    id: 2,
    name: 'Red Oversized T-Shirt',
    price: 549,
    originalPrice: 915,
    discount: 40,
    imageUrl: 'https://www.beyoung.in/api/cache/catalog/products/printed_oversized_t-shirt/red_moneyfesting_oversized_t_shirt_base_04_10_2024_700x933.jpg',
  },
  {
    id: 3,
    name: 'Dark Grey Cut Oversized T-Shirt',
    price: 799,
    originalPrice: 1200,
    discount: 40,
    imageUrl: 'https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/dark_grey_cut_and_sew_oversized_t-shirt_base_09_10_2024_700x933.jpg',
  },
  {
    id: 4,
    name: 'Grey Zipper Collar Polo T-Shirt',
    price: 1299,
    originalPrice: 1800,
    discount: 40,
    imageUrl: 'https://www.beyoung.in/api/cache/catalog/products/polo_new_update_images_10_1_2022/grey_zipper_collar_polo_t_shirt_base_10_10_2024_700x933.jpg',
  },
];

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(productList.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(productList.colors[0]);
  const [customerRating, setCustomerRating] = useState(0);
  const [customerComment, setCustomerComment] = useState('');
  const [currentImage, setCurrentImage] = useState(productList.images[0]);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${productList.name} to cart.`);
  };

  const handleBuyNow = () => {
    console.log(`Buying ${quantity} of ${productList.name} now.`);
  };

  const handleSubmitReview = () => {
    console.log(`Rating: ${customerRating}, Comment: ${customerComment}`);
    setCustomerRating(0);
    setCustomerComment('');
  };

  return (
    <Box sx={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CardMedia
                component="img"
                alt={productList.name}
                image={currentImage}
                sx={{ width: '80%', height: 'auto', borderRadius: '8px' }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ marginTop: '10px' }}>
            {productList.images.map((img, index) => (
              <Grid item xs={3} key={index}>
                <CardMedia
                  component="img"
                  alt={`Thumbnail ${index}`}
                  image={img}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    cursor: 'pointer',
                    borderRadius: '4px',
                  }}
                  onMouseEnter={() => setCurrentImage(img)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'left' }}>
            {productList.name}
          </Typography>
          <Typography variant="h6" sx={{ color: '#FF5722', fontWeight: 'bold', marginBottom: '10px' }}>
            ₹{productList.price}
            <span style={{ textDecoration: 'line-through', marginLeft: '8px', color: '#999' }}>
              ₹{productList.originalPrice}
            </span>
          </Typography>
          <Typography variant="body2" sx={{ color: '#666', marginBottom: '8px' }}>
            {productList.description}
          </Typography>

          <Typography variant="subtitle1" sx={{ marginBottom: '8px' }}>
            Material: {productList.material}
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: '12px' }}>
            Care Instructions: {productList.careInstructions}
          </Typography>

          <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>
            Select Size:
          </Typography>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            {productList.sizes.map((size) => (
              <Button 
                key={size} 
                onClick={() => setSelectedSize(size)} 
                variant={selectedSize === size ? 'contained' : 'outlined'}
              >
                {size}
              </Button>
            ))}
          </ButtonGroup>

          <Typography variant="subtitle1" sx={{ marginTop: '20px', marginBottom: '10px' }}>
            Select Color:
          </Typography>
          <Box>
            {productList.colors.map((color) => (
              <Box
                key={color}
                onClick={() => setSelectedColor(color)}
                sx={{
                  width: '30px',
                  height: '30px',
                  backgroundColor: color,
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '10px',
                  cursor: 'pointer',
                  border: selectedColor === color ? '2px solid #000' : 'none',
                }}
              />
            ))}
          </Box>

          <Box sx={{ marginTop: '20px' }}>
            <Typography variant="subtitle1">Rating:</Typography>
            <Rating name="read-only" value={productList.rating} readOnly />
          </Box>

          {/* Dropdown for selecting quantity */}
          <FormControl variant="outlined" sx={{ marginTop: '10px', width: '100px' }}>
            <InputLabel id="quantity-label">Quantity</InputLabel>
            <Select
              labelId="quantity-label"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              label="Quantity"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                },
              }}
            >
              {Array.from({ length: 10 }, (_, index) => (
                <MenuItem key={index + 1} value={index + 1}>
                  {index + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box sx={{ marginTop: '10px' }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#001F3F', color: '#fff', marginRight: '10px' }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            
            <Button
              variant="contained"
              sx={{ backgroundColor: '#E91E63', color: '#fff' }}
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ margin: '40px 0' }} />

      <Typography variant="h5" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Customer Reviews
      </Typography>
      <Box>
        {productList.reviews.map((review) => (
          <Box key={review.id} sx={{ marginBottom: '20px' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
              {review.name}
            </Typography>
            <Rating name="read-only" value={review.rating} readOnly />
            <Typography variant="body2">{review.comment}</Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ margin: '20px 0' }} />

      <Typography variant="h6" sx={{ marginBottom: '10px' }}>
        Leave a Review
      </Typography>
      <Box sx={{ marginBottom: '20px' }}>
        <Rating
          name="customer-rating"
          value={customerRating}
          onChange={(event, newValue) => {
            setCustomerRating(newValue);
          }}
        />
        <TextField
          variant="outlined"
          placeholder="Your comment"
          value={customerComment}
          onChange={(e) => setCustomerComment(e.target.value)}
          multiline
          rows={4}
          fullWidth
          sx={{ marginTop: '10px', marginBottom: '10px' }}
        />
        <Button
          variant="contained"
          onClick={handleSubmitReview}
          sx={{ backgroundColor: '#001F3F', color: '#fff' }}
        >
          Submit Review
        </Button>
      </Box>

      <Divider sx={{ margin: '40px 0' }} />

      <Typography variant="h5" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Similar Products
      </Typography>
      <Grid container spacing={2}>
        {similarProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt={product.name}
                image={product.imageUrl}
                title={product.name}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ₹{product.price}
                  <span style={{ textDecoration: 'line-through', marginLeft: '8px', color: '#999' }}>
                    ₹{product.originalPrice}
                  </span>
                </Typography>
                <Rating name="product-rating" value={product.discount / 20} readOnly />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductDetails;
