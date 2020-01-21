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
  FormGroup,
  Collapse,
  Badge
} from "shards-react";
import Collapsible from "react-collapsible";

import { Tab, Tabs, TabContent } from "react-bootstrap";
import uuidv4 from "uuid";
import Head from "next/head";
import ListeningLayout from "../../listening-components/ListeningLayout";

import PDFFile from "../../common/PDFFile";

// Layout
import Layout from "../../components/Layout";
import SEO from "react-seo-component";

const numberOfQuestions = 6;

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

console.log(today);

const ElClima = props => (
  <Layout>
    <SEO
      title={"El Clima - Listening Exercise | CXC Spanish Online"}
      description={
        "Practice your Spanish listening skills and learn about the weather. Pass your CXC Spanish exam with our free online study guide."
      }
      twitterUsername={"_rxhe3m"}
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
        <BreadcrumbItem>
          <a href="/listening">Listening Exercises</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>El Clima</BreadcrumbItem>
      </Breadcrumb>

      <ListeningLayout>
        <Card>
          <CardBody>
            <CardTitle>El Clima</CardTitle>
            <br />
            <p>
              Let's listen in on Kelly and Ronaldo as they talk about the
              weather in their area.
            </p>
            <br />

            <Row>
              <Col sm={12} md={6} lg={6} xl={6}>
                <h6>Normal Speed</h6>
                <div className="audio">
                  <audio controls>
                    <source src="https://dl.dropbox.com/s/9jwdl1vkc1d57ga/el-clima-normal.mp3?dl=0" />
                  </audio>
                </div>
              </Col>
              <Col sm={12} md={6} lg={6} xl={6}>
                <h6>Slow Speed</h6>
                <div className="audio">
                  <audio controls>
                    <source src="https://dl.dropbox.com/s/lwbklmnrrs041mn/el-clima-slow.mp3?dl=0" />
                  </audio>
                </div>
              </Col>
            </Row>

            <br />
            <Collapsible trigger={<a href="">Read transcript</a>}>
              <p style={{ paddingTop: "10px" }}></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </Collapsible>
          </CardBody>
        </Card>
      </ListeningLayout>
    </Container>
  </Layout>
);

export default ElClima;
