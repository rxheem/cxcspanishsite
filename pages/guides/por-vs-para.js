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
import Table from "react-bootstrap/Table";
import SEO from "react-seo-component";

// Layout
import Layout from "../../components/Layout";
import GuideLayout from "../../guide-components/GuideLayout";

// Common components
import Answer from "../../common/Answer";
import Tab from "react-bootstrap/Tab";
import TabContainer from "react-bootstrap/TabContainer";
import Tabs from "react-bootstrap/Tabs";

const PorVsPara = props => (
  <div id="por-vs-para">
    <Head>
      <title>Spanish Por vs. Para | CXC Spanish Guide</title>
      <meta
        name="description"
        content="Learn everything you need to know about these two essential words, por and para, and how to use them."
      />
      <meta name="subject" content="Spanish Por vs. Para" />
      <meta
        name="og:title"
        content="Spanish Por vs. Para | CXC Spanish Guide"
      />
      <meta name="og:type" content="article" />
      <meta
        name="og:description"
        content="Learn everything you need to know about these two essential words, por and para, and how to use them"
      />
      <meta name="og:site_name" content="CXC Spanish Online" />
      <meta name="topic" content="Spanish Por vs. Para" />
      <meta
        name="summary"
        content="Learn everything you need to know about these two essential words, por and para, and how to use them."
      />
      <meta name="url" content="http://www.cxcspanish.com/guides/" />
    </Head>
    <Layout>
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/guide">Guides</a>
          </BreadcrumbItem>
          <BreadcrumbItem active></BreadcrumbItem>
        </Breadcrumb>
        <GuideLayout>
          <Card>
            <CardBody>
              <CardTitle>'Por' vs. 'Para'</CardTitle>
              <p>
                In Spanish the prepositions{" "}
                <span className="text-primary">'por'</span> and{" "}
                <span className="text-primary">'para'</span> have a variety of
                meanings and learning the differences between them is often
                quite challenging, and with good reason. The both literally mean{" "}
                <span className="text-primary">'for'</span> in English, but are
                used in many different ways and take on additional meanings.
              </p>

              <p>
                Here we will discuss the differences and uses of both{" "}
                <span className="text-primary">'por'</span> and{" "}
                <span className="text-primary">'para'</span>, discuss examples
                and take a look at idiomatic express used with these two words.
              </p>
            </CardBody>

            <br />
            <Tabs defaultActiveKey="por" id="uncontrolled-tab-example">
              <Tab eventKey="" title=""></Tab>
              <Tab eventKey="por" title="Uses of Por">
                <Tab.Container>
                  <CardBody>
                    <h5>Uses of 'Por'</h5>
                    <p>
                      <span className="text-primary">'Por'</span> is used to
                      express duration, gratitude, travel, exchanges and many
                      other uses. Let's take a look at some of them.
                    </p>
                  </CardBody>
                  <CardFooter>
                    {/* Duration */}
                    <br />
                    <React.Fragment>
                      <h6 className="text-info">Duration</h6>
                      <p>
                        Por is used to talk about the duration of an activity or
                        an action.
                      </p>
                      <Answer
                        text="Nosotros estudiamos japonés por siete años"
                        translated="We studied Japanese for 7 years"
                        href="https://www.spanishdict.com/translate/Estudiamos%20japon%C3%A9s%20for%207%20a%C3%B1os"
                      />
                      <Answer
                        noIcon
                        text="Vamos a andar por el parque"
                        translated="Let’s walk through the park"
                      />
                    </React.Fragment>
                  </CardFooter>
                  <CardBody>
                    {/* Duration */}
                    <br />
                    <React.Fragment>
                      <h6 className="text-info">Travel and Communication</h6>
                      <p>
                        ‘Por’ is used when we talk about the way we travel and
                        communicate. This refers to the mode of transport, such
                        as by plane, car, bus, train or the way in which we
                        communicate (by phone, email or letter).
                      </p>
                      <Answer
                        text="Yo te contacté por correo electrónico"
                        translated="I contacted you by email"
                        href="https://www.spanishdict.com/translate/Yo%20te%20contact%C3%A9%20por%20correo%20electr%C3%B3nico"
                      />
                      <Answer
                        text="Nosotros vamos a viajar por avión"
                        translated="We will travel by plane"
                        href="https://www.spanishdict.com/translate/Nosotros%20vamos%20a%20viajar%20por%20avi%C3%B3n"
                      />
                      <Answer
                        noIcon
                        text="Yo tengo que trabajar por ocho horas hoy"
                        translated="I have to work for 8 hours today"
                      />
                    </React.Fragment>
                  </CardBody>
                  <CardFooter>
                    {/* Gratitude */}
                    <br />
                    <React.Fragment>
                      <h6 className="text-info">Gratitude</h6>
                      <p>Por can be used to express gratitude in Spanish.</p>
                      <Answer
                        noIcon
                        text="Gracias por llamar today"
                        translated="Thank you for calling hoy"
                      />
                    </React.Fragment>
                  </CardFooter>
                  <CardBody>
                    {/* Exchnages */}
                    <br />
                    <React.Fragment>
                      <h6 className="text-info">Trades and Exchnages</h6>
                      <p>Por’ is used to talk about exchanges and trades.</p>
                      <Answer
                        noIcon
                        text="Lisa me pagó 300 pesos por el teléfono"
                        translated="Lisa paid me 300 pesos for the phone"
                        href=""
                      />
                      <Answer
                        noIcon
                        text="Te doy sesenta pesos por la mochila"
                        translated="I'll give you sixty pesos for that backpack."
                      />
                      <Answer
                        text="Te cambio mi manzana por tu sandwich"
                        translated="I'll trade you my apple for your sandwich"
                        href="https://www.spanishdict.com/translate/Te%20cambio%20mi%20manzana%20por%20tu%20sandwich"
                      />
                    </React.Fragment>
                  </CardBody>
                  <CardFooter>
                    {/* Idiomatic Expressions  */}
                    <React.Fragment>
                      <br />
                      <h6 className="text-info">Idiomatic Expressions</h6>
                      <p>
                        There are also a number of phrases and idiomatic that
                        are formed with{" "}
                        <span className="text-primary">'por'</span>. Some are:
                      </p>

                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Phrase</th>
                            <th>Translation</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>por suerte</td>
                            <td>fortunately</td>
                          </tr>
                          <tr>
                            <td>por último</td>
                            <td>finally</td>
                          </tr>
                          <tr>
                            <td>por otro lado</td>
                            <td>on the other hand</td>
                          </tr>
                          <tr>
                            <td>por la primera vez</td>
                            <td>for the first time</td>
                          </tr>
                          <tr>
                            <td>por esto</td>
                            <td>for this reason</td>
                          </tr>
                          <tr>
                            <td>por supuesto </td>
                            <td>of course</td>
                          </tr>
                          <tr>
                            <td>por lo menos </td>
                            <td>at least</td>
                          </tr>
                          <tr>
                            <td>por ciento </td>
                            <td>per cent</td>
                          </tr>
                        </tbody>
                      </Table>
                    </React.Fragment>
                  </CardFooter>
                </Tab.Container>
              </Tab>
              <Tab eventKey="para" title="Uses of Para">
                <Tab.Container>
                  <CardBody>
                    <h5>Uses of 'Para'</h5>
                    <p></p>
                  </CardBody>
                  <CardFooter>
                    {/* Duration */}
                    <br />
                    <React.Fragment>
                      <h6 className="text-info"></h6>
                      <p></p>
                      <Answer noIcon text="" translated="" href="" />
                      <Answer noIcon text="" translated="" href="" />
                      <Answer text="" translated="" href="" />
                    </React.Fragment>
                  </CardFooter>
                  <CardBody>
                    {/* Duration */}
                    <br />
                    <React.Fragment>
                      <h6 className="text-info"></h6>
                      <p></p>
                      <Answer noIcon text="" translated="" href="" />
                      <Answer text="" translated="" href="" />
                      <Answer noIcon text="" translated="" href="" />
                    </React.Fragment>
                  </CardBody>
                  <CardFooter>
                    {/* Gratitude */}
                    <br />
                    <React.Fragment>
                      <h6 className="text-info"></h6>
                      <p></p>
                      <Answer noIcon text="" translated="" href="" />
                      <Answer noIcon text="" translated="" href="" />
                      <Answer text="" translated="" href="" />
                    </React.Fragment>
                  </CardFooter>
                  <CardBody>
                    {/* Exchnages */}
                    <br />
                    <React.Fragment>
                      <h6 className="text-info"></h6>
                      <p></p>
                      <Answer noIcon text="" translated="" href="" />
                      <Answer text="" translated="" href="" />
                      <Answer text="" translated="" href="" />
                    </React.Fragment>
                  </CardBody>
                  <CardFooter>
                    {/* Frequency */}
                    <React.Fragment>
                      <br />
                      <h6 className="text-info"></h6>
                      <p></p>
                      <Answer noIcon text="" translated="" href="" />
                      <Answer noIcon text="" translated="" href="" />
                      <Answer text="" translated="" href="" />
                    </React.Fragment>
                  </CardFooter>
                </Tab.Container>
              </Tab>
            </Tabs>
          </Card>
        </GuideLayout>
      </Container>
    </Layout>

    <style>{`
      .nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {
      border: 0!important;
      }
      `}</style>
  </div>
);

export default PorVsPara;
