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

import PDFFile from "../../common/PDFFile";
// Layout
import Layout from "../../components/Layout";
import UsefulEssentials from "../topics/content/ltr-wri/UsefulEssentials";
import Exercises from "../topics/content/ltr-wri/Exercises";

import Head from "next/head";

const PastPaper2016 = props => (
  <Layout>
    <SEO
      title={"CXC Spanish 2016 Past Paper |  CXC Spanish Guide"}
      description={
        "Get the CXC Spanish 2016 past paper in PDF format for free, along with the offical past paper booklet"
      }
      pathname={""}
      siteLanguage={"en"}
      twitterUsername={"_rxheem"}
      author={"CXC Spanish Online"}
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
        <BreadcrumbItem active>2016 Past Paper</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={12} md={8} lg={8} xl={8}>
          <Card>
            <CardBody>
              <CardTitle>CXC Spanish 2016 Past Paper</CardTitle>
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
                href="https://drive.google.com/file/d/19LPNYdP053Ve3WRtHezISV3M3R-susHK/view?usp=sharing"
              />
              <br />
              <br />
              <PDFFile
                title="CAPE Spanish Past Papers"
                href="https://drive.google.com/file/d/1DGTAPLcjmPG21tXmUKa9ZLvLh_IzxAcM/view?usp=sharing"
              />

              <br />
              <br />

              <Button
                target="_blank"
                href="https://drive.google.com/drive/u/2/folders/1zPeCEOLnKcTIo5QewZL7YJsm7u9gsTI4?usp=sharing"
              >
                All Past Papers &rarr;
              </Button>
            </CardBody>
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

export default PastPaper2016;
