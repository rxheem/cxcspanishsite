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
import FA from "react-fontawesome";

// Common
import BetaMessage from "../../common/BetaMessage";
import PDFFile from "../../common/PDFFile";

// Style for the onft icons
const liStyles = {
  display: "inline!important",
  paddingLeft: "50px"
};

const oLiStyles = {
  display: "inline"
};

const ulStyles = {
  listStyleType: "none"
};

const GuideLayout = props => (
  <Row>
    <Col sm={12} md={8} lg={8} xl={8}>
      {props.children}
      <br />
      <Card>
        <CardFooter>
          <ul style={ulStyles}>
            <li style={oLiStyles}>
              <i style={{ color: "#8a3ab9" }} className="fab fa-instagram" />
              <a
                className="text-muted"
                style={{ paddingLeft: "10px" }}
                href=""
                target="_blank"
              >
                cxcspanish
              </a>
            </li>
            <li style={liStyles}>
              <i style={{ color: " #3b5998" }} className="fab fa-facebook" />
              <a
                className="text-muted"
                style={{ paddingLeft: "10px" }}
                href=""
                target="_blank"
              >
                CXC Spanish Gude
              </a>
            </li>
            <li style={liStyles}>
              <i style={{ color: "#00acee" }} className="fab fa-twitter" />
              <a
                className="text-muted"
                style={{ paddingLeft: "10px" }}
                href=""
                target="_blank"
              >
                cxcspanish
              </a>
            </li>
          </ul>
        </CardFooter>
      </Card>
    </Col>
    <Col sm={12} md={4} lg={4} xl={4}>
      <BetaMessage />

      <Card>
        <CardBody>
          <CardTitle>Read on the Go</CardTitle>
          <p>
            Download and read our guides offline, at school or when you're
            studying fro your exams. Here's our top picks.
          </p>

          <ul style={{ marginLeft: "-25px", listStyleType: "none" }}>
            <li>
              <PDFFile title="'ser' vs. 'estar'" href="" />
            </li>
            <li style={{ paddingTop: "15px" }}>
              <PDFFile title="Study Tips" href="" />
            </li>
            <li style={{ paddingTop: "15px" }}>
              <PDFFile title="Funny Spanish Jokes" href="" />
            </li>
            <li style={{ paddingTop: "15px" }}>
              <PDFFile title="Genders in Spanish" href="" />
            </li>
          </ul>

          <br />
          <h6>Essentials</h6>

          <ul style={{ marginLeft: "-25px", listStyleType: "none" }}>
            <li>
              <PDFFile title="Pronunciation Tips" href="" />
            </li>
            <li style={{ paddingTop: "15px" }}>
              <PDFFile title="The Personal ‘a’ in Spanish" href="" />
            </li>
            <li style={{ paddingTop: "15px" }}>
              <PDFFile title="Spanish Adverbs" href="" />
            </li>
          </ul>

          <br />
          <h6>How To Guides</h6>

          <ul style={{ marginLeft: "-25px", listStyleType: "none" }}>
            <li>
              <PDFFile title="How to Use Online Translators" href="" />
            </li>
            <li style={{ paddingTop: "15px" }}>
              <PDFFile title="Asking for Directions in Spanish" href="" />
            </li>
            <li style={{ paddingTop: "15px" }}>
              <PDFFile title="Ordering Food in Spanish" href="" />
            </li>
          </ul>

          <br />
          <Button>View Archives &rarr;</Button>
        </CardBody>
      </Card>
    </Col>
  </Row>
);

export default GuideLayout;