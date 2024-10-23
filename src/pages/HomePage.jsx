// src/pages/HomePage.js
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import { Box, Typography, Card, CardMedia, Grid } from "@mui/material"; // Material-UI components
import slide1 from "../assets/Home-page-shirt-banner-desktop-view11.jpg";
import slide2 from "../assets/Plain-T-Shirts-banner-desktop-view-home-page07.jpg";
import slide3 from "../assets/cargo-banner-desktop-view123.jpg";
import subimage from "../assets/ca1m1p1a1i1gn-section-desktop-viewf.jpg";
import subcardimage1 from "../assets/bi1g1-1saving-zone-plain-tshirt1.jpg";
import subcardimage2 from "../assets/big-saving-zone-11.jpg";
import subcardimage3 from "../assets/big-saving-zone-Rich-Black-Ch1i1n1os.jpg";
import "react-multi-carousel/lib/styles.css";
import CarouselMulti from "react-multi-carousel";
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

const HomePage = () => {
  return (
    <div>
      {/* Carousel Section */}
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        dynamicHeight={true}
        interval={3000}
      >
        <div>
          <img src={slide1} alt="Slide 1" />
        </div>
        <div>
          <img src={slide2} alt="Slide 2" />
        </div>
        <div>
          <img src={slide3} alt="Slide 3" />
        </div>
      </Carousel>

      {/* Grid to align Subimage and Card Carousel */}
      <Grid container spacing={2} sx={{ marginY: "40px" }}>
        {/* Subimage Section */}
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={subimage}
              alt="Subimage 1"
              style={{
                width: "80%",
                maxWidth: "1200px",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        </Grid>

        {/* BIG SAVING ZONE Section */}
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            sx={{ marginBottom: "20px", fontWeight: "bold" }}
          >
            BIG SAVING ZONE
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ marginBottom: "30px", color: "#555" }}
          >
            EVERYDAY CASUALS
          </Typography>
        </Grid>

        {/* Cards Carousel Section */}
        <Grid item xs={12}>
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
                  alt="Casual 1"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }} // Full image
                />
              </Card>

              {/* Card 2 */}
              <Card sx={{ maxWidth: 300, margin: "0 auto" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={subcardimage2}
                  alt="Casual 2"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }} // Full image
                />
              </Card>

              {/* Card 3 */}
              <Card sx={{ maxWidth: 300, margin: "0 auto" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={subcardimage3}
                  alt="Casual 3"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }} // Full image
                />
              </Card>
            </CarouselMulti>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
