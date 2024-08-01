import React from "react";
import { FaWhatsapp,FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";
import { MdOutlinePermPhoneMsg } from "react-icons/md";

const Whatsapp = () => {
  const handlePhoneClick = () => {
    window.location.href = `tel:${9900610570}`;
  };
  return (
    <>
      <div className="whatsapp-container">
        <ReactWhatsapp
          number="+91 9900610570"
          message="next"
          className="whatsapp"
        >
          <FaWhatsapp />
        </ReactWhatsapp>
      </div>

      <div className="phone-container">
        <button className="phonecall" onClick={handlePhoneClick}>
          <FaPhoneAlt />
        </button>
      </div>
    </>
  );
};

export default Whatsapp;
