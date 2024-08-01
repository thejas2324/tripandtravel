import React, { Component } from "react";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import img from "../../ASSETS/IMAGES/corpotate/1.jpg";
import img1 from "../../ASSETS/IMAGES/corpotate/2.jpg";
import img2 from "../../ASSETS/IMAGES/corpotate/3.jpg";
import img3 from "../../ASSETS/IMAGES/corpotate/4.jpg";
import img4 from "../../ASSETS/IMAGES/corpotate/5.jpg";
import img5 from "../../ASSETS/IMAGES/corpotate/6.jpg";
import img6 from "../../ASSETS/IMAGES/corpotate/7.jpg";
import img7 from "../../ASSETS/IMAGES/corpotate/8.jpg";
import img8 from "../../ASSETS/IMAGES/corpotate/9.jpg";
import img9 from "../../ASSETS/IMAGES/corpotate/10.jpg";
import img10 from "../../ASSETS/IMAGES/corpotate/11.jpg";
import img11 from "../../ASSETS/IMAGES/corpotate/12.jpg";
import img12 from "../../ASSETS/IMAGES/corpotate/13.jpg";
import img13 from "../../ASSETS/IMAGES/corpotate/14.jpg";
import img14 from "../../ASSETS/IMAGES/corpotate/15.jpg";

class CorporateTravel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 2000); // Change slide every 2 seconds
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Clear the interval when the component is unmounted
  }

  nextSlide = () => {
    const { activeIndex } = this.state;
    const numImages = 3; // Number of images in the carousel

    this.setState({
      activeIndex: (activeIndex + 1) % numImages,
    });
  };

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { activeIndex } = this.state;

    return (
      <div>
        <div className="">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-pause="false"
            data-bs-keyboard="false"
          >
            <div className="carousel-inner slide-left ">
              <div
                className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}
                data-bs-interval={100}
              >
                <img
                  className="caro d-block w-100"
                  src={img}
                  alt="First slide"
                  height="350px"
                />
              </div>
              <div
                className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}
                data-bs-interval={4000}
              >
                <img
                  className="caro d-block w-100"
                  src={img1}
                  alt="Second slide"
                  height="350px"
                />
              </div>
              <div
                className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}
                data-bs-interval={6000}
              >
                <img
                  className="caro d-block w-100"
                  src={img2}
                  alt="Third slide"
                  height="350px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text and Images */}
        <div className="container  rounded p-5 mb-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <p>Celebrate Life with your team today!</p>
                <h5>India's largest team of tour managers is here for you!</h5>
                <p>
                  Drop your contact by clicking the Enquire Now button below,
                  and the Trips and Travels team will come back with the best
                  travel quote for you. Whether it's meetings, incentives,
                  conferences, exhibitions, off-sites, we are here to ensure
                  that you Celebrate Life with your team, while we handle
                  everything else within India and around the World!
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-container" style={{ marginLeft: "121px" }}>
                <img
                  src="https://img.veenaworld.com/vw-assets/images/corporateImages/corp-about-img.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="container text-center">
            <div className="col">
              <div className="col-lg-12">
                <p className="par p-3">
                  <b>
                    <h5>Incentive Corporate Tours for you and your team!</h5>
                  </b>
                  <h6 className="text-center">
                    After celebrating life with more than 635,000 happy
                    tourists, the travel experts <br></br> at Holidays have
                    ready-made Incentive Tour packages designed for you and your
                    team.
                  </h6>
                </p>
              </div>
              <div className="page-content p-4">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 d-flex">
                          <div className="travel-box flex-fill">
                            <div className="travel-img size">
                              <a href="">
                                <img
                                  className="img-fluid rounded"
                                  alt="travels Info"
                                  src={img7}
                                  style={{ width: "500px", height: "300px" }}
                                />
                              </a>
                            </div>
                            <div className="travel-content pb-0">
                              <h5>
                                <a
                                  href=""
                                  className="text-decoration-none text-secondary"
                                >
                                  Karnataka
                                </a>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex">
                          <div className="travel-box flex-fill">
                            <div className="travel-img">
                              <a href="">
                                <img
                                  className="img-fluid rounded"
                                  alt="travels Info"
                                  src={img8}
                                  style={{ width: "500px", height: "300px" }}
                                />
                              </a>
                            </div>
                            <div className="travel-content pb-0">
                              <h5>
                                <a
                                  href=""
                                  className="text-decoration-none text-secondary"
                                >
                                  Kerala
                                </a>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex">
                          <div className="travel-box flex-fill">
                            <div className="travel-img size">
                              <a href="">
                                <img
                                  className="img-fluid rounded"
                                  alt="travel Info"
                                  src={img9}
                                  style={{ width: "500px", height: "300px" }}
                                />
                              </a>
                            </div>
                            <div className="travel-content pb-0">
                              <h5>
                                <a
                                  href=""
                                  className="text-decoration-none text-secondary"
                                >
                                  Andhra Pradesh
                                </a>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex">
                          <div className="travel-box flex-fill">
                            <div className="travel-img size">
                              <a href="">
                                <img
                                  className="img-fluid rounded"
                                  alt="travels Info"
                                  src={img10}
                                  style={{ width: "500px", height: "300px" }}
                                />
                              </a>
                            </div>
                            <div className="travel-content pb-0">
                              <h5>
                                <a
                                  href="index.html"
                                  className="text-decoration-none text-secondary"
                                >
                                  Andaman and Nicobar
                                </a>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Destinations */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3>Incredible India</h3>
            </div>
          </div>
          <div className="page-content mt-4">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 d-flex">
                      <div className="travel-box flex-fill">
                        <div className="travel-img size">
                          <a href="">
                            <img
                              className="img-fluid rounded"
                              alt="travels Info"
                              src={img3}
                              style={{ width: "500px", height: "300px" }}
                            />
                          </a>
                        </div>
                        <div className="travel-content pb-0">
                          <h5 className="text-center">
                            <a
                              href=""
                              className="text-decoration-none text-secondary text-center"
                            >
                              Tamil Nadu
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex">
                      <div className="travel-box flex-fill">
                        <div className="travel-img">
                          <a href="">
                            <img
                              className="img-fluid rounded"
                              alt="travels Info"
                              src={img4}
                              style={{ width: "500px", height: "300px" }}
                            />
                          </a>
                        </div>
                        <div className="travel-content pb-0">
                          <h5 className="text-center">
                            <a
                              href=""
                              className="text-decoration-none text-secondary"
                            >
                              Telangana
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex">
                      <div className="travel-box flex-fill">
                        <div className="travel-img size">
                          <a href="">
                            <img
                              className="img-fluid rounded"
                              alt="travel Info"
                              src={img5}
                              style={{ width: "500px", height: "300px" }}
                            />
                          </a>
                        </div>
                        <div className="travel-content pb-0">
                          <h5 className="text-center">
                            <a
                              href=""
                              className="text-decoration-none text-secondary"
                            >
                              Karnataka
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex">
                      <div className="travel-box flex-fill">
                        <div className="travel-img size">
                          <a href="">
                            <img
                              className="img-fluid rounded"
                              alt="travels Info"
                              src={img6}
                              style={{ width: "500px", height: "300px" }}
                            />
                          </a>
                        </div>
                        <div className="travel-content pb-0">
                          <h5 className="text-center">
                            <a
                              href="index.html"
                              className="text-decoration-none text-secondary"
                            >
                              Kerela
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container-fluid p-5">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h3>Popular South Indian Holiday Packages</h3>
              </div>
            </div>
          </div>

          <section>
            <div className="container-fluid text-center">
              <div className="row">
                <div className="col-lg-12">
                  <p className="par">
                    Celebrate Life in Incredible India and around the world!
                    <br />
                    Drop your contact, and our team will quickly call you with
                    holiday ideas!
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={this.openModal}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </section>

          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Enquire Modal"
          >
            <h2>Enquire Now</h2>
            <p>Enter your details and our team will get in touch with you.</p>
            <button onClick={this.closeModal}>Close</button>

            <form>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form4Example1">
                  Name
                </label>
                <input
                  type="text"
                  id="form4Example1"
                  name="name"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form4Example2">
                  Email address
                </label>
                <input
                  type="email"
                  id="form4Example2"
                  name="email"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form4Example2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="form4Example2"
                  name="phoneNumber"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-outline mb-4">
                <textarea
                  className="form-control"
                  id="form4Example3"
                  name="message"
                  rows="4"
                  required
                ></textarea>
                <label className="form-label" htmlFor="form4Example3">
                  Message
                </label>
              </div>

              <div className="form-check d-flex justify-content-center mb-4">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  id="form4Example4"
                  name="sendCopy"
                />
                <label className="form-check-label" htmlFor="form4Example4">
                  Send me a copy of this message
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block mb-4 w-100"
              >
                Send
              </button>
            </form>
          </Modal>
        </div>

        <section>
          <div className="container-fluid p-5">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="p-5 mb-4 bg-dark text-white">
                  <div className="col-lg-6 text-left ">
                    <p className="text-left col-lg-8">
                      Come, explore your world with us.
                    </p>
                    <h2>
                      <p className="text-warning bg-dark text-left col-lg-8">
                        Travel. Explore. Celebrate.
                      </p>
                    </h2>
                    <p className="text-left text-justify">
                      635,000+ happy tourists. 750+ team members. 350+ dedicated
                      tour managers. We want to ensure that your team enjoys a
                      trip of a lifetime!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="par text-left">
                  <h6 className="col-lg-4">
                    Empower your team with a memorable trip
                  </h6>
                  <h2 className="col-lg-8 ">
                    MICE Corporate Travel in India and around the World
                  </h2>
                  <h6 className="col-lg-7">
                    The Trip Or Travel team values the experience that you and
                    your team will get over anything else!
                  </h6>
                </p>
              </div>
            </div>
          </div>

          <div className="page-content p-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 d-flex">
                      <div className="travel-box flex-fill">
                        <div className="travel-img size">
                          <a href="">
                            <img
                              className="img-fluid rounded"
                              alt="travels Info"
                              src={img11}
                              style={{ width: "500px", height: "300px" }}
                            />
                          </a>
                        </div>
                        <div className="travel-content pb-0">
                          <h5 className="text-center">
                            <a
                              href=""
                              className="text-decoration-none text-secondary"
                            >
                              Andhra Pradesh
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex">
                      <div className="travel-box flex-fill">
                        <div className="travel-img">
                          <a href="">
                            <img
                              className="img-fluid rounded"
                              alt="travels Info"
                              src={img12}
                              style={{ width: "500px", height: "300px" }}
                            />
                          </a>
                        </div>
                        <div className="travel-content pb-0">
                          <h5 className="text-center">
                            <a
                              href=""
                              className="text-decoration-none text-secondary"
                            >
                              Tamil Nadu
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex">
                      <div className="travel-box flex-fill">
                        <div className="travel-img size">
                          <a href="">
                            <img
                              className="img-fluid rounded"
                              alt="travel Info"
                              src={img13}
                              style={{ width: "500px", height: "300px" }}
                            />
                          </a>
                        </div>
                        <div className="travel-content pb-0">
                          <h5 className="text-center">
                            <a
                              href=""
                              className="text-decoration-none text-secondary"
                            >
                              Andaman and Nicobar
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex">
                      <div className="travel-box flex-fill">
                        <div className="travel-img size">
                          <a href="">
                            <img
                              className="img-fluid rounded"
                              alt="travels Info"
                              src={img14}
                              style={{ width: "500px", height: "300px" }}
                            />
                          </a>
                        </div>
                        <div className="travel-content pb-0">
                          <h5 className="text-center">
                            <a
                              href=""
                              className="text-decoration-none text-secondary"
                            >
                              Telangana
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="par p-1">
            <h5 className="text-center">
              Drop an Enquiry today or call us on <a href="">1800 22 6969</a>
            </h5>
          </p>
        </section>

        <section>
          <div className="container-fluid bg bg-light rounded-3 p-5">
            <div className="row mb-4">
              <div className="col-lg-3 mt-3">
                <h5 className="text-danger">
                  <i className="fa fa-building" aria-hidden="true"></i> Our
                  Offices
                </h5>
                <p>
                  Located across the country, ready to assist in planning &
                  booking your perfect vacation.
                </p>
                <h6 className="text-primary"> Locate Us</h6>
              </div>

              <div className="col-lg-3 mt-3">
                <h5 className="text-danger">
                  <i className="fa fa-phone" aria-hidden="true"></i> Call us
                </h5>
                <p>
                  Located across the country, ready to assist in planning &
                  booking your perfect vacation.
                </p>
                <h6 className="text-primary">7894561220</h6>
              </div>

              <div className="col-lg-3 mt-3 ">
                <h5 className="text-danger">
                  <i className="fa fa-envelope" aria-hidden="true"></i> Write to
                  us
                </h5>
                <p>
                  Located across the country, ready to assist in planning &
                  booking your perfect vacation.
                </p>
                <h6 className="text-primary">sufdh#gmail.com</h6>
              </div>

              <div className="col-lg-3 mt-3 mb-3">
                <h5 className="text-danger">
                  <i className="fa fa-share-alt" aria-hidden="true"></i> Connect
                  with us
                </h5>
                <p>
                  Located across the country, ready to assist in planning &
                  booking your perfect vacation.
                </p>

                <div className="col-lg-12">
                  <a href="/">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="fa-2x mx-2 text-danger"
                    />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="fa-2x mx-2 text-danger"
                    />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="fa-2x mx-2 text-danger"
                    />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="fa-2x mx-2 text-danger"
                    />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon
                      icon={faPinterest}
                      className="fa-2x mx-2 text-danger"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CorporateTravel;
