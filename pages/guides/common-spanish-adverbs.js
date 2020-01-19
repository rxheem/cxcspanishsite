import {
  Container,
  BreadcrumbItem,
  Row,
  Col,
  Breadcrumb,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Form,
  FormInput,
  FormGroup
} from "shards-react";

import Tab from "react-bootstrap/Tab";
import TabContainer from "react-bootstrap/TabContainer";
import Tabs from "react-bootstrap/Tabs";
import Collapsible from "react-collapsible";
import Answer from "../../common/Answer";

import Head from "next/head";
import SEO from "react-seo-component";

// Layout
import Layout from "../../components/Layout";
import GuideLayout from "../../guide-components/GuideLayout";

const CommonSpanishAdverbs = props => (
  <React.Fragment>
    <SEO
      title={"Common Spanish Adverbs | CXC Spanish Guide"}
      description={
        "Learn about the most common adverbs used in Spanish with our free CXC Spanish online study guide."
      }
      twitterUsername={"_rxhem"}
      author={"Raheem McDonald"}
      article={true}
      publishedDate={Date.now()}
      modifiedDate={Date.now()}
    />
    <Layout>
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/guide">Guides</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Common Spanish Adverbs</BreadcrumbItem>
        </Breadcrumb>
        <GuideLayout>
          <Card>
            <CardBody>
              <CardTitle>Common Spanish Adverbs</CardTitle>

              <br />
              <p>
                An adverb is a word that modifies the meaning of a verb, an
                adjective or another adverb. These are words like <b>now</b>,{" "}
                <b>then</b>, <b>today</b> and <b>carefully</b>. These are many
                adverbs in Spanish; however, we will only be discussing the most
                commonly used in Spanish.
              </p>

              <h6>Formation</h6>
              <p>
                Most adverbs in Spanish are formed by adding <b>-mente</b> to
                the adjective in the singular form. This is similar to the{" "}
                <b>-ly</b> in English. And when the adjective has a written
                accent the adverb <b>must</b> retain it.
              </p>

              <br />
              <h6 className="text-black">Adverbs Ending In -mente</h6>

              <br />
              <ul style={{ marginLeft: "-20px" }}>
                <li>
                  <Collapsible
                    trigger={
                      <a href="">
                        recientemente
                        <span
                          style={{ paddingLeft: "20px" }}
                          className="text-muted"
                        >
                          recently
                        </span>
                      </a>
                    }
                  >
                    <br />
                    <ul style={{ marginLeft: "-40px", listStyleType: "none" }}>
                      <li>
                        <Answer
                          noIcon
                          text="Estuve recientemente en Polonia y puedo atestiguarlo."
                          translated="I was in Poland recently and can confirm this."
                        />
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <Answer
                          text="¿Has leído algún libro bueno recientemente?"
                          translated="Have you read any good books recently?"
                          href="https://www.spanishdict.com/translate/%C2%BFHas%20le%C3%ADdo%20alg%C3%BAn%20libro%20bueno%20recientemente%3F"
                        />
                      </li>
                    </ul>
                  </Collapsible>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Collapsible
                    trigger={
                      <a href="">
                        brevemente
                        <span
                          style={{ paddingLeft: "20px" }}
                          className="text-muted"
                        >
                          shortly
                        </span>
                      </a>
                    }
                  >
                    <br />
                    <ul style={{ marginLeft: "-40px", listStyleType: "none" }}>
                      <li>
                        <Answer
                          href="https://www.spanishdict.com/translate/Describir%C3%A9%20%2C%20muy%20brevemente%2C%20una%20o%20dos%20ideas."
                          text="Describiré , muy brevemente, una o dos ideas."
                          translated="I will very briefly describe one or two ideas."
                        />
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <Answer
                          noIcon
                          text="Permítanme referir brevemente algunos datos y cifras."
                          translated="Let me briefly quote a few facts and figures."
                        />
                      </li>
                    </ul>
                  </Collapsible>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Collapsible
                    trigger={
                      <a href="">
                        diariamente
                        <span
                          style={{ paddingLeft: "20px" }}
                          className="text-muted"
                        >
                          daily
                        </span>
                      </a>
                    }
                  >
                    <br />
                    <ul style={{ marginLeft: "-40px", listStyleType: "none" }}>
                      <li>
                        <Answer
                          href="https://www.spanishdict.com/translate/Muchos%20tambi%C3%A9n%20podr%C3%ADan%20estar%20recibiendo%20correos%20electr%C3%B3nicos%20diariamente."
                          text="Muchos también podrían estar recibiendo correos electrónicos diariamente."
                          translated="Many of you may well even be receiving daily e-mails."
                        />
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <Answer
                          noIcon
                          text="Están diariamente en conflicto."
                          translated="They clash on a daily basis."
                        />
                      </li>
                    </ul>
                  </Collapsible>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Collapsible
                    trigger={
                      <a href="">
                        ocasionalmente
                        <span
                          style={{ paddingLeft: "20px" }}
                          className="text-muted"
                        >
                          occasionally
                        </span>
                      </a>
                    }
                  >
                    <br />
                    <ul style={{ marginLeft: "-40px", listStyleType: "none" }}>
                      <li>
                        <Answer
                          noIcon
                          text="Yo lo hago ocasionalmente"
                          translated="I do it occasionally"
                        />
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <Answer
                          noIcon
                          text="Sus conocimientos han de someterse ocasionalmente a nuevos exámenes."
                          translated="Their knowledge has to be rechecked occasionally over time."
                        />
                      </li>
                    </ul>
                  </Collapsible>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Collapsible
                    trigger={
                      <a href="">
                        previamente
                        <span
                          style={{ paddingLeft: "20px" }}
                          className="text-muted"
                        >
                          previously
                        </span>
                      </a>
                    }
                  >
                    <br />
                    <ul style={{ marginLeft: "-40px", listStyleType: "none" }}>
                      <li>
                        <Answer
                          noIcon
                          text="Las empresas te preguntan previamente si deseas algo."
                          translated="One is asked in advance if one wants something."
                        />
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <Answer
                          noIcon
                          text="Lo que han manifestado previamente sus Señorías acerca de sus experiencias es muy interesante."
                          translated="What you said previously about your experiences is very interesting."
                        />
                      </li>
                    </ul>
                  </Collapsible>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Collapsible
                    trigger={
                      <a href="">
                        actualmente
                        <span
                          style={{ paddingLeft: "20px" }}
                          className="text-muted"
                        >
                          actually
                        </span>
                      </a>
                    }
                  >
                    <br />
                    <ul style={{ marginLeft: "-40px", listStyleType: "none" }}>
                      <li>
                        <Answer noIcon text="" translated="" />
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <Answer text="" translated="" href="" />
                      </li>
                    </ul>
                  </Collapsible>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Collapsible
                    trigger={
                      <a href="">
                        frecuentemente
                        <span
                          style={{ paddingLeft: "20px" }}
                          className="text-muted"
                        >
                          frequently
                        </span>
                      </a>
                    }
                  >
                    <br />
                    <ul style={{ marginLeft: "-40px", listStyleType: "none" }}>
                      <li>
                        <Answer noIcon text="" translated="" />
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <Answer text="" translated="" href="" />
                      </li>
                    </ul>
                  </Collapsible>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Collapsible
                    trigger={
                      <a href="">
                        semanalmente
                        <span
                          style={{ paddingLeft: "20px" }}
                          className="text-muted"
                        >
                          weekly
                        </span>
                      </a>
                    }
                  >
                    <br />
                    <ul style={{ marginLeft: "-40px", listStyleType: "none" }}>
                      <li>
                        <Answer noIcon text="" translated="" />
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <Answer text="" translated="" href="" />
                      </li>
                    </ul>
                  </Collapsible>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Collapsible
                    trigger={
                      <a href="">
                        rápidamente
                        <span
                          style={{ paddingLeft: "20px" }}
                          className="text-muted"
                        >
                          quickly
                        </span>
                      </a>
                    }
                  >
                    <br />
                    <ul style={{ marginLeft: "-40px", listStyleType: "none" }}>
                      <li>
                        <Answer noIcon text="" translated="" />
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <Answer text="" translated="" href="" />
                      </li>
                    </ul>
                  </Collapsible>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Collapsible
                    trigger={
                      <a href="">
                        cuidadosamente
                        <span
                          style={{ paddingLeft: "20px" }}
                          className="text-muted"
                        >
                          carefully
                        </span>
                      </a>
                    }
                  >
                    <br />
                    <ul style={{ marginLeft: "-40px", listStyleType: "none" }}>
                      <li>
                        <Answer noIcon text="" translated="" />
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <Answer text="" translated="" href="" />
                      </li>
                    </ul>
                  </Collapsible>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Collapsible
                    trigger={
                      <a href="">
                        generalmente
                        <span
                          style={{ paddingLeft: "20px" }}
                          className="text-muted"
                        >
                          generally
                        </span>
                      </a>
                    }
                  >
                    <br />
                    <ul style={{ marginLeft: "-40px", listStyleType: "none" }}>
                      <li>
                        <Answer text="" translated="" />
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <Answer noIcon text="" translated="" href="" />
                      </li>
                    </ul>
                  </Collapsible>
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <Collapsible
                    trigger={
                      <a href="">
                        anualmente
                        <span
                          style={{ paddingLeft: "20px" }}
                          className="text-muted"
                        >
                          annually
                        </span>
                      </a>
                    }
                  >
                    <br />
                    <ul style={{ marginLeft: "-40px", listStyleType: "none" }}>
                      <li>
                        <Answer
                          noIcon
                          text="Ellos cambian las reglas anualmente"
                          translated="They change the rules yearly"
                        />
                      </li>
                      <li style={{ paddingTop: "10px" }}>
                        <Answer
                          noIcon
                          text="Yo recibo mi bono anualmente"
                          translated="I get my bonus annually"
                        />
                      </li>
                    </ul>
                  </Collapsible>
                </li>
              </ul>
            </CardBody>
          </Card>
        </GuideLayout>
      </Container>
    </Layout>
  </React.Fragment>
);

export default CommonSpanishAdverbs;
