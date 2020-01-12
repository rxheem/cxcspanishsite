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
  FormGroup
} from "shards-react";
import Head from "next/head";

// Layout
import Layout from "../components/Layout";
import GuideLayout from "./guides/GuideLayout";

const ulStyles = {
  marginLeft: "-30px",
  listStyleType: "none"
};

const liStyle = { paddingBottom: "15px" };

class Guide extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>Guides | CXC Spanish Guide</title>
          <meta name="og:title" content="Guides |  CXC Spanish Guide" />
          <meta name="og:site_name" content="CXC Spanish Online" />
          <meta
            name="description"
            content="Take your Spanish to the next level with detailed lesson guides, completed with examples and practice questions."
          />
        </Head>
        <Container>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Guides</BreadcrumbItem>
          </Breadcrumb>

          <GuideLayout>
            <Card>
              <CardBody>
                <CardTitle>Guides</CardTitle>
                <br />
                <p>
                  Our guides are designed to help you master a wide range of
                  topics in Spansih, from how to use online translators to
                  learning hot to use 'por' and 'para' and much more.
                </p>
              </CardBody>
            </Card>

            <br />
            <Row>
              <Col sm={6} md={6} lg={6} xl={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Verbs and Tenses</CardTitle>

                    <br />
                    <ul style={ulStyles}>
                      <li style={liStyle}>
                        <i
                          style={{ color: "orange" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          When to Use the Imperfect Tense
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          'Ser' vs 'Estar'
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          Spanish Verb Types
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          How to use 'Gustar'
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          The Imperfect Subjunctive
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          'Ser' vs. 'Estar'
                        </a>
                      </li>
                    </ul>
                  </CardBody>
                </Card>

                <br />
                <Card>
                  <CardBody>
                    <CardTitle>Fun</CardTitle>
                    <br />

                    <ul style={ulStyles}>
                      <li style={liStyle}>
                        <i
                          style={{ color: "orange" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          Flirting in Spanish
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          Texting in Spanish
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          Apps that Teach You Spanish
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          50 Most Common Verbs in Spanish
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          Traditional Spanish Food
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          Funny Spanish Jokes
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          Tongue Twisters in Spanish
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          5 Mistakes to Avoid When Learning Spanish
                        </a>
                      </li>
                    </ul>
                  </CardBody>
                </Card>

                <br />
                <Card>
                  <CardBody>
                    <CardTitle>Weird</CardTitle>
                    <br />
                    <ul style={ulStyles}>
                      <li style={liStyle}>
                        <i
                          style={{ color: "orange" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}></a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}></a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}></a>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </Col>
              <Col sm={6} md={6} lg={6} xl={6}>
                <br className="d-md-block" />
                <Card>
                  <CardBody>
                    <CardTitle>Essentials</CardTitle>

                    <br />
                    <ul style={ulStyles}>
                      <li style={liStyle}>
                        <i
                          style={{ color: "orange" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          The Spanish Alphabet
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          Adverbs
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          Genders in Spanish
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          'Por' vs. 'Para'
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          Pornunciation Tips
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          The Personal ‘a’ in Spanish
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          Articles in Spanish
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a
                          href="./guides/study-tips"
                          style={{ paddingLeft: "10px" }}
                        >
                          Study Tips
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          'Tú' vs. 'Usted'
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          Dates in Spanish
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          Adjectives in Spanish
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          Oral Exercises
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          At the Airport
                        </a>
                      </li>
                    </ul>
                  </CardBody>
                </Card>

                <br />
                <Card>
                  <CardBody>
                    <CardTitle>How To Guides</CardTitle>
                    <br />

                    <ul style={ulStyles}>
                      <li style={liStyle}>
                        <i
                          style={{ color: "orange" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          How to Order Food in Spanish
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          How to Remember Verb Conjugations
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          How to Ask for Directions in Spanish
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          Talking About Locations in Spanish
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          Improve Spanish Listening Skills
                        </a>
                      </li>
                      <li style={liStyle}>
                        <i
                          style={{ color: "" }}
                          className="fas fa-angle-double-right"
                        ></i>
                        <a href="" style={{ paddingLeft: "10px" }}>
                          How to Use Online Translators
                        </a>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <br />
            <Row>
              <Col sm={6} md={6} lg={6} xl={6}></Col>
              <Col sm={6} md={6} lg={6} xl={6}></Col>
            </Row>
          </GuideLayout>
        </Container>
      </Layout>
    );
  }
}

export default Guide;
