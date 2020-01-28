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
import Head from "next/head";
import Speech from "speak-tts";
import SEO from "react-seo-component";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import Collapsible from "react-collapsible";
import Answer from "../../../common/Answer.js";

// Layout
import Layout from "../../../components/Layout";
import OralsLayout from "../../../orals-components/OralsLayout";

// Tabs
import { Tabs, Tab } from "react-bootstrap";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

console.log(today);

const School = props => (
  <Layout>
    <SEO
      title={"School - Oral Practice | CXC Spanish Online"}
      pathname={"https://www.cxcspnish/mailing-list"}
      description={
        "Learn to talk about school in Spanish. Practice speaking with our CXC Spanish online guide."
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
        <BreadcrumbItem>
          <a href="/orals">Orals</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/orals">Conversation</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>School</BreadcrumbItem>
      </Breadcrumb>

      <OralsLayout>
        <Card>
          <MobileView>
            <CardImg
              style={{ width: "100%" }}
              alt="image of students"
              src="https://images.all-free-download.com/images/graphiclarge/students_icons_modern_colored_cartoon_characters_6837733.jpg"
            />
          </MobileView>
          <CardBody>
            <CardTitle>School</CardTitle>

            <br />
            <Tabs defaultActiveKey="2006">
              <Tab eventKey="2006" title="May 2006">
                <br />
                <div>
                  <ul style={{ marginLeft: "-10px" }}>
                    <li>
                      <Collapsible
                        trigger={
                          <a href="">¿Qué te gusta más de tu escuela?</a>
                        }
                      >
                        <br />
                        <div>
                          <Answer
                            text="Me gustan a los profesores y mis amigos"
                            translated="I like the teachers and my friends"
                            href="https://www.spanishdict.com/translate/Me%20gustan%20los%20profesores%20y%20mis%20amigos%0A%0A"
                          />
                          <Answer
                            text="La comida que ofrecen en la cantina es deliciosa"
                            translated="The food they offer in the canteen is delicious"
                            href="https://www.spanishdict.com/translate/La%20comida%20que%20ofrecen%20en%20la%20cantina%20es%20deliciosa%0A%0A"
                          />
                        </div>
                      </Collapsible>
                    </li>
                    <br />
                    <li>
                      <Collapsible
                        trigger={
                          <a href="">
                            ¿Hace cuánto tiempo asistes a esta escuela?
                          </a>
                        }
                      >
                        <br />
                        <div>
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                        </div>
                      </Collapsible>
                    </li>

                    <br />
                    <li>
                      <Collapsible
                        trigger={
                          <a href="">
                            ¿Cuáles son las asignaturas que estudias?
                          </a>
                        }
                      >
                        <br />
                        <div>
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                        </div>
                      </Collapsible>
                    </li>
                    <br />
                    <li>
                      <Collapsible
                        trigger={
                          <a href="">
                            ¿Cuántos profesores de español hay en tu escuela?
                          </a>
                        }
                      >
                        <br />
                        <div>
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                        </div>
                      </Collapsible>
                    </li>
                    <br />
                    <li>
                      <Collapsible
                        trigger={
                          <a href="">¿Cómo es tu profesor de español?</a>
                        }
                      >
                        <br />
                        <div>
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                        </div>
                      </Collapsible>
                    </li>
                    <br />
                    <li>
                      <Collapsible
                        trigger={
                          <a href="">¿Qué días tienes tú clase de español?</a>
                        }
                      >
                        <br />
                        <div>
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                        </div>
                      </Collapsible>
                    </li>
                    <br />
                    <li>
                      <Collapsible
                        trigger={
                          <a href="">¿A qué hora tienes clases de español?</a>
                        }
                      >
                        <br />
                        <div>
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                        </div>
                      </Collapsible>
                    </li>
                    <br />
                    <li>
                      <Collapsible
                        trigger={
                          <a href="">
                            ¿Que se puede ver en el camino de tu casa ala
                            escuela?
                          </a>
                        }
                      >
                        <br />
                        <div>
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                          <Answer text="" translated="" href="" />
                        </div>
                      </Collapsible>
                    </li>
                  </ul>
                </div>
              </Tab>
              <Tab eventKey="2007" title="May 2007">
                <br />
                <div>
                  <ul style={{ marginLeft: "-10px" }}>
                    <li>
                      <Collapsible trigger={<a href=""></a>}>
                        <br />
                      </Collapsible>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Collapsible trigger={<a href=""></a>}>
                        <br />
                      </Collapsible>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Collapsible trigger={<a href=""></a>}>
                        <br />
                      </Collapsible>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Collapsible trigger={<a href=""></a>}>
                        <br />
                      </Collapsible>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Collapsible trigger={<a href=""></a>}>
                        <br />
                      </Collapsible>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Collapsible trigger={<a href=""></a>}>
                        <br />
                      </Collapsible>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Collapsible trigger={<a href=""></a>}>
                        <br />
                      </Collapsible>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Collapsible trigger={<a href=""></a>}>
                        <br />
                      </Collapsible>
                    </li>
                  </ul>
                </div>
              </Tab>
              <Tab
                className={isMobile ? "invisible" : null}
                eventKey="2008"
                title="June 2008"
              >
                <br />
                <div>
                  <ul style={{ marginLeft: "-10px" }}>
                    <li>
                      <Collapsible trigger={<a href=""></a>}>
                        <br />
                      </Collapsible>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Collapsible trigger={<a href=""></a>}>
                        <br />
                      </Collapsible>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Collapsible trigger={<a href=""></a>}>
                        <br />
                      </Collapsible>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Collapsible trigger={<a href=""></a>}>
                        <br />
                      </Collapsible>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Collapsible trigger={<a href=""></a>}>
                        <br />
                      </Collapsible>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Collapsible trigger={<a href=""></a>}>
                        <br />
                      </Collapsible>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Collapsible trigger={<a href=""></a>}>
                        <br />
                      </Collapsible>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <Collapsible trigger={<a href=""></a>}>
                        <br />
                      </Collapsible>
                    </li>
                  </ul>
                </div>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </OralsLayout>
    </Container>
  </Layout>
);

export default School;
