import React from "react";
import Carousel from "react-bootstrap/Carousel";

const carouselData = [
  {
    image:
      "https://www.trawell.in/blog/wp-content/uploads/2017/07/Kumarakom.jpg",
    title: "Image 1",
    subtitle: "Description for Image 1",
  },
  {
    image:
      "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/07/18.jpg",
    title: "Image 2",
    subtitle: "Description for Image 2",
  },
  {
    image: "https://ihplb.b-cdn.net/wp-content/uploads/2017/10/madurai.jpg",
    title: "Image 3",
    subtitle: "Description for Image 3",
  },
];

function CarouselFadeExample() {
  return (
    <Carousel fade>
      {carouselData.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            src={item.image}
            alt={`Image ${index}`}
            width="100%"
            className="rounded"
            height="500px"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselFadeExample;
