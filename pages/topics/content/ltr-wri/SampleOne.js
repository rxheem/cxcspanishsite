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

import uuidv4 from "uuid";

// Components
import Quote from "../../../../common/Quote";
import Answer from "../../../../common/Answer";

const SampleOne = props => (
  <React.Fragment>
    <br />
    <Card>
      <CardBody>
        <p>Let's take a look at an example:</p>
        <Quote
          text={
            <React.Fragment>
              <span>
                {" "}
                You participated in an annual competition. Write a letter to
                your Mexican friend about the experience. Be sure to include
              </span>

              <br />
              <br />
              <ul>
                <li>what kind of competition you entered</li>
                <li style={{ paddingTop: "15px" }}>
                  how participants normally perpare for this competition
                </li>
                <li style={{ paddingTop: "15px" }}>
                  what you learnt from the experience
                </li>
                <li style={{ paddingTop: "15px" }}>
                  what competitions you plan to enter next year and why
                </li>
              </ul>
            </React.Fragment>
          }
        />
      </CardBody>
    </Card>
  </React.Fragment>
);

export default SampleOne;
