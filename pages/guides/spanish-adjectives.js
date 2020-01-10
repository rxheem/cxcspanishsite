import {
  Container,
  Row,
  Col,
  BreadcrumbItem,
  Breadcrumb,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Alert
} from "shards-react";
import { Tab, Tabs, TabContent } from "react-bootstrap";

// Layout
import Layout from "../../components/Layout";

// Suggested
import SuggestedArticles from "./misc/SuggestedArticles";

const SpanishAdjectives = props => (
  <Layout>
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/guide">Guides</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Spanish Adjectives</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={12} md={8} lg={8} xl={8}>
          <h4>Spanish Adjectives</h4>

          <Card>
            <CardBody>
              <p></p>

              <p></p>

              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>

              <CardTitle></CardTitle>
              <p></p>

              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>

              <CardTitle></CardTitle>
              <p></p>

              <CardTitle></CardTitle>
              <p></p>

              <CardTitle></CardTitle>
              <p></p>

              <CardTitle></CardTitle>
              <p></p>
              <Button>View Archives &rarr;</Button>
            </CardBody>
            <CardFooter>Card footer</CardFooter>
          </Card>
        </Col>
        <Col sm={4} md={4} lg={4} xl={4}>
          <SuggestedArticles />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default SpanishAdjectives;
