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
import Moment from "react-moment";
const { detect } = require("detect-browser");

let now = new Date();
let currentBrowser = null;

class SystemInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      browser: ""
    };
  }
  componentDidMount() {
    if (process.browser) {
      this.setState({ browser: "" });
    }
  }

  render() {
    if (this.props.hide == true) {
      return null;
    } else {
      return (
        <div>
          <Row>
            <Col sm={3} md={3} lg={3} xl={3}></Col>
            <Col sm={3} md={3} lg={3} xl={3}></Col>
            <Col sm={3} md={3} lg={3} xl={3}>
              <p>
                Browser: <b>{this.state.browser}</b>
              </p>
            </Col>
            <Col sm={3} md={3} lg={3} xl={3}>
              <Moment interval={0}>{now}</Moment>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

export default SystemInfo;
