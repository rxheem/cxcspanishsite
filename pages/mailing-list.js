import {
  Container,
  Row,
  Col,
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
import Head from "next/head";
import SEO from "react-seo-component";
// Layout
import Layout from "../components/Layout";

const MailingList = props => (
  <Layout>
    <SEO
      title={"Mailing List | CXC Spanish Online"}
      pathname={"https://www.cxcspnish/mailing-list"}
      description={
        "Join our mailing list to get free weekly booklets, study notes and exercises right in your email!"
      }
      siteLanguage={"en"}
      twitterUsername={"_rxheem"}
      author={"Raheem McDonald"}
      article={true}
      publishedDate={"Jan 13, 2020"}
      modifiedDate={"Jan 13, 2020"}
    />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem active>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Mailing List</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={12} md={8} lg={8} xl={8}>
          <Card>
            <CardImg
              style={{ width: "100%" }}
              src="https://saneinbox.files.wordpress.com/2019/08/control-email_illustration.png?w=1500&h=844"
              alt="image"
            />
            <CardBody>
              <CardTitle>Mailing List</CardTitle>

              <br />
              <p>
                We're excited that you're interested in joining our mailing
                list. Here we've listed all the great benefits of subscribing to
                our newsletter as well as an overview of our schedule.
              </p>

              <h6>Schedule</h6>

              <ul style={{ paddingLeft: "20px" }}>
                <li>
                  We will send emails once per week beginning in mid-October.
                </li>
                <li style={{ paddingTop: "15px" }}>
                  Emails will be increased in late December to three (3) emails
                  per week in order to accommodate persons doing their exams in
                  January. During this period, most emails will include study
                  notes and exercises.
                </li>
                <li style={{ paddingTop: "15px" }}>
                  Emails will be reduced to one email per week in early
                  February. During this time, we will recap the January exam and
                  issue tips and study notes accordingly.
                </li>
                <li style={{ paddingTop: "15px" }}>
                  We will then increase the number of emails to three (3) emails
                  per week again in April in preparation for the May/ June
                  exams. Here, all our emails will be a review of everything we
                  have covered for the school year. You will occasionally
                  receive small emails with letters of encouragement and advice
                  for teachers around the Caribbean.
                </li>
                <li style={{ paddingTop: "15px" }}>
                  We encourage you to stay subscribed after you have completed
                  you exams as we may advise you of important updates from CXC,
                  and we would love to hear about your experience and how much
                  we have helped you.
                </li>
              </ul>

              <br />
              <p>
                Send us an email at{" "}
                <a href="mailto:hola@cxcspanish.com">hola@cxcspanish.com</a> to
                join!
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}></Col>
      </Row>
    </Container>
  </Layout>
);

export default MailingList;
