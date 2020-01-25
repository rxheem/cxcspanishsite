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
import SubmitStory from "../story-components/SubmitStory";

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

import { BrowserView, MobileView } from "react-device-detect";

const StoryLayout = props => (
  <Row>
    <Col sm={12} md={8} lg={8} xl={8}>
      {props.children}

      <BrowserView>
        <br />
        <Card>
          <span className="border border-light">
            <ul style={ulStyles}>
              <li style={oLiStyles}>
                <i style={{ color: "#8a3ab9" }} className="fab fa-instagram" />
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
                <i style={{ color: " #3b5998" }} className="fab fa-facebook" />
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

      {props.isArticle ? (
        <div>
          <Card>
            <CardHeader>Learn More</CardHeader>
            <CardBody>
              <p>
                <i
                  style={{ color: "#0084cf", paddingRight: "7px" }}
                  className="fas fa-user-edit"
                ></i>
                <b>Author:</b>
                <span style={{ paddingLeft: "7px" }}>{props.author}</span>
              </p>
              <p>
                <i
                  style={{ color: "orange", paddingRight: "7px" }}
                  className="fas fa-flag-usa"
                ></i>
                <b>Origin:</b>
                <span style={{ paddingLeft: "16px" }}>{props.origin}</span>
              </p>
              <p>
                <i
                  style={{ color: "green", paddingRight: "7px" }}
                  className="fas fa-check"
                ></i>
                <b>Values:</b>
                <span style={{ paddingLeft: "14px" }}>{props.values}</span>
              </p>
            </CardBody>
            <CardFooter>
              Read more about this story{" "}
              <a target="_blank" style={{ color: "#0084cf" }} href={props.href}>
                here
              </a>
            </CardFooter>
          </Card>

          <br />
        </div>
      ) : null}

      <Card>
        <CardImg
          src="https://cdn.blog.psafe.com/en/blog/wp-content/uploads/2016/10/BLOG_EN_0610_The-Benefits-of-Dropbox-for-Your-Android.jpg"
          style={{ width: "100%" }}
        />
        <CardBody>
          <p>
            We've sourced all the past papers so you don't have to. Check out
            our Dropbox folder to get pass paper for any CSEC or CAPE subject.
          </p>
          <Button
            target="_blank"
            href="https://www.dropbox.com/sh/0iwksvyxx6hnx8u/AADS2oBLhV7Ouofp9d0fc593a?dl=0"
          >
            <i style={{ paddingRight: "5px" }} className="fab fa-dropbox"></i>
            View Folder
          </Button>
        </CardBody>
      </Card>
    </Col>
  </Row>
);

export default StoryLayout;
