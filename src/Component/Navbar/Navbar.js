import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../ASSETS/IMAGES/Trip_or_Travel_Logo-01.png";
import "../../ASSETS/STYLES/Holiday_style/Main_Navbar.css";
import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

function Navbars() {
  const [showDestinations, setShowDestinations] = useState(false);
  const [showAdditionalSubMenu2, setShowAdditionalSubMenu2] = useState(false);
  const [showAdditionalSubMenu3, setShowAdditionalSubMenu3] = useState(false);

  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  const closeNavbar = () => {
    ScrollTop();
    const navbarToggle = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    if (navbarToggle && navbarCollapse) {
      if (navbarCollapse.classList.contains("show")) {
        navbarToggle.click();
      }
    }
  };
  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional, adds smooth scrolling animation
    });
  };
  const logout = () => {
    localStorage.clear();
    window.location.reload(navigate("/"));
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDestinationsMouseEnter = () => {
    setShowDestinations(true);
  };

  const handleDestinationsMouseLeave = () => {
    setShowDestinations(false);
  };
  const handleAdditionalSubMenuMouseEnter2 = () => {
    setShowAdditionalSubMenu2(true);
  };

  const handleAdditionalSubMenuMouseLeave2 = () => {
    setShowAdditionalSubMenu2(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");

      if (navbar) {
        const isScrolled = window.scrollY > navbar.offsetTop;

        if (isScrolled) {
          navbar.classList.add("fixed");
        } else {
          navbar.classList.remove("fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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


  const handleAdditionalSubMenuMouseEnter3 = () => {
    setShowAdditionalSubMenu3(true);
  };

  const handleAdditionalSubMenuMouseLeave3 = () => {
    setShowAdditionalSubMenu3(false);
  };

  

  return (
    <>
      <Navbar id="navbar" expand="lg" className="navbar-custom ">
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              className="img_fluid"
              alt="React Bootstrap logo"
              style={{ width: "200px", height: "123px" }}
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-Navbar-nav" />

        <Navbar.Collapse className="justify-content-center ml-3">
          <Nav className="ml-auto">
            <div className="Navitem">
              <Nav.Link href="/HoldayHome">Holidays</Nav.Link>
              <Nav.Link href="/CarHome">Cab Booking</Nav.Link>
              <NavDropdown
                title={
                  <>
                    {" "}
                    Destinations <FaAngleDown />
                  </>
                }
                id="basic-nav-dropdown"
                show={showDestinations}
                onMouseEnter={handleDestinationsMouseEnter}
                onMouseLeave={handleDestinationsMouseLeave}
              >
                <div className="dropdown-submenu">
                  {InternationalCategory &&
                    InternationalCategory.length > 0 && (
                      <NavDropdown
                        title="International"
                        id="additional-submenu border-0"
                        show={showAdditionalSubMenu2}
                        onMouseEnter={handleAdditionalSubMenuMouseEnter2}
                        onMouseLeave={handleAdditionalSubMenuMouseLeave2}
                        drop="end"
                      >
                        {InternationalCategory.map((Categories, index) => (
                          <div key={index}>
                            <Nav.Link>
                              <Link
                                to={`/packagehome/${Categories.destinationName}`}
                              >
                                {Categories.destinationName}{" "}
                              </Link>
                            </Nav.Link>
                          </div>
                        ))}
                      </NavDropdown>
                    )}

                  {DomesticCategory && DomesticCategory.length > 0 && (
                    <NavDropdown
                      title="Domestic"
                      id="additional-submenu"
                      show={showAdditionalSubMenu3}
                      onMouseEnter={handleAdditionalSubMenuMouseEnter3}
                      onMouseLeave={handleAdditionalSubMenuMouseLeave3}
                      drop="end"
                    >
                      {DomesticCategory.map((Categories, index) => (
                        <div key={index}>
                          <Nav.Link>
                            <Link
                              to={`/packagehome/${Categories.destinationName}`}
                            >
                              {Categories.destinationName}{" "}
                            </Link>
                          </Nav.Link>
                        </div>
                      ))}
                    </NavDropdown>
                  )}
                </div>
              </NavDropdown>

              <Nav.Link href="/CustomizedHolidays">
                Customized Holidays
              </Nav.Link>
              <Nav.Link href="/CorporateTravel">Corporate Travel</Nav.Link>
              <Nav.Link as={Link} to="/About">
                {" "}
                About
              </Nav.Link>
              <Nav.Link href="/Contactus">Contact Us</Nav.Link>
            </div>
          </Nav>
          <Nav>
            {user !== null ? (
              <>
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <img
                      src="http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
                      width="40px"
                      alt=""
                    />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem>
                      <Link to="/Profile">Profile</Link>
                    </MenuItem>

                    <MenuItem onClick={logout}>Logout</MenuItem>
                  </Menu>
                </div>
              </>
            ) : (
              <>
                <Nav.Link
                  as={Link}
                  to="/Login"
                  className="button-85"
                  onClick={closeNavbar}
                >
                  <Button variant="contained">LogIn</Button>{" "}
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navbars;
