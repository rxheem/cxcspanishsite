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

// Layout
import Layout from "../../components/Layout";
import SEO from "react-seo-component";

const numberOfQuestions = 6;

const MeetNick = props => (
  <Layout>
    <SEO
      title={"Meet Nick - Listening Exercise | CXC Spanish Online"}
      description={
        "Practice your Spanish listening skills with Nick. Pass your CXC Spanish exam with our free online study guide."
      }
      twitterUsername={"_rxhem"}
      author={"Raheem McDonald"}
      article={true}
      publishedDate={Date.now()}
      modifiedDate={Date.now()}
    />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/listening">Listening Exercises</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Meet Nick</BreadcrumbItem>
      </Breadcrumb>

      <ListeningLayout>
        <Card>
          <CardBody>
            <CardTitle>Meet Nick</CardTitle>
            <p>
              Meet Nick, <a href="/listening-exercises/meet-ana">Ana's</a>{" "}
              husband. In this listening exercise we'll get to know a little
              about him. Listen to the audio below and answer the{" "}
              {numberOfQuestions} questions.
            </p>
            <br />
            <div className="audio">
              <audio controls>
                <source src="https://dl.dropbox.com/s/q7myh8ug3oec0bd/Example%202%20-%20Nick.mp3?dl=0" />
              </audio>
            </div>

            <br />
            <br />
            <h6>Questions</h6>

            <ul style={{ marginLeft: "-20px" }}>
              <li>
                <Collapsible trigger={<a href="">Is Nick also from the US?</a>}>
                  <p style={{ paddingTop: "10px" }}>Yes.</p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={<a href="">What is Nick's occupation?</a>}
                >
                  <p style={{ paddingTop: "10px" }}>
                    Nick is an English teacher.{" "}
                  </p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible trigger={<a href="">How old is he?</a>}>
                  <p style={{ paddingTop: "10px" }}>He is 27 years old. </p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={<a href="">What is the name of his dog?</a>}
                >
                  <p style={{ paddingTop: "10px" }}>His dog's name is Joey.</p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={
                    <a href="">How long has Nick been studying Spanish.</a>
                  }
                >
                  <p style={{ paddingTop: "10px" }}>
                    He has been studying Spanish for 8 years.{" "}
                  </p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={<a href="">Why does he like studying Spanish?</a>}
                >
                  <p style={{ paddingTop: "10px" }}>
                    He has always liked languages and words, and he believes
                    that being able to talk with another group of people i
                    sgratifying and very beneficial.
                  </p>
                </Collapsible>
              </li>
            </ul>
          </CardBody>
        </Card>
      </ListeningLayout>
    </Container>
  </Layout>
);

export default MeetNick;
