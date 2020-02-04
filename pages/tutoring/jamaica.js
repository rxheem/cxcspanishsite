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

import Layout from "../../components/Layout";

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

const Tutoring = props => (
  <Layout>
    <SEO
      title="Tutoring | CXC Spanish Online"
      description={
        "We offer CXC Spanish classes in Kingston, Jamaica, Trinidad and Tobago, Barnadoes, Montserrat and Belize."
      }
      image={""}
      pathname={"https://www.cxcspanish.com/tutoring/jamaica"}
      siteLanguage={"en"}
      siteLocale={""}
      twitterUsername={"cxcspanish"}
    />
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/tutoring">Tutoring</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Jamaica</BreadcrumbItem>
      </Breadcrumb>
      <Row>
        <Col sm={12} md={8} lg={8}>
          <Card>
            <CardImg
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/510px-Flag_of_Jamaica.svg.png"
              style={{ width: "100%", display: "none" }}
            />
            <CardBody>
              <CardTitle>Jamaica Tutoring</CardTitle>
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
