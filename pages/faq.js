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

// Common
import BetaMessage from "../common/BetaMessage";
import Head from "next/head";

// Layout
import Layout from "../components/Layout";

const FAQ = props => (
  <Layout>
    <Head>
      <title>Frequently Asked Questions | CXC Spanish Guide</title>
      <meta
        name="og:title"
        content="Frequently Asked Questions |  CXC Spanish Guide"
      />
      <meta name="og:site_name" content="CXC Spanish Online" />
      <meta
        name="description"
        content="Here we answer any question you may have about CXC Spansih Online. If you don't see your question, send us an inquiry at hola@cxcspanish.com"
      />
    </Head>

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Frequently Asked Questions</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={12} md={8} lg={8}>
          <Card>
            <CardBody>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <br />
              <p>
                Here we answer some of our most frequently asked questions. If
                your question isn't answered, or you have additional queries,
                please send us an email at{" "}
                <a href="mailto:hola@cxcspanish.com">hola@cxcspanish.com</a> or{" "}
                <a href="mailto:holacxcspanish@gmail.com">
                  holacxcspanish@gmail.com
                </a>
              </p>

              <ul style={{ marginLeft: "-20px" }}>
                <li>
                  <Collapsible
                    open
                    trigger={<a href="">What is CXC Spanish Online?</a>}
                  >
                    <p style={{ paddingTop: "10px" }}>
                      CXC Spanish Online is a free online study guide for
                      students sitting the CXC Spanish exam at the CSEC and CAPE
                      level that aims to assist students score higher in class
                      on and pass their exams. For more information, check out
                      our About Us page.
                    </p>
                  </Collapsible>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Collapsible
                    open
                    trigger={<a href="">Am I required to sign up?</a>}
                  >
                    <p style={{ paddingTop: "10px" }}>
                      No, no sign up is required.
                    </p>
                  </Collapsible>
                </li>

                <li style={{ paddingTop: "10px" }}>
                  <Collapsible
                    open
                    trigger={<a href="">How can I get weekly emails?</a>}
                  >
                    <div style={{ paddingTop: "15px" }}>
                      <Row>
                        <Col sm={12} md={2} lg={2} xl={2}>
                          <div style={{ paddingTop: "7px" }}>
                            <LazyLoad>
                              <Img
                                src={[
                                  "https://assets.pcmag.com/media/images/656716-how-to-disable-image-loading-in-email.jpg?thumb=y&width=740&height=740&boxFit=y",
                                  "https://www.komando.com/wp-content/uploads/2018/02/email-scam.jpg",
                                  "https://webuildsites.com.au/wp-content/uploads/2019/02/how-to-setup-gmail-forwarding-1080x675.jpg"
                                ]}
                                alt="image of email"
                                style={{ width: "100px", height: "60px" }}
                              />
                            </LazyLoad>
                          </div>
                        </Col>

                        <Col sm={12} md={9} lg={9} xl={9}>
                          <p>
                            You can email us at our Gmail account at or{" "}
                            <a href="mailto:holacxcspanish@gmail.com">
                              holacxcspanish@gmail.com
                            </a>{" "}
                            send us a message on Facebook or Instagram, or send
                            us a message on our contact page.
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </Collapsible>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Collapsible
                    open
                    trigger={<a href="">Are the courses free?</a>}
                  >
                    <p style={{ paddingTop: "10px" }}>
                      Yes, all the online courses and materials are free.
                    </p>
                  </Collapsible>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Collapsible
                    open
                    trigger={
                      <a href="">Will it be helping me with my orals?</a>
                    }
                  >
                    <p style={{ paddingTop: "10px" }}>
                      Yes, we will a review of the oral exam, practice exercises
                      and pronunciation and study tips for orals.
                    </p>
                  </Collapsible>
                </li>
              </ul>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        </Col>
        <Col sm={4} md={4} lg={4}></Col>
      </Row>
    </Container>
  </Layout>
);

export default FAQ;
