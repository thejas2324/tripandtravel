import React from "react";
import { Button, Card, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

class selection1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDropdown: false,
      activeTab: null,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      openDropdown: !prevState.openDropdown,
    }));
  };

  setActiveTab = (tab) => {
    this.setState({
      activeTab: tab,
    });
  };

  render() {
    return (
      <>
        <section>
          <div className="container mt-4 mb-4">
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

                  <Link to="/Carbooking">
                    <button
                      className="btn btn-outline-primary border-light fw-bold text-dark"
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
                  <Link to="/Selection2">
                    <button
                      className="btn btn-outline-primary border-light fw-bold text-dark"
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
                  <Link to="/Selection1">
                    <button
                      className="btn btn-outline-primary border-light fw-bold text-dark"
                      htmlFor="btnradio3"
                    >
                      12hrs | 120km
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <section>
              <div className="container-fluid col-lg-12">
                <div className="col-lg-12">
                  <img
                    src="https://travelkit.savaari.com/ImageFolder/167263912310-06-2022-step-2-banners_1.jpg"
                    height=""
                    width="100%"
                    alt="Banner"
                  />
                </div>
                <div className="card border-primary mt-3">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-2">
                        <img
                          src="https://www.savaari.com/assets/img/cars/Savaari-Wagonr-Cab.jpg"
                          className="img-fluid"
                          alt="Wagon-R"
                          width="113px"
                        />
                      </div>
                      <div className="col-lg-2 p-3">
                        <h6>
                          <b>Wagon-R</b>
                        </h6>
                      </div>
                      <div className="col-lg-2 p-3">
                        <h6>Includes 80km and 8hrs</h6>
                      </div>
                      <div className="col-lg-2">
                        <span className="special_price">₹1758</span>
                        <div
                          style={{ marginBottom: "-5px", marginTop: "-5px" }}
                        >
                          <span className="regularPriceDesktop">
                            <b>Save ₹172</b>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <span
                          className="text-right carPrice pricetag"
                          style={{ fontWeight: 700 }}
                        >
                          ₹1586
                        </span>
                        <div className="inclusiveofGSTMsg">
                          <b>Inclusive of GST</b>
                        </div>
                      </div>
                      <div className="col-lg-2 p-3">
                        <Link to="/Booking">
                          <button className="btn ">
                            <span>Select</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div
                        onClick={this.toggleDropdown}
                        aria-controls="dropdown-content"
                        aria-expanded={this.state.openDropdown}
                        style={{
                          marginBottom: "10px",
                          justifyContent: "center",
                          display: "flex",
                          flexWrap: "nowrap",
                        }}
                      >
                        Details
                        <span className="ml-2">&#9660;</span>{" "}
                        {/* Dropdown icon (down arrow) */}
                      </div>

                      <Collapse in={this.state.openDropdown}>
                        <Card id="dropdown-content">
                          <Card.Body>
                            <Button onClick={() => this.setActiveTab("London")}>
                              INCLUSION
                            </Button>
                            <Button onClick={() => this.setActiveTab("Paris")}>
                              EXCLUSION
                            </Button>
                            <Button onClick={() => this.setActiveTab("India")}>
                              FACILITIES
                            </Button>
                            <Button onClick={() => this.setActiveTab("Tokyo")}>
                              T&C
                            </Button>

                            {this.state.activeTab === "London" && (
                              <div>
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

                            {this.state.activeTab === "Paris" && (
                              <div>
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

                            {this.state.activeTab === "India" && (
                              <div>
                                <p>
                                  6 Seater
                                  <br />
                                  <br />
                                  2 Air Bags
                                  <br />
                                  <br />
                                  AC
                                </p>
                              </div>
                            )}

                            {this.state.activeTab === "Tokyo" && (
                              <div>
                                <ul>
                                  <li>
                                    Your trip has a KM limit as well as an hours
                                    limit. If your usage exceeds these limits,
                                    you will be charged for the excess KM and/or
                                    hours used.
                                  </li>
                                  <li>
                                    The KM and Hour(s) usage will be calculated
                                    starting from your pick-up point and back to
                                    the pick-up point.
                                  </li>
                                  <li>
                                    The airport entry charge, if applicable, is
                                    not included in the fare and will be charged
                                    extra.
                                  </li>
                                  <li>
                                    All road toll fees, parking charges, state
                                    taxes, etc., if applicable, will be charged
                                    extra and need to be paid to the concerned
                                    authorities as per actuals.
                                  </li>
                                  <li>
                                    For driving between 09:45 PM to 06:00 AM on
                                    any of the nights, an additional allowance
                                    will be applicable and is to be paid to the
                                    driver.
                                  </li>
                                </ul>
                              </div>
                            )}
                          </Card.Body>
                        </Card>
                      </Collapse>
                    </div>
                  </div>
                </div>
                {/* Repeat this block for each card section */}

                <div className="card border-primary mt-3">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-2">
                        <img
                          src="https://www.savaari.com/assets/img/cars/Savaari-Wagonr-Cab.jpg"
                          className="img-fluid"
                          alt="Wagon-R"
                          width="113px"
                        />
                      </div>
                      <div className="col-lg-2 p-3">
                        <h6>
                          <b>Wagon-R</b>
                        </h6>
                      </div>
                      <div className="col-lg-2 p-3">
                        <h6>Includes 80km and 8hrs</h6>
                      </div>

                      <div className="col-lg-2">
                        <span className="special_price">₹1758</span>
                        <div
                          style={{ marginBottom: "-5px", marginTop: "-5px" }}
                        >
                          <span className="regularPriceDesktop">
                            <b>Save ₹172</b>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <span
                          className="text-right carPrice pricetag"
                          style={{ fontWeight: 700 }}
                        >
                          ₹1586
                        </span>
                        <div className="inclusiveofGSTMsg">
                          <b>Inclusive of GST</b>
                        </div>
                      </div>
                      <div className="col-lg-2 p-3">
                        <Link to="/Booking">
                          <button className="btn ">
                            <span>Select</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div
                        onClick={this.toggleDropdown}
                        aria-controls="dropdown-content"
                        aria-expanded={this.state.openDropdown}
                        style={{
                          marginBottom: "10px",
                          justifyContent: "center",
                          display: "flex",
                          flexWrap: "nowrap",
                        }}
                      >
                        Details
                        <span className="ml-2">&#9660;</span>{" "}
                        {/* Dropdown icon (down arrow) */}
                      </div>

                      <Collapse in={this.state.openDropdown}>
                        <Card id="dropdown-content">
                          <Card.Body>
                            <Button onClick={() => this.setActiveTab("London")}>
                              INCLUSION
                            </Button>
                            <Button onClick={() => this.setActiveTab("Paris")}>
                              EXCLUSION
                            </Button>
                            <Button onClick={() => this.setActiveTab("India")}>
                              FACILITIES
                            </Button>

                            <Button onClick={() => this.setActiveTab("Tokyo")}>
                              T&C
                            </Button>

                            {this.state.activeTab === "London" && (
                              <div>
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

                            {this.state.activeTab === "Paris" && (
                              <div>
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
                            {this.state.activeTab === "India" && (
                              <div>
                                <p>
                                  6 Seter
                                  <br />
                                  <br />
                                  2 Air Bags
                                  <br />
                                  <br />
                                  AC
                                </p>
                              </div>
                            )}

                            {this.state.activeTab === "Tokyo" && (
                              <div>
                                <ul>
                                  <li>
                                    Your Trip has a KM limit as well as an Hours
                                    limit. If your usage exceeds these limits,
                                    you will be charged for the excess KM and/or
                                    hours used.
                                  </li>
                                  <li>
                                    The KM and Hour(s) usage will be calculated
                                    starting from your pick-up point and back to
                                    the pick-up point.
                                  </li>
                                  <li>
                                    The Airport entry charge, if applicable, is
                                    not included in the fare and will be charged
                                    extra.
                                  </li>
                                  <li>
                                    All road toll fees, parking charges, state
                                    taxes, etc. if applicable will be charged
                                    extra and need to be paid to the concerned
                                    authorities as per actuals.
                                  </li>
                                  <li>
                                    For driving between 09:45 PM to 06:00 AM on
                                    any of the nights, an additional allowance
                                    will be applicable and is to be paid to the
                                    driver.
                                  </li>
                                </ul>
                              </div>
                            )}
                          </Card.Body>
                        </Card>
                      </Collapse>
                    </div>
                  </div>
                </div>

                <div className="card border-primary mt-3">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-2">
                        <img
                          src="https://www.savaari.com/assets/img/cars/Savaari-Wagonr-Cab.jpg"
                          className="img-fluid"
                          alt="Wagon-R"
                          width="113px"
                        />
                      </div>
                      <div className="col-lg-2 p-3">
                        <h6>
                          <b>Wagon-R</b>
                        </h6>
                      </div>
                      <div className="col-lg-2 p-3">
                        <h6>Includes 80km and 8hrs</h6>
                      </div>
                      <div className="col-lg-2">
                        <span className="special_price">₹1758</span>
                        <div
                          style={{ marginBottom: "-5px", marginTop: "-5px" }}
                        >
                          <span className="regularPriceDesktop">
                            <b>Save ₹172</b>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <span
                          className="text-right carPrice pricetag"
                          style={{ fontWeight: 700 }}
                        >
                          ₹1586
                        </span>
                        <div className="inclusiveofGSTMsg">
                          <b>Inclusive of GST</b>
                        </div>
                      </div>
                      <div className="col-lg-2 p-3">
                        <Link to="/Booking">
                          <button className="btn ">
                            <span>Select</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div
                        onClick={this.toggleDropdown}
                        aria-controls="dropdown-content"
                        aria-expanded={this.state.openDropdown}
                        style={{
                          marginBottom: "10px",
                          justifyContent: "center",
                          display: "flex",
                          flexWrap: "nowrap",
                        }}
                      >
                        Details
                        <span className="ml-2">&#9660;</span>{" "}
                        {/* Dropdown icon (down arrow) */}
                      </div>

                      <Collapse in={this.state.openDropdown}>
                        <Card id="dropdown-content">
                          <Card.Body>
                            <Button onClick={() => this.setActiveTab("London")}>
                              INCLUSION
                            </Button>
                            <Button onClick={() => this.setActiveTab("Paris")}>
                              EXCLUSION
                            </Button>
                            <Button onClick={() => this.setActiveTab("India")}>
                              FACILITIES
                            </Button>

                            <Button onClick={() => this.setActiveTab("Tokyo")}>
                              T&C
                            </Button>

                            {this.state.activeTab === "London" && (
                              <div>
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

                            {this.state.activeTab === "Paris" && (
                              <div>
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
                            {this.state.activeTab === "India" && (
                              <div>
                                <p>
                                  6 Seter
                                  <br />
                                  <br />
                                  2 Air Bags
                                  <br />
                                  <br />
                                  AC
                                </p>
                              </div>
                            )}

                            {this.state.activeTab === "Tokyo" && (
                              <div>
                                <ul>
                                  <li>
                                    Your Trip has a KM limit as well as an Hours
                                    limit. If your usage exceeds these limits,
                                    you will be charged for the excess KM and/or
                                    hours used.
                                  </li>
                                  <li>
                                    The KM and Hour(s) usage will be calculated
                                    starting from your pick-up point and back to
                                    the pick-up point.
                                  </li>
                                  <li>
                                    The Airport entry charge, if applicable, is
                                    not included in the fare and will be charged
                                    extra.
                                  </li>
                                  <li>
                                    All road toll fees, parking charges, state
                                    taxes, etc. if applicable will be charged
                                    extra and need to be paid to the concerned
                                    authorities as per actuals.
                                  </li>
                                  <li>
                                    For driving between 09:45 PM to 06:00 AM on
                                    any of the nights, an additional allowance
                                    will be applicable and is to be paid to the
                                    driver.
                                  </li>
                                </ul>
                              </div>
                            )}
                          </Card.Body>
                        </Card>
                      </Collapse>
                    </div>
                  </div>
                </div>

                <div className="card border-primary mt-3">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-2">
                        <img
                          src="https://www.savaari.com/assets/img/cars/Savaari-Wagonr-Cab.jpg"
                          className="img-fluid"
                          alt="Wagon-R"
                          width="113px"
                        />
                      </div>
                      <div className="col-lg-2 p-3">
                        <h6>
                          <b>Wagon-R</b>
                        </h6>
                      </div>
                      <div className="col-lg-2 p-3">
                        <h6>Includes 80km and 8hrs</h6>
                      </div>
                      <div className="col-lg-2">
                        <span className="special_price">₹1758</span>
                        <div
                          style={{ marginBottom: "-5px", marginTop: "-5px" }}
                        >
                          <span className="regularPriceDesktop">
                            <b>Save ₹172</b>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <span
                          className="text-right carPrice pricetag"
                          style={{ fontWeight: 700 }}
                        >
                          ₹1586
                        </span>
                        <div className="inclusiveofGSTMsg">
                          <b>Inclusive of GST</b>
                        </div>
                      </div>
                      <div className="col-lg-2 p-3">
                        <Link to="/Booking">
                          <button className="btn ">
                            <span>Select</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div
                        onClick={this.toggleDropdown}
                        aria-controls="dropdown-content"
                        aria-expanded={this.state.openDropdown}
                        style={{
                          marginBottom: "10px",
                          justifyContent: "center",
                          display: "flex",
                          flexWrap: "nowrap",
                        }}
                      >
                        Details
                        <span className="ml-2">&#9660;</span>{" "}
                        {/* Dropdown icon (down arrow) */}
                      </div>

                      <Collapse in={this.state.openDropdown}>
                        <Card id="dropdown-content">
                          <Card.Body>
                            <Button onClick={() => this.setActiveTab("London")}>
                              INCLUSION
                            </Button>
                            <Button onClick={() => this.setActiveTab("Paris")}>
                              EXCLUSION
                            </Button>
                            <Button onClick={() => this.setActiveTab("India")}>
                              FACILITIES
                            </Button>

                            <Button onClick={() => this.setActiveTab("Tokyo")}>
                              T&C
                            </Button>

                            {this.state.activeTab === "London" && (
                              <div>
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

                            {this.state.activeTab === "Paris" && (
                              <div>
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
                            {this.state.activeTab === "India" && (
                              <div>
                                <p>
                                  6 Seter
                                  <br />
                                  <br />
                                  2 Air Bags
                                  <br />
                                  <br />
                                  AC
                                </p>
                              </div>
                            )}

                            {this.state.activeTab === "Tokyo" && (
                              <div>
                                <ul>
                                  <li>
                                    Your Trip has a KM limit as well as an Hours
                                    limit. If your usage exceeds these limits,
                                    you will be charged for the excess KM and/or
                                    hours used.
                                  </li>
                                  <li>
                                    The KM and Hour(s) usage will be calculated
                                    starting from your pick-up point and back to
                                    the pick-up point.
                                  </li>
                                  <li>
                                    The Airport entry charge, if applicable, is
                                    not included in the fare and will be charged
                                    extra.
                                  </li>
                                  <li>
                                    All road toll fees, parking charges, state
                                    taxes, etc. if applicable will be charged
                                    extra and need to be paid to the concerned
                                    authorities as per actuals.
                                  </li>
                                  <li>
                                    For driving between 09:45 PM to 06:00 AM on
                                    any of the nights, an additional allowance
                                    will be applicable and is to be paid to the
                                    driver.
                                  </li>
                                </ul>
                              </div>
                            )}
                          </Card.Body>
                        </Card>
                      </Collapse>
                    </div>
                  </div>
                </div>

                <div className="card border-primary mt-3">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-2">
                        <img
                          src="https://www.savaari.com/assets/img/cars/Savaari-Wagonr-Cab.jpg"
                          className="img-fluid"
                          alt="Wagon-R"
                          width="113px"
                        />
                      </div>
                      <div className="col-lg-2 p-3">
                        <h6>
                          <b>Wagon-R</b>
                        </h6>
                      </div>
                      <div className="col-lg-2 p-3">
                        <h6>Includes 80km and 8hrs</h6>
                      </div>
                      <div className="col-lg-2">
                        <span className="special_price">₹1758</span>
                        <div
                          style={{ marginBottom: "-5px", marginTop: "-5px" }}
                        >
                          <span className="regularPriceDesktop">
                            <b>Save ₹172</b>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <span
                          className="text-right carPrice pricetag"
                          style={{ fontWeight: 700 }}
                        >
                          ₹1586
                        </span>
                        <div className="inclusiveofGSTMsg">
                          <b>Inclusive of GST</b>
                        </div>
                      </div>
                      <div className="col-lg-2 p-3">
                        <Link to="/Booking">
                          <button className="btn ">
                            <span>Select</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div
                        onClick={this.toggleDropdown}
                        aria-controls="dropdown-content"
                        aria-expanded={this.state.openDropdown}
                        style={{
                          marginBottom: "10px",
                          justifyContent: "center",
                          display: "flex",
                          flexWrap: "nowrap",
                        }}
                      >
                        Details
                        <span className="ml-2">&#9660;</span>{" "}
                        {/* Dropdown icon (down arrow) */}
                      </div>

                      <Collapse in={this.state.openDropdown}>
                        <Card id="dropdown-content">
                          <Card.Body>
                            <Button onClick={() => this.setActiveTab("London")}>
                              INCLUSION
                            </Button>
                            <Button onClick={() => this.setActiveTab("Paris")}>
                              EXCLUSION
                            </Button>
                            <Button onClick={() => this.setActiveTab("India")}>
                              FACILITIES
                            </Button>

                            <Button onClick={() => this.setActiveTab("Tokyo")}>
                              T&C
                            </Button>

                            {this.state.activeTab === "London" && (
                              <div>
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

                            {this.state.activeTab === "Paris" && (
                              <div>
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
                            {this.state.activeTab === "India" && (
                              <div>
                                <p>
                                  6 Seter
                                  <br />
                                  <br />
                                  2 Air Bags
                                  <br />
                                  <br />
                                  AC
                                </p>
                              </div>
                            )}

                            {this.state.activeTab === "Tokyo" && (
                              <div>
                                <ul>
                                  <li>
                                    Your Trip has a KM limit as well as an Hours
                                    limit. If your usage exceeds these limits,
                                    you will be charged for the excess KM and/or
                                    hours used.
                                  </li>
                                  <li>
                                    The KM and Hour(s) usage will be calculated
                                    starting from your pick-up point and back to
                                    the pick-up point.
                                  </li>
                                  <li>
                                    The Airport entry charge, if applicable, is
                                    not included in the fare and will be charged
                                    extra.
                                  </li>
                                  <li>
                                    All road toll fees, parking charges, state
                                    taxes, etc. if applicable will be charged
                                    extra and need to be paid to the concerned
                                    authorities as per actuals.
                                  </li>
                                  <li>
                                    For driving between 09:45 PM to 06:00 AM on
                                    any of the nights, an additional allowance
                                    will be applicable and is to be paid to the
                                    driver.
                                  </li>
                                </ul>
                              </div>
                            )}
                          </Card.Body>
                        </Card>
                      </Collapse>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </>
    );
  }
}

export default selection1;
