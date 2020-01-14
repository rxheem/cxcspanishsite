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

// Layout
import Layout from "../components/Layout";
import StoryLayout from "./stories/StoryLayout";
import SEO from "react-seo-component";

const ShortStories = props => (
  <Layout>
    <SEO
      title="Short Stories | CXC Spanish Guide"
      description={""}
      image={""}
      pathname={"https://www.cxcspanish.com/short-stories"}
      siteLanguage={"en"}
      siteLocale={""}
      twitterUsername={"_rxheem"}
    />
    <Container>
      <Breadcrumb>
        <BreadcrumbItem active>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Short Stories</BreadcrumbItem>
      </Breadcrumb>
      <StoryLayout isArticle={false}></StoryLayout>
    </Container>
  </Layout>
);

export default ShortStories;
