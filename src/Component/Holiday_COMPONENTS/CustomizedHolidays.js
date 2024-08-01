import React from "react";
import Img1 from "../../ASSETS/IMAGES/Holidays.jpg";
import Img2 from "../../ASSETS/IMAGES/Photo3.jpg";
import Img3 from "../../ASSETS/IMAGES/Photo4.jpg";
import { Button } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import BannerPackages from "./Home/BannerPackages";
import DesignationCategory from "./Home/Descategory";

const CustomizedHolidays = () => {
  
  return (
    <div>
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img src={Img1} alt="" />
            <Carousel.Caption>
              <Button className="bg-primary">
                <Link to="" className="text-white text-decoration-none">
                  View Holidays
                </Link>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Img2} alt="" />
            <Carousel.Caption>
              <Button className="bg-primary">
                <Link to="" className="text-white text-decoration-none">
                  View Holidays
                </Link>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Img3} alt="" />
            <Carousel.Caption>
              <Button className="bg-primary">
                <Link to="" className="text-white text-decoration-none">
                  View Holidays
                </Link>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <h1 className="container text-center text-black mt-3">
          Explore Holiday in south
        </h1>
        <div className="container">
          <BannerPackages />
        </div>
      </div>
      <h1 className="text-center text-black mt-4 mb-3 p-3">
        Your Reason-Our Packages
      </h1>

      <div className="container">
        <DesignationCategory />
      </div>

      {/* <section className="">
        <footer className="bg-light text-black">
          <div className=" p-4">
            <div className="row">
              <div className="col-lg-3 col-md-3 mb-4 mb-md-0">
                <h5 className="text-uppercase text-danger">
                  <HiBuildingOffice2 className="text-blue" />
                  Footer Content
                </h5>

                <p>
                  Located across the country, ready to assist in planning &
                  booking your perfect vacation.
                </p>
                <p className="text-primary">Locate Us</p>
              </div>

              <div className="col-lg-3 col-md-3 mb-4 mb-md-0">
                <h5 className="text-uppercase  text-danger">
                  <FcMissedCall /> Call us
                </h5>

                <p>
                  Located across the country, ready to assist in planning &
                  booking your perfect vacation.
                </p>
                <Link
                  to="tel:7894561220"
                  className="text-primary text-decoration-none"
                >
                  7894561220
                </Link>
              </div>

              <div className="col-lg-3 col-md-3 mb-4 mb-md-0">
                <h5 className="text-uppercase text-danger">
                  <AiOutlineMail />
                  Write to us
                </h5>

                <p>
                  Located across the country, ready to assist in planning &
                  booking your perfect vacation.
                </p>
                <Link
                  to="mailto:email@example.com"
                  className="text-primary text-decoration-none"
                >
                  email@example.com
                </Link>
              </div>

              <div className="col-lg-3 col-md-3 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0 text-danger">
                  <AiOutlineShareAlt /> Connect with us
                </h5>
                <p>
                  Located across the country, ready to assist in planning &
                  booking your perfect vacation.
                </p>
                <p className="fs-3 text-primary ">
                  {" "}
                  <AiFillFacebook />
                  <AiOutlineInstagram />
                  <AiOutlineLinkedin />
                  <AiFillTwitterSquare />
                </p>
              </div>
            </div>
          </div>
        </footer>
      </section> */}
    </div>
  );
};

export default CustomizedHolidays;
