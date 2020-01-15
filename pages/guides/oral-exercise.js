import {
  Container,
  BreadcrumbItem,
  Row,
  Col,
  Breadcrumb,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Form,
  FormInput,
  FormGroup
} from "shards-react";
import Head from "next/head";
import SEO from "react-seo-component";

// Layout
import Layout from "../../components/Layout";
import GuideLayout from "../../guide-components/GuideLayout";

const OralExercise = props => (
  <React.Fragment>
    <SEO
      title="Oral Exercise | CXC Spanish Guide"
      description={
        "Practice these oral exercise in front fo the mirror or with your friends."
      }
      image={""}
      pathname={"https://www.cxcspanish.com/guides/oral-exercise"}
      siteLanguage={"en"}
      siteLocale={""}
      twitterUsername={"_rxheem"}
    />
    <Layout>
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/guide">Guides</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Oral Exercise</BreadcrumbItem>
        </Breadcrumb>
        <GuideLayout>...</GuideLayout>
      </Container>
    </Layout>
  </React.Fragment>
);

export default OralExercise;
