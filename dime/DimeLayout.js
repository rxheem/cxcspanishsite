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

import { BrowserView, MobileView } from "react-device-detect";
import PDFFile from "../common/PDFFile";
import DropboxView from "../common/DropboxView";
import GoogleDriveView from "../common/GoogleDriveView";
import EssentialBooks from "../common/EssentialBooks";
import SocialLinks from "../common/SocialLinks";

const DimeLayout = props => (
  <div>
    <Row>
      <Col sm={12} md={8} lg={8} xl={8}>
        {props.children}
        <SocialLinks />
      </Col>
      <Col sm={12} md={4} lg={4} xl={4}></Col>
    </Row>
  </div>
);

export default DimeLayout;
