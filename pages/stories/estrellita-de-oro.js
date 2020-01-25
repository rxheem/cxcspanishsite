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
import SEO from "react-seo-component";

// Layout
import Layout from "../../components/Layout";
import StoryLayout from "../../story-components/StoryLayout";

const EstrellitaDeOro = props => (
  <Layout>
    <SEO
      title="Estrellita de Oro - Short Stories | CXC Spanish Online"
      description={
        "Imporove your Spanish reading skills and learn about Estrellita de Oro"
      }
      image={""}
      pathname={"https://www.cxcspanish.com/short-stories/el-amigo-fiel"}
      siteLanguage={"en"}
      siteLocale={""}
      twitterUsername={"_rxheem"}
    />
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="../short-stories">Short Stories</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Estrellita de Oro</BreadcrumbItem>
      </Breadcrumb>

      <StoryLayout
        isArticle
        author="Anónimo"
        origin="Castilla La Mancha"
        values="humility"
        href="http://www.cuentoscortos.com/cuentos-populares/estrellita-de-oro"
      >
        <Card>
          <CardBody>
            <CardTitle>Estrellita de Oro</CardTitle>
            <br />
            <p>
              Había una vez un rey viudo que tenía una hija muy bella. Unos años
              después de haber perdido a su esposa conoció a una mujer que
              también tenía una hija y decidió volver a casarse de nuevo.
            </p>
            <p>
              Tras su matrimonio, la mujer se volvió cruel con la hija del rey.
              Le tenía mucha envidia porque era mucho más bella que su hija y
              como castigo la mandaba todos los días a lavar al río. La joven se
              resignaba y cumplía con las órdenes de su madrastra pues sabía que
              a pesar de todo, su padre era feliz junto a ella.
            </p>
            <p>
              Un día, estando la muchacha en el río una mujer que lavaba a su
              lado perdió un anillo.
            </p>
            <p>
              - ¡Se me ha caído! ¡Se me ha caído mi anillo! ¡Ayúdame a
              recuperarlo hija mía, que tengo muy mala vista y no lo veo por
              ninguna parte!
            </p>
            <p>
              - No se preocupe señora - dijo la muchacha sumergiendo su brazo en
              el agua sucia y helada.
            </p>
            <p>
              Pero el anillo no aparecía y tanto tuvo que agacharse la muchacha
              para tratar de recuperarlo que acabó dándose con algo en la
              frente.
            </p>
            <p>
              Afortunadamente el golpe mereció la pena ya que gracias a él pudo
              recuperar el anillo. Aunque sucedió algo extraño… en el lugar
              donde la joven se había golpeado, la frente, comenzó a salirle una
              estrella.
            </p>
            <p>
              Al llegar a casa la madrastra de la muchacha le dijo en cuanto la
              vio:
            </p>
            <p>- ¿Qué es eso que llevas ahí?</p>
            <p>
              La muchacha le contó avergonzada lo ocurrido y dijo no entender
              cómo le había salido aquella estrella.
            </p>
            <p>
              - ¡Mañana serás tú quien vaya a lavar! - le dijo a su otra hija
            </p>
            <p>- ¿Yo? ¡Ni hablar!¡Que vaya ella!</p>
            <p>
              - Ella ya tiene su estrella así que irás tú y punto ¿O es que vas
              a dejar que tu hermana tenga algo que tu no?
            </p>
            <p>
              La muchacha fue al río y como no había forma de que se decidiera a
              tocar el agua porque estaba muy sucia, la madre acabó metiéndole
              la cabeza a la fuerza en el río. Pero lo peor no fue que la
              metiera, sino que la sacara…
            </p>
            <p>
              - ¿¿Pero qué es eso?? - dijo la madre atónita mientras señalaba
              asustada frente de su hija
            </p>
            <p>
              La hija, que se imaginó algo terrible en cuanto vio la cara de
              susto de la madre, se llevó las manos a la frente y gritó con
              todas sus fuerzas al darse cuenta de que lo que tenía en la frente
              no era una estrella sino un rabo de burro.
            </p>
            <p>
              - ¡Rápido, al médico! ¡Tenemos que quitarte eso de la frente!-
              dijo la madre mientras la hija lloraba.
            </p>
            <p>
              El médico decidió que lo mejor era cortárselo a ras y para
              disimularlo le pusieron un velo.
            </p>
            <p>
              Al llegar a casa se encontraron con la carroza real en la misma
              puerta de su casa. En ese momento la madre recordó que hacía un
              tiempo que el príncipe se encontraba llamando de puerta en puerta
              para elegir a su esposa de entre todas las mujeres del reino. Y
              precisamente había llegado a su casa ese mismo día.
            </p>
            <p>
              -Estrellita de Oro Ayúdame a encerrar a tu hermana en el desván.
              No podemos dejar que el p?incipe vea que es ella quien tiene la
              estrella de oro.
            </p>
            <p>- ¡Sí madre!</p>
            <p>
              La madre le dijo al príncipe que era su hija, la que portaba el
              velo, quien había tenido la gracia de recibir la estrella de oro
              así que el príncipe la subió en su carroza creyendo que era ella
              la muchacha a quien estaba buscando para convertirla en su esposa.
            </p>
            <p>
              Pero de repente, los caballos de la carroza dieron un traspiés y a
              la muchacha se le cayó el velo de la frente de la sacudida.
            </p>
            <p>
              - ¿Qué es eso? ¡Eso no es una estrella, es una cola de burro! -
              dijo el príncipe enfadado cuando se dio cuenta de que habían
              tratado de engañarlo.
            </p>
            <p>
              Rápidamente volvió a la casa de la muchacha y allí encontró
              encerrada en el desván a la muchacha que en realidad buscaba, su
              estrella de oro.
            </p>
            <p>
              Volvieron a palacio, se casaron, fueron felices y comieron
              perdices.
            </p>
          </CardBody>
        </Card>
      </StoryLayout>
    </Container>
  </Layout>
);

export default EstrellitaDeOro;
