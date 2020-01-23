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

const ResourcesLayout = props => (
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
          <CardImg
            src="https://cdn.blog.psafe.com/en/blog/wp-content/uploads/2016/10/BLOG_EN_0610_The-Benefits-of-Dropbox-for-Your-Android.jpg"
            style={{ width: "100%" }}
          />
          <CardBody>
            <p>
              Don't see your subject? You can check out the entire archives in
              our Dropbox folder.
            </p>
            <Button href="https://www.dropbox.com/sh/0iwksvyxx6hnx8u/AADS2oBLhV7Ouofp9d0fc593a?dl=0">
              <i style={{ paddingRight: "5px" }} className="fab fa-dropbox"></i>
              View Folder
            </Button>
          </CardBody>
        </Card>

        <br />
        <Card>
          <CardImg
            src="https://images.idgesg.net/images/article/2019/04/google-drive-docs-suite-logos-100794638-large.jpg"
            style={{ width: "100%", padding: "20px" }}
          />
          <CardBody>
            <p>
              You can also see the papers on our Google Drive folder, if you are
              not able to access Dropbox.
            </p>
            <Button
              theme="success"
              href="https://drive.google.com/open?id=1zPeCEOLnKcTIo5QewZL7YJsm7u9gsTI4"
            >
              <i
                style={{ paddingRight: "5px" }}
                class="fab fa-google-drive"
              ></i>
              View Folder
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

export default ResourcesLayout;
