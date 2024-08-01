import React, { useState } from "react";
import { Button } from "@mui/material";

import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";
import { useCab } from "../AuthContext/CabContext";
import Swal from "sweetalert2";
function Booking() {
  const { user } = useAuth();
  const { tripInfo } = useCab();
  console.log(user);
  const [activeTab, setActiveTab] = useState("Inclusion");

  const { id } = useParams();
  console.log(id);
  const [fullname, pickName] = useState(user.name);
  const [mobileno, pickMobile] = useState(user.phone);
  const [email, pickEmail] = useState(user.email);
  const [pickup, pickPickup] = useState("");

  const save = async () => {
    try {
      const formData = {
        pickup: pickup,
        fromlocation: tripInfo?.fromCity || "",
        tolocation: tripInfo?.toCity || "",
        pickupdate: tripInfo?.pickUpDate || "",
        pickuptime: tripInfo?.pickUpTime || "",
        Return: tripInfo?.returnDate || "",
        type: tripInfo?.tripType || "",
        userId: user?.id,
        vahicalId: id,
        name: fullname,
        email: email,
        mobile: user?.phone,
        pickUpLocation: pickup,
      };
      if (
        formData.tripType === "" ||
        formData.pickUpLocation === "" ||
        formData.name === "" ||
        formData.mobile === "" ||
        formData.email === ""
      ) {
        Swal.fire("Warning", "Please fill out all fields");
        return;
      }
      const response = await axios.post(
        "https://tripapi.bloomitsolutions.in/v1/bookings/createBooking",
        formData
      );
      if (response.status === 201) {
        Swal.fire("Success", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      swal("Error", "Failed to save data: " + error.message, "error");
    }
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container">
      <div className="row g-4 mt-5 mb-5">
        <div className="col-lg-6 px-2 px-md-2">
          <Card className="h-100">
            <Card.Body className=" shadow rounded">
              <Card.Title className="text-center">
                <b>Your Booking Details</b>
              </Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    className="border-0 border-bottom left-aligned-placeholder"
                    type="text"
                    id="name"
                    placeholder="Your name"
                    onChange={(e) => pickName(e.target.value)}
                    value={fullname}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    className="border-0 border-bottom left-aligned-placeholder"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    onChange={(e) => pickEmail(e.target.value)}
                    value={email}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mobile:</Form.Label>
                  <Form.Control
                    className="border-0 border-bottom left-aligned-placeholder"
                    type="text"
                    id="mobile"
                    disabled
                    placeholder="Enter your mobile number"
                    onChange={(e) => pickMobile(e.target.value)}
                    value={mobileno}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Location:</Form.Label>
                  <Form.Control
                    className="border-0 border-bottom left-aligned-placeholder"
                    type="text"
                    id="address"
                    placeholder="Enter your pickup address"
                    onChange={(e) => pickPickup(e.target.value)}
                    value={pickup}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Payment:</Form.Label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    
                    <option value="CoD" selected>CoD</option>
                    <option value="Online">Online</option>
                    
                  </select>
                </Form.Group>

                <Button
                  variant="contained"
                  style={{ fontWeight: "bold" }}
                  onClick={save}
                >
                  Book Now
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-6 px-2 px-md-2">
          <Card className="">
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#Inclusion">
                <Nav.Item>
                  <Nav.Link
                    onClick={() => handleTabClick("Inclusion")}
                    active={activeTab === "Inclusion"}
                  >
                    Inclusion
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={() => handleTabClick("Paris")}
                    active={activeTab === "Paris"}
                  >
                    Exclusion
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={() => handleTabClick("Tokyo")}
                    active={activeTab === "Tokyo"}
                  >
                    T & C
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              {activeTab === "Inclusion" && (
                <div>
                  <h5>
                    <b>Inclusion</b>
                  </h5>
                  <p>
                    Base Fare and Fuel Charges
                    <br />
                    <br />
                    Driver Allowance
                    <br />
                    <br />
                    State Tax & Toll
                    <br />
                    <br />
                    GST (5%)
                  </p>
                </div>
              )}
              {activeTab === "Paris" && (
                <div>
                  <h5>
                    <b>Exclusion</b>
                  </h5>
                  <p>
                    Pay ₹11/km after 80 km
                    <br />
                    <br />
                    Pay ₹120/hr after 8 hours
                    <br />
                    <br />
                    Night Allowance
                    <br />
                    <br />
                    Toll / State tax
                    <br />
                    <br />
                    Parking
                  </p>
                </div>
              )}
              {activeTab === "Tokyo" && (
                <div>
                  <h5>
                    <b>T&C</b>
                  </h5>
                  <ul>
                    <li>
                      Your Trip has a KM limit as well as an Hours limit. If
                      your usage exceeds these limits, you will be charged for
                      the excess KM and/or hours used.
                    </li>
                    <li>
                      The KM and Hour(s) usage will be calculated starting from
                      your pick-up point and back to the pick-up point.
                    </li>
                    <li>
                      The Airport entry charge, if applicable, is not included
                      in the fare and will be charged extra.
                    </li>
                    <li>
                      All road toll fees, parking charges, state taxes etc. if
                      applicable will be charged extra and need to be paid to
                      the concerned authorities as per actuals.
                    </li>
                    <li>
                      For driving between 09:45 PM to 06:00 AM on any of the
                      nights, an additional allowance will be applicable and is
                      to be paid to the driver.
                    </li>
                  </ul>
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Booking;
