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

const HomeAndFamily = props => (
  <Layout>
    <SEO
      title={"Home And Family - Oral Practice | CXC Spanish Online"}
      pathname={"https://www.cxcspnish/mailing-list"}
      description={
        "Practice talking about your home and family in Spanish. Practice speaking with our CXC Spanish online guide."
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
        <BreadcrumbItem active>Home and Family</BreadcrumbItem>
      </Breadcrumb>

      <OralsLayout>
        <Card>
          <CardBody>
            <CardTitle>Home and Family</CardTitle>

            <br />
            <p></p>
          </CardBody>
        </Card>
      </OralsLayout>
    </Container>
  </Layout>
);

export default HomeAndFamily;
