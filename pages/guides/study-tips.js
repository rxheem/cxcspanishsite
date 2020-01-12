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

// Layout
import Layout from "../../components/Layout";
import GuideLayout from "./GuideLayout";

const StudyTips = props => (
  <Layout>
    <Head>
      <title>Study Tips | CXC Spanish Guide</title>
      <meta name="og:title" content="Study Tips |  CXC Spanish Guide" />
      <meta name="og:site_name" content="CXC Spanish Online" />
      <meta name="description" content="" />
    </Head>

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/guide">Guides</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Study Tips</BreadcrumbItem>
      </Breadcrumb>
      <GuideLayout>
        <Card>
          <CardBody>
            <CardTitle>Spanish Study Tips</CardTitle>

            <br />
            <p>
              Learning another language can be challenging if you do not
              approach it right. Spanish is one of the fastest-spreading
              languages in the world and is often listed as among the easiest
              for English speakers to learn. With this in mind, why aren’t there
              more people fluent in Spanish?
            </p>

            <br />
            <h5 className="text-info">Practice with a native</h5>
            <p>
              When learning another language, it is always recommended that you
              practice with native speakers. Speaking with natives allows you to
              learn the authentic and practical use of the vocabulary, and
              exposes you to more idioms, slang, dialect and a generally more
              extensive vocabulary than with a non-native speaker.
            </p>

            <br />
            <h5 className="text-info">
              Change the language on all your devices to Spanish
            </h5>

            <br />
            <br />
            <h5 className="text-info">
              Mimic your teacher and other natives' accent and pronunciation
            </h5>

            <br />
            <br />
            <h5 className="text-info">Watch telenovelas</h5>

            <br />
            <br />
            <h5 className="text-info">Be patient</h5>

            <br />
            <br />
            <h5 className="text-info">Test yourself with Spanish flashcards</h5>
          </CardBody>
        </Card>
      </GuideLayout>
    </Container>
  </Layout>
);

export default StudyTips;
