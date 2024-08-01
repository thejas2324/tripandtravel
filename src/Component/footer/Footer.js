import React from "react";
import "./Footer.css";
import img from "../../ASSETS/IMAGES/Trip_or_Travel_Logo-01.png";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { Typography } from "@mui/material";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="text- text-lg-start  text-muted"
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-photo/airliner-blue-background-clouds-concept-travel-rest-flight_330478-278.jpg?size=626&ext=jpg&ga=GA1.1.1715264013.1697692682&semt=ais")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 "></section>

      <section className="">
        <div className="container text-center text-md-start mt-2">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3 ">
              <h6 className="text-uppercase">
                <Link href="/" className="footer-logo  ">
                  <img src={img} alt="footer logo " width={"80%"} />
                </Link>
              </h6>

              <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
                We The Trip Or Travel are committed to making a difference in
                the travel world
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ color: "#000", my: 1 }}
                fontWeight={"bold"}
              >
                GST Number : 29AAJFI8478D1ZV
              </Typography>

              
              <Link
                to="https://www.facebook.com/profile.php?id=100092702006625"
                className="bg-blue text-decoration-none"
              >
                <FaFacebook className="" size={25} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/triportravels-undefined-52a50928a/"
                className="text-blue text-decoration-none"
              >
                {" "}
                <FaLinkedin
                  className=" footer_fa_icons social_hover my-3"
                  size={25}
                />
              </Link>
              <Link
                to="https:www.youtube.com/channel/UCySC8ZwqsSTEcMQnkNIM3lg"
                className="text-danger text-decoration-none"
              >
                <FaYoutube
                  className=" footer_fa_icons social_hover"
                  size={25}
                />
              </Link>
              <Link
                to="https://twitter.com/triportravels"
                className="text-black text-decoration-none"
              >
                {" "}
                <FaXTwitter
                  className=" footer_fa_icons social_hover"
                  size={25}
                />
              </Link>
              <Link
                to="https://www.instagram.com/triportravels560045/"
                className="text-danger text-decoration-none"
              >
                <FaInstagram
                  className=" footer_fa_icons social_hover"
                  size={25}
                />
              </Link>
              <Link
                href="https://www.pinterest.com/triportravels/"
                className="text-danger text-decoration-none"
              >
                <FaPinterest
                  className=" footer_fa_icons social_hover"
                  size={25}
                />
              </Link>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <Typography
                variant="h6"
                sx={{ color: "#000", my: 1, fontWeight: "bold" }}
              >
                Products
              </Typography>

              <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
                <Link
                  to="/"
                  className="text-black text-decoration-none font-weight-bold"
                  onClick={scrollToTop}
                >
                  Home
                </Link>
              </Typography>

              <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
                <Link
                  to="/About"
                  className="text-black text-decoration-none font-weight-bold"
                  onClick={scrollToTop}
                >
                  About Us
                </Link>
              </Typography>

              <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
                <Link
                  to="#!"
                  className="text-black text-decoration-none font-weight-bold"
                  onClick={scrollToTop}
                >
                  Destination
                </Link>
              </Typography>

              <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
                <Link
                  to="/Contactus"
                  className="text-black text-decoration-none font-weight-bold"
                  onClick={scrollToTop}
                >
                  Contact
                </Link>
              </Typography>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold font-weight-bold">
                <b></b>
              </h6>

              <Typography
                variant="h6"
                sx={{ color: "#000", my: 1, fontWeight: "bold" }}
              >
                Useful Links
              </Typography>

              <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
                <Link
                  to="/Terms&Conditions"
                  className="text-black text-decoration-none font-weight-bold"
                  onClick={scrollToTop}
                >
                  Terms & Conditions
                </Link>
              </Typography>

              <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
                <Link
                  to="/Parvicypolicy"
                  className="text-black text-decoration-none font-weight-bold"
                  onClick={scrollToTop}
                >
                  Privacy policy
                </Link>
              </Typography>

              <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
                <Link
                  to="#!"
                  className="text-black text-decoration-none font-weight-bold"
                  onClick={scrollToTop}
                >
                  Orders
                </Link>
              </Typography>

              <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
                <Link
                  to="#!"
                  className="text-black text-decoration-none font-weight-bold"
                  onClick={scrollToTop}
                >
                  Help
                </Link>
              </Typography>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <Typography
                variant="h6"
                sx={{ color: "#000", my: 1, fontWeight: "bold" }}
              >
                Contact
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ color: "#000", my: 1}}
              >
                <i className="fas fa-home "></i>No 58/16/3 2nd A Cross
                veerannapalya Nagawara Bangalore - 560045
              </Typography>

              <Typography variant="subtitle1" sx={{ color: "#000", my: 1 }}>
                <Link
                  to="tel:9900610570"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <b>9900610570</b>
                </Link>
              </Typography>


              <Typography
                variant="subtitle1"
                sx={{ color: "#000", my: 1, fontWeight: "bold" }}
              >
                <Link
                  to="mailto:hello@triportravelholidays.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  hello@triportravelholidays.com
                </Link>
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ color: "#000", my: 1, fontWeight: "bold" }}
              >
                <Link
                  to="mailto:connect@triportravelholidays.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  connect@triportravelholidays.com
                </Link>
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ color: "#000", my: 1, fontWeight: "bold" }}
              >
                <Link
                  to="mailto:booking@triportravelholidays.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  booking@triportravelholidays.com
                </Link>
              </Typography>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <Typography variant="body1">
          Copyright © {currentYear} Design By
          <Link
            className="text-reset fw-bold m-2 text-decoration-none"
            to="https://www.bloomitsolutions.com"
            target="_blank"
          >
            <b>Bloom IT Solutions</b>
          </Link>{" "}
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
