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

const PastPaper2015 = props => (
  <Layout>
    <SEO
      title={"CXC Spanish 2015 Exam Paper | CXC Spanish Online"}
      description={
        "Get the CXC Spanish 2015 past paper in PDF format for free, along with the offical past paper booklet"
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
        <BreadcrumbItem active>2015 Past Paper</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={12} md={8} lg={8} xl={8}>
          <Card>
            <CardBody>
              <CardTitle>CXC Spanish 2015 Past Paper</CardTitle>
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
        </Col>
        <Col sm={4} md={4} lg={4} xl={4}>
          <UsefulEssentials />
          <Exercises />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default PastPaper2015;
