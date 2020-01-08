import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

// Components
import Quote from "../../../../common/Quote";
import Answer from "../../../../common/Answer";

// Fragment
const Fragment = React.Fragment;

const Examples = props => (
  <Fragment>
    <br />
    <Card>
      <CardBody>
        <p>
          Now that you have an idea of what Directed Situations are, let's look
          at some more examples.
        </p>

        <Quote text="You see an old man sitting on the side of the street. He is holding a note requesting assistance. What does the note say?" />

        <br />
        <h6 className="text-info">Suggested Responses</h6>
        <Answer
          text="¿Puede ayudarme usted a comprar comida?"
          translated="Can you help me buy food?"
          href="https://www.spanishdict.com/translate/%C2%BFPuedes%20ayudarme%20a%20comprar%20comida%3F"
        />

        <br />
        <Quote text="You are shopping and go to the section where your favourite food is kept. However, you find the shelves empt and a notice informing customers of a problem with the item. What does the notice say?" />

        <br />
        <h6 className="text-info">Suggested Responses</h6>
        <Answer
          text="Este producto ya no está disponible"
          translated="This product is no longer available"
          href="https://www.spanishdict.com/translate/Este%20producto%20ya%20no%20esta%20disponible"
        />
        <Answer
          text="Nuestros oreos están agotados"
          translated="Our oreos are currently out of stock"
          href="https://www.spanishdict.com/translate/Nuestros%20oreos%20est%C3%A1n%20agotados"
        />

        <br />
        <Quote text="You are walking through the lobby of a hotel while the floor is being mopped. What sign do you see to alert guests?" />

        <br />
        <h6 className="text-info">Suggested Responses</h6>
        <Answer
          text="Cuidado, piso mojado"
          translated="Caution, wet floor"
          href="https://www.spanishdict.com/translate/cuidado%20piso%20mojado"
        />
        <Answer
          text="Precaución, piso mojado posible"
          translated="Caution, wet floor possible"
          href="https://www.spanishdict.com/translate/Precauci%C3%B3n%2C%20piso%20mojado%20posible"
        />

        <br />
        <Quote text=" One of your classmates is ill at home, but wishes to do the Spanish assignment. What do you write in the note you send with his/her neighbour?" />

        <br />
        <h6 className="text-info">Suggested Responses</h6>
        <Answer
          text="¿Puede ayudar usted a Sean con la tarea?"
          translated="Can you help Sean with the assignment?"
          href="https://www.spanishdict.com/translate/%C2%BFPuede%20ayudar%20usted%20a%20Sean%20con%20la%20tarea%3F"
        />

        <br />
        <Quote text="You have just heard that your cousin's wedding, which you were to attend, has been called off. Write the text message you send expressing your disappointment." />

        <br />
        <h6 className="text-info">Suggested Responses</h6>
        <Answer
          text="Yo lamento escuchar tu boda fue cancelada"
          translated="I'm sorry to hear that your wedding was cancelled"
          href="https://www.spanishdict.com/translate/Lamento%20escuchar%20tu%20boda%20fue%20cancelada"
        />
      </CardBody>
    </Card>
  </Fragment>
);

export default Examples;
