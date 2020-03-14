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

import Table from "react-bootstrap/Table";

import Layout from "../components/Layout";
import SEO from "react-seo-component";

class OnlineClasses extends React.Component {
  render() {
    return (
      <Layout>
        {/* SEO Components */}
        <SEO
          title="Free Online CSEC Classes | Guide, Past Papers and Exercises"
          description={
            "Are you or others impacted by school closures? We've put together online classes to help you pass your CXC exams with CXC Spanish Online 2020."
          }
          image={""}
          pathname={"https://www.cxcspanish.com/online-classes"}
          siteLanguage={"en"}
          siteLocale={"en"}
          twitterUsername={"_rxheem"}
        />

        <Container>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Online Classes</BreadcrumbItem>
          </Breadcrumb>
          <Row>
            <Col sm={12} md={8}>
              <Card>
                <CardImg
                  style={{ width: "100%" }}
                  src="https://www.edtechteam.com/wp-content/uploads/2019/11/Google-Classroom-Hero-V2.png"
                />
              </Card>

              <br />
              <br />
              <p>
                Are you or others impacted by school closures? We've created a
                series of free online classes to study at home to help you pass
                your CSEC and CAPE exams. Online classes will include:
              </p>

              <ul className="ul-st">
                <li>Access to past papers and worked papst paper solutions</li>
                <li>Live classes and interactive discussions</li>
                <li>Classwork and assignemnts with feedback</li>
                <li>
                  Working with other students from across the Caribbean on
                  projects
                </li>
                <li>
                  Please note that we also have the{" "}
                  <a href="/past-papers">CSEC</a> and{" "}
                  <a href="/cape-papers">CAPE</a> past papers online.{" "}
                </li>
              </ul>

              <p>
                Classes will be held via{" "}
                <a href="https://classroom.google.com/" target="_blank">
                  Google Classroom
                </a>
                . Download the official Google Classroom app{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.google.android.apps.classroom&hl=en"
                  target="_blank"
                >
                  here for iOS
                </a>{" "}
                or{" "}
                <a
                  href="https://apps.apple.com/us/app/google-classroom/id924620788"
                  target="_blank"
                >
                  here for Android.
                </a>
              </p>

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Classroom Code</th>
                    <th>Tutorial Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Spanish</td>
                    <td>52e37y6</td>
                    <td>
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        TBA
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Information Technology</td>
                    <td>5n77ikb</td>
                    <td>
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        TBA
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>English Language</td>
                    <td>
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        TBA
                      </span>
                    </td>
                    <td>
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        TBA
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Mathematics</td>
                    <td>
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        TBA
                      </span>
                    </td>
                    <td>
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        TBA
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Geography</td>
                    <td>
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        TBA
                      </span>
                    </td>
                    <td>
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        TBA
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Chemistry</td>
                    <td>
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        TBA
                      </span>
                    </td>
                    <td>
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        TBA
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Physics</td>
                    <td>
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        TBA
                      </span>
                    </td>
                    <td>
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        TBA
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Biology</td>
                    <td>
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        TBA
                      </span>
                    </td>
                    <td>
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        TBA
                      </span>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <br />
              <p>
                Would you like to contribute to our initiative? Are you a teacer
                or studied any one of the above referenced subjects recently?
                Send us an email at{" "}
                <a href="mailto:holacxcspanish@gmail.com">
                  holacxcspanish@gmail.com
                </a>{" "}
                with your available times along with any study notes, videos and
                resoucres!
              </p>
            </Col>
            <Col sm={12} md={4}></Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default OnlineClasses;
