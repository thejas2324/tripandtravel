import React, { useState, useEffect } from "react";
import { Button, Card, Collapse } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const CabSelections = () => {
  const { tripType } = useParams();
  console.log(tripType);
  const [activeTab, setActiveTab] = useState(null);
  const [openCardDropdowns, setOpenCardDropdowns] = useState({});
  const [cars, setCars] = useState([]);
  const baseURL = "https://tripapi.bloomitsolutions.in";
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://tripapi.bloomitsolutions.in/v1/trip/getallVahicals",
        {
          headers: {
            "Content-Type": "applications/json",
          },
        }
      );
      if (response.status === 200) {
        setCars(response?.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDropdown = (carId) => {
    setOpenCardDropdowns((prevOpenCardDropdowns) => ({
      ...prevOpenCardDropdowns,
      [carId]: !prevOpenCardDropdowns[carId],
    }));
  };

  const handleSetActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mt-4 mb-4">
      <div className="container-fluid col-lg-12">
        <div className="col-lg-12">
          <div className="row">
            <div className="text-center col-lg-6 bg bg-light mx-auto d-block">
              <div
                className="btn-group btn-start"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autoComplete="off"
                  defaultChecked
                />
                <Link to={`/select-cabs/${tripType}`}>
                  <button
                    className="btn btn-info border-light fw-bold text-dark"
                    htmlFor="btnradio1"
                  >
                    4hrs | 40km
                  </button>
                </Link>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autoComplete="off"
                />
                <Link to={`/select-cabs/${tripType}`}>
                  <button
                    className="btn btn-info border-light fw-bold text-dark"
                    htmlFor="btnradio2"
                  >
                    8hrs | 80km
                  </button>
                </Link>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio3"
                  autoComplete="off"
                />
                <Link to={`/select-cabs/${tripType}`}>
                  <button
                    className="btn btn-info border-light fw-bold text-dark"
                    htmlFor="btnradio3"
                  >
                    12hrs | 120km
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {cars?.map((car) => (
          <div key={car.id} className="card border-primary my-2 pt-4">
            <div className="row">
              <div className="col-lg-2 col-md-2 text-center">
                <img
                  src={`${baseURL}/${car?.carImage}`}
                  className="img-fluid"
                  alt={car.carType}
                  width="160px"
                />
              </div>
              <div className="col-lg-2 p-3 col-md-2">
                <h6>
                  <b>{car.carType}</b>
                </h6>
              </div>
              <div className="col-lg-2 p-3 col-md-2">
                <h6>{car.distanceCategories}</h6>
              </div>
              <div className="col-lg-2">
                <span className="special_price">
                  <span
                    style={{ textDecoration: "line-through", fontWeight: 700 }}
                  >
                    ₹{car.rates}{" "}
                  </span>{" "}
                  <br />
                  Save &nbsp;{car.discount}%
                </span>
              </div>
              <div className="col-lg-2 col-md-2">
                <span
                  className="text-right carPrice pricetag"
                  style={{ fontWeight: 700 }}
                >
                  ₹{car.discountedrates} <br />
                  Inclusive of GST
                </span>
              </div>
              <div className="col-lg-2 p-3">
                <Link to={`/select-cabs/${tripType}/${car?.id}`}>
                  <button className="btn btn-info px-4">Select</button>
                </Link>
              </div>
            </div>
            <div
              onClick={() => toggleDropdown(car.id)}
              aria-controls={`dropdown-content-${car.id}`}
              aria-expanded={openCardDropdowns[car.id]}
              style={{
                marginBottom: "10px",
                justifyContent: "center",
                display: "flex",
                flexWrap: "nowrap",
              }}
            >
              Details
              <span className="ml-2">&#9660;</span>
            </div>
            <Collapse in={openCardDropdowns[car.id]}>
              <Card id={`dropdown-content-${car.id}`}>
                <Card.Body>
                  <Button
                    onClick={() => handleSetActiveTab("inclusions")}
                    className="m-1 btn-info"
                  >
                    INCLUSION
                  </Button>
                  <Button
                    onClick={() => handleSetActiveTab("exclusions")}
                    className="m-1 btn-info"
                  >
                    EXCLUSION
                  </Button>
                  <Button
                    onClick={() => handleSetActiveTab("facilities")}
                    className="m-1 btn-info"
                  >
                    FACILITIES
                  </Button>
                  <Button
                    onClick={() => handleSetActiveTab("Tokyo")}
                    className="m-1 btn-info"
                  >
                    T&C
                  </Button>
                  {activeTab === "inclusions" && (
                    <div>
                      <ul>
                        {car.inclusions.map((item, index) => (
                          <li key={index}>{item.desc}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {activeTab === "exclusions" && (
                    <div>
                      <ul>
                        {car.exclusions.map((item, index) => (
                          <li key={index}>{item.desc}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {activeTab === "facilities" && (
                    <div>
                      <ul>
                        {car.facilities.map((item, index) => (
                          <li key={index}>{item.desc}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {activeTab === "tncData" && (
                    <div>
                      <ul>
                        {car?.tncData?.map((item, index) => (
                          <li key={index}>{item.desc}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CabSelections;
