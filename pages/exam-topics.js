import { Container } from "shards-react";
import {
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
import FA from "react-fontawesome";

// Layout
import Layout from "../components/Layout";

const ExamTopics = props => (
  <Layout>
    <Head>
      <title>Exam Topics | CXC Spanish Guide</title>
      <meta name="og:title" content="Exam Topics |  CXC Spanish Guide" />
      <meta name="og:site_name" content="CXC Spanish Online" />
      <meta
        name="description"
        content="A complete deep dive into all the sections on the CXC Spanish exams using past papers"
      />
    </Head>
    <Container id="exam-topics">
      <Breadcrumb>
        <BreadcrumbItem active>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Exam Topics</BreadcrumbItem>
      </Breadcrumb>

      <React.Fragment>
        <h4>Exam Topics</h4>
        <Card>
          <CardBody>
            <p>
              The syllabus topics are designed to test candidates' ability to
              understanding both written and spoken Spanish, and their ability
              to respond to a wide range of situations/ scenarios and reading
              passages in Spanish. in this section, we will take a look at all
              the sections on the Paper 1 and 2 CSEC exam.
            </p>

            <Row>
              <Col sm={12} md={6} lg={6} xl={6}>
                <h6 className="text-danger">Paper II Layout</h6>

                <Row>
                  <Col sm={12} md={6} lg={6} xl={6}>
                    <h6>Section I</h6>

                    <ul>
                      <li>
                        <FA
                          name="caret-right"
                          style={{ paddingRight: "8px", color: "coral" }}
                        />
                        <a href="/topics/directed-situations">
                          Directed Situations
                        </a>
                      </li>
                    </ul>

                    <br />
                    <br className="d-sm-none" />
                    <h6>Section II</h6>

                    <ul>
                      <li>
                        <FA
                          name="caret-right"
                          style={{ paddingRight: "8px", color: "" }}
                        />
                        <a href="/topics/letter-writing">Letter Writing</a>
                      </li>
                      <li>
                        <FA
                          name="caret-right"
                          style={{ paddingRight: "8px", color: "" }}
                        />
                        <a href="/topics/composition">Composition</a>
                      </li>
                    </ul>
                  </Col>

                  <Col sm={12} md={6} lg={6} xl={6}>
                    <h6>Section III</h6>

                    <ul>
                      <li>
                        <FA
                          name="caret-right"
                          style={{ paddingRight: "8px", color: "" }}
                        />
                        <a href="/topics/contextual-announcements">
                          Contextual Announcements
                        </a>
                      </li>
                      <li>
                        <FA
                          name="caret-right"
                          style={{ paddingRight: "8px", color: "" }}
                        />
                        <a href="/topics/contextual-dialogue">
                          Contextual Dialogue
                        </a>
                      </li>
                    </ul>

                    <br />
                    <h6>Section IV</h6>

                    <ul>
                      <li>
                        <span>
                          <FA
                            name="caret-right"
                            style={{ paddingRight: "8px", color: "" }}
                          />
                          <a href="/topics/reading-comprehension">
                            Reading Comprehension
                          </a>
                        </span>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col sm={12} md={3} lg={3} xl={3}>
                <h6 className="text-danger">Paper I - Multiple Choice</h6>
              </Col>
              <Col sm={12} md={3} lg={3} xl={3}>
                <h6 className="text-danger">Paper III - Orals</h6>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    </Container>

    <style>
      {`
      #exam-topics ul {
        list-style-type: none;
        margin-left: -30px;
      }
  `}
    </style>
  </Layout>
);

export default ExamTopics;
