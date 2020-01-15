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

const AtTheAirport = props => (
  <React.Fragment>
    <SEO
      title="At The Airport | CXC Spanish Guide"
      description={
        "Learn how to communicate with passengers and employees at the airport. Take a deep dive with our onlne study guide."
      }
      image={""}
      pathname={"https://www.cxcspanish.com/guides/at-the-airport"}
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
          <BreadcrumbItem active>At The Airport</BreadcrumbItem>
        </Breadcrumb>
        <GuideLayout>...</GuideLayout>
      </Container>
    </Layout>
  </React.Fragment>
);

export default AtTheAirport;
