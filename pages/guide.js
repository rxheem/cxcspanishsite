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
import Head from "next/head";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import SEO from "react-seo-component";
import Img from "react-image";

// Layout
import Layout from "../components/Layout";
import GuideLayout from "../guide-components/GuideLayout";

const ulStyles = {
  marginLeft: "-30px",
  listStyleType: "none"
};

const liStyle = { paddingBottom: "15px" };

class Guide extends React.Component {
  constructor(props) {
    super(props);

    this.state = { collapse: false };
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Guides | CXC Spanish Online</title>
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

                <p>
                  Our guides are designed to help you master a wide range of
                  topics in Spanish. We cover basic topis from numbers and the
                  alphabet, to verb tenses and and fun topics
                </p>

                <MobileView>
                  <Img
                    style={{ height: "200px", width: "100%" }}
                    src={[
                      "https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                      "",
                      ""
                    ]}
                    alt=""
                  />
                </MobileView>

                <BrowserView>
                  <Row>
                    <Col sm={6} md={6} lg={6}>
                      <Img
                        style={{ height: "200px", width: "100%" }}
                        src={[
                          "https://images.unsplash.com/photo-1568650136602-ded24b86c5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                          "",
                          ""
                        ]}
                        alt=""
                      />
                    </Col>
                    <Col sm={6} md={6} lg={6}>
                      <Img
                        style={{ height: "200px", width: "100%" }}
                        src={[
                          "https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                          "",
                          ""
                        ]}
                        alt=""
                      />
                    </Col>
                  </Row>
                </BrowserView>
              </CardBody>
            </Card>

            <br />
            {/* Fun */}
            <Card>
              <CardBody>
                <CardTitle>Fun</CardTitle>

                <br />

                <Row>
                  <Col sm={12} md={6} lg={6} xl={6}>
                    <ul className="ul-st">
                      <li>
                        <a href="/guides/">Texting in Spanish</a>
                      </li>
                      <li>
                        <a href="/guides/">Funny Spanish Jokes</a>
                      </li>
                      <li>
                        <a href="/guides/">Traditional Spanish Food</a>
                      </li>
                      <li>
                        <a href="/guides/">Apps that Teach You Spanish</a>
                      </li>
                      <li>
                        <a href="/guides/">In the Classroom</a>
                      </li>
                      <li>
                        <a href="/guides/">Football Vocabulary</a>
                      </li>
                      <li>
                        <a href="/guides/"></a>
                      </li>
                      <li>
                        <a href="/guides/"></a>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={12} md={6} lg={6} xl={6}>
                    <ul className="ul-st">
                      <li>
                        <a href="/guides/">Traditional Spanish Food</a>
                      </li>
                      <li>
                        <a href="/guides/">Tongue Twisters in Spanish</a>
                      </li>
                      <li>
                        <a href="/guides/">Avoid These Top 5 Mistakes</a>
                      </li>
                      <li>
                        <a href="/guides/">Flirting in Spanish</a>
                      </li>
                      <li>
                        <a href="/guides/">Phone Call Vocabulary</a>
                      </li>
                      <li>
                        <a href="/guides/"></a>
                      </li>
                      <li>
                        <a href="/guides/"></a>
                      </li>
                      <li>
                        <a href="/guides/"></a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <small className="text-danger">
                  Not all articles are completed. We'll let you know when we're
                  done
                </small>
              </CardFooter>
            </Card>

            <br />
            {/* Essentials */}
            <Card>
              <CardBody>
                <CardTitle>Essentials</CardTitle>
                <p>
                  These essential guides will help you to master the basics
                  elements of Spanish, and serves as building blocks to help you
                  to build on your fluency.{" "}
                </p>

                <br />
                <Row>
                  <Col sm={6} md={6} lg={6} xl={6}>
                    <ul className="ul-st">
                      <li>
                        <a preload href="/guides/study-tips">
                          Study Tips
                        </a>
                      </li>
                      <li>
                        <a href="/guides/the-spanish-alphabet">
                          The Spanish Alphabet
                        </a>
                      </li>
                      <li>
                        <a href="/guides/">Genders in Spanish</a>
                      </li>
                      <li>
                        <a href="/guides/pronunciation-tips">
                          Pronunciation Tips
                        </a>
                      </li>
                      <li>
                        <a href="/guides/">Dates in Spanish</a>
                      </li>
                      <li>
                        <a href="/guides/">Adjectives in Spanish</a>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={6} xl={6}>
                    <ul className="ul-st">
                      <li>
                        <a href="/guides/por-vs-para">'Por' vs. 'Para'</a>
                      </li>
                      <li>
                        <a href="/guides/at-the-airport">At the Airport</a>
                      </li>
                      <li>
                        <a href="/guides/oral-exercise">Oral Exercises</a>
                      </li>
                      <li>
                        <a href="/guides/articles-in-spanish">
                          Articles in Spanish
                        </a>
                      </li>
                      <li>
                        <a href="/guides/common-spanish-adverbs">
                          Common Spanish Adverbs
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <small className="text-danger">
                  Not all articles are completed. We'll let you know when we're
                  done
                </small>
              </CardFooter>
            </Card>

            <br />
            {/* Verbs and Tenses */}
            <Card>
              <CardBody>
                <CardTitle>Verbs and Tenses</CardTitle>

                <br />
                <Row>
                  <Col sm={12} md={6} lg={6} xl={6}>
                    <ul className="ul-st">
                      <li>
                        <a href="/guides/ser-vs-estar">'Ser' vs. 'Estar'</a>
                      </li>
                      <li>
                        <a href="/guides/preterite-vs-imperfect">
                          Preterite vs. Imperfect
                        </a>
                      </li>
                      <li>
                        <a href="/guides/how-to-use-gustar">
                          How to use 'Gustar'
                        </a>
                      </li>
                    </ul>
                  </Col>

                  <Col sm={12} md={6} lg={6} xl={6}>
                    <ul className="ul-st">
                      <li>
                        <a href="/guides/spanish-verb-types">
                          Spanish Verb Types
                        </a>
                      </li>
                      <li>
                        <a href="/guides/">
                          'Ser' vs. 'Estar'{" "}
                          <Badge pill theme="success">
                            quiz
                          </Badge>
                        </a>
                      </li>
                      <li>
                        <a href="/guides/">The Imperfect Subjunctive</a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <small className="text-danger">
                  Not all articles are completed. We'll let you know when we're
                  done
                </small>
              </CardFooter>
            </Card>

            <br />
            {/* How To */}
            <Card>
              <CardBody>
                <CardTitle>How To</CardTitle>

                <br />
                <Row>
                  <Col sm={12} md={6} lg={6} xl={6}>
                    <ul className="ul-st">
                      <li>
                        <a href="/guides/">How to Order Food in Spanish</a>
                      </li>
                      <li>
                        <a href="/guides/">How to Remember Verb Conjugations</a>
                      </li>
                      <li>
                        <a href="/guides/how-to-ask-for-directions-in-spanish">
                          How to Ask for Directions in Spanish
                        </a>
                      </li>
                    </ul>
                  </Col>

                  <Col sm={12} md={6} lg={6} xl={6}>
                    <ul className="ul-st">
                      <li>
                        <a href="/guides/">
                          How to Talk About Locations in Spanish
                        </a>
                      </li>
                      <li>
                        <a href="/guides/">
                          How to Improve Spanish Listening Skills
                        </a>
                      </li>
                      <li>
                        <a href="/guides/">How to Use Online Translators</a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <small className="text-danger">
                  Not all articles are completed. We'll let you know when we're
                  done
                </small>
              </CardFooter>
            </Card>
          </GuideLayout>
        </Container>
      </Layout>
    );
  }
}

export default Guide;
