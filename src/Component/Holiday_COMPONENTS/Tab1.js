import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import "swiper/swiper-bundle.css";
import Parvicypolicy from "../Policypages/Parvicypolicy";
import TermsConditions from "../Policypages/TermsConditions";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

const Itinerary = () => {
  const [activeTab, setActiveTab] = useState("itinerary"); // Set the initial active tab

  const handleTabClick = (eventKey, tab) => {
    setActiveTab(tab);
    const targetElement = document.getElementById(eventKey);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [tourPackage, setTourPackage] = useState([]);
  const { id } = useParams();
  const baseurl = "https://tripapi.bloomitsolutions.in";

  const fetchTourPackage = async () => {
    try {
      const response = await axios.get(
        `https://tripapi.bloomitsolutions.in/v1/tours/getallPackage?id=${id}`
      );

      const filteredData = response.data.filter(
        (tourPackageItem) => tourPackageItem.id === parseInt(id)
      );

      setTourPackage(filteredData);
    } catch (error) {
      console.error("Error fetching tour package:", error);
    }
  };

  useEffect(() => {
    fetchTourPackage();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="card-header">
            <Nav
              fill
              variant="tabs"
              activeKey={activeTab}
              className="sticky-top bg bg-white shadow"
              defaultActiveKey="itinerary"
              style={{ position: "sticky", width: "100%", top: 100 }}
            >
              <NavItem>
                <NavLink
                  eventKey="Itinerary"
                  onClick={() => handleTabClick("Itinerary")}
                >
                  <b>Itinerary (Day Wise)</b>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey="tourDetails"
                  onClick={() => handleTabClick("tourDetails")}
                >
                  <b>Tour Details</b>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey="tourInformation"
                  onClick={() => handleTabClick("tourInformation")}
                >
                  <b>Tour Information</b>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  eventKey="Terms"
                  onClick={() => handleTabClick("Terms")}
                >
                  <b>Terms And Condition</b>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey="Policy"
                  onClick={() => handleTabClick("Policy")}
                >
                  <b>Policy & Terms</b>
                </NavLink>
              </NavItem>
            </Nav>

            <div id="Itinerary">
              <div className="row ">
                <div className="col-lg-1 mt-4 "></div>
                <div className="col-lg-10 mt-4 ml-5">
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ color: "#0D1282" }}
                  >
                    Itinerary (Day Wise)
                  </Typography>
                  {tourPackage.map((Itinerary) => (
                    <div key={Itinerary.id}>
                      {Itinerary.itinerary.map((Internary, index) => (
                        <div key={index}>
                          <Typography
                            variant="subtitle1"
                            my={2}
                            sx={{ color: "#0174BE" }}
                          >
                            <b>{`Day ${index + 1} `}:</b>
                            {"     "} {Internary.location}
                            {"    "}
                          </Typography>

                          <Typography variant="subtitle1">
                            <b>Description:</b>
                            {"    "}
                            {Internary.desc}
                          </Typography>

                          <Typography variant="subtitle1">
                            <b>Food:</b>
                            {"    "}
                            {Internary.food}
                          </Typography>

                          <hr />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div id="tourDetails">
              <div className="row ">
                <div className="col-lg-1 mt-4 "></div>
                <div className="col-lg-10 mt-4 ">
                  <div className="card border-0">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-12 ">
                          <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={{ color: "#0D1282" }}
                          >
                            Tour Details
                          </Typography>

                          <p className="text-muted text-start">
                            Best facilities with no added cost.
                          </p>
                        </div>
                        <div className=" container">
                          <div className="row">
                            <div className="col-lg-8 ">
                              <Tabs
                                defaultActiveKey="Flight Details"
                                id="justify-tab-example"
                                className="mb-3 text-dark"
                                style={{
                                  backgroundColor: "#E4F1FF",
                                  color: "#ffff",
                                }}
                                justify
                              >
                                <Tab
                                  eventKey="Flight Details"
                                  title="Flight Details"
                                  style={{ color: "#000" }}
                                >
                                  {tourPackage.map((TourPackage, index) => {
                                    return (
                                      <div key={index}>
                                        {TourPackage.tripDetail.map(
                                          (TripDetail, index) => {
                                            return (
                                              <div key={index}>
                                                <Typography
                                                  variant="subtitle1"
                                                  my={1}
                                                >
                                                  <b>Date:</b>
                                                  {"           "}
                                                  {TripDetail.date}
                                                </Typography>
                                                <Typography
                                                  variant="subtitle1"
                                                  my={1}
                                                >
                                                  <b>Flights:</b>
                                                  {"     "}
                                                  {TripDetail.flights}
                                                </Typography>
                                                <Typography
                                                  variant="subtitle1"
                                                  my={1}
                                                >
                                                  <b>Arrival:</b>
                                                  {"          "}
                                                  {TripDetail.arrival}
                                                </Typography>
                                                <Typography
                                                  variant="subtitle1"
                                                  my={1}
                                                >
                                                  <b>Departure:</b>
                                                  {"        "}
                                                  {TripDetail.departure}
                                                </Typography>
                                              </div>
                                            );
                                          }
                                        )}
                                      </div>
                                    );
                                  })}
                                </Tab>
                                <Tab
                                  eventKey="Accomodation Details"
                                  title="Accomodation Details"
                                >
                                  {tourPackage.map((TourPackage, index) => {
                                    return (
                                      <div key={index}>
                                        {TourPackage.accomDetail.map(
                                          (AccDetail, index) => {
                                            return (
                                              <div key={index}>
                                                <Typography
                                                  variant="subtitle1"
                                                  my={1}
                                                >
                                                  <b>Hotels:</b>
                                                  {"           "}
                                                  {AccDetail.hotels}
                                                </Typography>
                                                <Typography
                                                  variant="subtitle1"
                                                  my={1}
                                                >
                                                  <b>Destinations:</b>
                                                  {"     "}
                                                  {AccDetail.destinations}
                                                </Typography>
                                                <Typography
                                                  variant="subtitle1"
                                                  my={1}
                                                >
                                                  <b>CheckInDate:</b>
                                                  {"          "}
                                                  {AccDetail.checkInDate}
                                                </Typography>
                                                <Typography
                                                  variant="subtitle1"
                                                  my={1}
                                                >
                                                  <b>CheckOutDate:</b>
                                                  {"        "}
                                                  {AccDetail.checkOutDate}
                                                </Typography>
                                              </div>
                                            );
                                          }
                                        )}
                                      </div>
                                    );
                                  })}
                                </Tab>
                                <Tab
                                  eventKey="Reporting & Dropping"
                                  title="Reporting & Dropping"
                                >
                                  <div className="bg-light">
                                    <div className="row">
                                      <div className="col-lg-2">
                                        <p>
                                          Guest Type Reporting Point Dropping
                                          Point
                                        </p>
                                      </div>
                                      <div className="col-lg-3">
                                        <p>
                                          Scheduled Tour Guests Guwahati Airport
                                          Guwahati Airport
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="bg-light">
                                    <div className="row">
                                      <div className="col-lg-2">
                                        <p>
                                          Guest Type Reporting Point Dropping
                                          Point
                                        </p>
                                      </div>
                                      <div className="col-lg-3">
                                        <p>
                                          Joining & Leaving Guests Guwahati
                                          Airport Guwahati Airport
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </Tab>
                              </Tabs>
                            </div>
                          </div>
                        </div>
                        <p className="text-start">
                          Note: Flight details are tentative only. The airline,
                          departure, arrival times and routing may change.
                          <br></br>Hotel details are tentative only. The hotel
                          or place of accommodation may change
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tour Information */}
            <div id="tourInformation">
              <div className="row">
                <div className="col-lg-1 mt-4 "></div>
                <div className="col-lg-10 mt-4">
                  <div className="card border-0">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-8">
                          <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={{ color: "#0D1282" }}
                          >
                            Tour Information
                          </Typography>
                          <p className="text-muted text-start">
                            Read this to prepare for your tour in the best way!
                          </p>
                        </div>
                        <div className="text-start container">
                          <div className="row">
                            <div className="col-lg-8">
                              <Tabs
                                defaultActiveKey="Tour Inclusions"
                                id="justify-tab-example"
                                className="mb-3"
                                style={{ backgroundColor: "#E4F1FF" }}
                                justify
                              >
                                <Tab
                                  eventKey="Tour Inclusions"
                                  title="Tour Inclusions"
                                >
                                  <ul>
                                    <li>
                                      <p>
                                        Travel by comfortable A/C or non A/C
                                        small cars or Tempo Travellers or Mini
                                        Buses or big buses depending on the
                                        respective tour group size
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        Accommodation in comfortable hotels on
                                        twin/triple/Single sharing basis
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        All Meals – Morning tea/coffee,
                                        breakfast, lunch, evening tea/coffee
                                        with cookies/snacks, dinner and Water
                                        Bottle (1 Litre) per person per day
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        Guide & driver tips, hotel & restaurants
                                        tips
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        Permits/ entrance fees of all
                                        sightseeing places which is to be
                                        visited from inside
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        Accompanied local guide/s services
                                        wherever require
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        Trip or Travel Tour Manager Services
                                        from Day 01 Meeting point till the
                                        dropping point on last day
                                      </p>
                                    </li>
                                  </ul>
                                </Tab>
                                <Tab
                                  eventKey="Tour Exclusions"
                                  title="Tour Exclusions"
                                >
                                  <ul>
                                    <li>
                                      <p>
                                        Government of India Goods & Services Tax
                                        (GST) of 5%
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        To and Fro economy class air ticket
                                        (Ex-Mumbai) with current airport taxes
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        Baggage Allowance as per the airline
                                        policy
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        Any increase in airfare, airport tax,
                                        fuel surcharge etc.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        Any new taxes levied by the central or
                                        state government
                                      </p>
                                    </li>
                                    <li>
                                      <p>Cost of Insurance</p>
                                    </li>
                                    <li>
                                      <p>
                                        Travel Insurance for guests up to 70
                                        years of age
                                      </p>
                                    </li>
                                  </ul>
                                </Tab>
                                <Tab
                                  eventKey="Advance Preparation"
                                  title="Advance Preparation"
                                >
                                  <ul>
                                    <li>
                                      <p>
                                        As everyone is becoming a frequent
                                        traveller now, we suggest that you make
                                        your own travel accessories kit to
                                        ensure a stress free holiday.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        Always make sure to carry less and light
                                        luggage, use a four wheel small or
                                        medium suitcase and please make sure
                                        that you are carrying only one suitcase
                                        per person. This will ensure that you
                                        will travel smartly and without any
                                        inconveniences.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        It is also recommended that you have one
                                        cross shoulder bag or haversack for your
                                        handy needs which will ensure that you
                                        are comfortable at the time of
                                        sightseeing and also easy for
                                        photography during your tour.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        A smart cap/hat and sunglasses are
                                        definitely something that you should
                                        have in your kit.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        Though Trip or Travel provides all three
                                        meals, that is breakfast, lunch, dinner
                                        and Trip or Travel treats as per the
                                        itinerary, you can carry dry snacks of
                                        your choice in small sealed packets for
                                        munching during air travel or road
                                        journeys.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        If you are travelling during the monsoon
                                        or to destinations where it is rainy,
                                        please carry a small umbrella or poncho.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        For international tours, please carry a
                                        universal adapter for charging your
                                        cameras and mobile phones.
                                      </p>
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

            <div id="Terms">
              <div className="col-lg-12">
                <TermsConditions />
              </div>
            </div>

            <div id="Policy">
              <div className="col-lg-12">
                <Parvicypolicy />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
