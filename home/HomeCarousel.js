import { Carousel } from "react-bootstrap";
import Img from "react-image";

class HomeCarousel extends React.Component {
  render() {
    return (
      <div style={{ display: "none" }}>
        <Carousel>
          <Carousel.Item>
            <Img className="d-block w-100" src={["", "", ""]} alt="" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Img className="d-block w-100" src={["", "", ""]} alt="" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Img className="d-block w-100" src={["", "", ""]} alt="" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default HomeCarousel;