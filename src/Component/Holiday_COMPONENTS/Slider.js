import React from "react";
import { Link } from "react-router-dom";
import "../../Buttons.css";

const Slider = () => {
  return (
    <>
      <div className="container " style={{ marginTop: "-50px" }}>
        <div className="row">
          <div className="col-lg-3 col-md-3"></div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 mobilebutton"
            style={{
              border: "2px solid ",
              borderRadius: "7px",
              backgroundColor: "#f7f7f7",
              justifyContent: "center",
              zIndex: "10",
            }}
          >
            <div
              style={{
                marginBottom: "5px",
                justifyContent: "center ",
                textAlign: "center",
              }}
            >
              <Link to="/CarHome">
                <button className="button-71 m-3">
                  <span>RENTAL CABS</span>
                </button>
              </Link>

              <Link to="/HoldayHome">
                <button className="button-71 m-3">
                  <span>HOLIDAY TRIPS</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </>
  );
};

export default Slider;
