import { Carousel } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import { Card, CardBody, CardFooter, Button } from "shards-react";

import Img from "react-image";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const HomeCarousel = props => (
  <MobileView>
    <br />
    <Carousel>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src={[
            "https://images.unsplash.com/photo-1532768641073-503a250f9754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
            "https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
            "https://images.unsplash.com/photo-1478369402113-1fd53f17e8b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=724&q=80",
            "https://images.unsplash.com/photo-1500315331616-db4f707c24d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
            "https://images.unsplash.com/photo-1546241126-da278b8ec3ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          ]}
          alt="image of food"
        />
        <Carousel.Caption>
          <h3 style={{ color: "white" }}>
            <b>Ordering Food</b>
          </h3>
          <p style={{ color: "white" }}>
            Learn how to order food and take-out at restaurants in Spanish
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src={[
            "https://images.unsplash.com/photo-1524293568345-75d62c3664f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=708&q=80",
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            "https://images.unsplash.com/photo-1495305379050-64540d6ee95d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          ]}
          alt=""
        />

        <Carousel.Caption>
          <h3 style={{ color: "white" }}>Express Yourself</h3>
          <p style={{ color: "white" }}>
            Build confidence and express yourself in Spanish{" "}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src={[
            "https://images.unsplash.com/photo-1548393488-ae8f117cbc1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=716&q=80",
            "",
            ""
          ]}
          alt=""
        />

        <Carousel.Caption>
          <h3 style={{ color: "white" }}>Studying late at nights?</h3>

          <Button href="/guides/study-tips" theme="light">
            Read our Study Guide
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </MobileView>
);

export default HomeCarousel;
