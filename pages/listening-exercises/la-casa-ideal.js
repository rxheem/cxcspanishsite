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

const LaCaseIdeal = props => (
  <Layout>
    <SEO
      title={"La Casa Ideal - Listening Exercise | CXC Spanish Online"}
      description={
        "Kelly is talking to Ronaldo are about a series of events that took place at her home. Let's hear what they are."
      }
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
          <a href="/listening">Listening Exercises</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>La Casa Ideal</BreadcrumbItem>
      </Breadcrumb>

      <ListeningLayout>
        <Card>
          <CardBody>
            <CardTitle>La Casa Ideal</CardTitle>
            <p>
              Kelly is talking to Ronaldo are about a series of events that took
              place at her home. Let's hear what they are.
            </p>
            <br />
            <div className="audio">
              <h6>Normal Speed</h6>
              <audio controls>
                <source src="https://dl.dropbox.com/s/65jy2x4rrxh11fz/la-casa-ideal.mp3?dl=0" />
              </audio>
            </div>

            <br />
            <Collapsible trigger={<a href="">Read transcript</a>}>
              <p style={{ paddingTop: "10px" }}></p>
              <p>
                <b>Kelly:</b> Hola Ricardo. Llego muy frustrada hoy.
              </p>
              <p>
                <b>Ricardo:</b> Hola Kelly, ¿Qué pasa?
              </p>
              <p>
                <b>Kelly:</b> Hay agua en mi sótano otra vez. Es la tercera vez
                que eso ha pasado este verano. ¡Quiero mudarme!
              </p>
              <p>
                <b>Ricardo:</b> ¡Ay, ay, ay! ¡Qué mala onda! Has pensado en
                hacer reparaciones o de plano mudarte a una casa diferente?
              </p>
              <p>
                <b>Kelly:</b> Probablemente voy a tener que hacer reparaciones,
                pero quiero mudarme a una casa diferente. Quiero una casa nueva
                que tenga más de un nivel y que tenga dos baños y un jardín
                grande.
              </p>
              <p>
                <b>Ricardo:</b> ¡Qué bien! ¿Quieres que tenga más de un garaje?
              </p>
              <p>
                <b> Kelly: </b>Pues, sí, si estamos soñando. Quiero que haya
                mucho espacio para cocinar y comer en la cocina y que hay varios
                lugarcitos donde mis hijos puedan meterse a jugar.
              </p>
              <p>
                <b>Ricardo:</b> Sería excelente, ¿no? Pues que pena que se hay
                inundado tu sótano. Avísame si necesitas ayuda. Espero que se
                arregle todo, y que no sea necesario que te mudes.
              </p>
              <p>
                <b>Kelly: </b>Muchas gracias. Y te aviso algún día en el futuro
                cuando encuentre la casa de mis sueños.
              </p>
              <p>
                <b>Ricardo:</b> ¡Buena suerte!
              </p>
              <p>
                <b>Kelly:</b> Gracias. Hasta luego.
              </p>
            </Collapsible>

            <br />
          </CardBody>
        </Card>
      </ListeningLayout>
    </Container>
  </Layout>
);

export default LaCaseIdeal;
