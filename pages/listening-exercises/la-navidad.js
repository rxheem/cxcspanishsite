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

import { Tab, Tabs, TabContent } from "react-bootstrap";
import uuidv4 from "uuid";
import Head from "next/head";
import ListeningLayout from "../../listening-components/ListeningLayout";

import PDFFile from "../../common/PDFFile";

// Layout
import Layout from "../../components/Layout";
import SEO from "react-seo-component";

const numberOfQuestions = 6;

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

console.log(today);

const LaNavidad = props => (
  <Layout>
    <SEO
      title={"La Navidad - Listening Exercise | CXC Spanish Online"}
      description={
        "Practice your Spanish listening skills and learn about how Kelly spends her Christmas. Pass your CXC Spanish exam with our free online study guide."
      }
      twitterUsername={"_rxhe3m"}
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
          <a href="/listening">Listening Exercises</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>La Navidad</BreadcrumbItem>
      </Breadcrumb>

      <ListeningLayout>
        <Card>
          <CardBody>
            <CardTitle>La Navidad</CardTitle>
            <br />
            <p>Listen to the following audio and answer the questions below.</p>
            <br />

            <Row>
              <Col sm={12} md={6} lg={6} xl={6}>
                <h6>Normal Speed</h6>
                <div className="audio">
                  <audio controls>
                    <source src="https://dl.dropbox.com/s/hqo78115wpcjo4m/la-navidad.mp3?dl=0" />
                  </audio>
                </div>
              </Col>
              <Col sm={12} md={6} lg={6} xl={6}></Col>
            </Row>

            <br />
            <Collapsible trigger={<a href="">Read transcript</a>}>
              <p style={{ paddingTop: "10px" }}>
                <b>Ricardo: </b>¡Feliz Navidad Kelly!
              </p>
              <p>
                <b>Kelly:</b> ¡Feliz Navidad! ¿Te gusta esta temporada del año?
              </p>
              <p>
                <b>Ricardo: </b>Pues sí y no. La verdad me encanta el tiempo con
                la familia y el intercambio de regalos, pero odio el frío. ¿Y a
                ti?
              </p>
              <p>
                <b>Kelly:</b> Me gusta. Es muy festivo todo. ¿Qué quieres que te
                regalen este año?
              </p>
              <p>
                <b>Ricardo: </b>Pues en realidad no soy muy exigente. Me
                conformo con que me llamen y me feliciten mis amigos y
                familiares. Aunque claro, siempre regalo y recibo algo, ¿y tú?
              </p>
              <p>
                <b>Kelly: </b>Mentiroso. Quieres que te regalen una televisión
                de alta definición. Te conozco. Honestamente, quiero que me
                regale las cosas que no compro a menudo. Ropa, artículos para la
                cocina, libros, música. ¡Me gusta regalar y recibir!
              </p>
              <p>
                <b>Ricardo:</b> ¿Cómo sabes de mi lista para Santa? Pues la
                verdad me encantaría una tele de alta definición, pero con esta
                economía, no creo que a Santa le parezca una buena idea. Pues,
                espero que recibas lo que vayas realmente a usar, y no cosas que
                terminan en el garaje.
              </p>
              <p>
                <b>Kelly:</b> Mis cosas no terminan en el garaje. Terminan
                amontonadas en el armario de mi esposo. Ni modo. Bueno, qué
                pases felices fiestas.
              </p>
              <p>
                <b>Ricardo:</b> Igualmente. ¡Hasta luego!
              </p>
            </Collapsible>

            <br />
            <br />
            <h6>Questions</h6>

            <ul style={{ marginLeft: "-20px" }}>
              <li>
                <Collapsible
                  trigger={
                    <a href="">
                      What does Ricardo enjoy the most about Christmas?
                    </a>
                  }
                >
                  <p style={{ paddingTop: "10px" }}>
                    He likes the time he spends with his family and exhanging
                    gifts.
                  </p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={
                    <a href="">
                      What does Ricardo dislike the most about Christmas?
                    </a>
                  }
                >
                  <p style={{ paddingTop: "10px" }}>
                    He does not like the cold.
                  </p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={
                    <a href="">
                      What does Kelly think that Ricardo want for Christmas?
                    </a>
                  }
                >
                  <p style={{ paddingTop: "10px" }}>A HD TV</p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={
                    <a href="">What does Kelly really want for Christmas?</a>
                  }
                >
                  <p style={{ paddingTop: "10px" }}>
                    She wants items that she does not often buy: clothes,
                    kitchen utensil, books and music.
                  </p>
                </Collapsible>
              </li>
            </ul>
          </CardBody>
        </Card>
      </ListeningLayout>
    </Container>
  </Layout>
);

export default LaNavidad;
