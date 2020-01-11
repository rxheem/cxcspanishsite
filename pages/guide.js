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
import Layout from "../components/Layout";

class Guide extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>Guides | CXC Spanish Guide</title>
          <meta name="og:title" content="Guides |  CXC Spanish Guide" />
          <meta name="og:site_name" content="CXC Spanish Online" />
          <meta
            name="description"
            content="Take your Spanish to the next level with detailed lesson guides, completed with examples and practice questions."
          />
        </Head>
        <Container>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>

            <BreadcrumbItem active>Guides</BreadcrumbItem>
          </Breadcrumb>

          <Row>
            <Col sm={8} md={8} lg={8} xl={8}>
              <Card>
                <CardBody>
                  <CardTitle>Guides</CardTitle>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <Button>Read more &rarr;</Button>
                </CardBody>
                <CardFooter>Card footer</CardFooter>
              </Card>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4}>
              <Card>
                <CardHeader>Card header</CardHeader>

                <CardBody>
                  <CardTitle>Lorem Ipsum</CardTitle>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <Button>Read more &rarr;</Button>
                </CardBody>
                <CardFooter>Card footer</CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Guide;
