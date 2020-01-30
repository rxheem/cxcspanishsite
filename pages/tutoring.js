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
import Img from "react-image";
import { BrowserView, MobileView } from "react-device-detect";

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

const fecha = "February";

const Tutoring = props => (
  <Layout>
    <SEO
      title="Tutoring | CXC Spanish Online"
      description={
        "We offer CXC Spanish classes in Kingston, Jamaica, Trinidad and Tobago, Barnadoes, Montserrat and Belize."
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
        <BreadcrumbItem active>Tutoring</BreadcrumbItem>
      </Breadcrumb>
      <Row>
        <Col sm={12} md={8} lg={8}>
          <Card>
            <CardBody>
              <CardTitle>Tutoring</CardTitle>
              <br />

              <p>
                We will beginng our extra classes in {fecha}. Our classes are
                designed to help you master the basics in Spanish, and will be a
                complete review of everything that you did in class and more.
              </p>

              <p>Select your country to learn more.</p>

              <ul style={{ marginLeft: "-15px" }}>
                <li>
                  <Collapsible trigger={<a href="">Jamaica</a>}>
                    <br />
                    <p></p>
                  </Collapsible>
                </li>
                <br />
                <li>
                  <Collapsible trigger={<a href="">Trinidad & Tobago</a>}>
                    <br />
                    <p></p>
                  </Collapsible>
                </li>
                <br />
                <li>
                  <Collapsible trigger={<a href="">Montserrat</a>}>
                    <br />
                    <p></p>
                  </Collapsible>
                </li>
                <br />
                <li>
                  <Collapsible trigger={<a href="">Belize</a>}>
                    <br />
                    <p></p>
                  </Collapsible>
                </li>
                <br />
                <li>
                  <Collapsible trigger={<a href="">Barbadoes</a>}>
                    <br />
                    <p></p>
                  </Collapsible>
                </li>
                <br />
                <li>
                  <Collapsible
                    trigger={<a href="">St. Vincent & Grenadines</a>}
                  >
                    <br />
                    <p></p>
                  </Collapsible>
                </li>
                <br />
                <li>
                  <Collapsible trigger={<a href="">Dominica</a>}>
                    <br />
                    <p></p>
                  </Collapsible>
                </li>
                <br />
                <li>
                  <Collapsible trigger={<a href="">St. Lucia</a>}>
                    <br />
                    <p></p>
                  </Collapsible>
                </li>
                <br />
                <li>
                  <Collapsible trigger={<a href="">Antigue and Barbuda</a>}>
                    <br />
                    <p></p>
                  </Collapsible>
                </li>
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4}></Col>
      </Row>
    </Container>
    <br />
  </Layout>
);

export default Tutoring;
