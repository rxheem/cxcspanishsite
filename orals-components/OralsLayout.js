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

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import PDFFile from "../common/PDFFile";

// Style for the onft icons
const liStyles = {
  display: "inline!important",
  paddingLeft: "50px"
};

const oLiStyles = {
  display: "inline"
};

const ulStyles = {
  listStyleType: "none",
  paddingTop: "15px"
};

const OralsLayout = props => (
  <div>
    <Row>
      <Col sm={12} md={8} lg={8} xl={8}>
        {props.children}

        <BrowserView>
          <br />
          <Card>
            <span className="border border-light">
              <ul style={ulStyles}>
                <li style={oLiStyles}>
                  <i
                    style={{ color: "#8a3ab9" }}
                    className="fab fa-instagram"
                  />
                  <a
                    className="text-muted"
                    style={{ paddingLeft: "10px" }}
                    href="https://www.instagram.com/cxcspanish/"
                    target="_blank"
                  >
                    cxcspanish
                  </a>
                </li>
                <li style={liStyles}>
                  <i
                    style={{ color: " #3b5998" }}
                    className="fab fa-facebook"
                  />
                  <a
                    className="text-muted"
                    style={{ paddingLeft: "10px" }}
                    href="https://www.facebook.com/cxcspanishguide/?__tn__=%2Cd%2CP-R&eid=ARBp5b8r2d06OFKljjfcKxLq6dNjDPkODENJqB9yAsRgKUQHpmOrhWiLifsxgPnYtt5njC48bXpGjQii"
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
                    href="https://www.twitter.com/cxcspanish"
                    target="_blank"
                  >
                    cxcspanish
                  </a>
                </li>
              </ul>
            </span>
          </Card>
        </BrowserView>
      </Col>
      <Col sm={12} md={4} lg={4} xl={4}>
        <br className="d-sm-none" />
        <Card>
          <CardBody>
            <CardTitle className="">Essentials</CardTitle>

            <br />
            <ul style={{ marginLeft: "-30px", listStyleType: "none" }}>
              <li>
                <PDFFile
                  title="Spanish For Dummies"
                  href="https://dl.dropbox.com/s/rjglra0ra4ved1z/Spanish%20Essentials%20For%20Dummies.pdf?dl=0"
                />
              </li>
              <li style={{ paddingTop: "10px" }}>
                <PDFFile
                  title="Modern Spanish Grammar"
                  href="https://dl.dropbox.com/s/fibr4yjdzv4qovn/modern-spanish-grammar.pdf?dl=0"
                />
              </li>
              <li style={{ paddingTop: "10px" }}>
                <PDFFile
                  title="Spanish Basics"
                  href="https://dl.dropbox.com/s/hmime50fn00u7k1/Free%20K.pdf?dl=0"
                />
              </li>
            </ul>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

export default OralsLayout;
