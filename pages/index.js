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
import SEO from "react-seo-component";
import Popup from "reactjs-popup";

// Common
import PDFFile from "../common/PDFFile";

// Home components
import CardBox from "../home/CardBox";
import HomeCarousel from "../home/HomeCarousel";
import Marketing from "../home/Marketing";
import Papers from "../home/Papers";
import Info from "../home/Info";
import MeetAna from "../home/MeetAna";
import MailingListSubscribe from "../home/MailingListSubscribe";
import QuickSurvey from "../home/QuickSurvey";

// Layout
import Layout from "../components/Layout";
import Message from "../common/Message";

const Index = props => (
  <Layout>
    <SEO
      title="CXC Spanish Online | Guide, Past Papers and Exercises"
      description={
        "CXC Spanish Online is the perfect free online study guide to pass your CXC Spanish exam with syllabus revision, exercises and downloadable resouces."
      }
      image={""}
      pathname={"https://www.cxcspanish.com"}
      siteLanguage={"en"}
      siteLocale={"en"}
      twitterUsername={"cxcspanish"}
    />
    <Container>
      <Breadcrumb>
        <BreadcrumbItem active>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/"></a>
        </BreadcrumbItem>
      </Breadcrumb>

      <br />
      <Marketing />
    </Container>

    <MeetAna />

    <br />
    <br />
    <Container>
      <CardBox />
      <Papers />
    </Container>
  </Layout>
);

export default Index;
