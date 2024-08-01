import React from "react";
import "../../../App.css";
import { Link } from "react-router-dom";
import Img3 from "../../../ASSETS/IMAGES/Images/Accommodation.svg";
import Img4 from "../../../ASSETS/IMAGES/Images/Allmeals.svg";
import Img5 from "../../../ASSETS/IMAGES/Images/On-tourtransport.svg";
import Img6 from "../../../ASSETS/IMAGES/Images/Tour managers.svg";
import Img7 from "../../../ASSETS/IMAGES/Images/Bestvalueitinerary.svg";
import Img8 from "../../../ASSETS/IMAGES/Images/Toandfroairfare.svg";
import BannerPackages from "./BannerPackages";
import Homecoursal from "../Homecoursal";
import HolidayReview from "./HolidayReview";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Holiday_Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div
        style={{
          background: "#E0F4FF",
        }}
      >
        <div>
          <h1 className=" text-dark text-center font-weight-bold fs-1 ">
            Explore, Journey, Discover, Adventure.
          </h1>
          <h4 className="p-2 text-dark text-center">
            Have a safe journey filled with many happy moments and beautiful
            memories."
          </h4>
          <Homecoursal />
          <div>
            <div className=" d-flex justify-content-center p-3">
              <Link to="/packagehome " className="text-center">
                <button
                  className="text-decoration-none p-2 text-center ExploreTours"
                  onClick={scrollToTop}
                >
                  Explore Tours
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-center p-5 ">
        Plan an unforgettable trip from your city
      </h3>
      <div>
        <BannerPackages />
      </div>

      <div>
        <HolidayReview />
      </div>

      <div className="Container p-5">
        <h1 className="text-center text-black p-4">All inclusive tours</h1>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="d-flex flex-warp">
              <div className="col-lg-3 text-center">
                <img src={Img3} alt="" />
              </div>
              <div className="col-lg-8">
                <h4>Accommodation</h4>
                <p style={{ textAlign: "justify" }}>
                  Comfortable & convenient hotels cherry picked by our hotel
                  management team
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="d-flex flex-warp">
              <div className="col-lg-3 text-center">
                <img src={Img4} alt="" />
              </div>
              <div className="col-lg-8">
                <h4>All meals</h4>
                <p style={{ textAlign: "justify" }}>
                  Eat to your heart's content Breakfast. Lunch. Dinner.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="d-flex flex-warp">
              <div className="col-lg-3 text-center">
                <img src={Img5} alt="" />
              </div>
              <div className="col-lg-8">
                <h4>On-tour transport</h4>
                <p style={{ textAlign: "justify" }}>
                  Our itineraries include all rail, sea and road transport as
                  part of the itinerary so you can enjoy tension free
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="d-flex flex-warp">
              <div className="col-lg-3 text-center">
                <img src={Img6} alt="" />
              </div>
              <div className="col-lg-8">
                <h4>Tour Management Services</h4>
                <p style={{ textAlign: "justify" }}>
                  Embark on seamless journeys with our expert tour managers,
                  specializing in India and global destinations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="d-flex flex-warp">
              <div className="col-lg-3 text-center">
                <img src={Img7} alt="" />
              </div>
              <div className="col-lg-8">
                <h4>Best value itinerary</h4>
                <p style={{ textAlign: "justify" }}>
                  Our dedicated product & destination research team spends hours
                  curating the best value for money itineraries
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="d-flex flex-warp">
              <div className="col-lg-3 text-center">
                <img src={Img8} alt="" />
              </div>
              <div className="col-lg-8">
                <h4>To and fro airfare</h4>
                <p style={{ textAlign: "justify" }}>
                  Trip or Travel tours are inclusive of airfare from many hubs
                  within India unless you pick the joining-leaving option
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holiday_Home;
