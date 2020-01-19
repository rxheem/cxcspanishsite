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
    <Head>
      <title>How To Ask For Directions In Spanish | CXC Spanish Guide</title>
      <meta name="description" content="" />
      <meta
        name="subject"
        content="How To Ask For Directions In Spanish | CXC Spanish Guide"
      />
      <meta
        name="og:title"
        content="How To Ask For Directions In Spanish | CXC Spanish Guide"
      />
      <meta name="og:type" content="article" />
      <meta
        name="og:description"
        content="Learn how to ask for directions in Spanish in cast you've gotten lost or need to find your way around."
      />
      <meta name="og:site_name" content="CXC Spanish Online" />
      <meta
        name="topic"
        content="How To Ask For Directions In Spanish | CXC Spanish Guide"
      />
      <meta
        name="summary"
        content="Learn how to ask for directions in Spanish in cast you've gotten lost or need to find your way around."
      />
      <meta
        name="url"
        content="http://www.cxcspanish.com/guides/how-to-ask-for-directions-in-spanish"
      />
    </Head>
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
