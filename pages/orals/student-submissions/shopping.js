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

const Shopping = props => (
  <Layout>
    <SEO
      title={"Shopping - Student Submissions (Orals) | CXC Spanish Online"}
      pathname={"https://www.cxcspnish/mailing-list"}
      description={
        "Listen to our stdents as they practice speaking about shopping. Practice speaking with our CXC Spanish online guide."
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
          <a href="/orals/student-submissions">Students Submissions</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Shopping</BreadcrumbItem>
      </Breadcrumb>

      <OralsLayout>
        <Card>
          <CardBody>
            <CardTitle>Shopping</CardTitle>

            <br />
            <p></p>
          </CardBody>
        </Card>
      </OralsLayout>
    </Container>
  </Layout>
);

export default Shopping;
