import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { createTheme } from "@mui/material/styles";
import { MdDelete } from "react-icons/md";
import { useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  Button,
  CardContent,
  Typography,
  TextField,
  InputLabel,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const theme = createTheme({
  palette: {
    primary: {
      light: "#190482",
      main: "#3f50b5",
      dark: "#1a237e",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    success: {
      light: "#1b5e20",
      main: "#00e676",
      dark: "#00bfff",
      contrastText: "#f4ff81",
    },
  },
});

const BookingDetails = () => {
  const [tourPackage, setTourPackage] = useState([]);
  const { id } = useParams();
  //const navigate = useNavigate();

  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  console.log(id, "id");

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

  const DataId = JSON.parse(localStorage.getItem("user"));

  console.log("id", DataId);

  // let transformData;

  // transformData = (originalData) => {
  //   if (!originalData) {
  //     return null;
  //   }

  //   const transformedData = {
  //     departureDate: originalData.departureDate || "",
  //     gestRoom: {
  //       gest: [
  //         {
  //           adults: parseInt(originalData.gestRoomadult) || 0,
  //           children: parseInt(originalData.gestRoomchildren) || 0,
  //         },
  //       ],
  //       room: [
  //         {
  //           doubleRoom: parseInt(originalData.gestRoomdoubleRoom) || 0,
  //           singleRoom: parseInt(originalData.gestRoomsingleRoom) || 0,
  //         },
  //       ],
  //     },
  //     name: originalData.name || "",
  //     email: originalData.email || "",
  //     mobile: originalData.mobile || "",
  //     travellerDetails: {
  //       traveller1: [
  //         {
  //           name: originalData.travellerDetails?.[0]?.name || "",
  //           phone: originalData.travellerDetails?.[0]?.phone || "",
  //         },
  //       ],
  //       traveller2: [
  //         {
  //           name: originalData.travellerDetails?.[1]?.name || "",
  //           phone: originalData.travellerDetails?.[1]?.phone || "",
  //         },
  //       ],
  //     },

  //     userId: DataId.id || "",
  //     packageId: originalData.id || "",
  //     paymentStatus: originalData.paymentStatus || "",
  //     paymentType: originalData.paymentType || "",
  //     status: originalData.status || "",
  //   };

  //   return transformedData;
  // };

  const [customer, setCustomer] = useState({});

  const save = async () => {
    try {
      const payload = {
        departureDate: customer.departureDate,
        gestRoom: {
          gest: rooms.map((room) => ({
            adults: room.adults || 0,
            children: room.children || 0,
          })),
          room: rooms.map((room) => ({
            doubleRoom: room.adults || 0,
            singleRoom: room.children || 0,
          })),
        },
        name: customer.name,
        email: customer.email,
        mobile: customer.mobile,
        userId: DataId.id,
        packageId: id,
        paymentStatus: "Unpaid",
        paymentType: customer.paymentType,
        status: "pending",
        flightDetails: "Cab",
        hotelDetails: "Woodstock Resort/or similar",
      };

     
      payload.travellerDetails = {};
      travellers.forEach((traveller, index) => {
        payload.travellerDetails[`traveller${index + 1}`] = [
          {
            name: traveller.name || "",
            phone: traveller.phone || "",
          },
        ];
      });

      console.log("payload", payload);

      const response = await axios.post(
        "https://tripapi.bloomitsolutions.in/v1/bookings/createHolidaysPackageBooking",
        payload
      );

      swal(
        response.data.message,
        "Thank you For Booking. You Will Get Approval Soon",
        "success"
      );
      fetchTourPackage();
    } catch (error) {
      console.error("Error making API request:", error);

      swal({
        icon: "error",
        title: "An error occurred. Please try again.",
        text: "",
      });
    }
  };
  const [rooms, setRooms] = useState([{ adults: 0, children: 0 }]);
  const [travellers, setTravellers] = useState([{ name: "", phone: "" }]);
  const [numberOfRooms, setNumberOfRooms] = useState(1);

  const handleInputChange = (field, value) => {
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [field]: value,
    }));
  };

  const handleChangeTraveller = (index, field, value) => {
    const updatedTravellers = [...travellers];
    updatedTravellers[index][field] = value;
    setTravellers(updatedTravellers);
  };

  
  const addTraveller = () => {
    setTravellers([...travellers, { name: "", phone: "" }]);
  };

  const removeTraveller = (index) => {
    setTravellers((prevTravellers) =>
      prevTravellers.filter((_, i) => i !== index)
    );
  };

  const handleChangeRoomDetails = (index, field, value) => {
    const updatedRooms = [...rooms];
    updatedRooms[index][field] = value;
    setRooms(updatedRooms);
  };

  const [doubleRooms, setDoubleRooms] = useState(0);
  const [singleRooms, setSingleRooms] = useState(0);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={12} xs={12} align="center">
          {tourPackage.length > 0 ? (
            <>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: theme.palette.primary.dark }}
              >
                {tourPackage[0]?.title}
              </Typography>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </Grid>

        <Grid item md={12}>
          <Card my={4}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item md={12} lg={12} xs={12} align="center">
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{ color: theme.palette.success.light }}
                  >
                    Booking Details
                  </Typography>
                </Grid>
                <Grid item md={4} xm={6} xs={12}>
                  <Grid item xs={12}>
                    <InputLabel>Name</InputLabel>
                    <TextField
                      placeholder="Enter Name"
                      type="text"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      size="small"
                      value={customer.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <InputLabel>Email</InputLabel>
                    <TextField
                      placeholder="Enter Email"
                      type="text"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      size="small"
                      value={customer.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <InputLabel>Mobile</InputLabel>
                    <TextField
                      placeholder="Enter Mobile"
                      type="text"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      size="small"
                      value={customer.mobile}
                      onChange={(e) =>
                        handleInputChange("mobile", e.target.value)
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <InputLabel>Pickup Time</InputLabel>
                    <TextField
                      type="time"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      size="small"
                      value={customer.pickuptime}
                      onChange={(e) =>
                        handleInputChange("pickuptime", e.target.value)
                      }
                    />
                  </Grid>
                </Grid>

                <Grid item md={4} xm={6} xs={12}>
                  <Grid item xs={12}>
                    <InputLabel>Number of Double Rooms</InputLabel>
                    <TextField
                      placeholder="Enter Number of Double Rooms"
                      type="number"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      size="small"
                      value={doubleRooms}
                      onChange={(e) =>
                        setDoubleRooms(parseInt(e.target.value) || 0)
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <InputLabel>Number of Single Rooms</InputLabel>
                    <TextField
                      placeholder="Enter Number of Single Rooms"
                      type="number"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      size="small"
                      value={singleRooms}
                      onChange={(e) =>
                        setSingleRooms(parseInt(e.target.value) || 0)
                      }
                    />
                  </Grid>

                  {[...Array(numberOfRooms)].map((_, index) => (
                    <React.Fragment key={index}>
                      <Grid item xs={12}>
                        <InputLabel>No Of Adults</InputLabel>
                        <TextField
                          placeholder={`Enter Room ${index + 1} Adults`}
                          type="number"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          size="small"
                          value={rooms[index]?.adults || 0}
                          onChange={(e) =>
                            handleChangeRoomDetails(
                              index,
                              "adults",
                              e.target.value
                            )
                          }
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <InputLabel>No Of Children</InputLabel>
                        <TextField
                          placeholder={`Enter Room ${index + 1} Children`}
                          type="number"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          size="small"
                          value={rooms[index]?.children || 0}
                          onChange={(e) =>
                            handleChangeRoomDetails(
                              index,
                              "children",
                              e.target.value
                            )
                          }
                        />
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid>

                <Grid item md={4} xm={6} xs={12}>
                  <Grid item xs={12}>
                    <InputLabel htmlFor="date-input">Departure Date</InputLabel>
                    <TextField
                      type="date"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      size="small"
                      value={customer.departureDate}
                      onChange={(e) =>
                        handleInputChange("departureDate", e.target.value)
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    {travellers.map((traveller, index) => (
                      <React.Fragment key={index}>
                        <Button
                          variant="outlined"
                          onClick={() =>
                            handleChangeTraveller(index, "open", true)
                          }
                        >
                          {`Add Traveller ${index + 1} `}
                        </Button>

                        <Dialog
                          open={traveller.open}
                          onClose={() =>
                            handleChangeTraveller(index, "open", false)
                          }
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle>Traveler Details</DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                              <Grid item xs={12}>
                                <InputLabel>{`Traveller ${
                                  index + 1
                                } Name`}</InputLabel>
                                <TextField
                                  placeholder={`Enter Traveller ${
                                    index + 1
                                  } Name`}
                                  type="text"
                                  variant="outlined"
                                  fullWidth
                                  margin="normal"
                                  size="small"
                                  name="name"
                                  value={traveller.name}
                                  onChange={(e) =>
                                    handleChangeTraveller(
                                      index,
                                      "name",
                                      e.target.value
                                    )
                                  }
                                />
                              </Grid>

                              <Grid item xs={12}>
                                <InputLabel>{`Traveller ${
                                  index + 1
                                } Phone`}</InputLabel>
                                <TextField
                                  placeholder={`Enter Traveller ${
                                    index + 1
                                  } Phone`}
                                  type="text"
                                  variant="outlined"
                                  fullWidth
                                  margin="normal"
                                  size="small"
                                  name="phone"
                                  value={traveller.phone}
                                  onChange={(e) =>
                                    handleChangeTraveller(
                                      index,
                                      "phone",
                                      e.target.value
                                    )
                                  }
                                />
                              </Grid>

                              {index > 0 && (
                                <IconButton
                                  onClick={() => removeTraveller(index)}
                                >
                                  <MdDelete />
                                </IconButton>
                              )}
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button
                              onClick={() =>
                                handleChangeTraveller(index, "open", false)
                              }
                            >
                              Cancel
                            </Button>
                            <Button
                              onClick={() =>
                                handleChangeTraveller(index, "open", false)
                              }
                            >
                              Save
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </React.Fragment>
                    ))}

                    <Grid item xs={12} my={2}>
                      <Button variant="outlined" my={2} onClick={addTraveller}>
                        Add Traveller
                      </Button>
                    </Grid>

                    <div>
                      <Typography variant="h6" fontWeight="bold" mb={1}>
                        Traveller Lists:
                      </Typography>
                      {travellers.map((traveller, index) => (
                        <>
                          <Typography key={index}>
                            {`Traveller ${index + 1}: ${traveller.name}`}
                          </Typography>
                          <Typography key={index}>
                            {`Traveller ${index + 1}: ${traveller.phone}`}
                          </Typography>
                          <hr />
                        </>
                      ))}
                    </div>
                  </Grid>

                  <Grid item xs={12}>
                    <InputLabel>Payment</InputLabel>
                    <Select
                      variant="outlined"
                      placeholder="Choose Your Payment Method"
                      fullWidth
                      margin="normal"
                      size="small"
                      value={customer.paymentType || "CoD"}
                      onChange={(e) =>
                        handleInputChange("paymentType", e.target.value)
                      }
                    >
                      <MenuItem value="cod" selected>
                        CoD
                      </MenuItem>
                      <MenuItem value="Online" disabled>
                        Online
                      </MenuItem>
                    </Select>
                  </Grid>

                  <Grid item xs={12} align="center" sx={{ mt: 3 }}>
                    <Button
                      variant="contained"
                      onClick={save}
                      color="success"
                      autoFocus
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookingDetails;
