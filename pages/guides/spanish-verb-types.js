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

const SpanishVerbTypes = props => (
  <React.Fragment>
    <SEO
      title="Spanish Verb Types | CXC Spanish Guide"
      description={
        "Learn all you need to know about the different types of verbs in Spanish."
      }
      image={""}
      pathname={"https://www.cxcspanish.com/guides/"}
      siteLanguage={"en"}
      siteLocale={""}
      article={true}
      publishedDate={new Date()}
      modifiedDate={new Date()}
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
          <BreadcrumbItem active>Spanish Verb Types</BreadcrumbItem>
        </Breadcrumb>
        <GuideLayout>
          <Card>
            <CardBody>
              <CardTitle>Spanish Verb Types</CardTitle>

              <br />
              <p>
                There are several different verb types in Spanish, including
                transitive verbs, intransitive verbs, pronominal verbs,
                reflexive verbs, and reciprocal verbs. It's helpful to know what
                they are and how they're different. Let's get started!
              </p>
            </CardBody>
          </Card>
        </GuideLayout>
      </Container>
    </Layout>
  </React.Fragment>
);

export default SpanishVerbTypes;
