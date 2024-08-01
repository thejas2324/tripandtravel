import React, { useState, useEffect } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import {  Grid, Typography } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Container, Button } from "@mui/material";
import img7 from "../../../ASSETS/IMAGES/corpotate/8.jpg";

SwiperCore.use([Navigation]);

const DesignationCategory = () => {
  const baseUrl = "https://tripapi.bloomitsolutions.in";

  const [Category, setCategory] = useState([]);

  const getCategory = async () => {
    try {
      const response = await axios.get(
        "https://tripapi.bloomitsolutions.in/v1/auth/destinationCategories"
      );
      setCategory(response.data);

      console.log("Category data:", response.data);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    getCategory();
    window.scrollTo(0, 0);
  }, [1]);

  return (
    <Container className="my-5">
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next-product",
          prevEl: ".swiper-button-prev-product",
        }}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {Category.map((deal, index) => (
          <SwiperSlide align="center" key={index}>
            <Grid item xs={12} md={8}>
              <Link to={`/packages/${deal.id}/${deal.slug}`}>
              {
                deal.image ? (
                  <img
                  src={`${baseUrl}/${deal.image}`}
                  alt={deal.title}
                  style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                ):(
                  <img
                  src={img7}
                  alt={deal.title}
                  style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                )
              }
                
              </Link>

              <h5 className="text-dark mt-2">
                <b>{deal.title}</b>
              </h5>
              <Link
                to={`/packagehome/${deal.destinationName}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
              >
                <Typography variant="h6" my={1}>
                  {deal.destinationName}
                </Typography>{" "}
                <Button variant="contained" my={1}>
                  View All
                </Button>
              </Link>
            </Grid>
          </SwiperSlide>
        ))}

        <Grid container spacing={2} className="mt-3">
          <Grid item xs={6} className="text-start">
            <Button
              className="swiper-button-prev-product"
              variant="outlined"
              startIcon={<ArrowBackIcon />}
            >
              Previous
            </Button>
          </Grid>
          <Grid item xs={6} className="text-end">
            <Button
              className="swiper-button-next-product"
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Swiper>
    </Container>
  );
};

export default DesignationCategory;
