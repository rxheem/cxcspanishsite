import {
  Container,
  Row,
  Col,
  BreadcrumbItem,
  Breadcrumb,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Alert
} from "shards-react";
import SEO from "react-seo-component";
import Head from "next/head";

import PDFFile from "../../../common/PDFFile";
// Layout
import Layout from "../../../components/Layout";
import ResourcesLayout from "../../../resources-components/ResourcesLayout";

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

import { BrowserView, MobileView } from "react-device-detect";

// Dta for components
const imgSrc =
  "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9781786322128.jpg";
const dlLink =
  "https://dl.dropbox.com/s/eqc4v3bjrk1yh9j/CAPE%20Agricultural%20Science%20Past%20Papers.pdf?dl=0";
const title = "Agricultural Science";

const AgriculturalScience = props => (
  <Layout>
    <SEO
      title={
        "CAPE® Agricultural Science Past Papers eBook | CXC Spanish Online"
      }
      description={
        "Get the CAPE Agricultural Science past papers in PDF format for free, along with the offical past paper booklet."
      }
      pathname={""}
      siteLanguage={"en"}
      twitterUsername={"_rxheem"}
      author={"Raheem McDonald"}
      article={true}
      publishedDate={"February 12, 2020"}
      modifiedDate={new Date()}
    />

    <Container>
      <BrowserView>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/">Resources</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/cape-papers">CAPE</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>{title}</BreadcrumbItem>
        </Breadcrumb>
      </BrowserView>

      <MobileView>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/">...</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/cape-papers">CAPE</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>{title}</BreadcrumbItem>
        </Breadcrumb>
      </MobileView>

      <ResourcesLayout>
        <Card>
          <a href={dlLink}>
            <img
              className="d-md-none card-img"
              style={{ width: "100%" }}
              src={imgSrc}
            />
          </a>
          <CardBody>
            <Row>
              <Col sm={12} md={3}>
                <BrowserView>
                  <a href={dlLink}>
                    <img
                      className="card-img"
                      style={{ width: "100%" }}
                      src={imgSrc}
                    />
                  </a>
                </BrowserView>
              </Col>
              <Col sm={12} md={9}>
                <CardTitle>CAPE {title} Past Papers</CardTitle>
                <br />

                <p>
                  This document includes both Units I and II from May 2005 - May
                  2016. Papers 1 and 032 are also included for both units.
                  January resits are not included.
                </p>
                <PDFFile title="PDF Download" href={dlLink} />
              </Col>
            </Row>

            <br />
            <br />
            <Row>
              <Col sm={6} md={6} lg={6} xl={6}>
                <a href="/past-papers">Get CSEC Papers</a>
              </Col>
              <Col sm={6} md={6} lg={6} xl={6}>
                <a href="/cape-papers">Get CAPE Papers</a>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </ResourcesLayout>
    </Container>
  </Layout>
);

export default AgriculturalScience;
