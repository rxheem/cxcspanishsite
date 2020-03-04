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
import Img from "react-image";
import LazyLoad from "react-lazyload";
import Collapsible from "react-collapsible";
import YouTube from "react-youtube";
import Countdown from "react-countdown";
import SEO from "react-seo-component";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

// Common
import Head from "next/head";

// Layout
import Layout from "../../components/Layout";

const opts = {
  height: "300px",
  width: "100%",
  playerVars: {
    autoplay: 0
  }
};

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <p>Done</p>;
  } else {
    // Render a countdown
    return (
      <span>
        {days} days, {hours} hours and {minutes} minutes to go!
      </span>
    );
  }
};

const TwelveFifteen = props => (
  <Layout>
    <SEO
      title={"Let's Talk Session | CXC Spanish Online"}
      description={
        "Join our Let's Talk session on Zoom, starting on February 15, 2020 at 2:00pm GMT-5."
      }
      pathname={""}
      siteLanguage={"en"}
      twitterUsername={"_rxheem"}
      author={"Raheem McDonald"}
      article={true}
      publishedDate={today}
      modifiedDate={today}
    />
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/meetings">Meetings</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Hosting Feb 15, 2020</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={12} md={8} lg={8}>
          <Card>
            <CardImg
              style={{ width: "100%" }}
              src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/07/zoom-app-hed-796x465.png"
            />
            <CardBody>
              <CardTitle>Let's Talk Session</CardTitle>

              <br />
              <p>
                We wil be hosting a 30 minutes{" "}
                <span style={{ color: "orange" }}>
                  <b>Let's Talk</b>
                </span>{" "}
                talk session will be held via the{" "}
                <a target="_blank" href="https://zoom.us/">
                  Zoom app,
                </a>{" "}
                on <b>Saturday, February 15, 2020</b> at <b>2:00pm GMT-5</b> .
                We'll be discussing
              </p>

              <ul style={{ marginLeft: "-20px" }}>
                <li>Our aims as a group, and what to expect of us</li>
                <li style={{ paddingTop: "10px" }}>
                  Our approach going forward
                </li>
                <li style={{ paddingTop: "10px" }}>
                  What we expect of our students
                </li>
                <li style={{ paddingTop: "10px" }}>
                  Tutoring and extra classes
                </li>
                <li style={{ paddingTop: "10px" }}>
                  How we plan to help with other subject areas
                </li>
                <li style={{ paddingTop: "10px" }}>What to do after CSEC</li>
              </ul>

              <br />
              <p>
                As well as to answer any and every question that you may have!
                We'd love to use this as an opportunity to get to know our
                students so be present as ask as much as you like.
              </p>
            </CardBody>
            <CardFooter style={{ color: "skyblue" }}>
              <b>
                <Countdown
                  intervalDelay={0}
                  precision={3}
                  date={new Date("2/15/2020")}
                  renderer={renderer}
                />
              </b>
            </CardFooter>
          </Card>

          <br />
        </Col>
        <Col sm={4} md={4} lg={4}>
          <Card>
            <CardImg
              style={{ width: "100%" }}
              src="https://sheaf1-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/Gloria-Sun-Lets-Talk.png"
            />
            <CardBody>
              <br />
              <p>
                <b> Topic: </b> CXC Spanish Online :: Let's Talk
                <br />
                <b>Time: </b> Feb 15, 2020 02:00 PM
                <br />
                <b>Driect Link</b>{" "}
                <a target="_blank" href="https://us04web.zoom.us/j/370403487">
                  here
                </a>
                <br />
                <b>Meeting ID:</b> 370 403 487
              </p>
            </CardBody>
            <CardFooter>
              <b>
                <Countdown
                  intervalDelay={0}
                  precision={3}
                  date={new Date("2/15/2020")}
                  renderer={renderer}
                />
              </b>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default TwelveFifteen;
