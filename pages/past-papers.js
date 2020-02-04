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
import ResourcesLayout from "../resources-components/ResourcesLayout";

// Layout
import Layout from "../components/Layout";
import Img from "react-image";
import Collapsible from "react-collapsible";

// Common
import PDFFile from "../common/PDFFile";

const liStyle = { paddingBottom: "15px" };

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

class PastPapers extends React.Component {
  constructor(props) {
    super(props);

    this.state = { collapse: false };
  }

  render() {
    return (
      <React.Fragment>
        <Layout>
          <SEO
            title={"Get Free CXC Past Papers | CXC Spanish Online"}
            pathname={"https://www.cxcspnish/mailing-list"}
            description={
              "Download CXC past papers for free, for both CSEC and CAPE. Pass your Spansih exam with our free online study guide."
            }
            siteLanguage={"en"}
            twitterUsername={"_rxheem"}
            author={"Raheem McDonald"}
            article={true}
            publishedDate={today}
            modifiedDate={today}
          />

          <Container>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Past Papers</BreadcrumbItem>
            </Breadcrumb>

            <ResourcesLayout>
              <Card>
                <CardBody>
                  <p>
                    Need one on one help? Join our{" "}
                    <a
                      href="https://chat.whatsapp.com/BurCEr11DKRJyas6VKUc0n"
                      targer="_blank"
                      preload
                    >
                      study group
                    </a>
                  </p>

                  <p>
                    <a
                      href="https://chat.whatsapp.com/J79uO72mCF00vlSV0o6QRv"
                      targer="_blank"
                      preload
                    >
                      Join here
                    </a>{" "}
                    if you're a Jamaican student.
                  </p>
                </CardBody>
              </Card>
              <br />
              <Card>
                <CardBody>
                  <Row>
                    {/* French */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <a href="https://dl.dropbox.com/s/2mfr0aiatvd6ok2/CSEC%20French%20Past%20Papers2005-2016.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230481930_3.jpg",
                            ""
                          ]}
                        />
                      </a>
                    </Col>

                    {/* HSB */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br className="d-sm-none" />
                      <a href="https://dl.dropbox.com/s/x8mb5ttahb96cdm/CSEC%20Human%20and%20Social%20Biology%20Past%20Papers%202005-2016.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482340_3.jpg",
                            ""
                          ]}
                        />
                      </a>
                    </Col>

                    {/* Add Maths */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br className="d-sm-none" />
                      <a href="https://dl.dropbox.com/s/ua9y9p9qzoj0uom/CSEC%20Mathematics%20Past%20Papers%202002-2016.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482784_5.jpg",
                            "https://cxc-store.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482784_5.jpg"
                          ]}
                        />
                      </a>
                    </Col>

                    {/* Info Tech */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br className="d-sm-none" />
                      <a href="https://dl.dropbox.com/s/lah9uv8qmfnt5d5/CSEC%20Information%20Technology%20Past%20Papers%202005-2016.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482586_3.jpg"
                          ]}
                        />
                      </a>
                    </Col>

                    {/* Add Maths */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br />
                      <a href="https://dl.dropbox.com/s/1yjzpsrvstln7ef/CSEC%20Additional%20Mathematics%20Past%20Papers%202012-2016.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482357_25.jpg"
                          ]}
                        />
                      </a>
                    </Col>

                    {/* Geography */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br />
                      <a href="https://dl.dropbox.com/s/79j1lfqa4cde874/CSEC%20Geography%20Past%20Papers%202005-2016.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482678_3.jpg"
                          ]}
                        />
                      </a>
                    </Col>

                    {/* Spanish */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br />
                      <a href="https://dl.dropbox.com/s/h76ga6bxhdeex94/CSEC%C2%AE%20Spanish%20Past%20Papers-2_nodrm%20%281%29.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482630_4.jpg",
                            ""
                          ]}
                        />
                      </a>
                    </Col>

                    {/*  */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br />
                      <a href="https://dl.dropbox.com/s/roab9y8tla4omwn/CSEC%C2%AE%20Electronic%20Document%20Preparation%20and%20Management%20Past%20Papers.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482593_23.jpg"
                          ]}
                        />
                      </a>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <br />
              <Card>
                <CardBody>
                  <Row>
                    {/* Chemistry */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br />
                      <a href="https://dl.dropbox.com/s/8rd7g5gah9afrz5/CSEC%20Chemistry%20Past%20Papers%20ebook%202005-2016.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482661_25.jpg"
                          ]}
                        />
                      </a>
                    </Col>

                    {/* Physics */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br />
                      <a href="https://dl.dropbox.com/s/pf0q8yt54px0cf5/CSEC%20Physics%20Past%20Papers%202005-2016.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482234_5.jpg"
                          ]}
                        />
                      </a>
                    </Col>

                    {/* Integrated Science */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br />
                      <a href="https://dl.dropbox.com/s/51iabpc0d65984i/CSEC%20Integrated%20Science%20Past%20Papers%202005-2016.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482142_3.jpg"
                          ]}
                        />
                      </a>
                    </Col>

                    {/* Music */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br />
                      <a href="https://dl.dropbox.com/s/8qrtne9kxfc43cl/CSEC%20Music%20Past%20Papers2005-2016.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230481855_4.jpg"
                          ]}
                        />
                      </a>
                    </Col>

                    {/* Home Economics */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br />
                      <a href="https://dl.dropbox.com/s/56a3rod7v5all4q/CSEC%20Home%20Economics%20Clothing%20and%20Textiles%20Food%20and%20Nutrition%20Ma%202005-2016.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482067_4.jpg"
                          ]}
                        />
                      </a>
                    </Col>

                    {/* POA */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br />
                      <a href="https://dl.dropbox.com/s/pjxzrtjro4lpuyg/CSEC%20Principles%20of%20Accounts%20Past%20Papers%202005-2016.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482494_3.jpg"
                          ]}
                        />
                      </a>
                    </Col>

                    {/* POB */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br />
                      <a href="https://dl.dropbox.com/s/atlvl91is281wv5/CSEC%20Principles%20of%20Business%20Past%20Papers%202005-2016.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482876_3.jpg"
                          ]}
                        />
                      </a>
                    </Col>

                    {/* Theater Arts */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br />
                      <a href="https://dl.dropbox.com/s/2fbjrn3ydbcg78g/CSEC%20Theatre%20Arts%20Past%20Papers%202005-2016.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482685_4.jpg"
                          ]}
                        />
                      </a>
                    </Col>

                    {/* Visual Arts */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br />
                      <a href="https://dl.dropbox.com/s/r5gnwzj7lzuci68/CSEC%20Visual%20Arts%20Past%20Papers%202005-2016.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482302_4.jpg"
                          ]}
                        />
                      </a>
                    </Col>

                    {/* Social Studies */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br />
                      <a href="https://dl.dropbox.com/s/aioc9p8enukhoz2/CSEC%20Social%20Studies%20Past%20Papers%202005-2016.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482104_3.jpg"
                          ]}
                        />
                      </a>
                    </Col>

                    {/* English A */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br />
                      <a href="https://dl.dropbox.com/s/hcffklht2co7yke/CSEC%C2%AC%20English%20A%20Past%20Papers.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482616_3.jpg"
                          ]}
                        />
                      </a>
                    </Col>

                    {/* English B */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br />
                      <a href="https://dl.dropbox.com/s/a751mtqz7il6fc2/CSEC%20English%20B%20Past%20Papers2005-2016.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482623_4.jpg"
                          ]}
                        />
                      </a>
                    </Col>

                    {/* Biology */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br />
                      <a href="https://dl.dropbox.com/s/dx3pfbr9450uxw5/CSEC%C2%AC%20Biology%20Past%20Papers.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482456_25.jpg"
                          ]}
                        />
                      </a>
                    </Col>

                    {/* Technical Drawing */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br />
                      <a href="https://dl.dropbox.com/s/qprverq0x541yhf/CSEC%20Technical%20Drawing%20Past%20Papers%202005-2016.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230481824_3.jpg"
                          ]}
                        />
                      </a>
                    </Col>

                    {/* Caribbean History */}
                    <Col sm={6} md={3} lg={3} xl={3}>
                      <br />
                      <a href="https://dl.dropbox.com/s/weokr1z9mn4ckms/CSEC%20Caribbean%20History%20Past%20Papers%202005-2016.pdf?dl=0">
                        <Img
                          style={{ width: "100%" }}
                          src={[
                            "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482319_23.jpg"
                          ]}
                        />
                      </a>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </ResourcesLayout>
          </Container>
        </Layout>
      </React.Fragment>
    );
  }
}

export default PastPapers;
