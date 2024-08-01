import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaQuoteLeft } from "react-icons/fa";
import userReview from "./UserReview";
import Img3 from  "../../ASSETS/IMAGES/ava-3.jpg";

import "./Testimonial.css"; // Your existing CSS
import { Typography } from "@mui/material";

const ImprovedTestimonials = () => {
  return (
    <section className="testimonials mt-4">
      <div className="bg-orange-100 p-1">
        <div className="container testimonial-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="testimonial-title">Testimonials</h1>
                <h6 className="testimonial-subtitle">
                  Don't take our word for it. Trust our customers.
                </h6>
              </div>
              <Carousel
                showArrows={false}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={5000}
              >
                {userReview.map((review) => (
                  <div className="testimonial-card" key={review.id}>
                    <div className="user-avatar">
                    <img
                      className="avatar-image"
                      src={Img3}
                      alt={`User ${review.user}`}
                    />
                    </div>
                    <div className="quote-icon-container">
                      <FaQuoteLeft className="quote-icon" />
                    </div>
                    <div className="testimonial-content">
                      <ReviewText review={review.review} />
                      <Typography variant="subtitle1" fontWeight={"bold"} className="user-name">{review.user}</Typography>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewText = ({ review }) => {
  const [showFullReview, setShowFullReview] = useState(false);

  return (
    <div className="text-center">
      {review && review.length > 100 ? (
        showFullReview ? (
          <Typography variant="subtitle1" className="review-text">{review}</Typography>
        ) : (
          <Typography variant="subtitle1" className="review-text">{review.substring(0, 100)}...</Typography>
        )
      ) : (
        <span className="review-text">{review}</span>
      )}
      {review && review.length > 100 && (
        <div className="d-flex justify-content-center mt-2">
          <Typography variant="subtitle1"
            className="text-primary read-more"
            onClick={() => setShowFullReview(!showFullReview)}
          >
            {showFullReview ? "Read Less" : "Read More"}
          </Typography>
        </div>
      )}
    </div>
  );
};


export default ImprovedTestimonials;
