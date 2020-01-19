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

const UnaVisitaDeEspana = props => (
  <Layout>
    <SEO
      title={"Una Visita De España - Listening Exercise | CXC Spanish Online"}
      description={
        "Practuce your listening skill one of our shirt stories, Una Visita De España. Pass your CXC Spanish exam with our free online study guide."
      }
      twitterUsername={"_rxhem"}
      author={"Raheem McDonald"}
      article={true}
      publishedDate={Date.now()}
      modifiedDate={Date.now()}
    />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/listening">Listening Exercises</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Visita De España</BreadcrumbItem>
      </Breadcrumb>

      <ListeningLayout>
        <Card>
          <CardBody>
            <CardTitle>Una Visita De España</CardTitle>

            <br />
            <p>
              Kelly is having a conversations with Ricardo about her cousin,
              Manolo, who just flew in from Spain. Let's learn a little bit
              about him.
            </p>

            <br />
            <Row>
              <Col sm={12} md={6} lg={6} xl={6}>
                <h6>Normal Speed</h6>
                <audio controls>
                  <source src="https://dl.dropbox.com/s/udfubx22f7e6myh/una-visita--de-espana-slow.mp3?dl=0" />
                </audio>
              </Col>
              <Col sm={12} md={6} lg={6} xl={6}>
                <br className="d-sm-none" />
                <h6>Slow Speed</h6>
                <audio controls>
                  <source src="https://dl.dropbox.com/s/gun2c1wowaes5ck/una-visita-de-espana-normal.mp3?dl=0" />
                </audio>
              </Col>
            </Row>
            <br />

            <Collapsible trigger={<a href="">Read transcript</a>}>
              <p style={{ paddingTop: "10px" }}>
                <b>Kelly</b>: ¡Hola, Ricardo! ¿Cómo estás?
              </p>

              <p>
                <b>Ricardo: </b> Muy bien. ¿Qué hay de nuevo?
              </p>
              <p>
                <b>Kelly: </b> Pues, mi primo de España llegó de visita. Va a
                estar aquí por un mes.
              </p>
              <p>
                <b>Ricardo:</b> ¡Genial! ¿Por qué está aquí?
              </p>
              <p>
                <b>Kelly:</b> Vino para visitar a la familia y practicar el
                inglés. Me gustaría ir a España algún día para hacer lo mismo.
              </p>
              <p>
                <b>Ricardo:</b> Sería divertido. ¿Cómo es tu primo?
              </p>
              <p>
                <b>Kelly:</b> Pues, Manolo tiene veinte años, como yo. Es
                bastante atlético y le encantan los deportes. No es nada
                perezoso, siempre quiere estar jugando algo, pero su deporte
                favorito es el fútbol.
              </p>
              <p>
                <b>Ricardo: </b>Claro, el fútbol es popular allá. El equipo Real
                Madrid es muy bueno. A mí también me gusta el fútbol. Tal vez
                Manolo pueda jugar con mi equipo este fin de semana.
              </p>
              <p>
                <b>Kelly:</b> ¡Qué buena idea! Es muy sociable y quiere conocer
                a otras personas de aquí. También es gracioso. ¡Cuidado! ¡Le
                gusta hacer bromas!
              </p>
              <p>
                <b>Ricardo: </b> Me caen bien las personas cómicas . Suena
                simpático tu primo. ¿Cuándo puedo conocerlo?
              </p>
              <p>
                <b>Kelly:</b> ¿Qué tal si vamos al cine esta noche? Hay una
                película nueva que quiero ver.
              </p>
              <p>
                <b>Ricardo:</b> ¡Vale! Es una cita. Paso por ustedes a las
                siete. ¡Nos vemos!
              </p>
              <p>
                <b>Kelly: </b>¡Hasta luego!
              </p>
            </Collapsible>

            <br />
            <br />
            <h6>Questions</h6>

            <ul style={{ marginLeft: "-20px" }}>
              <li>
                <Collapsible trigger={<a href="">Why is Manolo visiting?</a>}>
                  <p style={{ paddingTop: "10px" }}>
                    He came to visit the family and so that he can practice
                    English.
                  </p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={<a href="">How long will he be staying?</a>}
                >
                  <p style={{ paddingTop: "10px" }}>
                    He will be staying for a month.{" "}
                  </p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={<a href="">Are Kelly and Manolo the same age?</a>}
                >
                  <p style={{ paddingTop: "10px" }}>
                    Yes, they are both 20 years old.{" "}
                  </p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={<a href="">Why does Kelly want to go to Spain?</a>}
                >
                  <p style={{ paddingTop: "10px" }}>
                    She wants to do the same; visit family and practice Spanish
                  </p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={<a href="">What is Manolo's favorite sport?</a>}
                >
                  <p style={{ paddingTop: "10px" }}>
                    Manolo's favorite sport is football.
                  </p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={
                    <a href="">
                      Which football team is mention in the dialogue?
                    </a>
                  }
                >
                  <p style={{ paddingTop: "10px" }}>Real Madrid.</p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={
                    <a href="">
                      What does Ricardo invite Molono to do this weekend?
                    </a>
                  }
                >
                  <p style={{ paddingTop: "10px" }}>
                    He invited him to play with his team.
                  </p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={
                    <a href="">
                      What does Kelly, Ricardo and Molono plan to do that night?
                    </a>
                  }
                >
                  <p style={{ paddingTop: "10px" }}>
                    They plan to go to the movie theater to see a new movie.{" "}
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

export default UnaVisitaDeEspana;
