import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Row,
  Col,
  Button
} from "shards-react";
import Table from "react-bootstrap/Table";
import Img from "react-image";

// Components
import Answer from "../../../../common/Answer";

const WordBank = props => (
  <Card>
    <CardImg
      style={{ height: "200px" }}
      src="https://images.template.net/wp-content/uploads/2016/04/25093033/Book-icons.jpg"
    />
    <CardBody>
      <CardTitle>Vocabulary Bank</CardTitle>
    </CardBody>
  </Card>
);

export default WordBank;
