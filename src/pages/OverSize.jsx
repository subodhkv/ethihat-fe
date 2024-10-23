// src/components/OverSized.jsx
import React from "react";
import { Box, Card, CardMedia } from "@mui/material";
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import subcardimage1 from "../assets/Camel-Brown-Structured-Oversized-T-Shirt.jpg";
import subcardimage2 from "../assets/Cream-Puff-Printed-Oversized-T-shirt-For-Men.jpg";
import subcardimage3 from "../assets/new-drops-Light-Mauve-Textured-Oversized-T-shirt.jpg";

// Responsive breakpoints for multi-carousel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3, // Number of cards shown on desktop
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2, // Number of cards shown on tablets
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1, // Number of cards shown on mobile
  },
};

const OverSized = () => {
  return (
    <Box sx={{ padding: "0 50px", marginBottom: "50px" }}>
      <CarouselMulti
        responsive={responsive}
        ssr={true} // Server-side rendering
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* Card 1 */}
        <Card sx={{ maxWidth: 300, margin: "0 auto" }}>
          <CardMedia
            component="img"
            height="200"
            image={subcardimage1}
            alt="Oversized 1"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Card>

        {/* Card 2 */}
        <Card sx={{ maxWidth: 300, margin: "0 auto" }}>
          <CardMedia
            component="img"
            height="200"
            image={subcardimage2}
            alt="Oversized 2"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Card>

        {/* Card 3 */}
        <Card sx={{ maxWidth: 300, margin: "0 auto" }}>
          <CardMedia
            component="img"
            height="200"
            image={subcardimage3}
            alt="Oversized 3"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Card>
      </CarouselMulti>
    </Box>
  );
};

export default OverSized;
