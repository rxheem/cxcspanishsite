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

const Sample3 = props => (
  <Layout>
    <SEO
      title={"Orals - 2008 Situation Response Sample 3 | CXC Spanish Online"}
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
          <BreadcrumbItem active>Sample Three</BreadcrumbItem>
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
          <BreadcrumbItem active>Samp.. 3</BreadcrumbItem>
        </Breadcrumb>
      </MobileView>

      <OralsLayout>
        <Card>
          <CardBody>
            <CardTitle>2008 Sample Three</CardTitle>

            <br />
            <p>
              Five situations are described below. You are required to respond
              to <b>EACH</b> one in <b>SPANISH</b> as indicated by the Examiner.
            </p>

            <ol style={{ marginLeft: "-20px" }}>
              <li>
                You do not understand the Spanish homework which was assigned.
              </li>

              <br />
              <ul style={{ marginLeft: "-20px" }}>
                <li>What request do you make of your friend?</li>
                <li style={{ paddingTop: "10px" }}>
                  What does he/she offer to do?
                </li>
              </ul>

              <br />
              <li>
                Your best friend invites you to go fishing but you are unable to
                go.
              </li>

              <br />
              <ul style={{ marginLeft: "-20px" }}>
                <li>What excuse do you give him/her?</li>
                <li style={{ paddingTop: "10px" }}>
                  What do you promise to do?
                </li>
              </ul>

              <br />
              <li>
                It is your aunt's birthday and you cannot decide on an
                appropriate gift.
              </li>

              <br />
              <ul style={{ marginLeft: "-20px" }}>
                <li>What do you ask the shop attendant?</li>
                <li style={{ paddingTop: "10px" }}>
                  What does he/she offer to do?
                </li>
              </ul>

              <br />
              <li>
                You have misplaced an important document which you urgently
                need.
              </li>

              <br />
              <ul style={{ marginLeft: "-20px" }}>
                <li>What do you ask your sister?</li>
                <li style={{ paddingTop: "10px" }}>What does she suggest?</li>
              </ul>

              <br />
              <li>
                You have applied for a summer job, but your father does not
                approve.
              </li>

              <br />
              <ul style={{ marginLeft: "-20px" }}>
                <li>What does he say to you?</li>
                <li style={{ paddingTop: "10px" }}>
                  What reason does he give?
                </li>
              </ul>
            </ol>
          </CardBody>
        </Card>
      </OralsLayout>
    </Container>
  </Layout>
);

export default Sample3;
