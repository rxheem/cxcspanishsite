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
import DimeLayout from "../../dime/DimeLayout";

// Layout
import Layout from "../../components/Layout";
import SEO from "react-seo-component";

const DMM3 = props => (
  <Layout>
    <SEO
      title={"Dime Mucho Más - Book 3 | CXC Spanish Online"}
      description={
        "Dime mucho mas is the third book in the Dime series for Caribbean schools."
      }
      twitterUsername={"_rxhem"}
      author={"Raheem McDonald"}
      article={true}
      publishedDate={new Date()}
      modifiedDate={new Date()}
    />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/listening">Dime Series</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Dime Mucho Más</BreadcrumbItem>
      </Breadcrumb>

      <DimeLayout>
        <Card>
          <CardImg
            className="d-sm-none"
            style={{ width: "100%" }}
            src="https://macmillancaribbeanebooks.com/media/catalog/product/cache/6/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230483132_2_1_2_1_6.jpg"
          />
          <CardBody>
            <CardTitle>Dime Mucho Más Book 3</CardTitle>
            <p>
              Dime mucho mas is the third book in the Dime series for Caribbean
              schools.{" "}
            </p>
          </CardBody>
        </Card>
      </DimeLayout>
    </Container>
  </Layout>
);

export default DMM3;
