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

const PreteriteVsImperfect = props => (
  <React.Fragment>
    <SEO
      title="Preterite Vs. Imperfect | CXC Spanish Guide"
      description={""}
      image={""}
      pathname={"https://www.cxcspanish.com/guides/preterite-vs-imperfect"}
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
          <BreadcrumbItem active>Preterite Vs. Imperfect</BreadcrumbItem>
        </Breadcrumb>
        <GuideLayout></GuideLayout>
      </Container>
    </Layout>
  </React.Fragment>
);

export default PreteriteVsImperfect;
