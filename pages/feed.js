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
import { Jumbotron } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";
import Head from "next/head";
import SEO from "react-seo-component";
import Layout from "../components/Layout";
import OralsLayout from "../orals-components/OralsLayout";
import Img from "react-image";
import Collapsible from "react-collapsible";
import YouTube from "react-youtube";
import Countdown from "react-countdown";

// Options
const opts = {
  height: "300px",
  width: "100%",
  playerVars: {
    autoplay: 0
  }
};

const Orals = props => (
  <Layout>
    <SEO
      title={"Feed | CXC Spanish Online"}
      pathname={"https://www.cxcspnish/mailing-list"}
      description={
        "Feed is where we explore all things Spanish, from the latest trending songs to news and sports."
      }
      siteLanguage={"en"}
      twitterUsername={"_rxheem"}
      author={"Raheem McDonald"}
    />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Feed</BreadcrumbItem>
      </Breadcrumb>

      {/* Rows and columns */}
      <Row>
        <Col sm={12} md={8} lg={8} xl={8}></Col>

        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <YouTube opts={opts} videoId="fAgvmh1jaCE" />
            <CardBody>
              <CardTitle>Song of the Week</CardTitle>
              <p>
                <a
                  target="_blank"
                  href="https://www.billboard.com/articles/columns/latin/8541585/daddy-yankee-que-tire-pa-lante-lyrics-translated-to-english"
                >
                  Que Tire Pa' 'Lante
                </a>
                - Daddy Yankee
              </p>
            </CardBody>
          </Card>

          <br />
          <Card>
            <YouTube opts={opts} videoId="iQEVguV71sI" />
            <CardBody>
              <CardTitle>Last Week's Song</CardTitle>
              <p>
                <a
                  target="_blank"
                  href="https://www.vagalume.com.br/thalia/no-me-acuerdo-feat-natti-natasha.html"
                >
                  No Me Acuerdo
                </a>{" "}
                - Thalía feat. Natti Natasha
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default Orals;
