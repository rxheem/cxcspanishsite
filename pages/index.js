import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "shards-react";

// Home components
import HomeCarousel from "../home/HomeCarousel";
import Marketing from "../home/Marketing";
import MailingListSubscribe from "../home/MailingListSubscribe";

// Layout
import Layout from "../components/Layout";

const Index = props => (
  <Layout>
    <Container>
      <Breadcrumb>
        <BreadcrumbItem active>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/"></a>
        </BreadcrumbItem>
      </Breadcrumb>
    </Container>
    <HomeCarousel />
    <Container>
      <Marketing />
    </Container>
  </Layout>
);

export default Index;
