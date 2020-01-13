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

// Home components
import HomeCarousel from "../home/HomeCarousel";
import Marketing from "../home/Marketing";
import MailingListSubscribe from "../home/MailingListSubscribe";

// Layout
import Layout from "../components/Layout";
import Message from "../common/Message";

const Index = props => (
  <Layout>
    <Head>
      <title></title>
      <meta
        name="og:title"
        content="CXC Spanish | Guide, Past Papers and Exercises"
      />
      <meta name="og:site_name" content="CXC Spanish Online" />
      <meta name="description" content="" />
    </Head>

    <SEO
      title="CXC Spanish | Guide, Past Papers and Exercises"
      description={
        "CXC Spanish Online is the perfect free online study guide to pass your CXC Spanish exam with syllabus revision, exercises and downloadable resouces."
      }
      image={""}
      pathname={"https://www.cxcspanish.com"}
      siteLanguage={"en"}
      siteLocale={""}
      twitterUsername={"_rxheem"}
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

      <HomeCarousel />
      <br />
      <Marketing />
    </Container>
  </Layout>
);

export default Index;
