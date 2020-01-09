import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Row,
  Col
} from "shards-react";

import PDFFile from "../../../../common/PDFFile.js";
const Fragment = React.Fragment;

const UsefulEssentials = props => (
  <Fragment>
    <br className="d-sm-none" />
    <Card>
      <CardBody>
        <h5>Useful Essentials</h5>
        <p>
          These phrases and vocabulary really come in handy when composing you
          letters. Take a read!
        </p>

        <ul
          style={{ listStyleType: "none", marginLeft: "-15px" }}
          className="list-ul"
        >
          <li>
            <PDFFile href="" title="Common Spanish Expressions" />
          </li>
          <li>
            <PDFFile href="" title="Spanish Adjectives" />
          </li>
          <li>
            <PDFFile href="" title="Spanish Prepositions" />
          </li>
          <li>
            <PDFFile href="" title="Common Spanish Adverbs" />
          </li>
          <li>
            <PDFFile href="" title="Verb Conjugation Refresher" />
          </li>
        </ul>

        <style>
          {`
            .list-ul {
              padding-left: 20px;
              margin-top: -10px;
            }

            .list-ul li {
              padding-bottom: 10px;
            }
            `}
        </style>
      </CardBody>
    </Card>
  </Fragment>
);

export default UsefulEssentials;
