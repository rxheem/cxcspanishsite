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
            <Col sm={4} md={4} lg={4} xl={4}></Col>
            <Col sm={8} md={8} lg={8} xl={8}></Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Guide;
