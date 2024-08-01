import React, { useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@mui/material";


const Roundtrip = ({ onSave }) => {
  const [formData, setFormData] = useState({
    tripType: "Round Trip",
    fromCity: "",
    toCity: "",

    pickUpDate: new Date(),

    returnDate: new Date(),
    pickUpTime: "",
  });

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      formData.tripType.trim() === "" ||
      formData.fromCity.trim() === "" ||
      formData.toCity.trim() === "" ||
      !formData.pickUpDate ||
      !formData.returnDate ||
      // formData.pickUpDate.trim() === "" ||
      // formData.returnDate.trim() === "" ||
      formData.pickUpTime.trim() === ""
    ) {
      Swal.fire("Warning", "Please fill out all fields");
      return;
    }
    onSave(formData);
  };

  const [dateError, setDateError] = useState("");

  const handleDateChange = (date) => {
    setFormData({ ...formData, pickUpDate: date });
    setDateError("");
  };

  const handleDateChangeReturn = (date) => {
    setFormData({ ...formData, returnDate: date });
  };

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  return (
    <section>
      <div className="container-fluid ">
        <div className="row justify-content-center d-flex">
          <div className="col-lg-4 col-md-6 mt-2">
            <label htmlFor="fromCity" className="form-label">
              <b>From</b>
            </label>
            <input
              type="text"
              id="fromCity"
              className="form-control"
              placeholder="Enter city"
              value={formData.fromCity}
              onChange={(e) =>
                setFormData({ ...formData, fromCity: e.target.value })
              }
            />
          </div>
          <div className="col-lg-4 col-md-6 mt-2">
            <label htmlFor="toCity" className="form-label">
              <b>To</b>
            </label>
            <input
              type="text"
              id="toCity"
              className="form-control"
              placeholder="Enter city"
              value={formData.toCity}
              onChange={(e) =>
                setFormData({ ...formData, toCity: e.target.value })
              }
            />
          </div>
          <div className="col-lg-4 col-md-6 mt-2">
            <label htmlFor="pickUpDate" className="form-label">
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
          <div className="col-lg-4 col-md-6 mt-2">
            <label htmlFor="returnDate" className="form-label">
              <b>Return</b>
            </label>
            <br />

            <DatePicker
              selected={formData.pickUpDate}
              onChange={handleDateChangeReturn}
              id="returnDate"
              className="form-control"
              required
              minDate={today}
              maxDate={null}
            />
            {dateError && <p className="text-danger">{dateError}</p>}
          </div>
          <div className="col-lg-4 col-md-6 mt-2">
            <label htmlFor="pickUpTime" className="form-label">
              <b>Pick Up At</b>
            </label>
            <input
              type="time"
              id="pickUpTime"
              className="form-control"
              value={formData.pickUpTime}
              onChange={(e) =>
                setFormData({ ...formData, pickUpTime: e.target.value })
              }
            />
          </div>
          <div className="col-lg-4 col-md-6 mt-4 ">
          <Button variant="contained" onClick={handleFormSubmit}>
              EXPLORE CABS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roundtrip;
