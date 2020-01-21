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
import Layout from "../../components/Layout";
import OralsLayout from "../../orals-components/OralsLayout";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

console.log(today);

const StudentSubmissions = props => (
  <Layout>
    <SEO
      title={"Student Submissions - Orals | CXC Spanish Online"}
      description={
        "Our student submissions - where we listen and learn from each other. Listen to our students as they answer some of the most common questions from each category."
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
        <BreadcrumbItem active>Student Submissions</BreadcrumbItem>
      </Breadcrumb>

      <OralsLayout>
        <Card>
          <CardBody>
            <CardTitle>Student Submissions</CardTitle>

            <br />
            <p>
              Our student submissions - where we listen and learn from each
              other. Listen to our students as they answer some of the most
              common questions from each category.
            </p>
            <ul>
              <li>
                <a href="/orals/student-submissions/daily-routine">
                  Daily Routine
                </a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="/orals/student-/submissions/">
                  Sports and Recreational
                </a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="/orals/student-submissions/home-and-family">
                  Home and Family
                </a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="/orals/student-submissions/travel">Travel</a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="/orals/student-submissions/school-and-career">
                  School and Career
                </a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="/orals/student-submissions/shopping">Shopping</a>
              </li>
            </ul>
          </CardBody>
        </Card>
      </OralsLayout>
    </Container>
  </Layout>
);

export default StudentSubmissions;
