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

const SampleTwo = props => (
  <React.Fragment>
    <br />
    <Card>
      <CardBody>
        <p>Let's take a look at another one:</p>
        <Quote
          text={
            <React.Fragment>
              <span>
                {" "}
                You had been studying overseas but for some reason you have to
                return home indefinitely. Write a letter to your Puerto Rican
                friend in which you include
              </span>

              <br />
              <br />
              <ul>
                <li>information about your studies</li>
                <li style={{ paddingTop: "15px" }}>
                  the reason for your returning home
                </li>
                <li style={{ paddingTop: "15px" }}>
                  how your friends at home reacted to your return
                </li>
                <li style={{ paddingTop: "15px" }}>
                  the plans you have made to continue your studies
                </li>
              </ul>
            </React.Fragment>
          }
        />
      </CardBody>
    </Card>
  </React.Fragment>
);

export default SampleTwo;
