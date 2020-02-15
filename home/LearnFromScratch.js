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
import { Jumbotron } from "react-bootstrap";

const LearnFromScratch = props => (
  <div className="text-center">
    <Jumbotron>
      <h3>Learn Spanish from scratch</h3>
      <br />
      <Button
        className="animated bounce"
        style={{
          animationIterationCount: "infinite"
        }}
        theme="success"
      >
        Start Here
      </Button>
    </Jumbotron>
  </div>
);

export default LearnFromScratch;
