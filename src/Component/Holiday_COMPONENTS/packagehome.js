import React, { useEffect, useState } from "react";
import {
  FaHotel,
  FaBusAlt,
  FaPlaneDeparture,
  FaCameraRetro,
  FaListUl,
} from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { BsGrid3X3Gap } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Rating,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Slider from "rc-slider";
import Tooltip from "rc-tooltip";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap_white.css";
import { FaRupeeSign } from "react-icons/fa";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    success: {
      light: "#76ff03",
      main: "#00e676",
      dark: "#b2ff59",
      solid: "#F0F0F0",
      contrastText: "#FFA732",
    },
  },
});

const PackageHome = () => {
  const [open, setOpen] = React.useState(false);

  const [viewType, setViewType] = useState("list");
  const [price, setPrice] = useState([1, 100000]);
  const [duration, setDuration] = useState([1, 50]);
  const [Cities, setCities] = useState([1, 20]);

  const { destinationName } = useParams();

  console.log("destinationName", destinationName);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const baseUrl = "https://tripapi.bloomitsolutions.in";

  const [originalData, setOriginalData] = useState([]);
  const [tourPackage1, setTourPackage1] = useState([]);

  const getEmp = () => {
    axios
      .get("https://tripapi.bloomitsolutions.in/v1/tours/getallPackage")
      .then((response) => {
        console.log("API Response:", response.data);
        setTourPackage1(response.data.reverse());
        setOriginalData(response.data.reverse());
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  };

  useEffect(() => {
    getEmp();
    window.scrollTo(0, 0);
  }, [1]);

  const switchToGridView = () => {
    setViewType("grid");
  };

  const switchToListView = () => {
    setViewType("list");
  };

  useEffect(() => {
    if (destinationName && Array.isArray(originalData)) {
      console.log("name", destinationName);
      const foundPackage = originalData.find(
        (res) => res.destinationCategory.destinationName === destinationName
      );

      if (foundPackage) {
        setTourPackage1([foundPackage]);
        console.log("res", tourPackage1);
      }
    }
  }, [destinationName, originalData]);

  const [DomesticCategory, setDomesticDestinations] = useState([]);

  const [InternationalCategory, setInternationalDestinations] = useState([]);

  const getCategory = async () => {
    try {
      const response = await axios.get(
        "https://tripapi.bloomitsolutions.in/v1/auth/destinationCategories"
      );

      const domesticDestinations = response.data.filter(
        (item) => item.categoryName === "Domestic"
      );
      const internationalDestinations = response.data.filter(
        (item) => item.categoryName === "International"
      );

      setDomesticDestinations(domesticDestinations);
      setInternationalDestinations(internationalDestinations);

      console.log("Domestic Destinations:", domesticDestinations);
      console.log("International Destinations:", internationalDestinations);

      console.log("Category data:", response.data);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    getCategory();
  }, [1]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <section>
          <React.Fragment>
            <Dialog
              open={open}
              onClose={handleClose}
              fullWidth
              maxWidth="md" // Adjust the maxWidth as needed
            >
              <DialogTitle>
                <Typography variant="h5" align="center">
                  Quick Enquire
                </Typography>
              </DialogTitle>

              <DialogContent>
                <Grid container></Grid>
              </DialogContent>

              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>

          <Grid container justifyContent="space-between" alignItems="center">
            {/* <Grid item xs={12} md={12} mt={3} align="center">
              <Typography variant="h6" align="center">
                <b>
                  <span style={{ color: "#F11A7B", textAlign: "center" }}>
                    {tourPackage1.length}
                  </span>{" "}
                  Holiday Packages
                </b>
                <Rating name="read-only" value={5} readOnly />
                <span>
                  <a href="">(208 Reviews)</a>
                </span>
              </Typography>
              <Typography variant="body2">
                Showing 1-5 packages from 5 packages
              </Typography>
            </Grid> */}

            <Grid item xs={12} md={10} mt={1} align="end">
              <Button
                className="btn1 p-2 ml-5 m-3 border-0 bg-white text-info rounded "
                onClick={switchToListView}
              >
                <FaListUl className="text-info " /> List
              </Button>
              <Button
                className="btn1 p-2 border-0 rounded bg-white text-info"
                onClick={switchToGridView}
              >
                <BsGrid3X3Gap /> Grid
              </Button>
            </Grid>
          </Grid>

          <div className="container-fluid mt-3">
            <div className="row">
              <div className="col-lg-3  ">
                <Grid item xs={12} md={12} my={3} align="center">
                  <Typography variant="h6" align="center">
                    <b>
                      <span style={{ color: "#F11A7B", textAlign: "center" }}>
                        {tourPackage1.length}
                      </span>{" "}
                      Holiday Packages
                    </b>
                    <Rating name="read-only" value={5} readOnly />
                    <span>
                      <a href="">(208 Reviews)</a>
                    </span>
                  </Typography>
                  <Typography variant="body2">
                    Showing 1-5 packages from 5 packages
                  </Typography>
                </Grid>

                <Grid
                  sx={{ border: "1px solid #EEF5FF" }}
                  className="p-5"
                  my={2}
                >
                  <div style={{ width: "100%" }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                      Price Range
                    </Typography>

                    <Slider
                      style={{ maxWidth: "100%", fontWeight: "bold" }}
                      range={true}
                      marks={{
                        1: "Rs.1",
                        100000: "Rs.100000",
                      }}
                      min={1}
                      max={100000}
                      defaultValue={[1, 100000]}
                      onAfterChange={(values) => {
                        setPrice(values);
                        const [minPrice, maxPrice] = values;

                        if (minPrice === 1 && maxPrice === 100000) {
                          setTourPackage1([...originalData]);
                        } else {
                          const filteredPackages = originalData.filter(
                            (Package) =>
                              Package.price >= minPrice &&
                              Package.price <= maxPrice
                          );
                          setTourPackage1(filteredPackages);
                        }
                      }}
                      handleRender={(renderProps) => {
                        return (
                          <Tooltip
                            overlay={`${renderProps.props["aria-valuenow"]}`}
                          >
                            <div {...renderProps.props}></div>
                          </Tooltip>
                        );
                      }}
                    />
                  </div>
                </Grid>

                <Grid sx={{ border: "1px solid #EEF5FF" }} className="p-5">
                  <div style={{ width: "100%" }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                      Tour Duration
                    </Typography>

                    <Slider
                      style={{ width: "100%", fontWeight: "bold" }}
                      marks={{
                        1: "1 day",
                        50: "50 days",
                      }}
                      min={1}
                      max={50}
                      range={true}
                      defaultValue={[1, 50]}
                      onAfterChange={(values) => {
                        setDuration(values);
                        const [minDuration, maxDuration] = values;

                        if (minDuration === 1 && maxDuration === 50) {
                          setTourPackage1([...originalData]);
                        } else {
                          const filteredPackages = originalData.filter(
                            (Package) =>
                              Package.totalDaysofTrip >= minDuration &&
                              Package.totalDaysofTrip <= maxDuration
                          );
                          setTourPackage1(filteredPackages);
                        }
                      }}
                      handleRender={(renderProps) => {
                        return (
                          <Tooltip
                            overlay={`${renderProps.props["aria-valuenow"]} days`}
                          >
                            <div {...renderProps.props}></div>
                          </Tooltip>
                        );
                      }}
                    />
                  </div>
                </Grid>

                <Grid sx={{ border: "1px solid #EEF5FF" }} className="p-5" my={2}>
                  <div style={{ width: "100%" }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                      Total Cities
                    </Typography>

                    <Slider
                      style={{ width: "100%", fontWeight: "bold" }}
                      marks={{
                        1: "1 City",
                        20: "20 Cities",
                      }}
                      min={1}
                      max={20}
                      range={true}
                      defaultValue={[1, 20]}
                      onAfterChange={(values) => {
                        setCities(values);
                        const [minCities, maxCities] = values;

                        if (minCities === 1 && maxCities === 20) {
                          setTourPackage1([...originalData]);
                        } else {
                          const filteredPackages = originalData.filter(
                            (Package) =>
                              Package.totalcitys >= minCities &&
                              Package.totalcitys <= maxCities
                          );
                          setTourPackage1(filteredPackages);
                        }
                      }}
                      handleRender={(renderProps) => {
                        return (
                          <Tooltip
                            overlay={`${renderProps.props["aria-valuenow"]} days`}
                          >
                            <div {...renderProps.props}></div>
                          </Tooltip>
                        );
                      }}
                    />
                  </div>
                </Grid>

                <Grid sx={{ border: "1px solid #EEF5FF" }} className="p-5" my={1}>
                  <div style={{ width: "100%" }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                      Destinations Filter
                    </Typography>

                    {InternationalCategory.map((Categories, index) => (
                      <div key={index}>
                        <Link
                          to={`/packagehome/${Categories.destinationName}`}
                          style={{
                            // textDecoration: "none",
                            color: "inherit",
                            display: "block",
                            marginBottom: 10, 
                          }}
                        >
                          <Typography variant="subtitle1">
                            {Categories.destinationName}
                          </Typography>{" "}
                        </Link>
                      </div>
                    ))}

                    {DomesticCategory.map((Categories, index) => (
                      <div key={index}>
                        <Link
                          to={`/packagehome/${Categories.destinationName}`}
                          style={{
                            // textDecoration: "none",
                            color: "inherit",
                            display: "block",
                            marginBottom: 10,
                          }}
                        >
                          <Typography variant="subtitle1">
                            {Categories.destinationName}
                          </Typography>{" "}
                        </Link>
                      </div>
                    ))}
                  </div>
                </Grid>
              </div>

              <div className="col-lg-9 mb-3">
                <Grid container spacing={2}>
                  {tourPackage1.map((tour, index) => (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      md={viewType === "grid" ? 6 : 12}
                    >
                      <Paper elevation={3} className="p-2">
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={viewType === "grid" ? 6 : 5}>
                            <Link to={`/packages/${tour.id}/${tour.slug}`}>
                              <img
                                src={`${baseUrl}/${tour.image}`}
                                alt={tour.title}
                                width="100%"
                                height={viewType === "grid" ? "300px" : "300px"}
                                className="rounded"
                              />
                            </Link>
                          </Grid>
                          {viewType === "grid" ? (
                            <Grid item xs={12} md={6} align="center">
                              <div>
                                <Typography
                                  variant="subtitle1"
                                  className="paragh text-danger"
                                  fontWeight={"bold"}
                                >
                                  {tour.subtitle}
                                </Typography>
                                <Typography variant="h6">
                                  {tour.title}
                                </Typography>

                                <br />

                                <Typography variant="p" fontWeight="bold">
                                  {tour.superDealPrice}
                                </Typography>

                                {"  "}

                                <Typography
                                  variant="h6"
                                  sx={{
                                    color: theme.palette.primary.dark,
                                    my: 2,
                                  }}
                                >
                                  <span
                                    style={{
                                      padding: "3%",
                                      border: "2px solid #0000",
                                      borderRadius: "50%",
                                      backgroundColor: "#EEF5FF",
                                    }}
                                  >
                                    <FaHotel className="display-7" />
                                  </span>
                                  {"    "}{" "}
                                  <span
                                    style={{
                                      padding: "3%",
                                      border: "2px solid #0000",
                                      borderRadius: "50%",
                                      backgroundColor: "#EEF5FF",
                                    }}
                                  >
                                    <ImSpoonKnife />
                                  </span>{" "}
                                  {"   "}{" "}
                                  <span
                                    style={{
                                      padding: "3%",
                                      border: "2px solid #0000",
                                      borderRadius: "50%",
                                      backgroundColor: "#EEF5FF",
                                    }}
                                  >
                                    <FaBusAlt />
                                  </span>{" "}
                                  <span
                                    style={{
                                      padding: "3%",
                                      border: "2px solid #0000",
                                      borderRadius: "50%",
                                      backgroundColor: "#EEF5FF",
                                    }}
                                  >
                                    <FaPlaneDeparture />
                                  </span>{" "}
                                  <span
                                    style={{
                                      padding: "3%",
                                      border: "2px solid #0000",
                                      borderRadius: "50%",
                                      backgroundColor: "#EEF5FF",
                                    }}
                                  >
                                    <FaCameraRetro />
                                  </span>{" "}
                                </Typography>

                                {/* <ButtonGroup
                                  variant="contained"
                                  aria-label="outlined primary button group"
                                  sx={{ mt: 3 }}
                                > */}
                                <Link to={`/packages/${tour.id}/${tour.slug}`}>
                                  <Button variant="contained" sx={{ my: 1 }}>
                                    View Details
                                  </Button>
                                </Link>
                                <br />
                                <Link to="/Contactus">
                                  {" "}
                                  <Button variant="contained">
                                    Quick Enquire
                                  </Button>
                                </Link>
                                {/* </ButtonGroup> */}
                              </div>
                            </Grid>
                          ) : viewType === "list" ? (
                            <Grid item xs={12} md={7}>
                              <Grid item md={10} xs={12}>
                                <div className="row">
                                  <div className="col-lg-8 col-sm-12">
                                    <Typography
                                      variant="subtitle1"
                                      className="paragh text-danger"
                                      fontWeight={"bold"}
                                      sx={{ mt: 1 }}
                                    >
                                      {tour.subtitle}
                                    </Typography>
                                    <Typography
                                      variant="h5"
                                      fontWeight="bold"
                                      sx={{ mt: 1 }}
                                    >
                                      {tour.title}
                                    </Typography>
                                    <Typography
                                      variant="h5"
                                      fontWeight="bold"
                                      sx={{ mt: 1 }}
                                    >
                                      {tour.travel}
                                    </Typography>
                                    <Typography
                                      variant="h6"
                                      sx={{
                                        color: theme.palette.primary.dark,
                                        my: 4,
                                      }}
                                    >
                                      <span
                                        style={{
                                          padding: "3%",
                                          border: "2px solid #0000",
                                          borderRadius: "50%",
                                          backgroundColor: "#EEF5FF",
                                        }}
                                      >
                                        <FaHotel className="display-7" />
                                      </span>
                                      {"    "}{" "}
                                      <span
                                        style={{
                                          padding: "3%",
                                          border: "2px solid #0000",
                                          borderRadius: "50%",
                                          backgroundColor: "#EEF5FF",
                                        }}
                                      >
                                        <ImSpoonKnife />
                                      </span>{" "}
                                      {"   "}{" "}
                                      <span
                                        style={{
                                          padding: "3%",
                                          border: "2px solid #0000",
                                          borderRadius: "50%",
                                          backgroundColor: "#EEF5FF",
                                        }}
                                      >
                                        <FaBusAlt />
                                      </span>{" "}
                                      <span
                                        style={{
                                          padding: "3%",
                                          border: "2px solid #0000",
                                          borderRadius: "50%",
                                          backgroundColor: "#EEF5FF",
                                        }}
                                      >
                                        <FaPlaneDeparture />
                                      </span>{" "}
                                      <span
                                        style={{
                                          padding: "3%",
                                          border: "2px solid #0000",
                                          borderRadius: "50%",
                                          backgroundColor: "#EEF5FF",
                                        }}
                                      >
                                        <FaCameraRetro />
                                      </span>{" "}
                                    </Typography>
                                  </div>

                                  <div className="col-lg-4">
                                    <Typography
                                      sx={{
                                        color:
                                          theme.palette.secondary.contrastText,
                                        fontSize: "18px",
                                        bgcolor: theme.palette.success.solid,
                                        py: 1,
                                        borderRadius: "8px",
                                        px: 3,
                                        fontWeight: "bold",
                                      }}
                                      my={1}
                                    >
                                      Rs. <FaRupeeSign />
                                      {"       "}
                                      {tour.price}
                                    </Typography>

                                    <Typography variant="h6" my={1}>
                                      Total Cities:
                                      <span>{tour.totalcitys}</span>
                                    </Typography>

                                    <div my={1}>
                                      <Link
                                        to={`/packages/${tour.id}/${tour.slug}`}
                                      >
                                        <Button
                                          variant="contained"
                                          sx={{ my: 1 }}
                                        >
                                          View Details
                                        </Button>
                                      </Link>{" "}
                                      <br />
                                      <Link to="/Contactus">
                                        {" "}
                                        <Button variant="contained">
                                          Quick Enquire
                                        </Button>
                                      </Link>
                                    </div>
                                  </div>
                                </div>

                                {"  "}
                              </Grid>
                            </Grid>
                          ) : null}

                          <Grid item xs={12} md={viewType === "grid" ? 12 : 12}>
                            <Typography
                              variant="body1"
                              align={"justify"}
                              mx={1}
                            >
                              {tour.description}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
};

export default PackageHome;
