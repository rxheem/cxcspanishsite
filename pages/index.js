import { Container } from "shards-react";
import { Row, Col } from "shards-react";

// Home components
import HomeCarousel from "../home/HomeCarousel";
import Marketing from "../home/Marketing";
import MailingListSubscribe from "../home/MailingListSubscribe";

// Layout
import Layout from "../components/Layout";

const Index = props => (
  <Layout>
    <HomeCarousel />
    <Container>
      <Marketing />
    </Container>
  </Layout>
);

export default Index;
