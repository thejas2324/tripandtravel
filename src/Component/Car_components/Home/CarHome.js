import React from "react";
import { BsFilePerson, BsCashStack, BsPersonCircle } from "react-icons/bs";
import { AiOutlineSafety, AiFillCar } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Form from "../Bookingfroms/Form";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ImprovedTestimonials from "../../Testimonial/Testimonial";
import img1 from "../../../ASSETS/IMAGES/cars-img/pic_1.jpg";
import { useState } from "react";
import CabContent from "./Cabcontent";
import { FaGoogle } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "ROUNDTRIP CABS",
    content:
      "Our premium roundtrip services will pamper you with an absolutely comfortable drive from your doorstep & back. Our chauffeurs are not only courteous but are also expert travel companions that will make your road travel memorable. Affordable Luxury, as we’d like to call it.",

    icon1: "Expert Chauffeurs",
    icon2: "Safety Certified",
    icon3: "Multiple Stops",
  },
  {
    id: 2,
    title: "ONEWAY DROPS",
    content:
      "Our network of over 15 lakh one way routes ensures that there is no corner of the country that you can’t travel with us. Pay only one side charge at rock bottom rates. If you need to be somewhere, we’ll get you there.",
    icon1: "15 Lakh Routes",
    icon2: "Lowest Fares",
    icon3: "All Inclusive Prices",
  },
  {
    id: 3,
    title: "LOCAL RENTALS",
    content:
      "Book our flexible hourly rental cabs and get chauffeured within the city for your business meetings or shopping chores. Our local rentals are available for 4 hours, 8 hours or 12 hours, based on your needs. Explore your city like a local.",
    icon1: "Flexible Packages",
    icon2: "Cab At Your Disposal",
    icon3: "Multiple Stops",
  },
  {
    id: 4,
    title: "AIRPORT TRANSFERS",
    content:
      "We care about your flight as much as you do. Our airport transfer services across airports in the country offer pickups and drops with complete reliability. Book in advance and rest easy - we will take care of the rest.",
    icon1: "Reliability Guaranteed",
    icon2: "Lowest Fares",
    icon3: "Courteous Chauffeurs",
  },
];

const Home = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Form />
          </div>
        </div>
      </div>

      <div className="col-lg-12 mt-5">
        <Typography
          variant="h5"
          fontWeight={"bold"}
          color="#4CB9E7"
          align="center"
        >
          WHAT SETS CAB APART?
        </Typography>
      </div>

      <div
        className="container mt-1 text-white p-1 rounded-5"
        style={{ backgroundColor: "#4CB9E7" }}
      >
        <div className="row">
          <div className="col-lg-4 col-md-4 mt-1">
            <div className="row justify-content-center d-flex">
              <div className="col-lg-12 text-center justify-content-center d-flex flex-wrap">
                <AiFillCar className="display-1 iconextra" />
              </div>
              <div className="col-lg-12 text-center">
                <Typography
                  variant="subtitle1"
                  fontWeight={"bold"}
                  color="#fff"
                >
                  Clean and Hygienic Car
                </Typography>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 mt-1">
            <div className="row justify-content-center d-flex">
              <div className="col-lg-12  text-center justify-content-center d-flex flex-wrap  ">
                <BsCashStack className=" iconextra display-1" />
              </div>
              <div className="col-lg-12 text-center">
                <Typography
                  variant="subtitle1"
                  fontWeight={"bold"}
                  color="#fff"
                >
                  Transparent Billing
                </Typography>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 mt-1">
            <div className="row  justify-content-center d-flex">
              <div className="col-lg-12  text-center justify-content-center d-flex flex-wrap">
                <BsPersonCircle className="display-1 iconextra" />
              </div>
              <div className="col-lg-12 text-center">
                <Typography
                  variant="subtitle1"
                  fontWeight={"bold"}
                  color="#fff"
                >
                  Expert Chauffeurs
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row">
          <Typography
            variant="h4"
            align="center"
            my={1}
            fontWeight={"bold"}
            color="#19A7CE"
          >
            Our Services
          </Typography>

          {services.map((service, index) => (
            <div className="col-lg-3 col-md-6 p-1">
              <Card sx={{ maxWidth: 345,height:"600px" }}>
                <CardMedia
                  sx={{ height: 180 }}
                  image={img1}
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h1"
                    fontWeight={"bold"}
                    sx={{ color: "#19A7CE" }}
                    align="center"
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    align="justify"
                  >
                    <ReviewText review={service.content} />
                    {/* {service.content} */}
                  </Typography>
                </CardContent>
                <CardActions>
                  <div className="container">
                    <div className="row text-center">
                      <div className="col-lg-4">
                        <BsFilePerson className="display-5 iconextra ml-3" />
                        <Typography variant="body1" fontWeight={"bold"}>
                          {" "}
                          {service.icon1}
                        </Typography>
                      </div>
                      {"       "}
                      <div className="col-lg-4">
                        <AiOutlineSafety className="display-5 iconextra ml-3" />
                        <Typography variant="body1" fontWeight={"bold"}>
                          {" "}
                          {service.icon2}
                        </Typography>
                      </div>{" "}
                      {"       "}
                      <div className="col-lg-4">
                        <FaMapMarkerAlt className="display-5 iconextra ml-3" />
                        <Typography variant="body1" fontWeight={"bold"}>
                          {" "}
                          {service.icon3}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-3 mb-2">
        <div className="row">
          <div className="col-lg-12">
            <Typography
              variant="h5"
              component="h1"
              fontWeight={"bold"}
              my={2}
              align="center"
            >
              Importance
            </Typography>

            <Typography variant="body1" my={2} align="justify" px={5}>
              Traveling abroad allows you to experience different cultures
              firsthand. It can help you gain a deeper understanding and
              appreciation of the world and the people in it. It can also help
              you become more open-minded, tolerant, and accepting of different
              ways of life, and you will return home practically a new person.
            </Typography>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <section>
            <div className="row d-flex justify-content-center m-5">
              <CabContent />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

const ReviewText = ({ review }) => {
  const [showFullReview, setShowFullReview] = useState(false);

  return (
    <div className="">
      {review && review.length > 100 ? (
        showFullReview ? (
          <Typography variant="body1" className="review-text">
            {review}
          </Typography>
        ) : (
          <Typography variant="body1" className="review-text">
            {review.substring(0, 210)}...
          </Typography>
        )
      ) : (
        <span className="review-text">{review}</span>
      )}
      {review && review.length > 100 && (
        <div className="d-flex justify-content-center mt-2">
          <Typography
            variant="subtitle1"
            className="text-primary read-more"
            onClick={() => setShowFullReview(!showFullReview)}
          >
            {showFullReview ? "Read Less" : "Read More"}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Home;
