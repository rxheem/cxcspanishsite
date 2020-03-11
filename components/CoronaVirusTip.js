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

const CoronaVirusTip = props => (
  <div className="text-center">
    <Alert theme="danger">
      Coronavirus: Safety and Readiness Tips for You.{" "}
      <a
        className="alert-link"
        target="_blank"
        href="https://www.redcross.org/about-us/news-and-events/news/2020/coronavirus-safety-and-readiness-tips-for-you.html"
      >
        Learn more.
      </a>
    </Alert>
  </div>
);

export default CoronaVirusTip;
