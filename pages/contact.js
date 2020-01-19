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
import Head from "next/head";
import Collapsible from "react-collapsible";
import SEO from "react-seo-component";

import Layout from "../components/Layout";

// Style for the onft icons
const liStyles = {
  display: "inline!important",
  paddingLeft: "50px"
};

const oLiStyles = {
  display: "inline"
};

const ulStyles = {
  listStyleType: "none",
  paddingTop: "15px"
};

const Index = props => (
  <Layout>
    <SEO
      title="Contact | CXC Spanish Online"
      description={
        "Contact Us. Whether you're a beginner or just looking for some refreshers, we want to express gratitue for letting us be a part of your journey."
      }
      image={""}
      pathname={"https://www.cxcspanish.com/contact"}
      siteLanguage={"en"}
      siteLocale={""}
      twitterUsername={"cxcspanish"}
    />
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Contact</BreadcrumbItem>
      </Breadcrumb>
      <Row>
        <Col sm={12} md={8} lg={8}>
          <Card>
            <CardBody>
              <CardTitle>Contact Us</CardTitle>

              <br />
              <p>
                Whether you're a beginner or just looking for some refreshers,
                we want to express gratitude for letting us be a part of your
                journey.
              </p>

              <p>
                Don't forget to read our <a href="/FAQ">FAQ</a>.
              </p>

              <Row>
                <Col sm={12} md={6} lg={6} xl={6}></Col>
                <Col sm={12} md={6} lg={6} xl={6}></Col>
              </Row>
            </CardBody>
          </Card>

          <span className="border border-light">
            <ul style={ulStyles}>
              <li style={oLiStyles}>
                <i style={{ color: "#8a3ab9" }} className="fab fa-instagram" />
                <a
                  className="text-muted"
                  style={{ paddingLeft: "10px" }}
                  href="https://www.instagram.com/cxcspanish/"
                  target="_blank"
                >
                  cxcspanish
                </a>
              </li>
              <li style={liStyles}>
                <i style={{ color: " #3b5998" }} className="fab fa-facebook" />
                <a
                  className="text-muted"
                  style={{ paddingLeft: "10px" }}
                  href="https://www.facebook.com/cxcspanishguide/"
                  target="_blank"
                >
                  CXC Spanish Gude
                </a>
              </li>
              <li style={liStyles}>
                <i style={{ color: "#00acee" }} className="fab fa-twitter" />
                <a
                  className="text-muted"
                  style={{ paddingLeft: "10px" }}
                  href=""
                  target="_blank"
                >
                  cxcspanish
                </a>
              </li>
            </ul>
          </span>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <br className="d-sm-none" />
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",

              height: "0",
              overflow: "hidden"
            }}
          >
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="600"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=kingston%20jamaica&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
                Kingston, Jamaica
              </div>
              <style>
                {`.mapouter {
                                position: relative;
                                text-align: right;
                                height: 500px;
                                width: 600px;
                              }
                              .gmap_canvas {
                                overflow: hidden;
                                background: none !important;
                                height: 500px;
                                width: 600px;
                              }

                              `}
              </style>
            </div>
          </div>

          <br />
          <Card>
            <CardBody>
              <CardTitle>FAQ</CardTitle>

              <br />

              <ul style={{ marginLeft: "-20px" }}>
                <li>
                  <Collapsible
                    trigger={<a href="">Am I required to sign up?</a>}
                  >
                    <p style={{ paddingTop: "10px" }}>
                      No, no sign up is required.
                    </p>
                  </Collapsible>
                </li>
                <li style={{ paddingTop: "15px" }}>
                  <Collapsible trigger={<a href="">Are the courses free?</a>}>
                    <p style={{ paddingTop: "10px" }}>
                      Yes, all the online courses and materials are free.
                    </p>
                  </Collapsible>
                </li>
                <li style={{ paddingTop: "15px" }}>
                  <Collapsible
                    trigger={
                      <a href="">Will it be helping me with my orals?</a>
                    }
                  >
                    <p style={{ paddingTop: "10px" }}>
                      Yes, we will a review of the oral exam, practice exercises
                      and pronunciation and study tips for orals.
                    </p>
                  </Collapsible>
                </li>
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default Index;
