import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import img from "../../ASSETS/IMAGES/Diverse_Destinations.jpg";

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    password: "",
    Repassword: "",
    username: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://tripapi.bloomitsolutions.in/v1/auth/register",
        userData
      );
      if (response.status === 200) {
        Swal.fire("Success", response.data.message);
        setUserData({
          password: "",
          Repassword: "",
          username: "",
          phone: "",
          email: "",
        });
      }
    } catch (error) {
      Swal.fire("Error", error.response.data.message);
    }
  };

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 mt-4">
            <div className="row">
              <div className="col-lg-6">
                <img src={img} alt="" className="img-fluid" width={"100%"} />
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-4">
                <div className="card border-0 shadow-lg p-3 mb-5">
                  <h3 style={{ color: "#8b75ea", textAlign: "center" }}>
                    Welcome to Trip or Travel
                  </h3>
                  <div className="card-body ">
                    <Form>
                      <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          type="text"
                          name="username"
                          onChange={handleChange}
                          value={userData.username}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="mobile">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="phone"
                          onChange={handleChange}
                          value={userData.phone}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          onChange={handleChange}
                          value={userData.email}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          onChange={handleChange}
                          value={userData.password}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="repassword">
                        <Form.Label>Re-Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="Repassword"
                          onChange={handleChange}
                          value={userData.Repassword}
                          required
                        />
                      </Form.Group>
                      <Button
                        className="mt-4"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Register
                      </Button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
