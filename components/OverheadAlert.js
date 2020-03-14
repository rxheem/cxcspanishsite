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

const number = Math.floor(Math.random() * 5 + 1);

class OverheadAlert extends React.Component {
  render() {
    if (number == 1 || number == 4 || number == 5) {
      return (
        <div className="text-center">
          <Alert style={{ margin: "auto" }} theme="info">
            School closed due to Coronvirus COVID-19? Join our free online
            classes{" "}
            <a className="alert-link" href="/online-classes">
              here
            </a>
          </Alert>
        </div>
      );
    } else if (number == 2) {
      return (
        <div className="text-center">
          <Alert style={{ margin: "auto" }} theme="info">
            Get the January 2020 paper.{" "}
            <a
              className="alert-link"
              href="https://dl.dropbox.com/s/vw2x48f3ctchz4p/Spanish%20Jan%202020%20P2.pdf.pdf?dl=0"
            >
              Download now
            </a>
          </Alert>
        </div>
      );
    } else if (number == 3) {
      return (
        <div className="text-center">
          <Alert style={{ margin: "auto" }} theme="danger">
            Coronavirus COVID-19 safety tips:{" "}
            <a
              target="_blank"
              className="alert-link"
              href="https://www.redcross.org/about-us/news-and-events/news/2020/coronavirus-safety-and-readiness-tips-for-you.html"
            >
              Learn more
            </a>
          </Alert>
        </div>
      );
    }
  }
}

export default OverheadAlert;
