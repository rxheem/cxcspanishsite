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
import Draggable from "react-draggable";

// Components
import Quote from "../../../../common/Quote";
import Answer from "../../../../common/Answer";

// Fragment
const Fragment = React.Fragment;

const Overview = props => (
  <Fragment>
    <br />

    <Card>
      <CardBody>
        <p>
          Directed Situations are short situations or scenarios in which you are
          required to give a one sentence response in Spanish.
        </p>
        <p>For example, you are given the following scenario:</p>

        <Quote text="Your teacher is taking up a new job overseas. Write her a farewell note and express good wishes." />

        <br />
        <p>In this example, you are required to</p>

        <ul>
          <li>Acknowledge that your teacher is leaving, and</li>
          <li>Express good wishes.</li>
        </ul>

        <h6 style={{ paddingTop: "15px" }} className="text-info">
          Suggested Responses
        </h6>

        <Answer
          text="Buenas suerte con tu nuevo trabajo y yo espero que usted haga bien"
          translated="Good luch with your new job and I hope that you do well"
          href="https://www.spanishdict.com/translate/%20Buenas%20suerte%20con%20tu%20nuevo%20trabajo%20y%20yo%20espero%20que%20usted%20haga%20bien"
        />
        <Answer
          text="Felicidades en su nuevo trabajo"
          translated="Congratulations on your new job"
          href="https://www.spanishdict.com/translate/Felicidades%20en%20su%20nuevo%20trabajo."
        />

        <Button>Read more &rarr;</Button>
      </CardBody>
    </Card>

    <br />
    <Card>
      <CardBody>
        <p>Let's have a look at another example:</p>

        <Quote text="You have to stay back at school this afternoon. Write the text that you send to your mother explaining why." />

        <h6 style={{ paddingTop: "15px" }} className="text-info">
          Suggested Responses
        </h6>

        <Answer
          text="Yo voy a limpiar mi aula esta tarde"
          translated="I am going to clean my classroom this afternoon"
          href="https://www.spanishdict.com/translate/I%20am%20going%20to%20clean%20my%20classroom%20this%20afternoon"
        />
        <Answer
          text="Mis amigos y yo vamos a un restaurante después de la escuela hoy"
          translated="My friends and I are going to a restaurant after school today"
          href="https://www.spanishdict.com/translate/My%20friends%20and%20I%20are%20going%20to%20a%20restaurant%20after%20school%20today.%20"
        />
        <Answer
          text="Hoy tengo detención desde las 3 y las 4 de la tarde"
          translated="I have detention today from 3pm to 4pm"
          href="https://www.spanishdict.com/translate/I%20have%20detention%20between%203%20and%204%20today.%20"
        />
      </CardBody>
    </Card>
  </Fragment>
);

export default Overview;
