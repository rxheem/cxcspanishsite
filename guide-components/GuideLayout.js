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
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import LazyLoad from "react-lazyload";
import GoogleDriveView from "../common/GoogleDriveView";
import EssentialBooks from "../common/EssentialBooks";
import SocialLinks from "../common/SocialLinks";
import CAPEPastPapers from "../common/CAPEPastPapers";

import FA from "react-fontawesome";

// Common
import PDFFile from "../common/PDFFile";
// Dropbox view and Google drive view
import DropboxView from "../common/DropboxView";

const GuideLayout = props => (
  <Row>
    <Col sm={12} md={8} lg={8} xl={8}>
      {props.children}
      <SocialLinks />
    </Col>
    <Col sm={12} md={4} lg={4} xl={4}>
      <br className="d-sm-none" />
      <DropboxView />
      <br />
      <EssentialBooks />
      <br />
      <CAPEPastPapers />
    </Col>
  </Row>
);

export default GuideLayout;
