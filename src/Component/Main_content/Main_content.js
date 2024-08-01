import React from "react";
import Slider from "../Holiday_COMPONENTS/Slider";
import Herocontainer from "../Holiday_COMPONENTS/Herocontainer";

import CabServices from "../Car_components/CabServices";

import Img3 from "../../ASSETS/IMAGES/image 48.png";
import Testimonial from "../Testimonial/Testimonial";
import Carousel from "../Holiday_COMPONENTS/Carousel";

const Main_content = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      style={{
        background: "linear-gradient(rgb(251 249 249), rgb(190 194 232)",
      }}
    >
      <Carousel />
      <Slider />
      <div className="Container">
        <p lg="12" className="text-center  mt-5">
          <h3 className="section__title mt-5"> Top Holiday Offices </h3>
        </p>

        <div>
          <Herocontainer />
        </div>

        <p className="text-center  mt-5">
          <h2 className="section__title " style={{ color: "#0064ba" }}>
            <strong className="text-black">𝐶𝑎𝑟 𝑅𝑒𝑛𝑡𝑎𝑙 𝑂𝑓𝑓𝑒𝑟𝑠</strong>
          </h2>
        </p>
        <div className="Container">
          <CabServices />
        </div>
      </div>
      
      <div className="">
        
        <Testimonial />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <h2 className="text-center mt-5 mb-3">What people say about us</h2>
          <div className="col-lg-5 col-md-6">
            <div
              className="about-img"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img src={Img3} alt="Images" width="100%"/>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 classs">
            <div className="section-header">
              <h1 className="text-center text-black">Join Our Newsletter</h1>
              <p className="text-center text-black">
                Subscribe to our newsletter to receive new about upcoming tours
              </p>
            </div>
            <div className=" d-flex flex-wrap">
              <div
                className="input-group mb-3 mt-4 p-2 "
                style={{ borderRadius: "20px" }}
              >
                <input
                  type="text"
                  className="form-control rounded-3"
                  placeholder="TriporTravel@gmail.com"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <br />
                <button
                  className="btn btn-dark rounded-3 "
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main_content;
