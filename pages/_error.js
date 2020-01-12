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
import Head from "next/head";

// Home components
import HomeCarousel from "../home/HomeCarousel";
import Marketing from "../home/Marketing";
import MailingListSubscribe from "../home/MailingListSubscribe";

// Layout
import Layout from "../components/Layout";
import Message from "../common/Message";

function Error({ statusCode }) {
  return (
    <Layout>
      <Container>
        <Head>
          <title>404 Page Not Found | CXC Spanish Guide</title>
          <meta
            name="og:title"
            content="404 Page Not Found | CXC Spanish Guide"
          />
          <meta name="og:site_name" content="CXC Spanish Online" />
          <meta
            name="description"
            content="We couldn't find the page you were lookign for. Let us help you."
          />
        </Head>

        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>404 - Page Not Found</BreadcrumbItem>
        </Breadcrumb>
      </Container>

      <Img
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        src={[
          "https://cdn.shopify.com/s/files/1/0322/6897/files/404-ermalink.png?432866230176278629",
          "https://cdn.searchenginejournal.com/wp-content/uploads/2017/08/25-Outstanding-404-Page-Examples-You-Have-to-See.webp",
          "https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/404-not-found-t.jpg",
          "https://www.hover.com/blog/wp-content/uploads/2015/08/404-page-error.png",
          "https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg",
          "https://www.cdgi.com/wp-content/uploads/2019/05/404-Pages.jpg",
          "https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg",
          "http://smileforevernyc.com/wp-content/uploads/2018/06/404-Error.png",
          "https://www.jco.fi/wp-content/uploads/2019/10/app.png",
          "https://cashkaro.com/blog/wp-content/uploads/sites/5/2018/01/404-Status-Checker-Power-Query.png",
          "https://cdn.searchenginejournal.com/wp-content/uploads/2017/08/3.-dogstudio404.png"
        ]}
        alt="404 image"
      />
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
