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
import ListeningLayout from "../../listening-components/ListeningLayout";

// Layout
import Layout from "../../components/Layout";
import SEO from "react-seo-component";

const numberOfQuestions = 7;

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

console.log(today);

const MeetAna = props => (
  <Layout>
    <SEO
      title={"Meet Ana - Listening Exercise | CXC Spanish Online"}
      description={
        "Practice your Spanish listening skills with Ana. Pass your CXC Spanish exam with our free online study guide."
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
        <BreadcrumbItem active>Meet Ana</BreadcrumbItem>
      </Breadcrumb>

      <ListeningLayout>
        <Card>
          <CardBody>
            <CardTitle>Meet Ana</CardTitle>
            <p>
              In this listening exercise we'll get to know a little about Ana.
              Listen to the audio below and answer the {numberOfQuestions}{" "}
              questions.
            </p>
            <br />
            <div className="audio">
              <audio controls>
                <source src="https://dl.dropbox.com/s/7ofviet2398fz0b/Example%201%20-%20Ana.mp3?dl=0" />
              </audio>
            </div>

            <br />
            <Collapsible trigger={<a href="">Read transcript</a>}>
              <p style={{ paddingTop: "10px" }}>
                <span>¡Buenos días! Soy Ana. Tengo 27 años.</span>
                <br />
                <span>
                  Soy de Chicago pero ahora vio en una ciudad de España que se
                  llama Zamora.
                </span>
                <br />
                <span>Soy profesora de inglés un un instituto.</span>
                <br />
                <span>
                  Al volver a los Estados Unidos voy a seguir con mi estudios.
                </span>
                <br />
                <span>
                  Me gustaría hacer un doctorado en la literatura española,
                </span>
                <br />
                <span>
                  pero ahora etoy contenta con vivir en España y mejorando mi
                  español,
                </span>
                <br />
                <span>y aprendiendo más de este país tan hermoso.</span>
                <br />
                <span>
                  En mi tiempo libre me gusta leer, ver la tele y pasar tiempo{" "}
                </span>
                <br />
                <span>con mis amigos, mi marido y mi perro.</span>
                <br />
                <span>
                  Estudio español porque la hístoria del país ma facina.
                </span>
                <br />
                <span>
                  No es solo eso, sino también la cultura me encanta y la
                </span>
                <br />
                <span>gente es muy amable.</span>
              </p>
            </Collapsible>

            <br />
            <br />
            <h6>Questions</h6>

            <ul style={{ marginLeft: "-20px" }}>
              <li>
                <Collapsible trigger={<a href="">How old is Ana? </a>}>
                  <p style={{ paddingTop: "10px" }}>Ana is 27 years old. </p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible trigger={<a href="">Where is Ana from?</a>}>
                  <p style={{ paddingTop: "10px" }}>Ana is from Chicago.</p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={<a href="">In which country does Ana live?</a>}
                >
                  <p style={{ paddingTop: "10px" }}>She lives in Spain.</p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible trigger={<a href="">What is her occupation?</a>}>
                  <p style={{ paddingTop: "10px" }}>
                    She is an English teacher. .
                  </p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={
                    <a href="">
                      What does Ana plan on doing when she returns to the US?
                    </a>
                  }
                >
                  <p style={{ paddingTop: "10px" }}>
                    She plans to continue her studies
                  </p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={<a href="">What does Ana do in her spare time?</a>}
                >
                  <p style={{ paddingTop: "10px" }}>
                    In her spare time she likes spending time with her friends,
                    her dog and her husband.
                  </p>
                </Collapsible>
              </li>
              <li style={{ paddingTop: "10px" }}>
                <Collapsible
                  trigger={
                    <a href="">Identify 2 reasons why Ana studies Spanish?</a>
                  }
                >
                  <ul style={{ paddingTop: "10px" }}>
                    <li style={{ paddingTop: "10px" }}>
                      She is facinated by the history of Spain
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      She loves the culture
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      The people there are very nice
                    </li>
                  </ul>
                </Collapsible>
              </li>
            </ul>

            <br />
            <p>
              Now let's meet Ana's husband,{" "}
              <a href="/listening-exercises/meet-nick">Nick</a>
            </p>
          </CardBody>
        </Card>
      </ListeningLayout>
    </Container>
  </Layout>
);

export default MeetAna;
