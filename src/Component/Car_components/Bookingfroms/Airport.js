import React, { useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@mui/material";

const Airport = ({ onSave }) => {
  // State variables for form fields
  const [formData, SetFormData] = useState({
    tripType: "",
    fromCity: "",
    // pickUpDate: "",
    pickUpDate: new Date(),
    pickUpTime: "",
  });

  const [dateError, setDateError] = useState("");

  const handleDateChange = (date) => {
    SetFormData({ ...formData, pickUpDate: date });
    setDateError("");
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      formData.tripType.trim() === "" ||
      formData.fromCity.trim() === "" ||
      // formData.pickUpDate.trim() === "" ||
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 mt-2">
            <label htmlFor="tripType" className="form-label">
              <b>TRIP</b>
            </label>
            <select
              id="tripType"
              className="form-select"
              defaultValue={""}
              value={formData.tripType}
              onChange={(e) =>
                SetFormData({ ...formData, tripType: e.target.value })
              }
            >
              <option value={""}>Select Trip option</option>
              <option value="Drop to Airport">Drop to Airport</option>
              <option value={"Pickup From Airport"}>Pickup From Airport</option>
            </select>
          </div>
          <div className="col-lg-4 col-md-6 mt-2">
            <label htmlFor="pickupCity" className="form-label">
              <b>PICKUP CITY</b>
            </label>
            <input
              type="text"
              id="pickupCity"
              className="form-control"
              placeholder="Enter city"
              value={formData.fromCity}
              onChange={(e) =>
                SetFormData({ ...formData, fromCity: e.target.value })
              }
            />
          </div>

          <div className="col-lg-4 col-md-6 mt-2">
            <label htmlFor="pickUpDate" className="form-label">
              <b>PICK UP</b>
            </label>
            <br />
            {/* <input
              type="date"
              id="pickUpDate"
              className="form-control"
              value={formData.pickUpDate}
              onChange={(e) =>
                SetFormData({ ...formData, pickUpDate: e.target.value })
              }
            /> */}
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
            <label htmlFor="pickUpTime" className="form-label">
              <b>PICK UP AT</b>
            </label>
            <input
              type="time"
              id="pickUpTime"
              className="form-control"
              value={formData.pickUpTime}
              onChange={(e) =>
                SetFormData({ ...formData, pickUpTime: e.target.value })
              }
            />
          </div>
          <div className="col-lg-4 mt-4 text-center">
            <Button variant="contained" onClick={handleFormSubmit}>
              EXPLORE CABS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Airport;
