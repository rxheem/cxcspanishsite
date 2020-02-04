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
      <title>WhatsApp Group Chats | CXC Spanish Online</title>
      <meta
        name="og:title"
        content="WhatsApp Group Chats | CXC Spanish Guide"
      />
      <meta name="og:site_name" content="CXC Spanish Online" />
      <meta
        name="description"
        content="Join our WhatsApp group chats to have weekly discussions and reach out to us directly."
      />
    </Head>
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>WhatsApp Groups</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={12} md={8} lg={8} xl={8}>
          <Card>
            <CardImg
              style={{ width: "100%" }}
              src="https://static.whatsapp.net/rsrc.php/v3/yO/r/FsWUqRoOsPu.png"
            />
            <CardBody>
              <CardTitle>WhatsApp Group Chats</CardTitle>

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
                <li>
                  <a
                    href="https://chat.whatsapp.com/J79uO72mCF00vlSV0o6QRv"
                    targer="_blank"
                    preload
                  >
                    CXC Spanish Online Jamaica{" "}
                    <span className="text-danger ml-1">
                      (only for Jamaican students)
                    </span>
                  </a>
                </li>
              </ul>
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
