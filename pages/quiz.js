import {
  Container,
  BreadcrumbItem,
  Row,
  Col,
  Alert,
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
import { Tab, Tabs, TabContent } from "react-bootstrap";
import Head from "next/head";
import Collapsible from "react-collapsible";
import PDFFile from "../common/PDFFile";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import QuizLayout from "../quiz-components/QuizLayout";
import SEO from "react-seo-component";
import Img from "react-image";
import Layout from "../components/Layout";

const Quiz = props => (
  <Layout>
    <SEO
      title={"CXC Spanish Quizes and Exercies | CXC Spanish Online"}
      pathname={"https://www.cxcspnish/quiz"}
      description={""}
      siteLanguage={"en"}
      twitterUsername={"cxcspanish"}
      author={"Raheem McDonald"}
      article={false}
    />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Quizes and Challenges</BreadcrumbItem>
      </Breadcrumb>

      <QuizLayout>
        <Card>
          <CardBody>
            <CardTitle>Quizes and Challenges</CardTitle>
          </CardBody>
        </Card>

        <br />
        <Card>
          <CardBody>
            <CardTitle>Verbs and Grammar</CardTitle>

            <br />

            <Tabs defaultActiveKey="easy">
              <Tab eventKey="easy" title="Easy">
                <TabContent>
                  <br />
                  <Row>
                    <Col sm={12} md={6} lg={6} xl={6}>
                      <ul style={{ marginLeft: "-10px" }}>
                        <li>
                          <Collapsible trigger={<a href="">'Por' vs 'Para'</a>}>
                            <p
                              className="text-muted"
                              style={{ paddingTop: "10px" }}
                            >
                              Need a quick refresher? Take a look at a brief
                              overview <a href="#">here</a>
                            </p>

                            <Button href="#">I'm ready</Button>
                          </Collapsible>
                        </li>
                        <li style={{ paddingTop: "10px" }}>
                          <a href="#">title</a>
                        </li>
                        <li style={{ paddingTop: "10px" }}>
                          <Collapsible trigger={<a href="">title</a>}>
                            <p style={{ paddingTop: "10px" }}></p>
                            <Button href="#">I'm ready</Button>
                          </Collapsible>
                        </li>
                        <li style={{ paddingTop: "10px" }}>
                          <Collapsible trigger={<a href="">title</a>}>
                            <p style={{ paddingTop: "10px" }}></p>
                            <Button href="#">I'm ready</Button>
                          </Collapsible>
                        </li>
                        <li style={{ paddingTop: "10px" }}>
                          <a href="#">title</a>
                        </li>
                      </ul>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6}>
                      <ul style={{ marginLeft: "-10px" }}>
                        <li>
                          <a href="#">title</a>
                        </li>
                        <li style={{ paddingTop: "10px" }}>
                          <a href="#">title</a>
                        </li>
                        <li style={{ paddingTop: "10px" }}>
                          <a href="#">title</a>
                        </li>
                        <li style={{ paddingTop: "10px" }}>
                          <Collapsible
                            trigger={<a href="">Formal vs. Informal</a>}
                          >
                            <p style={{ paddingTop: "10px" }}>
                              Remmeber that 'tú' and 'vosotros' is used with the
                              familiar conjugations of the verb and 'useted' and
                              'ustedes' are always used in formal situations.
                              For a more in-depth refresher,{" "}
                              <a href="#">click here</a>
                            </p>
                            <Button href="#">I'm ready</Button>
                          </Collapsible>
                        </li>
                        <li style={{ paddingTop: "10px" }}>
                          <a href="#">title</a>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </TabContent>
              </Tab>
              <Tab eventKey="moderate" title="Moderate">
                <TabContent>
                  <br />
                  <p>Moderate</p>
                </TabContent>
              </Tab>

              <Tab eventKey="challenging" title="Challenging">
                <TabContent>
                  <br />
                  <p>Hard</p>
                </TabContent>
              </Tab>
              <Tab eventKey="downloadable" title="Downloadable">
                <TabContent>
                  <br />
                  <Row>
                    <Col sm={12} md={6} lg={6} xl={6}>
                      <ul
                        style={{ marginLeft: "-20px", listStyleType: "none" }}
                      >
                        <li>
                          <PDFFile
                            title="Pereterite vs. Imperfect #1"
                            href=""
                          />
                        </li>
                        <li style={{ paddingTop: "10px" }}>
                          <PDFFile
                            title="Pereterite vs. Imperfect #2"
                            href=""
                          />
                        </li>
                        <li style={{ paddingTop: "10px" }}>
                          <PDFFile title="'Tú' vs. 'Usted'" href="" />
                        </li>
                        <li style={{ paddingTop: "10px" }}>
                          <PDFFile title="'Ser' vs. 'Estar' #1" href="" />
                        </li>
                        <li style={{ paddingTop: "10px" }}>
                          <PDFFile title="'Ser' vs. 'Estar' #1" href="" />
                        </li>
                      </ul>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6}>
                      <ul
                        style={{ marginLeft: "-15px", listStyleType: "none" }}
                      >
                        <li>
                          <PDFFile title="" href="" />
                        </li>
                        <li style={{ paddingTop: "10px" }}>
                          <PDFFile title="" href="" />
                        </li>
                        <li style={{ paddingTop: "10px" }}>
                          <PDFFile title="" href="" />
                        </li>
                        <li style={{ paddingTop: "10px" }}>
                          <PDFFile title="" href="" />
                        </li>
                        <li style={{ paddingTop: "10px" }}>
                          <PDFFile title="" href="" />
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </TabContent>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>

        <br />
        <Card>
          <CardBody>
            <CardTitle>Advanced Challenges</CardTitle>
          </CardBody>
        </Card>

        <br />
        <Card>
          <CardBody>
            <CardTitle>Essays</CardTitle>
          </CardBody>
        </Card>

        <br />
        <Card>
          <CardBody>
            <CardTitle>Advanced Challenges</CardTitle>
          </CardBody>
        </Card>
      </QuizLayout>
    </Container>
  </Layout>
);

export default Quiz;
