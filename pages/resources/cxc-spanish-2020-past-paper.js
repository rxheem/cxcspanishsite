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

import PDFFile from "../../common/PDFFile";
// Layout
import Layout from "../../components/Layout";
import UsefulEssentials from "../topics/content/ltr-wri/UsefulEssentials";
import Exercises from "../topics/content/ltr-wri/Exercises";

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

const PastPaper2020 = props => (
  <Layout>
    <SEO
      title={"2020 Past Paper | CXC Spanish Online"}
      description={
        "Get the CXC Spanish 2020 past paper in PDF format for free, along with the offical past paper booklet"
      }
      pathname={""}
      siteLanguage={"en"}
      twitterUsername={"_rxheem"}
      author={"Raheem McDonald"}
      article={true}
      publishedDate={"Jan 13, 2020"}
      modifiedDate={"Jan 13, 2020"}
    />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/resouce">Resources</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>2020 Past Paper</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={12} md={8} lg={8} xl={8}>
          <Card>
            <CardBody>
              <CardTitle>CXC Spanish 2020 Past Paper</CardTitle>
              <br />

              <p>
                CXC Spanish Online is a free online study guide for students
                sitting the CXC Spanish exam at the CSEC and CAPE level that
                aims to assist students score higher in class on and pass their
                exams. For more information, please contact on our contact page
                or read our <a href="/faq">Frequently Asked Questions</a>.
              </p>

              <PDFFile
                title="CSEC Spanish Past Papers"
                href="https://dl.dropbox.com/s/h76ga6bxhdeex94/CSEC%C2%AE%20Spanish%20Past%20Papers-2_nodrm%20%281%29.pdf?dl=0"
              />
              <br />
              <br />
              <PDFFile
                title="CAPE Spanish Past Papers"
                href="https://dl.dropbox.com/s/bjz288n93t2kein/CAPE%20Spanish%20Past%20Papers.pdf?dl=0"
              />

              <br />
              <br />

              <Button
                target="_blank"
                href="https://www.dropbox.com/sh/0iwksvyxx6hnx8u/AADS2oBLhV7Ouofp9d0fc593a?dl=0"
              >
                All Past Papers &rarr;
              </Button>
            </CardBody>
          </Card>

          <br />
          <Card>
            <span className="border border-light">
              <ul style={ulStyles}>
                <li style={oLiStyles}>
                  <i
                    style={{ color: "#8a3ab9" }}
                    className="fab fa-instagram"
                  />
                  <a
                    className="text-muted"
                    style={{ paddingLeft: "10px" }}
                    href="https://www.instagram.com/cxcspnish"
                    target="_blank"
                  >
                    cxcspanish
                  </a>
                </li>
                <li style={liStyles}>
                  <i
                    style={{ color: " #3b5998" }}
                    className="fab fa-facebook"
                  />
                  <a
                    className="text-muted"
                    style={{ paddingLeft: "10px" }}
                    href=""
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
          </Card>
        </Col>
        <Col sm={4} md={4} lg={4} xl={4}>
          <UsefulEssentials />
          <Exercises />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default PastPaper2020;
