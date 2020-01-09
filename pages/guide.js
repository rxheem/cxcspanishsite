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

// Layout
import Layout from "../components/Layout";

class Guide extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>

            <BreadcrumbItem active>Guides</BreadcrumbItem>
          </Breadcrumb>

          <Row>
            <Col sm={4} md={4} lg={4} xl={4}>
              <Card>
                <CardHeader>Card header</CardHeader>
                <CardBody>
                  <CardTitle>Lorem Ipsum</CardTitle>
                  <Form>
                    <FormGroup>
                      <label htmlFor="#username">Username</label>
                      <FormInput id="#username" placeholder="Username" />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="#password">Password</label>
                      <FormInput
                        type="password"
                        id="#password"
                        placeholder="Password"
                      />
                    </FormGroup>
                  </Form>
                  <Button>Read more &rarr;</Button>
                </CardBody>
                <CardFooter>Card footer</CardFooter>
              </Card>
            </Col>
            <Col sm={8} md={8} lg={8} xl={8}>
              <Card>
                <CardHeader>Card header</CardHeader>
                <CardBody>
                  <CardTitle>Lorem Ipsum</CardTitle>
                  <Form>
                    <FormGroup>
                      <label htmlFor="#username">Username</label>
                      <FormInput id="#username" placeholder="Username" />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="#password">Password</label>
                      <FormInput
                        type="password"
                        id="#password"
                        placeholder="Password"
                      />
                    </FormGroup>
                  </Form>
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
