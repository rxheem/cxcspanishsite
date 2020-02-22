import {
  Container,
  Row,
  Col,
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
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import Head from "next/head";
import SEO from "react-seo-component";
// Layout
import Layout from "../components/Layout";
import OralsLayout from "../orals-components/OralsLayout";
import Img from "react-image";
import Collapsible from "react-collapsible";

const Orals = props => (
  <Layout>
    <SEO
      title={"Feed | CXC Spanish Online"}
      pathname={"https://www.cxcspnish/mailing-list"}
      description={
        "Feed is where we explore all things Spanish, from the latest trending songs to news and sports."
      }
      siteLanguage={"en"}
      twitterUsername={"_rxheem"}
      author={"Raheem McDonald"}
    />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Feed</BreadcrumbItem>
      </Breadcrumb>
    </Container>
    <Container fluid>
      <Row>
        <Col sm={12} md={4} lg={4} xl={4}>
          ...
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          ...
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          ...
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default Orals;
