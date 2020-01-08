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

const Guidelines = props => (
  <React.Fragment>
    <br />
    <Card>
      <CardBody>
        <h6>Guidelines</h6>

        <p>
          These are a few guidelines to take in mind when writing your letters
        </p>

        <ul style={{ marginLeft: "-20px" }}>
          <li style={{ paddingBottom: "15px" }}>
            <b>DO NOT</b> write your real name and address. Include the date in
            Spanish.
          </li>
          <li style={{ paddingBottom: "15px" }}>
            The greeting must be appropriate and agree with the pronoun it
            proceeds. Some common greetings are:
            <ul style={{ paddingTop: "15px" }}>
              <li>Querido/a</li>
              <li style={{ paddingTop: "10px" }}>Queridísimo/a</li>
              <li style={{ paddingTop: "10px" }}>Mi queridísima mamá/ tía</li>
            </ul>
          </li>
          <li style={{ paddingBottom: "15px" }}>
            The farewell must also be of an appropriate form. One of the
            following may be used:
            <ul style={{ paddingTop: "15px" }}>
              <li>Con cariño</li>
              <li style={{ paddingTop: "10px" }}>Un abrazo</li>
              <li style={{ paddingTop: "10px" }}>Tu amigo</li>
            </ul>
          </li>
          <li style={{ paddingBottom: "15px" }}>
            Read through the guidelines carefully adn include all the
            information required when planning your letter
          </li>
          <li style={{ paddingBottom: "15px" }}>
            Jot down all vocabulary items and expressions that comes to mind
          </li>
          <li style={{ paddingBottom: "15px" }}>
            Use about 30 minutes to write your letter and another 5 - 10 minutes
            to rea over. Check agreement of nouns and adjectives and ensure that
            the verbs are conjugated in the correct person, number and tense.
          </li>

          <li style={{ paddingBottom: "15px" }}>
            To ensure that you do not exceed your word limit, or write a letter
            that is far too short, divide your letter into 4 paragraphs using
            the following format
          </li>
        </ul>

        <ul style={{ listStyleType: "none", marginLeft: "-20px" }}>
          <li>
            <h6>
              Paragraph 1: <i>(25 words)</i>
            </h6>
            <p>
              This paragraph should include enuiries about the person's health
              and thanks for a previour letter. You should also give a statement
              of the purpose of the letter.
            </p>
          </li>
          <li style={{ paddingTop: "10px" }}>
            <h6>
              Paragraph 2 and 3: <i>(50 words each)</i>
            </h6>
            <p>
              These paragraphs should give the details asked for in the
              guidelines.{" "}
            </p>
          </li>
          <li style={{ paddingTop: "10px" }}>
            <h6>
              Paragraph 4: <i>(25 words)</i>
            </h6>

            <p>
              This paragraph brings the letter to a close in a manner that is
              not abrupt and is friendly and polite. You can include statements
              expressing your wish to receive a reply, and extend your greetings
              to the rest of the family or friends.
            </p>
          </li>
        </ul>
      </CardBody>
    </Card>
  </React.Fragment>
);

export default Guidelines;
