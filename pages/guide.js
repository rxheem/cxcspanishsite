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
import SEO from "react-seo-component";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import Img from "react-image";

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

                <p>
                  Our guides are designed to help you master a wide range of
                  topics in Spanish.
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
          </GuideLayout>
        </Container>
      </Layout>
    );
  }
}

export default Guide;
