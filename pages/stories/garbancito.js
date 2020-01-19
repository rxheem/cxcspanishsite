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

const Garbancito = props => (
  <Layout>
    <SEO
      title="Garbancito - Short Stories | CXC Spanish Online"
      description={
        "Explore the adventures of young Garbancito. Practice your reading with our CXC Spanish online guide."
      }
      image={""}
      pathname={"https://www.cxcspanish.com/short-stories/garbancito"}
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
        <BreadcrumbItem active>Garbancito</BreadcrumbItem>
      </Breadcrumb>

      <StoryLayout
        isArticle
        author="Anonymous"
        origin="Cataluña, Spain"
        values="overcoming, acceptance"
        href="http://www.cuentoscortos.com/cuentos-populares/garbancito-el-patufet"
      >
        <Card>
          <CardBody>
            <CardTitle>Garbancito</CardTitle>
            <br />
            <p>
              Había una vez un matrimonio que quería tener hijos. Tras mucho
              tiempo esperándolo finalmente tuvieron uno pero cuando nació
              resultó ser un niño muy pequeño, tan pequeño como un granito de
              arroz, por eso decidieron llamarlo Garbancito.
            </p>
            <p>
              Fue pasando el tiempo y aunque Garbancito se hacía mayor, seguía
              siendo igual de pequeño. Sus padres estaban algo preocupados, pero
              en cambio a él eso no le importaba. A él le gustaba trabajar y
              ayudar a sus padres como hacían el resto de los niños.
            </p>
            <p>
              Un día la madre de Garbancito estaba haciendo un riquísimo arroz
              con conejo cuando se quedó sin azafrán.
            </p>
            <p>- ¡Madre mía! ¿Y ahora qué hago yo?</p>
            <p>
              Garbancito, que estaba por allí cerca, le contestó de inmediato:
            </p>
            <p>- Yo iré a comprarlo mamá. No te preocupes</p>
            <p>- ¿Pero cómo vas a ir tu? ¿Y si no te ven y te pisan?</p>
            <p>- Tranquila mamá</p>
            <p>- No no hijo mío, ya voy yo.</p>
            <p>
              - Por favor mamá, deja que vaya. Iré cantando una canción para que
              todos me oigan y así no me pisen y volveré a casa con tu azafrán.
            </p>
            <p>
              Aunque la mamá de Garbancito se quedó preocupada, al final acabó
              dejando a su hijo que fuera.
            </p>
            <p>
              - Toma esta moneda y ve a “Ca la Rojals” Y ten mucho cuidado de
              que no te pisen
            </p>
            <p>
              Garbancito se echó la moneda a la espalda y salió a la calle
              cantando:
            </p>
            <p>
              <i>
                Pachín, pachín, pachán,
                <br />
                A Garbancito no lo piséis
                <br />
                Pachín, pachín, pachán,
                <br />A Garbancito no lo piséis
              </i>
            </p>
            <p>
              Todo el mundo se daba la vuelta cuando oía a Garbancito, pero como
              era tan pequeño no se le veía debajo de la moneda y creían que era
              la moneda la que cantaba y andaba sola.
            </p>
            <p>
              Cuando el muchacho llegó a la tienda pidió el azafrán que le había
              encargado su madre.
            </p>
            <p>
              - Buenos días señora, quería un poquito de azafrán para el arroz
              con conejo que está preparando mi madre.
            </p>
            <p>
              - ¿Cómo? No le he oído - contestó la tendera sin saber de dónde
              venía aquella vocecilla -
            </p>
            <p>
              - Que quería un poquito de azafrán para el arroz con conejo que
              está preparando mi madre.
            </p>
            <p>- Pero, ¿dónde está señor? No lo veo por ninguna parte...</p>
            <p>- ¡Estoy aquí! - contestó Garbancito un poco enfadado</p>
            <p>- ¡Ay! ¡Una moneda que habla!</p>
            <p>
              - No soy una moneda, soy Garbancito y quería un poquito de azafrán
              para el arroz con conejo que está preparando mi madre.
            </p>
            <p>- Uy si si claro, enseguida</p>
            <p>
              Garbancito salió de la tienda con el azafrán y volvió a entonar
              fuertemente su canción para que todo el mundo pudiera oírle.
            </p>
            <p>
              <i>
                Pachín, pachín, pachán,
                <br />
                A Garbancito no lo piséis
                <br />
                Pachín, pachín, pachán,
                <br />A Garbancito no lo piséis
              </i>
            </p>
            <p>
              La madre de Garbancito se puso muy contenta al ver que su hijo
              había vuelto sano y salvo.
            </p>
            <p>- Gracias hijo mío. Eres un niño muy bueno</p>
            <p>
              Garbancito se sentía muy orgulloso de haber podido ayudar a su
              madre y quiso hacer lo mismo con su padre, que estaba trabajando
              en el huerto.
            </p>
            <p>
              - Mamá, ¿me dejas que ayude también a papá? Puedo llevarle la
              cesta del almuerzo que siempre le llevas tu…
            </p>
            <p>- Ay no sé hijo, es muy grande</p>
            <p>- Déjame intentarlo, ya verás como puedo</p>
            <p>
              Al final Garbancito, que era muy tozudo, se salió con la suya y
              salió empujando la cesta camino del huerto cantando su canción
              para evitar que lo pisasen.
            </p>
            <p>
              Cuando le faltaba poco para llegar empezó a llover muy fuerte así
              que Garbancito se refugió debajo de una col que había ahí al lado.
            </p>
            <p>
              Entonces apareció por ahí un buey grande y pesado y muerto de
              hambre. El animal se había metido en el huerto buscando una col
              para comérsela. Pero no veía ninguna… hasta que dio con la de
              Garbancito. Abrió la boca y ¡aaaammm! Garbancito fue a parar a la
              tripa del buey.
            </p>
            <p>
              El padre de Garbancito se cansó de esperar a que le llevara su
              mujer el almuerzo y acabó por regresar a casa enfadado.
            </p>
            <p>
              - ¿Se puede saber por qué nadie me ha llevado hoy mi almuerzo? -
              le dijo a su mujer cuando entró en casa
            </p>
            <p>- ¡No me digas que no ha aparecido por allí Garbancito!</p>
            <p>
              La mujer le explicó que Garbancito había salido con la cesta hacia
              allí y al no saber qué le habría ocurrido salieron los dos
              preocupadisimos a buscarlo. Los vecinos del pueblo se unieron a
              ellos en cuanto los oyeron llamar a su hijo:
            </p>
            <p>- ¡Garbancito! ¿Dónde estás?</p>
            <p>- ¡Garbancitoo!</p>
            <p>- ¿Dónde estás Garbancito?</p>
            <p>- ¡Garbancito!</p>
            <p>- ¡Garbancito!</p>
            <p>- ¡Estoy aquí, en la tripa del buey donde no nieva ni llueve!</p>
            <p>
              Todos siguieron aquella voz hasta el buey y decidieron que lo
              mejor era hacer cosquillas en la nariz al animal para conseguir
              que estornudara. Así que cogieron una pluma, el animal estornudó y
              al final Garbancito salió disparado.
            </p>
            <p>
              El pequeño se abrazó muy contento a sus padres y juntos volvieron
              a casa para comerse el arroz con conejo cantando:
            </p>
            <p>
              <i>
                Pachín, pachín, pachán,
                <br />
                A Garbancito no lo piséis
                <br />
                Pachín, pachín, pachán,
                <br />A Garbancito no lo piséis
              </i>
            </p>
          </CardBody>
        </Card>
      </StoryLayout>
    </Container>
  </Layout>
);

export default Garbancito;
