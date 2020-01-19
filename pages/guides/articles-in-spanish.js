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

const ArticlesInSpanish = props => (
  <React.Fragment>
    <Head>
      <title>Articles In Spanish | CXC Spanish Guide</title>
      <meta
        name="description"
        content="Lean more about the different types of articles in Spanish."
      />
      <meta
        name="subject"
        content="Lean more about the different types of articles in Spanish."
      />
      <meta name="og:title" content="Articles In Spanish | CXC Spanish Guide" />
      <meta name="og:type" content="article" />
      <meta
        name="og:description"
        content="Lean more about the different types of articles in Spanish."
      />
      <meta name="og:site_name" content="CXC Spanish Online" />
      <meta
        name="topic"
        content="Lean more about the different types of articles in Spanish."
      />
      <meta
        name="summary"
        content="Lean more about the different types of articles in Spanish."
      />
      <meta
        name="url"
        content="http://www.cxcspanish.com/guides/articles-in-spanish"
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
          <BreadcrumbItem active></BreadcrumbItem>
        </Breadcrumb>
        <GuideLayout>...</GuideLayout>
      </Container>
    </Layout>
  </React.Fragment>
);

export default ArticlesInSpanish;
