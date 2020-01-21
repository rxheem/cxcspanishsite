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
import Layout from "../../../../components/Layout";
import OralsLayout from "../../../../orals-components/OralsLayout";
import { BrowserView, MobileView } from "react-device-detect";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

console.log(today);

const Sample4 = props => (
  <Layout>
    <SEO
      title={"Orals - 2008 Situation Response Sample 4 | CXC Spanish Online"}
      pathname={"https://www.cxcspnish/mailing-list"}
      description={
        "Oral situation response sample taken from the 2008 Spanish past paper. Practice speaking with our CXC Spanish online guide."
      }
      siteLanguage={"en"}
      twitterUsername={"_rxheem"}
      author={"Raheem McDonald"}
      article={true}
      publishedDate={"01/13/2020"}
      modifiedDate={today}
    />

    <Container>
      <BrowserView>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/orals">Orals</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/orals">Situation Response</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/orals">2008</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Sample Four</BreadcrumbItem>
        </Breadcrumb>
      </BrowserView>

      {/* Mobile view */}
      <MobileView>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/orals">Orals</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/orals">Sit.. Res..</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/orals">2008</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Samp.. 4</BreadcrumbItem>
        </Breadcrumb>
      </MobileView>

      <OralsLayout>
        <Card>
          <CardBody>
            <CardTitle>2008 Sample Four</CardTitle>

            <br />
            <p>
              Five situations are described below. You are required to respond
              to <b>EACH</b> one in <b>SPANISH</b> as indicated by the Examiner.
            </p>

            <ol style={{ marginLeft: "-20px" }}>
              <li>
                Your sports team is planning a farewell activity for the coach.
              </li>

              <br />
              <ul style={{ marginLeft: "-20px" }}>
                <li>What suggestion do you make?</li>
                <li style={{ paddingTop: "10px" }}>
                  What reason do you give for your suggestion?
                </li>
              </ul>

              <br />
              <li>Your mother wants to give away your favourite pet.</li>
              <br />
              <ul style={{ marginLeft: "-20px" }}>
                <li>What reason does she give to you?</li>
                <li style={{ paddingTop: "10px" }}>
                  What comment do you make?
                </li>
              </ul>

              <br />
              <li>You begin to feel ill while you are in class.</li>
              <br />
              <ul style={{ marginLeft: "-20px" }}>
                <li>What do you ask your teacher?</li>
                <li style={{ paddingTop: "10px" }}>
                  What does he/she advise you to do?
                </li>
              </ul>

              <br />
              <li>You have been accepted at the university of your choice.</li>
              <br />
              <ul style={{ marginLeft: "-20px" }}>
                <li>What do your grandparents say to you?</li>
                <li style={{ paddingTop: "10px" }}>
                  What do you promise to do?
                </li>
              </ul>

              <br />
              <li>
                On your way to class you meet your teacher who informs you that
                she is going to be late.
              </li>
              <br />
              <ul style={{ marginLeft: "-20px" }}>
                <li>What does she ask you to do?</li>
                <li style={{ paddingTop: "10px" }}>
                  What does she remind you of?
                </li>
              </ul>
            </ol>
          </CardBody>
        </Card>
      </OralsLayout>
    </Container>
  </Layout>
);

export default Sample4;
