import React from 'react';
import Header from "../Car_components/Header/Header";

function ContactUs() {
  return (
    <>
    <Header />
    <section className="p-4" style={{ backgroundColor: '#eee' }}>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Contact Us</p>
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* <FontAwesomeIcon icon={faUser} size="3x" style={{ paddingTop: '30px', marginRight: '15px' }} /> */}
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                          <input type="text" id="form3Example1c" className="form-control" />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* <FontAwesomeIcon icon={faPhoneSquare} size="2x" style={{ paddingTop: '30px', marginRight: '15px' }} /> */}
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example3c">Phone Number</label>
                          <input type="text" id="form3Example3c" className="form-control" />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* <FontAwesomeIcon icon={faBook} size="2x" style={{ paddingTop: '30px', marginRight: '15px' }} /> */}
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4c">Subject</label>
                          <input type="text" id="form3Example4c" className="form-control" />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* <FontAwesomeIcon icon={faCommenting} size="2x" style={{ paddingTop: '30px', marginRight: '15px' }} /> */}
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4cd">Your Messages</label>
                          <input type="text" id="form3Example4cd" className="form-control" />
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree to all statements in Terms of service
                        </label>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-primary btn-lg">Submit</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="A drawing of the product"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}

export default ContactUs;
