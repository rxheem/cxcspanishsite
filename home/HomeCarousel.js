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
    <Carousel>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src={[
            "https://cxc-store.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482371_3.jpg",
            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482494_3.jpg",
            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482234_5.jpg",
            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482784_5.jpg",
            ""
          ]}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src={[
            "https://macmillancaribbeanebooks.com/media/catalog/product/cache/6/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230454071_1_1_1_1_8.jpg"
          ]}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src={[
            "https://macmillancaribbeanebooks.com/media/catalog/product/cache/6/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230454033_1_1_1_1_13.jpg"
          ]}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src={[
            "https://macmillancaribbeanebooks.com/media/catalog/product/cache/6/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230487215_2_1_2_1_4.jpg",
            "",
            ""
          ]}
          alt=""
        />
      </Carousel.Item>

      <Carousel.Item>
        <Img
          className="d-block w-100"
          src={[
            "https://macmillancaribbeanebooks.com/media/catalog/product/cache/6/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230448827_1_1_1_1_13.jpg"
          ]}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src={[
            "https://macmillancaribbeanebooks.com/media/catalog/product/cache/6/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230448858_1_1_1_1_13.jpg",
            "https://macmillancaribbeanebooks.com/media/catalog/product/cache/6/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230448827_1_1_1_1_13.jpg"
          ]}
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  </MobileView>
);

export default HomeCarousel;
