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
  Alert,
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
import QuickSurvey from "../home/QuickSurvey";
import ResourcesLayout from "../resources-components/ResourcesLayout";

// Layout
import Layout from "../components/Layout";
import Img from "react-image";
import Collapsible from "react-collapsible";

// Common
import PDFFile from "../common/PDFFile";

const liStyle = { paddingBottom: "15px" };

class CAPEPapers extends React.Component {
  constructor(props) {
    super(props);

    this.state = { collapse: false };
  }

  render() {
    return (
      <React.Fragment>
        <Layout>
          <SEO
            title={"CXC CAPE Past Papers | CXC Spanish Online"}
            pathname={"https://www.cxcspnish/mailing-list"}
            description={
              "Get free CAPE past papers in preparation for your CXC exams."
            }
            siteLanguage={"en"}
            twitterUsername={"_rxheem"}
            author={"Raheem McDonald"}
            article={true}
            publishedDate={new Date()}
            modifiedDate={new Date()}
          />

          <Container>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>CAPE Past Papers</BreadcrumbItem>
            </Breadcrumb>

            <ResourcesLayout>
              <Row>
                {/* Computer Science */}
                <Col sm={12} md={3} lg={3} xl={3}>
                  <a href="https://dl.dropbox.com/s/uifq5ynywxvdga8/CAPE%20Computer%20Science%20Past%20Papers%20u1_U2%202005-2016.pdf?dl=0">
                    <Img
                      style={{ width: "100%" }}
                      src={[
                        "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482883_4.jpg",
                        ""
                      ]}
                    />
                  </a>
                </Col>

                {/* French */}
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br className="d-sm-none" />
                  <a href="https://dl.dropbox.com/s/5g8gm6h4jcwikex/CAPE%20French%20Past%20Papers%20U1%20_U2%202005-2016.pdf?dl=0">
                    <Img
                      style={{ width: "100%" }}
                      src={[
                        "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482166_2.jpg",
                        ""
                      ]}
                    />
                  </a>
                </Col>

                {/* Sociology */}
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br className="d-sm-none" />
                  <a href="https://dl.dropbox.com/s/x1h7tmn4lam6ryn/CAPE%20Sociology%20Past%20Papers%20U1%20_U%202005-2016.pdf?dl=0">
                    <Img
                      style={{ width: "100%" }}
                      src={[
                        "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482050_24.jpg",
                        ""
                      ]}
                    />
                  </a>
                </Col>

                {/* Spanish */}
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br className="d-sm-none" />
                  <a href="https://dl.dropbox.com/s/bjz288n93t2kein/CAPE%20Spanish%20Past%20Papers.pdf?dl=0">
                    <Img
                      style={{ width: "100%" }}
                      src={[
                        "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482418_4.jpg",
                        ""
                      ]}
                    />
                  </a>
                </Col>

                {/* Communication Studies */}
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br />
                  <a href="https://dl.dropbox.com/s/c8l9q0ql7mracsb/CAPE%20Communication%20Studies%20Past%20Papers%202005-2016.pdf?dl=0">
                    <Img
                      style={{ width: "100%" }}
                      src={[
                        "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482791_2.jpg",
                        ""
                      ]}
                    />
                  </a>
                </Col>

                {/* Food and Nutrition */}
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br />
                  <a href="https://dl.dropbox.com/s/9zzq4eehfvjnsrt/CAPE%20Food%20and%20Nutrition%20Past%20Papers%20Ui%20_U2%202005%20-%202016.pdf?dl=0">
                    <Img
                      style={{ width: "100%" }}
                      src={[
                        "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482524_22.jpg",
                        ""
                      ]}
                    />
                  </a>
                </Col>

                {/* Law */}
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br />
                  <a href="https://dl.dropbox.com/s/0tdxb2o1fx4k3ti/CAPE%C2%AE%20Law%20Past%20Papers%20u%201%20_%202%202005%20-2016.pdf?dl=0">
                    <Img
                      style={{ width: "100%" }}
                      src={[
                        "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482180_23.jpg",
                        ""
                      ]}
                    />
                  </a>
                </Col>

                {/* Biology */}
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br />
                  <a href="https://dl.dropbox.com/s/lzugxqjfns8l7ee/CAPE%20Biology%20Past%20Papers%20unit%201_2%202005-2016.pdf?dl=0">
                    <Img
                      style={{ width: "100%" }}
                      src={[
                        "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482654_3.jpg",
                        ""
                      ]}
                    />
                  </a>
                </Col>

                {/* Agricultural Science */}
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br />
                  <a href="https://dl.dropbox.com/s/eqc4v3bjrk1yh9j/CAPE%20Agricultural%20Science%20Past%20Papers.pdf?dl=0">
                    <Img
                      style={{ width: "100%" }}
                      src={[
                        "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9781786322128.jpg",
                        ""
                      ]}
                    />
                  </a>
                </Col>

                {/* Economics */}
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br />
                  <a href="https://dl.dropbox.com/s/bf25mxz6l6nrz5x/CAPE%20Economics%20Past%20Papers%20U1%20_U2%202005-2016.pdf?dl=0">
                    <Img
                      style={{ width: "100%" }}
                      src={[
                        "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482081_4.jpg",
                        ""
                      ]}
                    />
                  </a>
                </Col>

                {/* Art and Design */}
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br />
                  <a href="https://dl.dropbox.com/s/ypiop2ihdajo9hj/CAPE%20Art%20and%20Design%20Past%20Papers%20Unit1_2%202005-2016.pdf?dl=0">
                    <Img
                      style={{ width: "100%" }}
                      src={[
                        "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482128_24.jpg",
                        ""
                      ]}
                    />
                  </a>
                </Col>

                {/* Caribbean Studies */}
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br />
                  <a href="https://dl.dropbox.com/s/dv54g2wvjj9uy9s/CAPE%20Caribbean%20Studies%20Past%20Papers%202006-2016.pdf?dl=0">
                    <Img
                      style={{ width: "100%" }}
                      src={[
                        "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482760_24.jpg",
                        ""
                      ]}
                    />
                  </a>
                </Col>

                {/* Management of Business */}
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br />

                  <a href="https://dl.dropbox.com/s/9l4pzd1e1k2566g/CAPE%20Management%20of%20Business%20Past%20Papers%20u1%20_%20U2%202005-201.pdf?dl=0">
                    <Img
                      style={{ width: "100%" }}
                      src={[
                        "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482111_23.jpg",
                        ""
                      ]}
                    />
                  </a>
                </Col>

                {/* Environmental Science */}
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br />
                  <a href="https://dl.dropbox.com/s/5q7ordpl6wqf8sc/CAPE%20Environmental%20Science%20Past%20Papers%20Unit%201%20_%20%40%202005%20-%202016.pdf?dl=0">
                    <Img
                      style={{ width: "100%" }}
                      src={[
                        "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230481978_22.jpg",
                        ""
                      ]}
                    />
                  </a>
                </Col>

                {/* */}
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br />
                  <a href="">
                    <Img style={{ width: "100%" }} src={["", ""]} />
                  </a>
                </Col>
              </Row>
            </ResourcesLayout>
          </Container>
        </Layout>
      </React.Fragment>
    );
  }
}

export default CAPEPapers;
