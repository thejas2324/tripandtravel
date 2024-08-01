import { Box, Grid, Typography, Paper, Button, TextField } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";

import PropTypes from "prop-types";
import { IoPersonCircle } from "react-icons/io5";

import { IoDocumentText } from "react-icons/io5";

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
          <Typography>{children}</Typography>
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

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const { user, loading } = useAuth();
  

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      // Parse the stored user data from JSON
      const parsedUser = JSON.parse(storedUser);
      setEditedUser(parsedUser);
    }
    window.scrollTo(0,0);
  }, []);

  const handleEditClick = () => {
    setIsEditMode(true); // Set edit mode to true
  };

  const handleSaveClick = () => {
    try {
      // Save edited user data to local storage
      localStorage.setItem("user", JSON.stringify(editedUser));
      setIsEditMode(false);
      window.location.reload();
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

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
        <Grid item md={3} xs={12} sx={{ marginTop: "-100px" }} align="center">
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

        <Grid item md={4} xs={12} sx={{ marginTop: "-100px" }}>
          <Paper
            elevation={3}
            sx={{ p: 3, backgroundColor: "#fff", border: "1px solid white" }}
            className="mobileGrid2"
          >
            {isEditMode ? (
              <form>
                <TextField
                  label="Name"
                  fullWidth
                  value={editedUser.name || ""}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, name: e.target.value })
                  }
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Email"
                  fullWidth
                  value={editedUser.email || ""}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, email: e.target.value })
                  }
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Phone Number"
                  fullWidth
                  value={editedUser.phone || ""}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, phone: e.target.value })
                  }
                  sx={{ mb: 2 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSaveClick}
                >
                  Save
                </Button>
              </form>
            ) : (
              <>
                <Typography variant="h5" fontWeight="bold" mt={2}>
                  My Profile
                </Typography>
                <Typography variant="subtitle1" mt={3}>
                  Name:{"    "}
                  {user.name}
                </Typography>
                <Typography variant="subtitle1" mt={3}>
                  Email:{"    "}
                  {user.email}
                </Typography>
                <Typography variant="subtitle1" mt={3}>
                  Phone:{"       "}
                  {user.phone}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleEditClick}
                  sx={{ mt: 2 }}
                >
                  Edit
                </Button>
              </>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
