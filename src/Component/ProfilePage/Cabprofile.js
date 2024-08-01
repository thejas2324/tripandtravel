import React from "react";
import {
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";
import axios from "axios";
import { IoPersonCircle, IoDocumentText } from "react-icons/io5";

const Upcomingprofile = () => {
  const [packagebook, setBookingpackage] = useState([]);
  const { user, loading } = useAuth();

  const getMybooking = async (id) => {
    try {
      const response = await axios.get(
        `https://tripapi.bloomitsolutions.in/v1/bookings/getcabPackageBooking?userId=${id}`
      );

      setBookingpackage(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      getMybooking(user.id);
    }
    window.scrollTo(0,0);
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Box sx={{ m: 5 }}>
      <Grid container spacing={3}>
        <Grid
          item
          md={12}
          sx={{ backgroundColor: "#3081D0", padding: "10%" }}
          className="mobileGrid"
        ></Grid>
        <Grid item md={1} xs={12} className="mobileGrid1"></Grid>
        <Grid
          item
          md={3}
          xs={12}
          sx={{ marginTop: "-100px" }}
          align="center"
          className="mobileGrid1"
        >
          <Paper
            elevation={3}
            sx={{ p: 3, backgroundColor: "#fff", border: "1px solid white" }}
            className="mobileGrid1"
          >
            <img
              src="http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
              width="140px"
              alt=""
              style={{
                marginTop: "-100px",
                zIndex: "10",
              }}
            />

            <Typography
              variant="h5"
              fontWeight={"bold"}
              align="justify"
              sx={{ mt: 2 }}
            >
              {user.name}
            </Typography>
            <Typography variant="subtitle1" align="justify" my={2}>
              {user.email}
            </Typography>
            <Typography variant="subtitle1" align="justify" my={2}>
              {user.phone}
            </Typography>

            <hr />

            <Link
              to="/profile"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
                marginBottom: 10,
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <IoPersonCircle size={30} style={{ marginRight: 10 }} />
                Profile
              </Typography>
            </Link>

            <Link
              to="/cabprofile"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
                marginBottom: 10,
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <IoDocumentText size={30} style={{ marginRight: 10 }} />
                Cab Booking Details
              </Typography>
            </Link>

            <Link
              to="/packageprofile"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <IoDocumentText size={30} style={{ marginRight: 10 }} />
                Packages Booking Details
              </Typography>
            </Link>
          </Paper>
        </Grid>

        {/* <Grid item md={12}>

          <Card>
            <CardHeader
              title={
                <Typography variant="h5" fontWeight={"bold"} align="center">
                  Cab Booking Details
                </Typography>
              }

              sx={{backgroundColor:"#4CB9E7"}}
            />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item md={12}></Grid>
                {packagebook.map((Package, index) => (
                  <Grid item md={4} xs={12} key={index}>
                    <Card sx={{ mb: 2 }}>
                      <CardContent mx={5}>
                        <Typography sx={{ mt: 2 }}><b> Name :</b> {Package.name}</Typography>
                        <Typography sx={{ mt: 2 }}>
                          {" "}
                          <b>From Location :</b> {Package.fromlocation}
                        </Typography>

                        <Typography sx={{ mt: 2 }}>
                          {" "}
                          <b>To Location :</b> {Package.tolocation}
                        </Typography>

                        <Typography sx={{ mt: 2 }}>
                          {" "}
                          <b>Type  :</b> {Package.type}
                        </Typography>

                        <Typography sx={{ mt: 2 }}>
                          {" "}
                          <b>PickUp Location  :</b> {Package.pickUpLocation}
                        </Typography>

                        <Typography sx={{ mt: 2 }}>
                          {" "}
                          <b>Pickup Date  :</b> {Package.pickupdate}
                        </Typography>

                        <Typography sx={{ mt: 2 }}>
                          {" "}
                          <b>Pickup Time  :</b> {Package.pickuptime}
                        </Typography>

                        <Typography sx={{ mt: 2 }}>
                          <b>Email:</b>
                          {"   "} {Package.email}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                          <b>Phone Number:</b>
                          {"   "} {Package.mobile}
                        </Typography>

                       
                        

                        <Typography sx={{ mt: 2 }}>
                          <b>Status:</b>
                          {"   "}{" "}
                          <span
                            style={{
                              backgroundColor: Package.status === "accepted" ? "#00FF00" : "#FE0000",
                              color: "white",
                              padding: "2px 5px",
                              borderRadius: "3px",
                            }}
                          >
                            {Package.status}
                          </span>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid> */}
      </Grid>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div
                className="card-header text-white"
                style={{ backgroundColor: "#4CB9E7" }}
              >
                <Typography variant="h5" fontWeight={"bold"} align="center">
                  Cab Booking Details
                </Typography>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>From Location</th>
                        <th>To Location</th>
                        <th>Type</th>
                        <th>Pickup Location</th>
                        <th>Pickup Date</th>
                        <th>Pickup Time</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {packagebook.map((Package, index) => (
                        <tr key={index}>
                          <td>{Package.name}</td>
                          <td>{Package.email}</td>
                          <td>{Package.mobile}</td>
                          <td>{Package.fromlocation}</td>
                          <td>{Package.tolocation}</td>
                          <td>{Package.type}</td>
                          <td>{Package.pickUpLocation}</td>
                          <td>{Package.pickupdate}</td>
                          <td>{Package.pickuptime}</td>

                          <td>
                            <span
                              style={{
                                backgroundColor:
                                  Package.status === "accepted"
                                    ? "#54B435"
                                    : "#FE0000",
                                color: "white",
                                padding: "2px 5px",
                                borderRadius: "3px",
                              }}
                            >
                              {Package.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="mb-4 mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Upcomingprofile;
