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

            <br />
            <p>
              Our short stories are designed to helo you to learn phrases, and
              help you practice reading in Spanish.
            </p>

            <ul style={{ marginLeft: "-20px" }}>
              <li>
                <a href="/stories/garbancito">Garbancito</a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="/stories/el-amigo-fiel">El Amigo Fiel</a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="/stories/la-llorana">La Llorona</a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="/stories/estrellita-de-oro">Estrellita de Oro</a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="/stories/la-muneca-menor">La Muñeca Menor</a>
              </li>
            </ul>
          </CardBody>
          <CardHeader></CardHeader>
        </Card>
      </StoryLayout>
    </Container>
  </Layout>
);

export default ShortStories;
