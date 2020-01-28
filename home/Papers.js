import {
  Container,
  Row,
  Col,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";
import LazyLoad from "react-lazyload";
import Img from "react-image";

const Papers = props => (
  <LazyLoad>
    <div>
      <br />
      <Row>
        <Col sm={2} md={2} lg={2} xl={2}>
          <br className="d-sm-none" />
          <a
            href="https://drive.google.com/file/d/19LPNYdP053Ve3WRtHezISV3M3R-susHK/view"
            taget="_blank"
          >
            <Img
              style={{ width: "100%", height: "100%" }}
              src="https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482630_4.jpg"
            />
          </a>
        </Col>
        <Col sm={2} md={2} lg={2} xl={2}>
          <br className="d-sm-none" />
          <a href="" taget="_blank">
            <Img
              style={{ width: "100%" }}
              src="https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482456_25.jpg"
            />
          </a>
        </Col>
        <Col sm={2} md={2} lg={2} xl={2}>
          <br className="d-sm-none" />
          <a href="" taget="_blank">
            <Img
              style={{ width: "100%" }}
              src="https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230481831_23.jpg"
            />
          </a>
        </Col>
        <Col sm={2} md={2} lg={2} xl={2}>
          <br className="d-sm-none" />
          <a href="" taget="_blank">
            <Img
              style={{ width: "100%" }}
              src="https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482876_3.jpg"
            />
          </a>
        </Col>
        <Col sm={2} md={2} lg={2} xl={2}>
          <br className="d-sm-none" />
          <a href="" taget="_blank">
            <Img
              style={{ width: "100%" }}
              src="https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482678_3.jpg"
            />
          </a>
        </Col>
        <Col sm={2} md={2} lg={2} xl={2}>
          <br className="d-sm-none" />
          <a href="" taget="_blank">
            <Img
              style={{ width: "100%" }}
              src="https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482494_3.jpg"
            />
          </a>
        </Col>
      </Row>
    </div>
  </LazyLoad>
);

export default Papers;
