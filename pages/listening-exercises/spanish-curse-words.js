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

const SpanishCurseWords = props => (
  <Layout>
    <SEO
      title={"Spanish Curse Words - Listening Exercise | CXC Spanish Online"}
      description={
        "Practice your Spanish listening with these curse words. Pass your CXC Spanish exam with our free online study guide."
      }
      twitterUsername={"_rxhem"}
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
        <BreadcrumbItem active>Curse Words</BreadcrumbItem>
      </Breadcrumb>

      <ListeningLayout>
        <Card>
          <CardBody>
            <CardTitle>Spanish Curse Words</CardTitle>
            <p>
              A part of being fluent in Spanish means that you know all the
              vocabulary, the ones that aare good and even the ones that are
              bad.{" "}
            </p>
            <br />
            <div className="audio">
              <audio controls>
                <source src="https://dl.dropbox.com/s/3acpw37d1iujc5c/Spanish%20Curse%20words.mp3?dl=0" />
              </audio>
            </div>

            <br />
            <PDFFile
              title="Spanish Curse Words"
              download
              href="https://dl.dropbox.com/s/xvabpzzg7f5r05s/Spanish%20Curse%20Words.pdf?dl=0"
            />
          </CardBody>
        </Card>
      </ListeningLayout>
    </Container>
  </Layout>
);

export default SpanishCurseWords;
