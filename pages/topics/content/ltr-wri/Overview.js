import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Row,
  Col,
  Alert
} from "shards-react";
import { Tab, Tabs, TabContent } from "react-bootstrap";
import Img from "react-image";
import uuidv4 from "uuid";

// Components
import Quote from "../../../../common/Quote";
import Answer from "../../../../common/Answer";

const Overview = props => (
  <React.Fragment>
    <br />
    <Card>
      <CardBody>
        <p>
          The letter writing section on your exam is optional and you can
          instead choose to write a <a href="./composition">Composition</a>.
          However, if you choose to do this question is is important to know
          what is required and how your letter is to be structured.
        </p>
        <p>
          You will be given a scenario and a set of instructions that serves as
          a guide to writing your letter. They are normally directed to a
          friend, penpal or a member of your family.
        </p>
      </CardBody>
    </Card>

    <br />
    <Card>
      <CardBody></CardBody>
    </Card>

    <br />
    <Alert className="text-dark" theme="warning">
      Your word limit is 130 - 150 words. It is important that you you do no
      exceed or fall below these limits or else you will be penlized.
    </Alert>
  </React.Fragment>
);

export default Overview;
