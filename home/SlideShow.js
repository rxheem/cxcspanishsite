import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class SlideShow extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: "50%", margin: "auto" }}>
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img
              style={{ height: "100&", width: "100%" }}
              src="https://i.imgur.com/a4rZw7I.png"
            />
          </div>
          <div>
            <img
              style={{ height: "100&", width: "100%" }}
              src="https://i.imgur.com/31t0NX0.png"
            />
          </div>
          <div>
            <img
              style={{ height: "100&", width: "100%" }}
              src="https://i.imgur.com/hO9hsUo.png"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default SlideShow;
