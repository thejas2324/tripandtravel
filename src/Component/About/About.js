import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faGlobe,
  faTaxi,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import "../../ASSETS/STYLES/Holiday_style/Signup.css";
import photo1 from "../../ASSETS/IMAGES/cars-img/pic_3.jpg";
import photo2 from "../../ASSETS/IMAGES/cars-img/picture 4.jpg";
import photo3 from "../../ASSETS/IMAGES/cars-img/picture 5.jpg";
import photo4 from "../../ASSETS/IMAGES/cars-img/picture 2.jpg";
import photo5 from "../../ASSETS/IMAGES/cars-img/pic_1.jpg";
import photo6 from "../../ASSETS/IMAGES/cars-img/picture 11.jpg";
import photo7 from "../../ASSETS/IMAGES/cars-img/pic_5.jpg";
import photo8 from "../../ASSETS/IMAGES/cars-img/picture 10.jpg";
import photo9 from "../../ASSETS/IMAGES/cars-img/pic_4.jpg";
import photo10 from "../../ASSETS/IMAGES/cars-img/picture 8.jpg";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <>
      <section className="about-section mt-4">
        <div className="container">
          <h1 className="text-center p-3">
            <span className="title" style={{ fontSize: "100%" }}>
              About Us
            </span>
          </h1>
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <h2>Explore The Best Travel Experience</h2>

                  <p>
                    Welcome to Trip Or Travel, where we believe that every
                    journey is an opportunity for unforgettable experiences. At
                    Trip Or Travel, we are dedicated to curating the best travel
                    packages that cater to your desires, ensuring that each trip
                    with us is nothing short of extraordinary.
                  </p>

                  <div className="btn-box">
                    {/* <button href="#" className="theme-btn btn-style-one btn ">
                      Visit Us
                    </button> */}
                    <Button>Visit Us</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <figure className="image-1">
                  <Link
                    to="#"
                    className="lightbox-image"
                    data-fancybox="images"
                  >
                    <img
                      className="img-fluid"
                      src={photo1}
                      alt=""
                      style={{ width: "100%", height: "400px" }}
                    />
                  </Link>
                </figure>
              </div>
            </div>
          </div>

          <div
            className=" rounded mt-2"
            style={{
              
              backgroundColor: "rgb(200, 225, 236)",
              padding: "10px",
            }}
          >
            <div className="head p-3 ">
              <h2
                style={{
                  color: "rgb(12, 100, 88)",
                  justifyContent: "center",
                  paddingLeft: "30%",
                }}
              >
               Why Choose Trip Or Travel
              </h2>
            </div>
            <div className="row" style={{ justifyContent: "center" }}>
              <div
                className="col-lg-4 col-md-4 card p-3 m-2"
                style={{ textAlign: "center", height:"300px", padding:"10px" }}
              >
                <p>
                  <FontAwesomeIcon
                    icon={faSuitcase}
                    size="4x"
                    style={{ color: "rgb(43, 202, 230)" }}
                  />
                </p>
                <span>
                  <h4>Tailored Experiences</h4>
                 <p style={{ textAlign: "justify" }}> We don't believe in one-size-fits-all. Our travel packages are carefully crafted to suit your individual preferences, whether you seek adventure, cultural exploration, relaxation, or a mix of it all.</p>
                </span>
              </div>
              <div
                className="col-lg-4 col-md-4 card p-3 m-2"
                style={{ textAlign: "center", height:"300px", padding:"10px" }}
              >
                <p>
                  <FontAwesomeIcon
                    icon={faGlobe}
                    size="4x"
                    style={{ color: "rgb(43, 202, 230)" }}
                  />
                </p>
                <span>
                  <h4>Global Reach</h4>
                 <p style={{ textAlign: "justify" }}>Explore the world with confidence. We have a global network of partners and resources, ensuring that your travel experience is not limited by boundaries. Wherever you want to go, Trip Or Travel can take you there.</p>
                </span>
              </div>
            </div>
            <div className="row" style={{ justifyContent: "center" }}>
              <div
                className="col-lg-4 col-md-4 card p-3 m-2 "
                style={{ textAlign: "center", height:"300px", padding:"10px" }}
              >
                <p>
                  <FontAwesomeIcon
                    icon={faTaxi}
                    size="4x"
                    style={{ color: "rgb(43, 202, 230)" }}
                  />
                </p>
                <span>
                  <h4>Exceptional Service</h4>
                 <p style={{ textAlign: "justify" }}>At Trip Or Travel, we pride ourselves on our commitment to exceptional customer service. Our team of experienced travel experts is dedicated to making your journey seamless, from the moment you start planning to the day you return.</p>
                </span>
              </div>
              <div
                className="col-lg-4 col-md-4 card p-3 m-2"
                style={{ textAlign: "center", height:"300px", padding:"10px" }}
              >
                <p>
                  <FontAwesomeIcon
                    icon={faSmile}
                    size="4x"
                    style={{ color: "rgb(43, 202, 230)" }}
                  />
                </p>
                <span>
                 <h4>Value for Money</h4>
                 <p style={{ textAlign: "justify" }}> We understand the importance of value for your hard-earned money. Our packages are designed to offer the best inclusions at competitive prices, ensuring that you get the most out of your travel budget.</p>
                </span>
              </div>
            </div>
          </div>
          <section>
            <div className="container mt-4 text-center">
              <h2
                style={{
                  textAlign: "center",
                  color: "rgb(12, 100, 88)",
                }}
              >
                How We Stand Apart
              </h2>
              <div className="row ">
                <div className="col-lg-6 p-2">
                  <img className="" src={photo2} alt="" width="100%" />
                </div>
                <div className="col-lg-6 p-2">
                  <h2 style={{ color: "rgb(12, 100, 88)" }}>Our Mission</h2>
                  <p style={{ textAlign: "justify" }}>
                    Our mission is to redefine your travel experience by
                    providing seamless and personalized journeys that resonate
                    with your unique preferences. We understand that every
                    traveler is different, and that's why we strive to create
                    diverse packages that cater to a variety of interests,
                    ensuring that your trip is as exceptional as you are.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 p-5">
                  <h2 style={{ color: "rgb(12, 100, 88)" }}>Vision</h2>
                  <p style={{ textAlign: "justify" }}>
                    Our vision is a world where travel transcends boundaries,
                    connecting people to diverse cultures, landscapes, and
                    moments that inspire a lifelong love for exploration. We
                    envision Trip Or Travel as the catalyst for creating
                    enduring memories, fostering a global community united by a
                    passion for immersive and unforgettable travel experiences.
                  </p>
                </div>
                <div className="col-lg-6">
                  <img className="" src={photo3} alt="" width="100%" />
                </div>
              </div>
              <div className="row m-4">
                <div className="col-lg-6 ">
                  <img className="" src={photo4} alt="" width="100%" />
                </div>
                <div className="col-lg-6 p-5">
                  <h2 style={{ color: "rgb(12, 100, 88)" }}>Values</h2>
                  <p style={{ textAlign: "justify" }}>
                  <ul>
                    <li><strong> Personalization: </strong>Tailoring each journey to individual preferences, creating unique and memorable adventures.</li>
                    <li><strong>Excellence:</strong> Committed to providing exceptional service and exceeding expectations at every touchpoint.</li>
                    <li><strong>Global Connectivity:</strong> Building a network that transcends borders, offering a world of possibilities to our travelers.</li>
                    <li><strong>Integrity:</strong> Conducting business with honesty, transparency, and a steadfast commitment to ethical practices.</li>
                    <li><strong>Innovation:</strong> Embracing creativity and evolving to meet the dynamic needs of the modern traveler.</li>
                    <li><strong>Community:</strong> Fostering a sense of belonging among travelers, creating a global community passionate about exploration and cultural exchange.</li>
                  </ul>
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Gallery */}
          <div className="row">
            <h2
              className="head p-2"
              style={{
                textAlign: "center",

                color: "rgb(12, 100, 88)",
              }}
            >
              Travel Gallery
            </h2>
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src={photo5}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
                width="100%"
              />
              <img
                src={photo6}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
                width="100%"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src={photo7}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
              <img
                src={photo8}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src={photo9}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
              <img
                src={photo10}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </div>
          </div>
        </div>
      </section>
      <div></div>
    </>
  );
};

export default Home;
