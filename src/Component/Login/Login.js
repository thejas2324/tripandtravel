import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate, useLocation } from "react-router";

const Login = () => {
  const location = useLocation();
  const { loading, signIn } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    phone: "",
    otp: "",
  });
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [resendOtpDisabled, setResendOtpDisabled] = useState(false);
  const [resendOtpCountdown, setResendOtpCountdown] = useState(30);
  let redirectPath = location.state?.from?.pathname || "/";
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };
  

  useEffect(() => {
    let countdownTimer;

    if (resendOtpDisabled) {
      countdownTimer = setInterval(() => {
        setResendOtpCountdown((prevCount) => prevCount - 1);

        if (resendOtpCountdown === 1) {
          setResendOtpDisabled(false);
          clearInterval(countdownTimer);
        }
      }, 1000);
    }

    return () => {
      clearInterval(countdownTimer);
    };

    window.scrollTo(0, 0);
  }, [resendOtpDisabled, resendOtpCountdown]);



  const handleOtpButtonClick = async (e) => {
    e.preventDefault();

    try {
      const otpResponse = await axios.post(
        "https://tripapi.bloomitsolutions.in/v1/auth/login",
        { phone: userData.phone }
      );

      if (otpResponse.status === 201) {
        setShowOtpSection(true);
        setResendOtpDisabled(true);
        setResendOtpCountdown(30);
        Swal.fire("Success", otpResponse?.data.message, "success");
      }
    } catch (error) {
      setShowOtpSection(false);
      Swal.fire("Error", error?.response?.data.message, "error");
    }
  };

  const handleResendOtp = async () => {
    try {
      const otpResponse = await axios.post(
        "https://tripapi.bloomitsolutions.in/v1/auth/login",
        { phone: userData.phone }
      );

      if (otpResponse.status === 201) {
        setResendOtpDisabled(true);
        setResendOtpCountdown(30);
        Swal.fire("Success", otpResponse?.data.message, "success");
      }
    } catch (error) {
      Swal.fire("Error", error?.response?.data.message, "error");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://tripapi.bloomitsolutions.in/v1/auth/otpVerification",
        userData
      );

      if (response.status === 200) {

         // Store user information in local storage
        localStorage.setItem("user", JSON.stringify(response?.data?.existingCustomer));

        signIn(response?.data?.existingCustomer);
        navigate(redirectPath, { replace: true });
        Swal.fire("Success", response?.data?.message, "success");
      }
    } catch (error) {
      setShowOtpSection(false);
      Swal.fire("Error", error?.response?.data.message, "error");
    }
  };

  return (
    <section className="login-section ">
      <div className="container mt-3 mb-3">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="card p-4">
              <h2 className="text-center mb-4">Trip or Travel</h2>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="mobile">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    autoComplete="off"
                    onChange={handleChange}
                    value={userData.phone}
                    placeholder="Enter your mobile number"
                    disabled={showOtpSection}
                    required
                  />
                </Form.Group>
                {!showOtpSection ? (
                  <Button
                    className="btn-primary btn-block mt-3"
                    type="submit"
                    onClick={handleOtpButtonClick}
                  >
                    Get OTP
                  </Button>
                ) : (
                  <>
                    <Form.Group className="mb-3" controlId="otp">
                      <Form.Label>OTP</Form.Label>
                      <Form.Control
                        type="text"
                        name="otp"
                        onChange={handleChange}
                        value={userData.otp}
                        placeholder="Enter the OTP"
                        required
                      />
                    </Form.Group>
                    <Button className="btn-primary btn-block mt-3" type="submit">
                      {loading ? "Logging in..." : "Login"}
                    </Button>
                  </>
                )}
                {showOtpSection && (
                  <div>
                    <Button
                      className="btn-secondary btn-block mt-3"
                      type="button"
                      onClick={handleResendOtp}
                      disabled={resendOtpDisabled}
                    >
                      {resendOtpDisabled
                        ? `Resend OTP (${resendOtpCountdown}s)`
                        : "Resend OTP"}
                    </Button>
                  </div>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
