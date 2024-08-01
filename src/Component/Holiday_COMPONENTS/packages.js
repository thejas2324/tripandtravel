import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Grid, Typography, Button, Box, Paper } from "@mui/material";
import { FaRupeeSign } from "react-icons/fa";
import {
  Hotel,
  Restaurant,
  DirectionsBus,
  Flight,
  Explore,
} from "@mui/icons-material";
import BasicTabs from "./Tab1";
import { createTheme } from "@mui/material/styles";
import ReviewsAndFeatures from "./Review";
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

const PackPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
    <Box component="section" sx={{ width: "100%", p: 2 }}>
      <Grid container spacing={1} sx={{ mb: 3, p: 5 }}>
        <Grid item md={12} xs={12}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: theme.palette.primary.dark, my: 2 }}
          >
            {tourPackage[0]?.title}
          </Typography>
        </Grid>

        <Grid item md={7} xs={12} sx={{ mt: 2 }}>
          {tourPackage.length > 0 ? (
            <>
              <img
                src={`${baseurl}/${tourPackage[0]?.image}`}
                alt="Tour Package Image"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  height: "400px",
                }}
              />
            </>
          ) : null}
        </Grid>
        <Grid item md={5} xs={12} >
          <Grid item lg={12}>
            

            <Grid item xs={12} xm={12} md={12}>
              <Grid container spacing={2}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{  color: theme.palette.primary.light, my: 2,p:2}}
                >
                  Tour includes
                </Typography>
                <Grid container justifyContent="flex-start">
                  {[
                    { icon: <Hotel />, text: "Hotel" },
                    { icon: <Restaurant />, text: "Meals" },
                    { icon: <DirectionsBus />, text: "Transport" },
                    { icon: <Flight />, text: "Flight" },
                    { icon: <Explore />, text: "Sightseeing" },
                  ].map((item, index) => (
                    <Grid item md={3} key={index} sx={{ p: 2 }}>
                      <Typography variant="body2" textAlign="center">
                        {item.icon} 
                      </Typography>
                      <Typography variant="body2" textAlign="center">
                         {item.text}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>

                <Grid item md={6} xs={12} sx={{p:1}}>
                  <Typography variant="h6" fontWeight="bold">
                    Key Highlights
                  </Typography>
                </Grid>
                <Grid item md={6} className="text-end">
                  <Button variant="outlined" onClick={handleClickOpen}>
                    View all
                  </Button>
                </Grid>
                <Grid item md={12} xs={12} xm={6}>
                  {tourPackage &&
                    tourPackage.length > 0 &&
                    tourPackage.map((tourItem, index) => (
                      <div key={index}>
                        {tourItem.keyHighlights &&
                          tourItem.keyHighlights.map((keyhight, keyIndex) => (
                            <div key={keyIndex}>
                              <Typography variant="subtitle1">
                                <Explore />
                                {"    "}
                                {keyhight.desc}
                              </Typography>
                            </div>
                          ))}
                      </div>
                    ))}
                </Grid>

                <React.Fragment>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      <Typography variant="h6" fontWeight="bold">
                        Key Highlights
                      </Typography>
                    </DialogTitle>
                    <DialogContent sx={{ width: "100%" }}>
                      <DialogContentText id="alert-dialog-description">
                        <Grid item md={12}>
                          {tourPackage &&
                            tourPackage.length > 0 &&
                            tourPackage.map((tourItem, index) => (
                              <div key={index}>
                                {tourItem.keyHighlights &&
                                  tourItem.keyHighlights.map(
                                    (keyhight, keyIndex) => (
                                      <div key={keyIndex}>
                                        <Typography variant="subtitle1" my={3}>
                                          <Explore />
                                          {"    "}
                                          {keyhight.desc}
                                        </Typography>
                                      </div>
                                    )
                                  )}
                              </div>
                            ))}
                        </Grid>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                  </Dialog>
                </React.Fragment>
              </Grid>
            </Grid>

            {/* <Grid item md={12} sx={{ ml: 5, mt: 5 }}>
              <ReviewsAndFeatures />
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={1}
        sx={{ mb: 4, backgroundColor: "#f0f0f0", p: 5 }}
      >
        <Grid
          item
          xs={12}
          xm={6}
          md={8}
          my={2}
          sx={{ border: "1px solid #B6BBC4", borderRadius: "10px" }}
        >
          <Typography variant="h6" fontWeight="bold" my={1} mx={4}>
            Package Details
          </Typography>
          <hr />

          {tourPackage ? (
            <>
              <Typography variant="h6" my={1.5}>
                Title:{" "}
              </Typography>

              <Typography variant="body1" my={2}>
                {tourPackage[0]?.title}
              </Typography>

              <Typography variant="h6" my={1.5}>
                Subtitle:{" "}
              </Typography>

              <Typography variant="body1" my={2}>
                {tourPackage[0]?.subtitle}
              </Typography>

              <Typography variant="h6" my={1.5}>
                Description:{" "}
              </Typography>

              <Typography variant="body1" my={2}>
                {tourPackage[0]?.description}
              </Typography>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          xm={6}
          md={3}
          my={2}
          mx={2}
          sx={{ border: "1px solid #B6BBC4", borderRadius: "10px" }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            my={1}
            mx={4}
            align="center"
          >
            Booking Summary
          </Typography>
          <hr />

          {tourPackage ? (
            <>
              <Grid container spacing={2}>
                <Grid item md={5} xs={12}>
                  <Typography variant="h6" my={1.5}>
                    Dept. city:{" "}
                  </Typography>
                </Grid>
                <Grid item md={3} xs={12}>
                  <Typography variant="body1" my={2}>
                    {tourPackage[0]?.destinationCategory.destinationName}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid item md={5} xs={12}>
                  <Typography variant="h6" my={1.5}>
                    Price:{" "}
                  </Typography>
                </Grid>
                <Grid item md={3} xs={12}>
                  <Typography variant="body1" my={2}>
                    <FaRupeeSign /> {tourPackage[0]?.price}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid item md={5} xs={12}>
                  <Typography variant="h6" my={1.5}>
                    Total Days of Trip:{" "}
                  </Typography>
                </Grid>
                <Grid item md={3} xs={12}>
                  <Typography variant="body1" my={2}>
                    {tourPackage[0]?.totalDaysofTrip}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid item md={5} xs={12}>
                  <Typography variant="h6" my={1.5}>
                    Total City:{" "}
                  </Typography>
                </Grid>
                <Grid item md={3} xs={12}>
                  <Typography variant="body1" my={2}>
                    {tourPackage[0]?.totalcitys}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item md={12} align="center">
                <Link to={`/Bookingdetails/${tourPackage[0]?.id}`}>
                  <Button variant="contained" sx={{ my: 2 }} align="center">
                    PROCEED TO BOOK ONLINE
                  </Button>
                </Link>
              </Grid>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </Grid>
      </Grid>

      <Grid item md={12} xs={12} sx={{ mt: 3 }}>
        <BasicTabs />
      </Grid>
    </Box>
  );
};

export default PackPage;
