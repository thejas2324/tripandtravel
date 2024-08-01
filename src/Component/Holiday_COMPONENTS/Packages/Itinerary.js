import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'react-bootstrap';
import 'swiper/swiper-bundle.css';
import {
  faFacebookF,
  faLinkedin,
  faTwitter,
  faInstagram,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaWhatsapp, FaPrint } from 'react-icons/fa'; // Import icons
import Carousel from 'react-bootstrap/Carousel';
import { Button, Card, Collapse, Row, Col } from 'react-bootstrap';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "../../../index.css";


const generatePDF = () => {

  const pdfButton = document.getElementById('pdfButton');
  pdfButton.disabled = true;

  html2canvas(document.body).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');


    const pdf = new jsPDF('p', 'mm', 'a4');


    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;


    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);


    pdf.save('itinerary.pdf');

    pdfButton.disabled = false;
  });
};

const Itinerary = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);
  const [isCollapsed1, setIsCollapsed1] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isCollapsed3, setIsCollapsed3] = useState(true);

  const [openCollapse2, setOpenCollapse2] = React.useState(false);
  const [openCollapse3, setOpenCollapse3] = React.useState(false);
  const [openCollapse4, setOpenCollapse4] = React.useState(false);
  const [openCollapse5, setOpenCollapse5] = React.useState(false);
  const [openCollapse6, setOpenCollapse6] = React.useState(false);
  const [openCollapse7, setOpenCollapse7] = React.useState(false);
  const [openCollapse8, setOpenCollapse8] = React.useState(false);
  const [openCollapse9, setOpenCollapse9] = React.useState(false);

  const toggleCollapse2 = () => setOpenCollapse2(!openCollapse2);
  const toggleCollapse3 = () => setOpenCollapse3(!openCollapse3);
  const toggleCollapse4 = () => setOpenCollapse4(!openCollapse4);
  const toggleCollapse5 = () => setOpenCollapse5(!openCollapse5);
  const toggleCollapse6 = () => setOpenCollapse6(!openCollapse6);
  const toggleCollapse7 = () => setOpenCollapse7(!openCollapse7);
  const toggleCollapse8 = () => setOpenCollapse8(!openCollapse8);
  const toggleCollapse9 = () => setOpenCollapse9(!openCollapse9);
  const [activeTab, setActiveTab] = useState("itinerary"); // Set the initial active tab

  const handleTabClick = (eventKey,tab) => {
    setActiveTab(tab);
    const targetElement = document.getElementById(eventKey);
    
    if (targetElement) {
      // Scroll to the target element
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleCollapse1 = () => {
    setIsCollapsed1(!isCollapsed1);
  };

  const [activeKey, setActiveKey] = useState('flightDetails');

  const testimonials = [
    {
      name: "Madhavi",
      jobTitle: "Travelled in May, 2023",
      text: "Great experience of Trip or Travel! : Hello, I recently traveled to north east India through Trip or Travel for the first time and it was a great experience! The food at all places ...",
    },

    {
      name: "Dattatray",
      jobTitle: "Travelled in May, 2023",
      text: "DEAR Trip or Travel, THANKS A LOT FOR EXPERIENCING US SAFE AND COMFORTABLE TOUR OF SUCH A CHALLENGING N DURGAM PRADESH TOUR. WE ENJOYED...",
    },
    {
      name: "Supriya",
      jobTitle: "Travelled in May, 2023",
      text: "Tour (NORTH EAST - 3 SISTER) : Dear VeenaWorld, It's our first tour with VeenaWorld, we enjoyed it a lot. Tour was well arranged and well mana...",
    },
    {
      name: "Anjali",
      jobTitle: "Travelled in May, 2023",
      text: "It was a very good experience to have this tour with Veena Team. Hope to enjoy next tour in early. It's our first tour with VeenaWorld, we enjoyed it a lot.",
    },

  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const currentDate = new Date();
const currentDayName = daysOfWeek[currentDate.getDay()];

const dates = [
  {
    day: currentDayName,
    date: currentDate.getDate().toString().padStart(2, "0"),
    price: "$1000",
    month: currentDate.toLocaleDateString("en-US", { month: "short" }),
    year: currentDate.getFullYear(),
  },
  {
    day: daysOfWeek[(currentDate.getDay() + 1) % 7], // Calculate the next day
    date: (currentDate.getDate() + 1).toString().padStart(2, "0"),
    price: "$1100",
    month: currentDate.toLocaleDateString("en-US", { month: "short" }),
    year: currentDate.getFullYear(),
  },
  {
    day: daysOfWeek[(currentDate.getDay() + 2) % 7], // Calculate the day after the next day
    date: (currentDate.getDate() + 2).toString().padStart(2, "0"),
    price: "$1200",
    month: currentDate.toLocaleDateString("en-US", { month: "short" }),
    year: currentDate.getFullYear(),
  },
  {
    day: daysOfWeek[(currentDate.getDay() + 3) % 7], // Calculate the day three days from today
    date: (currentDate.getDate() + 3).toString().padStart(2, "0"),
    price: "$1300",
    month: currentDate.toLocaleDateString("en-US", { month: "short" }),
    year: currentDate.getFullYear(),
  },
  {
    day: daysOfWeek[(currentDate.getDay() + 4) % 7], // Calculate the day four days from today
    date: (currentDate.getDate() + 4).toString().padStart(2, "0"),
    price: "$1400",
    month: currentDate.toLocaleDateString("en-US", { month: "short" }),
    year: currentDate.getFullYear(),
  },
  {
    day: daysOfWeek[(currentDate.getDay() + 5) % 7], // Calculate the day five days from today
    date: (currentDate.getDate() + 5).toString().padStart(2, "0"),
    price: "$1500",
    month: currentDate.toLocaleDateString("en-US", { month: "short" }),
    year: currentDate.getFullYear(),
  },
  {
    day: daysOfWeek[(currentDate.getDay() + 6) % 7], // Calculate the day six days from today
    date: (currentDate.getDate() + 6).toString().padStart(2, "0"),
    price: "$1600",
    month: currentDate.toLocaleDateString("en-US", { month: "short" }),
    year: currentDate.getFullYear(),
  },
];

console.log(dates);


  const swiperRef = React.useRef(null);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // Use swiper.slideNext()
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev(); // Use swiper.slidePrev()
    }
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const showPopupModal = () => {
    setShowPopup(true); // Function to show the modal
  };

  const hidePopupModal = () => {
    setShowPopup(false); // Function to hide the modal
  };

  const showContactUsModal = () => {
    setShowContactUs(true);
  };

  

  // Function to hide the Contact Us pop-up
  const hideContactUsModal = () => {
    setShowContactUs(false);
  };


  const sendOTP = () => {

  };


  return (
    <section >
      <div className="container-fluid">
        <div className="row">
          <div className="card-header">
          
            <Nav fill variant="tabs" activeKey={activeTab} className="sticky-top bg-light" defaultActiveKey="itinerary">
        <NavItem>
          <NavLink eventKey="itinerary" onClick={() => handleTabClick("itinerary")}>
            Itinerary
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="tourDetails" onClick={() => handleTabClick("tourDetails")}>
            Tour Details
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="tourInformation" onClick={() => handleTabClick("tourInformation")}>
            Tour Information
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="needToKnow" onClick={() => handleTabClick("needToKnow")}>
            Need to Know
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="policyTerms" onClick={() => handleTabClick("policyTerms")}>
            Policy & Terms
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="upgrades" onClick={() => handleTabClick("upgrades")}>
            Upgrades
          </NavLink>
        </NavItem>
      </Nav>
      
            
            {/* Itinerary */}
            <div id="itinerary">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-8 mt-4">
                  <div className="row">
                    <div className="card border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-6">
                            <h5 className="text-start">Itinerary (Day Wise)</h5>
                          </div>
                          <div className="col-lg-6">
                            <p className="text-end">
                              <button
                                className="btn btn-link"
                                onClick={toggleCollapse}
                                data-bs-toggle="collapse"
                                data-bs-target="#itineraryDetails"
                                aria-expanded={isCollapsed ? "false" : "true"}
                              >
                                View all days
                              </button>
                            </p>
                          </div>
                          <div className="col-lg-8">
                            <p className="text-start mx-3">Day 1/18 Oct,23</p>
                            <h6 className="text-start mx-3">
                              Guwahati - Tezpur (1 Night)
                            </h6>
                          </div>
                          <div className="col-lg-4">
                            <h5>
                              <span
                                role="button"
                                onClick={toggleCollapse}
                                data-bs-toggle="collapse"
                                data-bs-target="#itineraryDetails"
                                aria-expanded={isCollapsed ? "false" : "true"}
                                aria-label="Toggle Details"
                              >
                                <h5 className="text-end"> + </h5>
                              </span>
                            </h5>


                          </div>
                          <div
                            id="itineraryDetails"
                            className={`collapse ${isCollapsed ? "" : "show"}`}
                          >
                            <p className="text-start mx-5">
                              Tour Guests will arrive at Guwahati Airport as per
                              their Scheduled flight. Upon arrival at Guwahati –
                              Capital city of Assam, Trip or Travel Tour Manager will
                              meet all tour guests and proceed to Tezpur – a city
                              located on the backs of river Brahmaputra. En route we
                              visit Maha Mrityunjai Temple – renowned as the World's
                              Tallest Shivling at about 126 feet high.
                            </p>
                            <div className="bg-light">
                              <p className="text-start mx-5">Dinner</p>
                              <p className="text-start mx-5">
                                Tea/Coffee en route to Tezpur
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <p className="text-start mx-3">Day 2 / 07 Nov, 23</p>
                            <h6 className="text-start mx-3">
                              Tezpur – Bomdila (1 Night)
                            </h6>
                          </div>
                          <div
                            className="col-lg-4"
                            role="button"
                            onClick={toggleCollapse1}
                            data-bs-toggle="collapse"
                            data-bs-target="#itineraryDetails1"
                            aria-expanded={isCollapsed1 ? "false" : "true"}
                            aria-label="Toggle Details"
                          >
                            <h5 className="text-end"> + </h5>
                          </div>
                        </div>
                      </div>


                      <div
                        id="itineraryDetails1"
                        className={`collapse ${isCollapsed1 ? "" : "show"}`}
                      >
                        {/* Content for Section 1 */}
                        <p className="text-start mx-5">Today we visit Mahabhairab Temple – an ancient temple located on a hillock. Later we proceed to Bomdila.</p>
                        <div className="bg-light">
                          <p className="text-start mx-5">Breakfast, Lunch & Dinner</p>
                          <p className="text-start mx-5">Tea/Coffee/Tetra Pack Juice en route to Bomdila, Tea/coffee in the evening.</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mt-4">
                  <div className="row">
                    <div className="card border-1">
                      <div className="card-header">
                        <h4>
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5315274051513!2d77.62455257384806!3d12.937803415620792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1443a8764a8d%3A0x6fd6295e4c4ab741!2sOne%20Co.Work!5e0!3m2!1sen!2sin!4v1697200816452!5m2!1sen!2sin"
                            width="100%"
                            height="200"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </h4>
                      </div>
                    </div>
                    <p>
                      <a href="#" className="btn-link" onClick={showPopupModal}>
                        Click here
                      </a>{" "}
                      to find the road distance
                    </p>
                    <div className="col-lg-6">
                      <FaWhatsapp />
                      <p>
                        <a href="#" className="btn-link text-decoration-none" onClick={showContactUsModal}>
                          Send Itinerary
                        </a>
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <FaPrint />
                      <p>
                        <a href="#" className="btn-link text-decoration-none" onClick={generatePDF} id="pdfButton">
                          Print Itinerary
                        </a>
                      </p>

                    </div>
                  </div>
                </div>
                <Modal show={showPopup} onHide={hidePopupModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Road distance between cities</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="d-flex">
                      <div>
                        <table className="table mt-4 table-responsive-lg">
                          <thead>
                            <tr>
                              <th className="px-4">From City</th>
                              <th className="px-4"></th>
                              <th className="px-4">To City</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-4">Guwahati</td>
                              <td className="px-4">4 Hrs</td>
                              <td className="px-4">Tezpur</td>
                            </tr>
                            <tr>
                              <td className="px-4">Tezpur</td>
                              <td className="px-4">4 Hrs</td>
                              <td className="px-4">Bomdila</td>
                            </tr>
                            <tr>
                              <td className="px-4">Bomdila</td>
                              <td className="px-4">6 Hrs</td>
                              <td className="px-4">Tawang</td>
                            </tr>
                            <tr>
                              <td className="px-4">Tawang</td>
                              <td className="px-4">6 Hrs</td>
                              <td className="px-4">Bomdila</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <p>*The travel time is an indication and does not depict actual time. Actual travel time between cities is subject to road & weather conditions</p>
                  </Modal.Footer>
                </Modal>

                <Modal show={showContactUs} onHide={hideContactUsModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h6>Enter your details to receive Itinerary & pricing information for 06 Nov 2023 Departure.</h6>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label" >
                        </label>
                        <input type="text" className="form-control" id="name" placeholder="Name" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label" >
                        </label>
                        <input type="text" className="form-control" id="phone" placeholder="Mobile" required />
                      </div>
                    </form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="warning" onClick={sendOTP}>
                      Get OTP
                    </Button>
                  </Modal.Footer>
                </Modal>

              </div>
            </div>
            </div>

            {/* Tour Details */}
            <div id="tourDetails">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-8 mt-4">
                  <div className="row">
                    <div className="card border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-8">
                            <h5 className="text-start">Tour Details</h5>
                            <p className="text-muted text-start">Best facilities with no added cost.</p>
                          </div>
                          <div className="text-start container">
                            <div className="row">
                              <div className="col ">
                                <Tabs
                                  defaultActiveKey="Flight Details"
                                  id="justify-tab-example"
                                  className="mb-3"
                                  justify
                                >
                                  <Tab eventKey="Flight Details" title="Flight Details">
                                    <p>Departure & Arrival</p>
                                    <div className="bg-light ">
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <h6>Mumbai</h6>
                                          06 Nov
                                          <p>06:25 AM</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <h5><span style={{ color: 'blue' }}>Indigo</span></h5>
                                          ------------------------
                                        </div>
                                        <div className="col-lg-4">
                                          <h6>GUWAHATI</h6>
                                          06 Nov
                                          <p>09:20 AM</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <h6>GUWAHATI</h6>
                                          29 Oct
                                          <p>16:20 PM</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <h5><span style={{ color: 'blue' }}>Indigo</span></h5>
                                          ------------------------
                                        </div>
                                        <div className="col-lg-4">
                                          <h6>Mumbai</h6>
                                          29 Oct
                                          <p>19:55 PM</p>
                                        </div>
                                      </div>
                                    </div>
                                  </Tab>
                                  <Tab eventKey="Accomodation Details" title="Accomodation Details">
                                    <div className="bg-light">
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <p>City-Country</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Hotel</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Check In - Check-Out</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <h6>Tezpur - India</h6>
                                        </div>
                                        <div className="col-lg-4">
                                          <h6>TBA/ TBA - Tezpur/ Cygnett Inn Imperial/or similar</h6>
                                        </div>
                                        <div className="col-lg-4">
                                          <h6>18 Oct - 19 Oct</h6>
                                        </div>
                                        <div className="col-lg-4">
                                          <h6>Bomdila - India</h6>
                                        </div>
                                        <div className="col-lg-4">
                                          <h6>TBA/ TBA/ Dili Phu/or similar</h6>
                                        </div>
                                        <div className="col-lg-4">
                                          <h6>19 Oct - 20 Oct</h6>
                                        </div>

                                      </div>
                                    </div>
                                  </Tab>
                                  <Tab eventKey="Reporting & Dropping" title="Reporting & Dropping" >
                                    <div className="bg-light">
                                      <div className="row">
                                        <div className="col-lg-2">
                                          <p>Guest Type Reporting Point Dropping Point</p>
                                        </div>
                                        <div className="col-lg-3">
                                          <p>Scheduled Tour Guests Guwahati Airport Guwahati Airport</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="bg-light">
                                      <div className="row">
                                        <div className="col-lg-2">
                                          <p>Guest Type Reporting Point Dropping Point</p>
                                        </div>
                                        <div className="col-lg-3">
                                          <p>Joining & Leaving Guests Guwahati Airport Guwahati Airport</p>
                                        </div>
                                      </div>
                                    </div>
                                  </Tab>
                                </Tabs>
                              </div>
                            </div>
                          </div>
                          <p className="text-start">Note: Flight details are tentative only. The airline, departure, arrival times and routing may change.
                            <br></br>Hotel details are tentative only. The hotel or place of accommodation may change</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </div>

          {/* Tour Information */}
          <div id="tourInformation">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-8 mt-4">
                <div className="row">
                  <div className="card border-0">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-8">
                          <h5 className="text-start">Tour Information</h5>
                          <p className="text-muted text-start">Read this to prepare for your tour in the best way!</p>
                        </div>
                        <div className="text-start container">
                          <div className="row">
                            <div className="col">
                            <Tabs
                                  defaultActiveKey="Tour Inclusions"
                                  id="justify-tab-example"
                                  className="mb-3"
                                  justify
                                >
                                  <Tab eventKey="Tour Inclusions" title="Tour Inclusions">
                                  <ul>
                                      <li>
                                        <p>Travel by comfortable A/C or non A/C small cars or Tempo Travellers or Mini Buses or big buses depending on the respective tour group size</p>
                                      </li>
                                      <li>
                                        <p>Accommodation in comfortable hotels on twin/triple/Single sharing basis</p>
                                      </li>
                                      <li>
                                        <p>All Meals – Morning tea/coffee, breakfast, lunch, evening tea/coffee with cookies/snacks, dinner and Water Bottle (1 Litre) per person per day</p>
                                      </li>
                                      <li>
                                        <p>Guide & driver tips, hotel & restaurants tips</p>
                                      </li>
                                      <li>
                                        <p>Permits/ entrance fees of all sightseeing places which is to be visited from inside</p>
                                      </li>
                                      <li>
                                        <p>Accompanied local guide/s services wherever require</p>
                                      </li>
                                      <li>
                                        <p>Trip or Travel Tour Manager Services from Day 01 Meeting point till the dropping point on last day</p>
                                      </li>
                                    </ul>
                                  </Tab>
                                  <Tab eventKey="Tour Exclusions" title="Tour Exclusions">
                                  <ul>
                                      <li>
                                        <p>Government of India Goods & Services Tax (GST) of 5%</p>
                                      </li>
                                      <li>
                                        <p>To and Fro economy class air ticket (Ex-Mumbai) with current airport taxes</p>
                                      </li>
                                      <li>
                                        <p>Baggage Allowance as per the airline policy</p>
                                      </li>
                                      <li>
                                        <p>Any increase in airfare, airport tax, fuel surcharge etc.</p>
                                      </li>
                                      <li>
                                        <p>Any new taxes levied by the central or state government</p>
                                      </li>
                                      <li>
                                        <p>Cost of Insurance</p>
                                      </li>
                                      <li>
                                        <p>Travel Insurance for guests up to 70 years of age</p>
                                      </li>
                                    </ul>
                                  </Tab>
                                  <Tab eventKey="Advance Preparation" title="Advance Preparation" >
                                  <ul>
                                      <li>
                                        <p>As everyone is becoming a frequent traveller now, we suggest that you make your own travel accessories kit to ensure a stress free holiday.</p>
                                      </li>
                                      <li>
                                        <p>Always make sure to carry less and light luggage, use a four wheel small or medium suitcase and please make sure that you are carrying only one suitcase per person. This will ensure that you will travel smartly and without any inconveniences.</p>
                                      </li>
                                      <li>
                                        <p>It is also recommended that you have one cross shoulder bag or haversack for your handy needs which will ensure that you are comfortable at the time of sightseeing and also easy for photography during your tour.</p>
                                      </li>
                                      <li>
                                        <p>A smart cap/hat and sunglasses are definitely something that you should have in your kit.</p>
                                      </li>
                                      <li>
                                        <p>Though Trip or Travel provides all three meals, that is breakfast, lunch, dinner and Trip or Travel treats as per the itinerary, you can carry dry snacks of your choice in small sealed packets for munching during air travel or road journeys.</p>
                                      </li>
                                      <li>
                                        <p>If you are travelling during the monsoon or to destinations where it is rainy, please carry a small umbrella or poncho.</p>
                                      </li>
                                      <li>
                                        <p>For international tours, please carry a universal adapter for charging your cameras and mobile phones.</p>
                                      </li>
                                    </ul>
                                  </Tab>
                                </Tabs>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Need To Know */}
          <div id="needToKnow">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-8 mt-4">
                <div className="row">
                  <div className="card border-0">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-8">
                          <h5 className="text-start">Need to Know</h5>
                          <p className="text-muted text-start">Things to consider before the trip!</p>
                        </div>
                        <div className="text-start ">
                          <h5>Weather</h5>
                          <ul>
                            <li>For detailed Information about weather kindly visit www.accuweather.com</li>
                          </ul>
                          <h5>Transport</h5>
                          <h6>Air Travel:</h6>
                          <ul>
                            <li>Mumbai –Guwahati / Guwahati – Mumbai</li>
                            <li>We use Go Air / Indigo / Air India</li>
                          </ul>
                          <h6>Coach Tavel</h6>
                          <ul>
                            <li>AC Vehicle Type - Depends upon group size</li>
                          </ul>
                          <h6>Documents Required for Travel</h6>
                          <ul>
                            <li>ADULT: Aadhaar Card (Mandatory) + Driving Licence/Voter ID/Passport – Back & front</li>
                            <li>CHILD: Aadhaar Card (Mandatory) + Passport/School ID – Back & front</li>
                            <li>INFANT: Aadhaar Card (Mandatory) + Birth Certificate – Back & front</li>
                            <li>ID card, ID card type and ID card number is mandatory at time of booking, kindly carry the same ID card on tour.</li>
                            <li>For NRI and Foreign National Guests along with Passport, Valid Indian Visa/ OCI Card/ PIO Card is mandatory.</li>
                            <li>Carry two passport size photographs.</li>
                            <li>01 Passport size photo scanned to be submitted to travel advisor.</li>
                            <li>Additional RA Permit charges for NRI & Foreigners.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Policy & Terms */}
          <div id="policyTerms">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-8 mt-4">
                <div className="row">
                  <div className="card border-0">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-8">
                          <h5 className="text-start">Cancellation Policy & Payment Terms</h5>
                          <p className="text-muted text-start">We keep it transparent, crystal clear!</p>
                        </div>
                        <div className="table table-responsive">
                          <table>
                            <thead>
                              <tr>
                                <th className="bg-primary text-white">Cancellation received no. of days prior to departure</th>
                                <th className="bg-light">D 0 to 5</th>
                                <th className="bg-light">D 6 to 15</th>
                                <th className="bg-light">D 16 to 30</th>
                                <th className="bg-light">D 31 to 45</th>
                                <th className="bg-light">D 46 to 60</th>
                                <th className="bg-light">D 61 to 90</th>
                                <th className="bg-light">D 91 to 120</th>
                                <th className="bg-light">D 121 to 900</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="bg-primary text-white">Cancellation fee applicable on Net Tour Price (per person)</td>
                                <td>100%</td>
                                <td>75%</td>
                                <td>50%</td>
                                <td>40%</td>
                                <td>30%</td>
                                <td>20%</td>
                                <td>15%</td>
                                <td>10%</td>
                              </tr>
                            </tbody>
                          </table>

                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <h5 className="text-start">Payment Terms</h5>
                    <p className="text-start">Guest can pay by Cheque/ Demand Draft/ Debit card / Credit card/ NEFT/ RTGS/ IMPS. For Debit / Credit card payment additional 1.8 % convenience charge will be applicable Cheque / Demand draft should be in favour of " Veena Patil Hospitality Pvt ltd"</p>
                  </div>
                  <div className="text-start">
                    <h5>Remarks</h5>
                    <ul>
                      <li>All meals are provided by Trip or Travel in case the flight reaches the stipulated destination early morning or leaves destination late in the evening.</li>
                      <li>The tour price mentioned for this tour is for Indian nationals only.</li>
                      <li>The tour price varies for NRI’s or foreign nationals, for more details kindly contact your travel advisor</li>
                      <li>NRIs and Foreign nationals please ensure proper identity is conveyed to booking executive at the time of booking and all details along with passport copies are handed over to the booking executive.</li>
                      <li>Standard Check-in and check-out time of hotels in India is generally 1.30 PM and 10 AM respectively.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Upgrades */}
          <div id="upgrades">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-8 mt-4">
                <div className="row">
                  <div className="card border-0">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-8">
                          <h5 className="text-start">Upgrades Available</h5>
                          <p className="text-muted text-start">Want luxury? Add luxury at minimum cost!</p>
                        </div>
                        <div className="text-start container">
                          <div className="row">
                            <div className="col">
                            <Tabs
                                  defaultActiveKey="Flight Upgrades"
                                  id="justify-tab-example"
                                  className="mb-3"
                                  justify
                                >
                                  <Tab eventKey="Flight Upgrades" title="Flight Upgrades" >
                                  <p>Need to upgrade to business or first class? Please get in touch with our team on 1800 22 7979 for more details.</p>
                                  </Tab>
                                  <Tab eventKey="Prime Seat(s)" title="Prime Seat(s)">
                                  <p>You can select the prime seat(s) in your coach at an additional cost. Please get in touch with our team on 1800 22 7979 for more details.</p>
                                  </Tab>
                                  
                                </Tabs>

                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
         
           
              </div>


         

          {/* Carousel */}
          <section className=" bg-dark py-4">
            <div className="py-14 py-md-16">
              <h5 className="mb-3 text-center text-white">Trip or Travel tour reviews</h5>
              <p className="text-center text-white mb-6 px-md-16 px-lg-0">What are you waiting for? Chalo Bag Bharo Nikal Pado!</p>
              <div className="position-relative">
                <div className="shape rounded-circle bg-soft-yellow rellax w-16 h-16" data-rellax-speed="1" style={{ bottom: '0.5rem', right: '-1.7rem' }}></div>
                <div className="shape bg-dot primary rellax w-16 h-16 container bg-transparent border-0" data-rellax-speed="1" style={{ top: '-1rem', left: '-1.7rem' }}>
                  <Swiper
                    ref={swiperRef}
                    spaceBetween={30}
                    slidesPerView={3}
                    >
                    <div className="swiper-wrapper">
                      {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                          <div className="item-inner">
                            <div className="card" style={{ width: "100%", height: "100%" }}>
                              <div className="card-body">
                                <blockquote className="icon mb-0">
                                  <div className="blockquote-details">
                                    <p>Assam Arunachal Meghalaya</p>
                                    <p>{testimonial.text}</p>
                                    <img className="rounded-circle w-12" src={testimonial.imageSrc} alt="" />
                                    <div className="info">
                                      <h5 className="mb-0">{testimonial.name}</h5>
                                      <p className="mb-0">{testimonial.jobTitle}</p>
                                    </div>
                                  </div>
                                </blockquote>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </div>
                  </Swiper>
                  <button className="arrow-button left" onClick={handlePrevSlide} style={{ position: 'auto', left: '0' }}>
                    {"<"}
                  </button>
                  <button className="arrow-button right" onClick={handleNextSlide} style={{ position: 'auto', right: '0' }}>
                    {">"}
                  </button>
                </div>

              </div>
            </div>
          </section>

          {/* Contact us Footer */}
          <section>
            <div className="container-fluid bg bg-light rounded-3 p-5">
              <div className="row mb-4">
                <div className="col-lg-3 mt-3">
                  <h5 className="text-danger">
                    <i className="fa fa-building" aria-hidden="true"></i> Our Offices
                  </h5>
                  <p>
                    Located across the country, ready to assist in planning & booking
                    your perfect vacation.
                  </p>
                  <h6 className="text-primary"> Locate Us</h6>
                </div>

                <div className="col-lg-3 mt-3">
                  <h5 className="text-danger">
                    <i className="fa fa-phone" aria-hidden="true"></i> Call us
                  </h5>
                  <p>
                    Located across the country, ready to assist in planning & booking
                    your perfect vacation.
                  </p>
                  <h6 className="text-primary">7894561220</h6>
                </div>

                <div className="col-lg-3 mt-3">
                  <h5 className="text-danger">
                    <i className="fa fa-envelope" aria-hidden="true"></i> Write to us
                  </h5>
                  <p>
                    Located across the country, ready to assist in planning & booking
                    your perfect vacation.
                  </p>
                  <h6 className="text-primary">travel@veenaworld.com</h6>
                </div>

                <div className="col-lg-3 mt-3 mb-3">
                  <h5 className="text-danger">
                    <i className="fa fa-share-alt" aria-hidden="true"></i> Connect with us
                  </h5>
                  <p>
                    Located across the country, ready to assist in planning & booking
                    your perfect vacation.
                  </p>

                  <div className="col-lg-12">
                    <a href="/">
                      <FontAwesomeIcon icon={faFacebookF} className="fa-2x mx-2 text-danger" />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={faLinkedin} className="fa-2x mx-2 text-danger" />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={faTwitter} className="fa-2x mx-2 text-danger" />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={faInstagram} className="fa-2x mx-2 text-danger" />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={faPinterest} className="fa-2x mx-2 text-danger" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </section>

  );
};

export default Itinerary;
