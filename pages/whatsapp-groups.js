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
import Head from "next/head";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import SEO from "react-seo-component";
import Img from "react-image";
import Layout from "../components/Layout";

const WhatsAppGroups = props => (
  <Layout>
    <Head>
      <title>Study Groups Chats | CXC Spanish Online</title>
      <meta name="og:title" content="Study Group Chats | CXC Spanish Guide" />
      <meta name="og:site_name" content="CXC Spanish Online" />
      <meta
        name="description"
        content="Join our WhatsApp study group chats to have weekly discussions and reach out to us directly."
      />
    </Head>
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>WhatsApp Study Groups</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={12} md={8} lg={8} xl={8}>
          <Card>
            <CardImg
              style={{ width: "100%" }}
              src="https://static.whatsapp.net/rsrc.php/v3/yO/r/FsWUqRoOsPu.png"
            />
            <CardBody>
              <CardTitle>Study Group Chats</CardTitle>

              <br />
              <p>
                We've made WhatsApp group chats to facilitate a closer learning
                experience. Feel free to ask questions, send resources and
                participate in our discussions.
              </p>

              <p>
                Feel free to share the links with your friends, classmates and
                anyone else so they may join too.
              </p>

              <ul className="ul-st">
                <li>
                  <a
                    style={{ paddingRight: "10px" }}
                    href="https://chat.whatsapp.com/EWpufXW93Y5G5V9BlOqgRF"
                    targer="_blank"
                    preload
                  >
                    CXC Spanish Online
                  </a>
                  <Badge pill theme="danger">
                    FULL
                  </Badge>
                </li>
                <li>
                  <a
                    href="https://chat.whatsapp.com/BurCEr11DKRJyas6VKUc0n"
                    targer="_blank"
                    preload
                  >
                    CXC Spanish Online #2
                  </a>
                </li>
              </ul>
            </CardBody>
          </Card>

          <br />
          <Card>
            <CardBody>
              <CardTitle>Join by Country</CardTitle>

              <br />

              <Row>
                <Col sm={12} md={6} lg={6} xl={6}>
                  <ul className="ul-st">
                    <li>
                      <a href="http://bit.ly/2tPvPVl" target="_blank">
                        CXC Spanish Anguilla
                      </a>
                    </li>
                    <li>
                      <a href="http://bit.ly/2vpT8Fo" target="_blank">
                        CXC Spanish Antigua and Barbuda
                      </a>
                    </li>
                    <li>
                      <a href="http://bit.ly/2utdduH" target="_blank">
                        CXC Spanish Barbados
                      </a>
                    </li>
                    <li>
                      <a href="http://bit.ly/2uCuWzM" target="_blank">
                        CXC Spanish Belize
                      </a>
                    </li>
                    <li>
                      <a href="http://bit.ly/2SgK9zy" target="_blank">
                        CXC Spanish British Virgin Islands
                      </a>
                    </li>
                    <li>
                      <a href="http://bit.ly/2OMpOzY" target="_blank">
                        CXC Spanish Cayman Islands
                      </a>
                    </li>
                    <li>
                      <a href="http://bit.ly/3br7SV7" target="_blank">
                        CXC Spanish Grenada
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col sm={12} md={6} lg={6} xl={6}>
                  <ul className="ul-st">
                    <li>
                      <a href="http://bit.ly/2w3U6HL" target="_blank">
                        CXC Spanish Guyana
                      </a>
                    </li>
                    <li>
                      <a href="http://bit.ly/2SjenSg" target="_bank">
                        CXC Spanish Jamaica
                      </a>
                    </li>
                    <li>
                      <a href="http://bit.ly/38lIpun" target="_blank">
                        CXC Spanish Montserrat
                      </a>
                    </li>
                    <li>
                      <a href="http://bit.ly/38lMyyC" target="_blank">
                        CXC Spanish St. Kitts and Nevis
                      </a>
                    </li>
                    <li>
                      <a href="http://bit.ly/2Hgi9FW" target="_blank">
                        CXC Spanish St. Lucia
                      </a>
                    </li>
                    <li>
                      <a href="http://bit.ly/38lMyyC" target="_blank">
                        CXC Spanish St. Vincent and the Grenadines
                      </a>
                    </li>
                    <li>
                      <a href="http://bit.ly/38jQoZ0" target="_blank">
                        CXC Spanish Trinidad and Tobago
                      </a>
                    </li>
                    <li>
                      <a href="http://bit.ly/3br9pdP" target="_blank">
                        CXC Spanish Turks and Caicos Islands
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}></Col>
      </Row>
    </Container>
    <br />
  </Layout>
);

export default WhatsAppGroups;
