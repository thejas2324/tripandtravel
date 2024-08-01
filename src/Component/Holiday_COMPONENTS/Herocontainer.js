import React, { useState, useEffect } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { Grid } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Container, Button } from "@mui/material";

SwiperCore.use([Navigation]);

const Homecoursal = () => {
  const [Packages, setPackages] = useState([]);

  const baseUrl = "https://tripapi.bloomitsolutions.in";

  const getPackages = async () => {
    try {
      const response = await axios.get(
        "https://tripapi.bloomitsolutions.in/v1/tours/getallPackage"
      );
      setPackages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPackages();
  }, []);

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
        {Packages.map((deal, index) => (
          <SwiperSlide align="center" key={index}>
            <Grid item xs={12} md={8}>
              <Link to={`/packages/${deal.id}/${deal.slug}`}>
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
              </Link>

              <h5 className="text-dark mt-2">
                <b>{deal.title}</b>
              </h5>
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

export default Homecoursal;
