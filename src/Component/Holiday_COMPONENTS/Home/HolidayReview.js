import React from "react";
import Slider from "react-slick";

const reviewsData = [
  {
    name: "Samantha",
    review:
      "Everything went smoothly once again. Will definitely book with you again",
    image:
      "https://mangoholidays.in/assets/fit/TN2/TEMPLE-TOUR-OF-TAMIL-NADU.jpg",
  },
  {
    name: "Lisa",
    review: "Seamless experience with good value. I enjoyed a lot.",
    image:
      "https://www.goodmorninghdloveimages.com/wp-content/uploads/2020/04/Cute-Images-for-DP-8.jpg", // Replace with the actual image URL
  },
  {
    name: "Smitha",
    review:
      "Booking travel was easy, and staff were very helpful. Great that we could pay off the holiday with installments.",
    image:
      "https://www.goodmorninghdloveimages.com/wp-content/uploads/2020/04/Cute-Images-for-DP-8.jpg",
  },
  {
    name: "Smitha",
    review:
      "Booking travel was easy, and staff were very helpful. Great that we could pay off the holiday with installments.",
    image:
      "https://www.goodmorninghdloveimages.com/wp-content/uploads/2020/04/Cute-Images-for-DP-8.jpg",
  },
  {
    name: "Smitha",
    review:
      "Booking travel was easy, and staff were very helpful. Great that we could pay off the holiday with installments.",
    image:
      "https://www.goodmorninghdloveimages.com/wp-content/uploads/2020/04/Cute-Images-for-DP-8.jpg",
  },
  {
    name: "Smitha",
    review:
      "Booking travel was easy, and staff were very helpful. Great that we could pay off the holiday with installments.",
    image:
      "https://www.goodmorninghdloveimages.com/wp-content/uploads/2020/04/Cute-Images-for-DP-8.jpg",
  },
];

const HolidayReview = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div style={{ backgroundColor: "#16283A" }}>
        <h1 className="text-center text-white">Trip or Travel tour reviews</h1>
        <p className="text-center text-white">
          Check out some reviews about our page
        </p>
        <div className="container">
          <div className="row  p-4 rounded align-items-center">
            <Slider {...settings}>
              {reviewsData.map((review, idx) => (
                <div key={idx}>
                  <div className="m-3">
                    <div
                      className="about-img card p-2"
                      style={{ height: "300px" }}
                    >
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          src={review.image}
                          alt={review.name}
                          width={100}
                          className=""
                          style={{
                            alignItems: "center",
                            borderRadius: "50px",
                            objectFit: "fill",
                          }}
                        />
                      </div>
                      <h5 className="text-center ">{review.name}</h5>
                      <p
                        className="text-center"
                        style={{ textAlign: "justify" }}
                      >
                        {review.review}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayReview;
