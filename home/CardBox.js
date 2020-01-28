import {
  Container,
  BreadcrumbItem,
  Row,
  Col,
  Breadcrumb,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Form,
  FormInput,
  FormGroup,
  Collapse,
  Alert,
  Badge
} from "shards-react";
import InstagramEmbed from "react-instagram-embed";
import SlideShow from "./SlideShow";
import Surveys from "./Surveys";

import Head from "next/head";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import SEO from "react-seo-component";
import ResourcesLayout from "../resources-components/ResourcesLayout";

// Layout
import Layout from "../components/Layout";
import Img from "react-image";
import Collapsible from "react-collapsible";

// Common
import PDFFile from "../common/PDFFile";

const CardBox = props => (
  <div>
    <br />

    <Row>
      <Col sm={12} md={6} lg={6} xl={6}>
        <Card>
          <CardImg
            style={{ width: "100%" }}
            src="https://static.whatsapp.net/rsrc.php/v3/yO/r/FsWUqRoOsPu.png"
          />
          <CardBody>
            <CardTitle>Join Us on WhatsApp</CardTitle>

            <p>
              Speak with us live, make friends, ask questions, participate in
              our weekly exercises and more.
            </p>

            <ul style={{ marginLeft: "-20px" }}>
              <li>
                <a
                  style={{ paddingRight: "10px" }}
                  href="https://chat.whatsapp.com/EWpufXW93Y5G5V9BlOqgRF"
                  target="_blank"
                >
                  CXC Spanish Online
                </a>
                <Badge pill theme="danger">
                  FULL
                </Badge>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a
                  href="https://chat.whatsapp.com/BurCEr11DKRJyas6VKUc0n"
                  target="_blank"
                >
                  CXC Spanish Online #2
                </a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a
                  href="https://chat.whatsapp.com/J79uO72mCF00vlSV0o6QRv"
                  target="_blank"
                >
                  CXC Spanish Online Jamaica{" "}
                  <span className="text-danger ml-1">
                    (only for Jamaican students)
                  </span>
                </a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="/whatsapp-groups">CXC Spanish Online T&T</a>
              </li>
            </ul>

            <br />
            <Button href="/whatsapp-groups">See full list</Button>
          </CardBody>
        </Card>

        <br />
        <Surveys />
      </Col>
      <Col sm={12} md={6} lg={6} xl={6}></Col>
    </Row>
  </div>
);

export default CardBox;
