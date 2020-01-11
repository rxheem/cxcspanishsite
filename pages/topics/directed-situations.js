import { Container, Row, Col, BreadcrumbItem, Breadcrumb } from "shards-react";
import { Tab, Tabs, TabContent } from "react-bootstrap";
import uuidv4 from "uuid";
import Head from "next/head";

// Layout
import Layout from "../../components/Layout";

// All components
import Overview from "./content/dir-sit/Overview";
import Examples from "./content/dir-sit/Examples";
import Exercises from "./content/dir-sit/Exercises";
import WordBank from "./content/dir-sit/WordBank";

const DirectedSituations = props => (
  <Layout>
    <Head>
      <title>Directed Situations | CXC Spanish Guide</title>
      <meta
        name="og:title"
        content="Directed Situations |  CXC Spanish Guide"
      />
      <meta name="og:site_name" content="CXC Spanish Online" />
      <meta
        name="description"
        content="Learn how to respond to Directed Situations, second 1 on your CXC Spanish exam"
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
        <BreadcrumbItem active>Directed Situations</BreadcrumbItem>
      </Breadcrumb>
      <h4>Directed Situations</h4>

      <Row>
        <Col sm={12} md={8} lg={8} xl={8}>
          <Tabs defaultActiveKey="overview" id={uuidv4()}>
            <Tab eventKey="overview" title="Overview">
              <TabContent>
                <Overview />
              </TabContent>
            </Tab>
            <Tab eventKey="examples" title="Examples">
              <TabContent>
                <Examples />
              </TabContent>
            </Tab>
            <Tab eventKey="resources" title="Resources">
              <TabContent></TabContent>
            </Tab>
          </Tabs>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Exercises />
          <br />
          <WordBank />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default DirectedSituations;
