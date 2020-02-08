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
import Img from "react-image";
import LazyLoad from "react-lazyload";
import Collapsible from "react-collapsible";
import YouTube from "react-youtube";
import Countdown from "react-countdown";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

// Common
import BetaMessage from "../common/BetaMessage";
import SEO from "react-seo-component";
import Head from "next/head";

// Layout
import Layout from "../components/Layout";

const opts = {
  height: "300px",
  width: "100%",
  playerVars: {
    autoplay: 0
  }
};

const Meetings = props => (
  <Layout>
    <SEO
      title={"Online Group Meetings | CXC Spanish Online"}
      description={
        "Join our online group meetings, where we discuss any and everything related to your CXC exams."
      }
      pathname={""}
      siteLanguage={"en"}
      twitterUsername={"_rxheem"}
      author={"Raheem McDonald"}
      article={true}
      publishedDate={today}
      modifiedDate={today}
    />
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Meetings</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={12} md={8} lg={8}>
          <br />
          <Card>
            <CardImg
              style={{ width: "100%" }}
              src="http://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2016/06/The-future-of-video-conferencing-1-1.png"
            />
            <CardBody>
              <CardTitle>Online Group Meetings</CardTitle>

              <br />
              <p>
                Join our online group meetings, where we discuss any and
                everything related to your CXC exams.
              </p>
            </CardBody>
          </Card>

          <br />
          <Card>
            <CardBody>
              <CardTitle>Upcoming Meetings</CardTitle>

              <br />
              <p>See a list of our upcoming meetings here.</p>

              <ul>
                <li>
                  <a href="/meetings/12152020">Let's Talk Session</a>
                </li>
              </ul>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>

          <br />
        </Col>
        <Col sm={4} md={4} lg={4}>
          <Card>
            <CardBody>
              <CardTitle>Latest Meetings</CardTitle>

              <p>
                <i>Nothing here yet</i>
              </p>
            </CardBody>
          </Card>

          <br />
          <YouTube opts={opts} videoId="vFhAEoCF7jg" />
          <br />
          <YouTube opts={opts} videoId="HqncX7RE0wM" />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default Meetings;
