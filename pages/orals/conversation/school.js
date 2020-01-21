import {
  Container,
  Row,
  Col,
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
import SEO from "react-seo-component";
// Layout
import Layout from "../../../components/Layout";
import OralsLayout from "../../../orals-components/OralsLayout";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

console.log(today);

const School = props => (
  <Layout>
    <SEO
      title={"School - Oral Practice | CXC Spanish Online"}
      pathname={"https://www.cxcspnish/mailing-list"}
      description={
        "Learn to talk about school in Spanish. Practice speaking with our CXC Spanish online guide."
      }
      siteLanguage={"en"}
      twitterUsername={"_rxheem"}
      author={"Raheem McDonald"}
      article={true}
      publishedDate={"01/13/2020"}
      modifiedDate={today}
    />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/orals">Orals</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/orals">Conversation</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>School</BreadcrumbItem>
      </Breadcrumb>

      <OralsLayout>
        <Card>
          <CardBody>
            <CardTitle>School</CardTitle>

            <br />
            <p></p>
          </CardBody>
        </Card>
      </OralsLayout>
    </Container>
  </Layout>
);

export default School;
