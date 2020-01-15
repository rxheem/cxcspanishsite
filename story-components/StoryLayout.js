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

const StoryLayout = props => (
  <Row>
    <Col sm={12} md={8} lg={8} xl={8}>
      {props.children}
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
    </Col>
  </Row>
);

export default StoryLayout;
