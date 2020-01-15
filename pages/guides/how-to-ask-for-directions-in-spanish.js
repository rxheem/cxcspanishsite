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

const HowToAskForDirectionsInSpanish = props => (
  <React.Fragment>
    <SEO
      title="How To Ask For Directions In Spanish | CXC Spanish Guide"
      description={
        "Learn how to ask for directions in Spanish in cast you've gotten lost or need to find your way around."
      }
      image={""}
      pathname={
        "https://www.cxcspanish.com/guides/how-to-ask-for-directions-in-spanish"
      }
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
          <BreadcrumbItem active>
            How To Ask For Directions In Spanish
          </BreadcrumbItem>
        </Breadcrumb>
        <GuideLayout>...</GuideLayout>
      </Container>
    </Layout>
  </React.Fragment>
);

export default HowToAskForDirectionsInSpanish;
