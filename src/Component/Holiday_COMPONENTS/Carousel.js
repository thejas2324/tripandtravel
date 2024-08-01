import Carousel from "react-bootstrap/Carousel";
import photo1 from "../../ASSETS/IMAGES/Banner/banner6.jpg";
import photo4 from "../../ASSETS/IMAGES/Banner/banner2.jpg";
import photo2 from "../../ASSETS/IMAGES/Banner/banner5.jpg";

function CarouselFadeExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={photo4}
          alt="Goa"
         
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={photo1}
          alt="Goa"
         
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={photo2}
          alt="Goa"
         
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      
    </Carousel>
  );
}

export default CarouselFadeExample;
