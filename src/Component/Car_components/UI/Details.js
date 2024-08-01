


import React from "react";
import "../../ASSESTS/STYLES/Cars_style/Details.css";
import { TbArrowsSort } from "react-icons/tb";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    
    <div className="row">
      <div className="details row">
        <div className="checkboxcontent">
          <label className="">
            {" "}
            <input type="radio" checked="checked" name="radio" />&nbsp;
            Outstation One-way
            {/* <input type="radio" checked="checked" name="radio" /> */}
            {/* <span className="checkmark"></span> */}
          </label>
          <label className="">
            {" "}
            <input type="radio" checked="checked" name="radio" />
            &nbsp; Airport Transfer
            {/* <span className="checkmark"></span> */}
          </label>
          <label className="">
            {" "}
            <input type="radio" checked="checked" name="radio" />
            &nbsp; Outstation Round trip
            {/* <input type="radio" name="radio" /> */}
            {/* <span className="checkmark"></span> */}
          </label>
          <label className="">
            {" "}
            <input type="radio" checked="checked" name="radio" />
            &nbsp; Hourly Rental
            {/* <input type="radio" name="radio" /> */}
            {/* <span className="checkmark"></span> */}
          </label>
        </div>

        <form>
          <div className="fromTo" style={{}}>
            <label className="from"> from</label>
            <div>
              <input
                type="text"
                className="ph1"
                placeholder="Enter Pickup Location"
                autoFocus="false"
              />
            </div>
            <div className="icon">
              <TbArrowsSort size="30px" />
            </div>
            {/* <hr></hr> */}

            <label className="To"> To </label>
            <div>
              <input
                type="text"
                className="ph2"
                placeholder="Enter Drop Location"
              />
            </div>
          </div>
          {/* <div className='merging'> */}
          <div className="datetime">
            <div className="dates">
              <label> Pickup Date </label>
              <input type="date" />
            </div>
            <br></br>
            <div className="Time">
              <label> Pickup Time </label>
              <input type="time"></input>
            </div>
          </div>
          <hr></hr>
          <div className="returndate">
            <div className="dates">
              <label> Return Date </label>
              <input type="date" />
            </div>
            <br></br>
            <div className="Time">
              <label> Return Time </label>
              <input type="time"></input>
            </div>
          </div>
          {/* </div> */}
          <hr></hr>
        </form>
        <div className="lastbutton">
        {/* <Link to="/cars"> <input type="button" className="hm_button" value="Search Cabs"></input></Link> */}
        <Link to="/cars"> <button className="btn">
                <span>Choose Cabs</span>
              </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
