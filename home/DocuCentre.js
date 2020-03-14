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
import PDFFile from "../common/PDFFile";

const DocuCentre = props => (
  <div>
    <h4>Document Centre</h4>
    <br />
    <Row>
      <Col sm={12} md={8} lg={8} xl={8}>
        <div>
          <Row>
            <Col sm={6} md={6}>
              <ul className="ul-st-1">
                <li>
                  <PDFFile title="Spanish Jan 2020 Paper" />
                </li>
                <li>
                  <PDFFile title="" />
                </li>
                <li>
                  <PDFFile title="" />
                </li>
                <li>
                  <PDFFile title="" />
                </li>
                <li>
                  <PDFFile title="" />
                </li>
              </ul>
            </Col>
            <Col sm={6} md={6}>
              <ul className="ul-st-1">
                <li>
                  <PDFFile title="" />
                </li>
                <li>
                  <PDFFile title="" />
                </li>
                <li>
                  <PDFFile title="" />
                </li>
                <li>
                  <PDFFile title="" />
                </li>
                <li>
                  <PDFFile title="" />
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Col>
      <Col sm={12} md={4} lg={4} xl={4}>
        <div className="box"></div>
      </Col>
    </Row>
    <br />
  </div>
);

export default DocuCentre;
