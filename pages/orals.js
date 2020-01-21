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
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import Head from "next/head";
import SEO from "react-seo-component";
// Layout
import Layout from "../components/Layout";
import OralsLayout from "../orals-components/OralsLayout";
import Img from "react-image";
import Collapsible from "react-collapsible";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

console.log(today);

const Orals = props => (
  <Layout>
    <SEO
      title={"Orals | CXC Spanish Online"}
      pathname={"https://www.cxcspnish/mailing-list"}
      description={
        "Practice for your Spanish oral exam with our online study guide. Listen to responses from natives, teachers and other students."
      }
      siteLanguage={"en"}
      twitterUsername={"_rxheem"}
      author={"Raheem McDonald"}
      article={true}
      publishedDate={"01/13/2020"}
      modifiedDate={today}
    />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Orals</BreadcrumbItem>
      </Breadcrumb>

      <OralsLayout>
        <Card>
          <CardBody>
            <Row>
              <Col sm={12} md={9} lg={9} xl={9}>
                <CardTitle>Orals</CardTitle>
                <br />
                <p>
                  Practice for your Spanish oral exam with our oral practice
                  guide. We've taken and listed questions from multiple past
                  papers so you can practice with your friends, in class and in
                  your spare time.
                </p>

                <br />
                <Row>
                  <Col sm={12} md={6} lg={6} xl={6}>
                    <h6>Responses to Instructions</h6>

                    <br />
                    <ul style={{ marginLeft: "-20px" }}>
                      <li>
                        <Collapsible trigger={<a href="">June 2007 Paper</a>}>
                          <div style={{ paddingTop: "10px" }}>
                            <ul style={{ marginLeft: "-20px" }}>
                              <li>
                                <a className="text-dark" href="/orals/">
                                  Sample 1
                                </a>
                              </li>
                              <li style={{ paddingTop: "10px" }}>
                                <a className="text-dark" href="/orals/">
                                  Sample 2
                                </a>
                              </li>
                              <li style={{ paddingTop: "10px" }}>
                                <a className="text-dark" href="/orals/">
                                  Sample 3
                                </a>
                              </li>
                              <li style={{ paddingTop: "10px" }}>
                                <a className="text-dark" href="/orals/">
                                  Sample 5
                                </a>
                              </li>
                              <li style={{ paddingTop: "10px" }}>
                                <a className="text-dark" href="/orals/">
                                  Sample 6
                                </a>
                              </li>
                            </ul>
                          </div>
                        </Collapsible>
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <Collapsible trigger={<a href="">June 2008 Paper</a>}>
                          <div style={{ paddingTop: "10px" }}>
                            <ul style={{ marginLeft: "-20px" }}>
                              <li>
                                <a
                                  className="text-dark"
                                  href="/orals/situations/2008/sample-1"
                                >
                                  Sample 1
                                </a>
                              </li>
                              <li style={{ paddingTop: "10px" }}>
                                <a
                                  className="text-dark"
                                  href="/orals/situations/2008/sample-2"
                                >
                                  Sample 2
                                </a>
                              </li>
                              <li style={{ paddingTop: "10px" }}>
                                <a
                                  className="text-dark"
                                  href="/orals/situations/2008/sample-3"
                                >
                                  Sample 3
                                </a>
                              </li>
                              <li style={{ paddingTop: "10px" }}>
                                <a
                                  className="text-dark"
                                  href="/orals/situations/2008/sample-4"
                                >
                                  Sample 4
                                </a>
                              </li>
                              <li style={{ paddingTop: "10px" }}>
                                <a
                                  className="text-dark"
                                  href="/orals/situations/2008/sample-5"
                                >
                                  Sample 5
                                </a>
                              </li>
                            </ul>
                          </div>
                        </Collapsible>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={12} md={6} lg={6} xl={6}>
                    <br className="d-sm-none" />
                    <h6>Conversation</h6>

                    <br />
                    <ul style={{ marginLeft: "-20px" }}>
                      <li>
                        <a href="/orals/conversation/school">
                          School and Career
                        </a>
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <a href="/orals/conversation/sports">
                          Sports and Recreational
                        </a>
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <a href="/orals/conversation/home-and-family">
                          Home and Family
                        </a>
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <a href="/orals/conversation/travel">Travel</a>
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <a href="/orals/conversation/shopping">Shopping</a>
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <a href="/orals/conversation/daily-routine">
                          Daily Routine
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col sm={12} md={3} lg={3} xl={3}>
                <BrowserView>
                  <Img
                    src={[
                      "https://www.pinclipart.com/picdir/big/64-644580_motivational-clipart-public-speaking-public-speaking-speech-icon.png",
                      "https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/2/8/2872.9-person-speaking-icon-iconbunny.jpg",
                      "https://i1.wp.com/rekenekt.org/wp-content/uploads/2017/02/speaking-icon.png?w=1216",
                      "https://images.squarespace-cdn.com/content/v1/5b4cb308e2ccd1c969af029f/1573146099582-MLVKYYRLUU40ABWFPXFI/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwkCFOLgzJj4yIx-vIIEbyWWRd0QUGL6lY_wBICnBy59Ye9GKQq6_hlXZJyaybXpCc/Speaking+Icon+3.png?format=100w",
                      "https://images.squarespace-cdn.com/content/v1/5b4cb308e2ccd1c969af029f/1573145777438-VEB955GCMMXBLNCON65K/ke17ZwdGBToddI8pDm48kPnsf5mMwK3KDy1tisBlUmRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpz-e-UqgkMEfcidCGc60YhJxyx2DguYXodNYGkBnakWNjMf4spqvx95de_vD8JxcLk/Employees.jpg?format=300w"
                    ]}
                    alt="image of listening"
                    style={{ width: "100%" }}
                    className="rounded-circle"
                  />
                </BrowserView>
              </Col>
            </Row>
          </CardBody>
        </Card>

        <br />
        <Card>
          <CardBody>
            <Row>
              <Col sm={12} md={3} lg={3} xl={3}>
                <BrowserView>
                  <Img
                    src={[
                      "https://dl.dropbox.com/s/fof45k0wvwe7d84/kindpng_2270355.png?dl=0",
                      "https://cdn1.iconfinder.com/data/icons/education-1-15/151/26-512.png",
                      "http://icons.iconarchive.com/icons/graphicloads/100-flat/128/student-icon.png",
                      "http://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Student-3-icon.png",
                      "https://cdn2.iconfinder.com/data/icons/school-flat-circle/512/Boy_child_kid_school_boy_student-512.png",
                      "https://www.pngkit.com/png/detail/126-1268278_faqs-for-students-college-student-students-icon.png"
                    ]}
                    alt="image of listening"
                    style={{ width: "100%" }}
                    className="rounded-circle"
                  />
                </BrowserView>
              </Col>
              <Col sm={12} md={9} lg={9} xl={9}>
                <br className="d-sm-none" />
                <CardTitle>Student Submissions</CardTitle>

                <br />
                <p>
                  We aked our stuents for their input as well. Let's hear what
                  the common answers are for the top questions asked during your
                  Spanish orals.
                </p>

                <a href="/orals/student-submissions">View submissions</a>
              </Col>
            </Row>
          </CardBody>
        </Card>

        <br />
        <Card>
          <CardBody>
            <CardTitle>Reading Comprehension</CardTitle>
            <br />
            <p>
              The reading comprehension aspect of your oral exams assesses your
              ability to read competently in Spanish.
            </p>
            <ul style={{ marginLeft: "-20px" }}>
              <li>
                <a href="">Purchasing Handicraft</a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="">A Typical Spanish Dish</a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="">Attractive Features of Cuba</a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="">The Hispanic Family</a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="">The Geography of the Hispanic World</a>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <a href="">An Ecuadorean Writer</a>
              </li>
            </ul>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </OralsLayout>
    </Container>
  </Layout>
);

export default Orals;
