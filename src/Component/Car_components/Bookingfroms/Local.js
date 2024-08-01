import { Button } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";
const Local = ({ onSave }) => {
  const [formData, setFormData] = useState({
    tripType: "Local",
    fromCity: "",
    toCity: "",
    pickUpTime: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.tripType.trim() === "" ||
      formData.fromCity.trim() === "" ||
      formData.toCity.trim() === "" ||
      formData.pickUpTime.trim() === ""
    ) {
      Swal.fire("Warning", "Please fill out all fields");
      return;
    }
    onSave(formData);
  };

  return (
    <section>
      <div className="container ">
       
          <div className="row">
            <div className="col-lg-4 col-md-6 mt-2">
              <label htmlFor="fromCity" className="form-label">
                <b>From</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="fromCity"
                name="fromCity"
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
            <div className="col-lg-4 col-md-6 mt-2">
              <label htmlFor="pickUpTime" className="form-label">
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

            <div className="col-lg-12 col-md-6 mt-4 text-center">
            <Button variant="contained" onClick={handleSubmit}>
              EXPLORE CABS
            </Button>
            </div>
          </div>
      
      </div>
    </section>
  );
};

export default Local;
