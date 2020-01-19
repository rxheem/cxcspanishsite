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

const HowToUseGustar = props => (
  <React.Fragment>
    <Head>
      <title>How To Use Gustar | CXC Spanish Guide</title>
      <meta name="description" content="" />
      <meta name="subject" content="How To Use Gustar | CXC Spanish Guide" />
      <meta name="og:title" content="How To Use Gustar | CXC Spanish Guide" />
      <meta name="og:type" content="article" />
      <meta name="og:description" content="" />
      <meta name="og:site_name" content="CXC Spanish Online" />
      <meta name="topic" content="" />
      <meta name="summary" content="" />
      <meta
        name="url"
        content="http://www.cxcspanish.com/guides/how-to-use-gustar"
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
          <BreadcrumbItem active>How To Use Gustar</BreadcrumbItem>
        </Breadcrumb>
        <GuideLayout></GuideLayout>
      </Container>
    </Layout>
  </React.Fragment>
);

export default HowToUseGustar;
