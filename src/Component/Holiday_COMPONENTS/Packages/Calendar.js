import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../../../index.css";

const Calendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showItineraryModal, setShowItineraryModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleItineraryModal = () => {
    setShowItineraryModal(!showItineraryModal);
  };

  const handleProceed = () => {
    setShowModal(false);
  };

  const togglePricingModal = () => {
    setShowPricingModal(!showPricingModal);
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section>
      <div className="container-fluid">
        <div
          className="row mt-5 text-center"
        >
          <div className="col-lg-6 col-md-4 " >
            <div className="row">
              <div className="card">
                <div className="card-header bg-light col-lg-12">
                  <h6 className="text-start">BOOKING SUMMARY</h6>
                </div>
                <section>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6">
                        <p className="text-start">Dept. City</p>
                      </div>
                      <div className="col-lg-6">
                        <p className="text-start text-muted">
                          {selectedOption === "Guwahati"
                            ? "Guwahati"
                            : "Mumbai"}
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <p className="text-start">Dept. date</p>
                      </div>
                      <div className="col-lg-6">
                        <h6 className="text-start">selectedPrice</h6>
                      </div>
                      <div className="col-lg-6">
                        <p className="text-start">Travellers</p>
                      </div>
                      <div className="col-lg-6">
                        <p className="text-start text-muted"></p>
                      </div>
                      <div className="col-lg-6">
                        <p className="text-start">Rooms</p>
                      </div>
                      <div className="col-lg-6">
                        <p className="text-start text-muted">adultCount</p>
                      </div>

                      <p>------------------------------------------</p>

                      <div className="col-lg-6">
                        <h6 className="text-start">Basic Price</h6>
                      </div>
                      <div className="text-end col-lg-6">
                        <span style={{ color: "green" }}></span>
                      </div>
                      <div className="col-lg-6">
                        <span
                          className="text-start"
                          style={{
                            color: "blue",
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                          onClick={togglePricingModal}
                        >
                          View Pricing Table
                        </span>
                      </div>
                      <div className="col-lg-6">
                        <p className="text-end">per person on twin sharing</p>
                      </div>
                      <p>------------------------------------------</p>

                      <div className="col-lg-6">
                        <h6 className="text-start text-primary">
                          1800 22 7979
                        </h6>
                      </div>
                      <div className="col-lg-6">
                        <p className="text-end">
                          Locate nearest Trip or Travel
                        </p>
                      </div>
                    </div>
                    <button
                      className="bg-info rounded-2 mb-2"
                      
                    >
                      Book Online
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-start mt-4 mx-4 ">
        <div className="text-start table-bordered bg-light rounded shadow"></div>
      </div>

      <Modal
        show={showModal}
        onHide={toggleModal}
        centered
        dialogClassName="itinerary-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Select you preferred departure city</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input
              type="radio"
              id="mumbaiModal"
              name="departureOptionModal"
              value="Mumbai"
              checked={selectedOption === "Mumbai"}
              onChange={handleRadioChange}
            />
            <label htmlFor="mumbaiModal" style={{ marginRight: "20px" }}>
              Mumbai
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="guwahatiModal"
              name="departureOptionModal"
              value="Guwahati"
              checked={selectedOption === "Guwahati"}
              onChange={handleRadioChange}
            />
            <label htmlFor="guwahatiModal">
              Join at Guwahati, Leave at Guwahati
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button
            variant="warning"
            style={{ width: "300px" }}
            onClick={handleProceed}
          >
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showItineraryModal} onHide={toggleItineraryModal} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <p className="text-start">Dept. City</p>
                </div>
                <div className="col-lg-6">
                  <p className="text-start text-muted">
                    {selectedOption === "Guwahati" ? "Guwahati" : "Mumbai"}
                  </p>
                </div>
                <div className="col-lg-6">
                  <p className="text-start">Dept. date</p>
                </div>
                <div className="col-lg-6">
                  <h6 className="text-start">selectedDate</h6>
                </div>
                <div className="col-lg-6">
                  <p className="text-start">Travellers</p>
                </div>
                <div className="col-lg-6">
                  <p className="text-start text-muted">
                    adultCount Adult adultCount | childCount Child | infantCount
                    Infant
                  </p>
                </div>
                <div className="col-lg-6">
                  <p className="text-start">Rooms</p>
                </div>
                <div className="col-lg-6">
                  <p className="text-start text-muted">adultCount</p>
                </div>

                <p>------------------------------------------</p>

                <div className="col-lg-6">
                  <h6 className="text-start">Basic Price</h6>
                </div>
                <div className="text-end col-lg-6">
                  <span style={{ color: "green" }}>selectedPrice</span>
                </div>
                <div className="col-lg-6">
                  <span
                    className="text-start"
                    style={{
                      color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={togglePricingModal}
                  >
                    View Pricing Table
                  </span>
                </div>
                <div className="col-lg-6">
                  <p className="text-end">per person on twin sharing</p>
                </div>
                <p>------------------------------------------</p>

                <div className="col-lg-6">
                  <h6 className="text-start text-primary">1800 22 7979</h6>
                </div>
                <div className="col-lg-6">
                  <p className="text-end">Locate nearest Trip or Travel</p>
                </div>
              </div>

              <div className="text-center">
                <button
                  className="bg-warning rounded-2 mb-2"
                  onClick={toggleItineraryModal}
                >
                  Book Online
                </button>
              </div>
            </div>
          </section>
        </Modal.Body>
      </Modal>
      <Modal show={showPricingModal} onHide={togglePricingModal} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <div>
              <h5>Detailed Tour Price</h5>
              <p>
                Prices & discounts are Per Person for Indian Nationals only.
              </p>
              <table className="table mt-4 table-bordered table-responsive-lg">
                <thead>
                  <tr>
                    <th>Room Type</th>
                    <th>Basic Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Single Occupancy</td>
                    <td>₹1,25,000</td>
                  </tr>
                  <tr>
                    <td>Twin Sharing</td>
                    <td>₹94,000</td>
                  </tr>
                  <tr>
                    <td>Triple Sharing</td>
                    <td>₹93,000</td>
                  </tr>
                  <tr>
                    <td>Infant</td>
                    <td>₹6,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showMessageModal}
        onHide={() => setShowMessageModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>QUICK ENQUIRY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="form-control"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">
                Contact Number
              </label>
              <input
                type="text"
                id="contactNumber"
                className="form-control"
                placeholder="Enter your contact number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Id
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Drop us a small description
              </label>
              <textarea
                rows="4"
                id="description"
                className="form-control"
                placeholder="Write your message here"
              />
            </div>
            <button className="btn btn-warning" style={{ width: "100%" }}>
              Submit Enquiry
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </section>
  );
};

export default Calendar;
