import React, { useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@mui/material";

const OneWay = ({ onSave }) => {
  // State variables for form fields
  const [formData, setFormData] = useState({
    tripType: "One Way",
    fromCity: "",
    toCity: "",
    //pickUpDate: "",
    pickUpDate: new Date(),
    pickUpTime: "",
  });

  const [dateError, setDateError] = useState("");

  const handleDateChange = (date) => {
    setFormData({ ...formData, pickUpDate: date });
    setDateError("");
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.tripType.trim() === "" ||
      formData.fromCity.trim() === "" ||
      formData.toCity.trim() === "" ||
      !formData.pickUpDate ||
      formData.pickUpTime.trim() === ""
    ) {
      Swal.fire("Warning", "Please fill out all fields");
      return;
    }
    onSave(formData);
  };

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  return (
    <section>
      <div className="container">
        
          <div className="row">
            <div className="col-lg-3 col-md-6 mt-2">
              <label htmlFor="from" className="form-label">
                <b>From</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="from"
                name="from"
                placeholder="Enter city"
                value={formData.fromCity}
                onChange={(e) =>
                  setFormData({ ...formData, fromCity: e.target.value })
                }
              />
            </div>
            <div className="col-lg-3 col-md-6 mt-2">
              <label htmlFor="to" className="form-label">
                <b>To</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="toCity"
                name="toCity"
                placeholder="Enter city"
                value={formData.toCity}
                onChange={(e) =>
                  setFormData({ ...formData, toCity: e.target.value })
                }
              />
            </div>
            <div className="col-lg-3 col-md-6 mt-2">
              <label htmlFor="pickupDate" className="form-label">
                <b>Pick Up</b>
              </label>
              <br />
              <DatePicker
                selected={formData.pickUpDate}
                onChange={handleDateChange}
                id="pickUpDate"
                className="form-control"
                required
                minDate={today}
                maxDate={null}
              />
              {dateError && <p className="text-danger">{dateError}</p>}
            </div>
            <div className="col-lg-3 col-md-6 mt-2">
              <label htmlFor="pickupTime" className="form-label">
                <b>Pick Up At</b>
              </label>
              <input
                type="time"
                className="form-control"
                id="pickUpTime"
                name="pickUpTime"
                value={formData.pickUpTime}
                onChange={(e) =>
                  setFormData({ ...formData, pickUpTime: e.target.value })
                }
              />
            </div>
            <div className="col-lg-12 mt-4 text-center">
            <Button variant="contained" onClick={handleSubmit}>
              EXPLORE CABS
            </Button>
            </div>
          </div>
        
      </div>
    </section>
  );
};

export default OneWay;
