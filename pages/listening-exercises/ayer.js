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

const Ayer = props => (
  <Layout>
    <SEO
      title={"Ayer - Listening Exercise | CXC Spanish Online"}
      description={
        "Learn about how Kelly and Ronaldo spent their day yesterday with our listening exercise. Pass your CXC Spanish exam with our free online study guide."
      }
      twitterUsername={"_rxhem"}
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
        <BreadcrumbItem active>Ayer</BreadcrumbItem>
      </Breadcrumb>

      <ListeningLayout>
        <Card>
          <CardBody>
            <CardTitle>Ayer</CardTitle>
            <p>
              Kelly and Ronaldo are talking about how they spent their day
              yesterday. Let's take a listen.
            </p>

            <br />
            <Row>
              <Col sm={12} md={6} lg={6} xl={6}>
                <h6>Normal Speed</h6>
                <div className="audio">
                  <audio controls>
                    <source src="https://dl.dropbox.com/s/ylpreigadftgexv/ayer-normal.mp3?dl=0" />
                  </audio>
                </div>
              </Col>
              <Col sm={12} md={6} lg={6} xl={6}>
                <h6>Slow Speed</h6>
                <div className="audio">
                  <audio controls>
                    <source src="https://dl.dropbox.com/s/5j92zjjrsex03wr/ayer-slow.mp3?dl=0" />
                  </audio>
                </div>
              </Col>
            </Row>

            <br />
            <Collapsible trigger={<a href="">Read transcript</a>}>
              <p style={{ paddingTop: "10px" }}>
                <b>Ricardo:</b> ¡Te ves exhausta! ¿Qué pasa?
              </p>
              <p>
                <b>Kelly:</b> Ayer fue un día súper largo para mí y todavía no
                me he recuperado. Me levanté a las cinco y media. Hice ejercicio
                por media hora. Desayuné, me vestí y salí para el trabajo a las
                siete y media. Tuve dos reuniones importantes por la mañana y un
                proyecto que entregar por la tarde así que no descansé ni diez
                minutos. Salí del trabajo a las cinco, cené y fui a la
                universidad donde enseño una clase de español. Me quedé ahí con
                mis estudiantes hasta las nueve de la noche. Cuando llegé a
                casa, me relajé un rato. Cuando por fin me dormí, eran las diez
                y media. Fíjate que todos los martes son así para mí. Es una
                pesadilla.
              </p>
              <p>
                <b>Ricardo:</b> ¡Con razón! Pobrecita. Pues los martes para mí
                no son tan pesados. Ayer me levanté a las seis y media de la
                mañana. me lavé la cara, los dientes y me vestí. Después
                desayuné pan tostado con mermelada y una taza de café. Me gusta
                desayunar ligero. Antes de irme al trabajo miré las noticias de
                la mañana como por diez minutos. Solamente quería saber el
                pronóstico del tiempo, para estar preparado.
              </p>
              <p>
                <b>Kelly:</b> ¿A qué hora llegaste a tu casa?
              </p>
              <p>
                <b>Ricardo: </b>Pues llegué como a las seis de la tarde. Habría
                podido llegar más temprano si no hubiera pasado al gimnasio.
              </p>
              <p>
                <b>Kelly:</b> ¿Y qué hiciste entre las seis y antes de dormir?
              </p>
              <p>
                <b>Ricardo:</b> Pues primero cené. Luego me relajé un poco
                leyendo las noticias en el Internet y después usé un programa de
                videoconferencia para hablar con mi familia. Finalmente me bañé
                y me fui a la cama como a las diez.
              </p>
              <p>
                <b>Kelly:</b> ¡Qué envidia!
              </p>
              <p>
                <b>Ricardo:</b> Pues no te sientas mal porque mis lunes son
                horribles. Después del trabajo manejo una hora para ir a clases.
                Mi clase termina a las ocho de la noche y después tengo que
                manejar una hora de regreso. Es horrible.
              </p>
              <p>
                <b>Kelly:</b> Estoy de acuerdo. Creo que después de este
                semestre nos habremos ganado unas muy merecidas vacaciones.
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
                      How does Rocardo dsecribe Kelly when he sees her?
                    </a>
                  }
                >
                  <p style={{ paddingTop: "10px" }}>
                    He stated that she looked exhausted.
                  </p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={
                    <a href="">What time does Kelly get up in the mornings?</a>
                  }
                >
                  <p style={{ paddingTop: "10px" }}>She gets up at 5:30 am.</p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={
                    <a href="">
                      What time does Kelly leave her home in the morning?
                    </a>
                  }
                >
                  <p style={{ paddingTop: "10px" }}>She leaves at 7:30 am.</p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={
                    <a href="">
                      Identify 2 things Kelly does before leaving in the
                      mornings.
                    </a>
                  }
                >
                  <ul>
                    <li>Exercises for 30 minutes</li>
                    <li style={{ paddingTop: "10px" }}>Has breakfast</li>
                  </ul>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={<a href="">What does Kelly do at the university?</a>}
                >
                  <p style={{ paddingTop: "10px" }}>
                    She teaches a Spanish class.
                  </p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={<a href="">What time did Ricardo wake up?</a>}
                >
                  <p style={{ paddingTop: "10px" }}>He woke up at 6:30 am.</p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={<a href="">What does he have for breakfast</a>}
                >
                  <p style={{ paddingTop: "10px" }}>
                    He has toast with jam and a cup of coffee
                  </p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={
                    <a href="">
                      What does Ricardo do between 6pm and before he goes to
                      sleep?
                    </a>
                  }
                >
                  <ul>
                    <li>He eats dinner</li>
                    <li style={{ paddingTop: "10px" }}>
                      Relaxes wile reading the news on the internet
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      Video-calls his family
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      Then he takes a shower
                    </li>
                  </ul>
                </Collapsible>
              </li>
            </ul>
          </CardBody>
        </Card>
      </ListeningLayout>
    </Container>
  </Layout>
);

export default Ayer;
