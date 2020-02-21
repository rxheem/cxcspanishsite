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
import { BrowserView, MobileView } from "react-device-detect";

import { Tab, Tabs, TabContent } from "react-bootstrap";
import uuidv4 from "uuid";
import Head from "next/head";
import DimeLayout from "../dime/DimeLayout";
import Img from "react-image";

// Layout
import Layout from "../components/Layout";
import SEO from "react-seo-component";

const Dime = props => (
  <Layout>
    <SEO
      title={"Dime Series | CXC Spanish Online"}
      description={
        "Dime mucho mas is the third book in the Dime series for Caribbean schools."
      }
      twitterUsername={"_rxhem"}
      author={"Raheem McDonald"}
      article={false}
      publishedDate={new Date()}
      modifiedDate={new Date()}
    />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Dime Series</BreadcrumbItem>
      </Breadcrumb>

      <DimeLayout>
        <Card>
          <CardImg
            className="d-sm-none"
            style={{ width: "100%" }}
            src="https://macmillancaribbeanebooks.com/media/catalog/product/cache/6/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230483132_2_1_2_1_6.jpg"
          />
          <BrowserView>
            <Row>
              <Col sm={4} md={4} lg={4}>
                <Img src={["", "", ""]} />
              </Col>
              <Col sm={4} md={4} lg={4}>
                <Img src={["", "", ""]} />
              </Col>
              <Col sm={4} md={4} lg={4}>
                <Img src={["", "", ""]} />
              </Col>
            </Row>
          </BrowserView>

          <CardBody>
            <CardTitle>Dime Series</CardTitle>
            <p>
              The Dime series has been revised and updated by the author team of
              highly experienced Spanish educators, specifically for Caribbean
              secondary schools.
            </p>
          </CardBody>
        </Card>
      </DimeLayout>
    </Container>
  </Layout>
);

export default Dime;
