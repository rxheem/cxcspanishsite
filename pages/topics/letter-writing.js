import { Container, Row, Col, BreadcrumbItem, Breadcrumb } from "shards-react";
import { Tab, Tabs, TabContent } from "react-bootstrap";
import Head from "next/head";
import Img from "react-image";
import uuidv4 from "uuid";

// Layout
import Layout from "../../components/Layout";

// Components
import Guidelines from "./content/ltr-wri/Guidelines";
import Overview from "./content/ltr-wri/Overview";
import Exercises from "./content/ltr-wri/Exercises";
import UsefulEssentials from "./content/ltr-wri/UsefulEssentials";
import SampleOne from "./content/ltr-wri/SampleOne";
import SampleTwo from "./content/ltr-wri/SampleTwo";

const LetterWriting = props => (
  <Layout>
    <Head>
      <title>Letter Writing | CXC Spanish Guide</title>
      <meta name="og:title" content="Letter Writing  |  CXC Spanish Guide" />
      <meta name="og:site_name" content="CXC Spanish Online" />
      <meta
        name="description"
        content="Learn how to write letters for your CXC Spanish exam with samples and past papers. "
      />
    </Head>
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/exam-topics">Exam Topics</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Letter Writing</BreadcrumbItem>
      </Breadcrumb>

      <h4>Letter Writing</h4>
      <Row>
        <Col sm={12} md={8} lg={8} xl={8}>
          <Tabs defaultActiveKey="overview" id={uuidv4()}>
            <Tab
              eventKey="overview"
              title={
                <React.Fragment>
                  <Img
                    style={{ maxHeight: "15px", paddingRight: "7px" }}
                    src={[
                      "https://cdn.icon-icons.com/icons2/547/PNG/512/1455554327_line-12_icon-icons.com_53320.png",
                      "https://cdn.icon-icons.com/icons2/196/PNG/128/mail_23797.png",
                      "https://cdn.icon-icons.com/icons2/196/PNG/128/compose_23855.png"
                    ]}
                    alt="image"
                  />
                  Overview
                </React.Fragment>
              }
            >
              <TabContent>
                <Overview />
              </TabContent>
            </Tab>
            <Tab eventKey="guidelines" title="Guidelines">
              <TabContent>
                <Guidelines />
              </TabContent>
            </Tab>
            <Tab eventKey="sample1" title="Sample One">
              <TabContent>
                <SampleOne />
              </TabContent>
            </Tab>

            <Tab eventKey="sample2" title="Sample Two">
              <TabContent>
                <SampleTwo />
              </TabContent>
            </Tab>
          </Tabs>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <UsefulEssentials />
          <Exercises />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default LetterWriting;
