import React from "react";
import Slider from "react-slick";
import { Grid, Typography, Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewsAndFeatures = () => {
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    color: "black",
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Box
          sx={{
            p: 2,
            border: "1px solid #f0f0f0",
            backgroundColor: "#f0f0f0",
            borderRadius: "10px",
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            5 95 Reviews 2,224 Guests already traveled
          </Typography>
          <Slider {...carouselSettings}>
            <div>
              This was our first tour with Trip or Travel, and we enjoyed it
              immensely. The tour was well-arranged and efficiently managed by
              Tour Managers Vinay and Sowmya CY. Both demonstrated exceptional.
            </div>
            <div>
              Very cooperative and friendly, so all are comfortable to talk and
              enjoy every moment. Thank you Vinay and Omkar for everything.
              Regards, Anjali Pitre.
            </div>
            <div className="carousel-content text-justify">
              <p>Great experience of Trip or Travel!</p>
              <p>
                Hello, I recently traveled to north-east India through Trip or
                Travel for the first time, and it was a great experience! The
                food at all.
              </p>
            </div>
            <div>
              Places were good, and Chinmay and Sanchit were very responsible
              and took very good care of all travelers! I look forward to
              traveling again through Trip or Travel with a new destination!
              Thanks, Madhavi
            </div>
          </Slider>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ReviewsAndFeatures;
