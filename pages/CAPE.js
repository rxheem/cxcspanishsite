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
import Layout from "../components/Layout";

const CAPE = props => (
  <Layout>
    <SEO
      title={"CAPE Spanish | CXC Spanish Online"}
      pathname={"https://www.cxcspnish/mailing-list"}
      description={
        "The Caribbean Advanced Proficiency Examination (CAPE) is designed to provide certification of the academic, vocational and technical achievement of student."
      }
      siteLanguage={"en"}
      twitterUsername={"cxcspnish"}
      author={"Raheem McDonald"}
      article={false}
    />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          Caribbean Advanced Proficiency Examination
        </BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={12} md={8} lg={8} xl={8}>
          <Card>
            <CardBody>
              <CardTitle>CAPE Spanish</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}></Col>
      </Row>
    </Container>
  </Layout>
);

export default CAPE;
