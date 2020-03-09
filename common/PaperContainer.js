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
import FA from "react-fontawesome";
import Img from "react-image";
import Toast from "react-bootstrap/Toast";
import { BrowserView, MobileView } from "react-device-detect";

const PaperContainer = props => (
  <div>
    <Row>
      <Col sm={12} md={3} lg={3} xl={3}>
        <a href={props.href}>
          <Img
            className="card-img"
            style={{ width: "100%" }}
            src={props.imgSrc}
          />
        </a>
        <br className="d-sm-none" />
      </Col>
      <Col sm={12} md={9} lg={9} xl={9}>
        <Card>
          <CardBody>
            <h6>{props.title}</h6>

            <p>{props.description}</p>

            <MobileView>
              <a href={props.href}>
                <FA
                  name="file-pdf"
                  style={{ color: "#f00", paddingRight: "10px" }}
                />
                PDF Download
              </a>
            </MobileView>

            <BrowserView>
              <br />
              <Row>
                <Col sm={6} md={4} lg={4} xl={4}>
                  <a href={props.href}>
                    <FA
                      name="file-pdf"
                      style={{ color: "#f00", paddingRight: "10px" }}
                    />
                    PDF Download
                  </a>
                </Col>
                <Col sm={6} md={4} lg={4} xl={4}>
                  <a target="_blank" href={props.purchase}>
                    Purchase
                    <FA
                      name="external-link-alt"
                      style={{ color: "skyblue", paddingLeft: "10px" }}
                    />
                  </a>
                </Col>
                <Col sm={6} md={4} lg={4} xl={4}>
                  <a target="_blank" href={props.syllabus}>
                    Syllabus
                  </a>
                  <a href={props.standalone}></a>
                </Col>
              </Row>
            </BrowserView>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <br />
  </div>
);

export default PaperContainer;
