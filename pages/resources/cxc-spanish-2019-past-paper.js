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
import ResourcesLayout from "../../resources-components/ResourcesLayout";

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

const PastPaper2019 = props => (
  <Layout>
    <SEO
      title={"CXC Spanish 2019 Past Paper | CXC Spanish Online"}
      description={
        "Get the CXC Spanish 2019 past paper in PDF format for free, along with the offical past paper booklet"
      }
      pathname={""}
      siteLanguage={"en"}
      twitterUsername={"_rxheem"}
      author={"Raheem McDonald"}
      article={false}
      publishedDate={"Jan 13, 2020"}
      modifiedDate={new Date()}
    />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/">Resources</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>2019 Past Paper</BreadcrumbItem>
      </Breadcrumb>

      <ResourcesLayout>
        <Card>
          <CardBody>
            <CardTitle>CXC Spanish 2019 Past Paper</CardTitle>
            <br />

            <p>
              CXC Spanish Online is a free online study guide for students
              sitting the CXC Spanish exam at the CSEC and CAPE level that aims
              to assist students score higher in class on and pass their exams.
              For more information, please contact on our contact page or read
              our <a href="/faq">Frequently Asked Questions</a>.
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

            <Button href="/past-papers">All Past Papers &rarr;</Button>
          </CardBody>
        </Card>
      </ResourcesLayout>
    </Container>
  </Layout>
);

export default PastPaper2019;
