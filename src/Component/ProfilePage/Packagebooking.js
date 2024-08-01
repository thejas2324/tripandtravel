import React from "react";
import { Paper, Box, Grid, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";
import axios from "axios";
import { IoPersonCircle, IoDocumentText } from "react-icons/io5";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const PackageBooking = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [packagebook, setBookingpackage] = useState([]);
  const { user, loading } = useAuth();

  const baseUrl = "https://tripapi.bloomitsolutions.in";

  const getMybooking = async (id) => {
    try {
      const response = await axios.get(
        `https://tripapi.bloomitsolutions.in/v1/bookings/getTourPackageBooking?userId=${id}`
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
    window.scrollTo(0, 0);
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
                  Packages Booking Details
                </Typography>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Departure Date</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>No. Of Guests</th>
                        <th>No. Of Rooms</th>
                        <th>Traveler Details</th>
                        <th>Payment Status</th>
                        <th>Payment Type</th>
                        <th>Hotel Details</th>
                        <th>Flight Details</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {packagebook.map((Package, index) => (
                        <tr key={index}>
                          <td>{Package.name}</td>
                          <td>{Package.departureDate}</td>
                          <td>{Package.email}</td>
                          <td>{Package.mobile}</td>
                          <td>
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Adults</th>
                                  <th>Children</th>
                                </tr>
                              </thead>

                              <tbody>
                                {Package.gestRoom.gest.map((Gest, index) => (
                                  <tr key={index}>
                                    <td>{Gest.adults}</td>
                                    <td>{Gest.children}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </td>
                          <td>
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Double Room</th>
                                  <th>Single Room</th>
                                </tr>
                              </thead>

                              <tbody>
                                {Package.gestRoom.room.map((Room, index) => (
                                  <tr key={index}>
                                    <td>{Room.doubleRoom}</td>
                                    <td>{Room.singleRoom}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </td>
                          <td>
                            <Button
                              variant="contained"
                              onClick={handleClickOpen}
                            >
                              Traveler Details
                            </Button>

                            <Dialog
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="alert-dialog-title"
                              aria-describedby="alert-dialog-description"
                            >
                              <DialogTitle
                                id="alert-dialog-title"
                                fontWeight={"bold"}
                              >
                                {"Traveler Details"}
                              </DialogTitle>
                              <DialogContent>
                              
                                <DialogContentText id="alert-dialog-description">
                                  {Object.values(Package.travellerDetails).map(
                                    (travellerArray, travellerIndex) =>
                                      travellerArray.map((Room, index) => (
                                        <div
                                          key={`traveller_${travellerIndex}_room_${index}`}
                                        >
                                        
                                          <p>
                                            <b>{`Traveler Name:`}</b>{" "}
                                            {Room.name}
                                          </p>
                                          <p>
                                            <b>Phone:</b> {Room.phone}
                                          </p>
                                        </div>
                                      ))
                                  )}
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleClose}>close</Button>
                              </DialogActions>
                            </Dialog>
                          </td>
                          <td>{Package.paymentStatus}</td>
                          <td>{Package.paymentType}</td>
                          <td>
                            <a
                              href={`${baseUrl}/${Package.hotelDetails}`}
                              target="_blank"
                              rel="noreferrer"
                              download
                            >
                              Download
                            </a>
                          </td>
                          <td>
                            <a
                              href={`${baseUrl}/${Package.flightDetails}`}
                              target="_blank"
                              rel="noreferrer"
                              download
                            >
                              Download
                            </a>
                          </td>
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

export default PackageBooking;
