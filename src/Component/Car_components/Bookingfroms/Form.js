import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import photo1 from "../../../ASSETS/IMAGES/cars-img/cabbanner.jpg";
import photo2 from "../../../ASSETS/IMAGES/cars-img/cabbanner3.jpg";
import photo3 from "../../../ASSETS/IMAGES/cars-img/cabbanner2.jpg";
import photo4 from "../../../ASSETS/IMAGES/cars-img/cabbanner4.jpg";

import OneWay from "./OneWay";
import Roundtrip from "./Roundtrip";
import Local from "./Local";
import Airport from "./Airport";
import { useCab } from "../../AuthContext/CabContext";
import { useNavigate } from "react-router-dom";
const photosData = [photo1, photo2, photo3, photo4];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box sx={{ width: "100%" }}>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const navigate = useNavigate();
  const { cabServices } = useCab();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSubmit = (formData) => {
    cabServices(formData);
    navigate(`/select-cabs/${formData?.tripType}`, { replace: true });
  };
  return (
    <>
      <Carousel>
        {photosData.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              style={{ height: "400px" }}
              className="d-block w-100 img-fluid"
              src={item}
              alt="Carouselimage"
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="row" style={{marginTop:"-200px"}}>
        <div className="col-lg-2"></div>

        <div className="col-lg-8 mt-5">
          <div className="card border-0 " width="70%">
            <div className="card-header ">
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  flexWrap: "wrap",
                  padding: "10px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "background.paper",
                    width: 500,
                    textAlign: "center",
                  }}
                >
                  <AppBar position="static">
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      textColor="inherit"
                      variant="fullWidth"
                      aria-label="full width tabs example"
                      className="bg bg-light text-dark  d-flex flex-wrap "
                      sx={{ background: 'blue' }}
                    >
                      <Tab label="One Way" {...a11yProps(0)} />
                      <Tab label="Round Trip" {...a11yProps(1)} />
                      <Tab label="Local" {...a11yProps(2)} />
                      <Tab label="AirPort" {...a11yProps(3)} />
                    </Tabs>
                  </AppBar>
                </Box>
              </div>

              <div>
                <TabPanel
                  value={value}
                  index={0}
                  dir={theme.direction}
                  width={"100%"}
                >
                  <OneWay onSave={handleSubmit} />{" "}
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <Roundtrip onSave={handleSubmit} />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  <Local onSave={handleSubmit} />
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                  <Airport onSave={handleSubmit} />
                </TabPanel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
