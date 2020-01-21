import {
  Container,
  Row,
  Col,
  Alert,
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
import Img from "react-image";
import SEO from "react-seo-component";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

// Layout
import Layout from "../components/Layout";
import ListeningLayout from "../listening-components/ListeningLayout";

function Listening({ statusCode }) {
  return (
    <Layout>
      <Container>
        <SEO
          title="Listening Exercises | CXC Spanish Online"
          description={
            "Practice listening with recordings of conversations with native Spanish speaker for your CXC Spanish exam."
          }
          pathname={"https://www.cxcspanish.com/listening"}
          siteLanguage={"en"}
          siteLocale={""}
          twitterUsername={"_rxheem"}
        />

        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Listening Exercises</BreadcrumbItem>
        </Breadcrumb>

        <ListeningLayout>
          <Card>
            <CardImg
              style={{ width: "100%" }}
              src="https://english-podcasts.com/wp-content/uploads/2019/09/7-Tips-to-improve-listening-4.png"
            />

            <CardBody>
              <CardTitle>Listening Exercises</CardTitle>
              <br />

              <p>
                Our listening exercises are designed to help you improve your
                Spanish listening skills.
              </p>

              <ul style={{ marginLeft: "-20px" }}>
                <li>
                  <a href="/listening-exercises/meet-ana">Meet Ana</a>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <a href="/listening-exercises/meet-nick">Meet Nick</a>
                </li>
              </ul>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>

          <br />
          <Card>
            <CardBody>
              <CardTitle>Dialogue</CardTitle>

              <p>
                A key ingredient to improving your listening skills are
                dialogues/ conversations. Let's see what Kelly and Ronoldo have
                to talk about.{" "}
              </p>

              <Row>
                <Col sm={12} md={6} lg={6} xl={6}>
                  <ul style={{ marginLeft: "-20px" }}>
                    <li>
                      <a href="/listening-exercises/una-visita-de-espana">
                        Una Visita De España
                      </a>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <a href="/listening-exercises/la-casa-ideal">
                        La casa ideal
                      </a>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <a href="/listening-exercises/ayer">Ayer</a>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <a href="/listening-exercises/la-familia">La familia</a>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <a href="/listening-exercises/el-clima">El clima</a>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <a href="/listening-exercises/la-navidad">La navidad</a>
                    </li>
                  </ul>
                </Col>
                <Col sm={12} md={6} lg={6} xl={6}>
                  <ul style={{ marginLeft: "-20px" }}>
                    <li>
                      <a href="/listening-exercises/los-estudios">
                        Los estudios
                      </a>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <a href="/listening-exercises/la-salud">La salud</a>
                    </li>
                    <li style={{ paddingTop: "10px" }}>
                      <a href="/listening-exercises/los-viajes">Los viajes</a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>

          <a href="/listening-exercises/spanish-curse-words">.</a>
        </ListeningLayout>
      </Container>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Listening;
