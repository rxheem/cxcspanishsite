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
import StoryLayout from "../story-components/StoryLayout";
import SEO from "react-seo-component";

const ShortStories = props => (
  <Layout>
    <SEO
      title="Short Stories | CXC Spanish Online"
      description={
        "Our short stories are designed to helo you to learn phrases, and help you practice reading in Spanish."
      }
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
      <StoryLayout isArticle={false}>
        <Card>
          <CardBody>
            <CardTitle>Short Stories</CardTitle>
            Nunc quis nisl ac justo elementum sagittis in quis justo.
          </CardBody>
          <CardHeader>Learn More</CardHeader>
        </Card>
      </StoryLayout>
    </Container>
  </Layout>
);

export default ShortStories;
