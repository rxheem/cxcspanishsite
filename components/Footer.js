import { Container, NavLink } from "shards-react";
import { Navbar, Nav, NavItem, Row, Col } from "react-bootstrap";

const Footer = props => (
  <footer>
    <div className="bg-dark">
      <Container>
        <br />
        <br />
        <Row>
          <Col sm={12} md={4} lg={4} xl={4}>
            <h6 className="text-white">Popular Guides</h6>
            <Nav className="flex-column">
              <Nav.Link className="text-white" href="/guides/study-tips">
                Study Tips
              </Nav.Link>
              <Nav.Link className="text-white" href="/home">
                Pronunciation Tips
              </Nav.Link>
              <Nav.Link className="text-white" href="/">
                Adverbs
              </Nav.Link>
              <Nav.Link className="text-white" href="/">
                'Ser' vs. 'Estar'
              </Nav.Link>
              <Nav.Link className="text-white" href="/">
                Flirting in Spanish
              </Nav.Link>
            </Nav>
          </Col>
          <Col sm={12} md={4} lg={4} xl={4}>
            <br className="d-sm-none" />

            <Nav className="flex-column">
              <h6 className="text-white">Tools We Use</h6>
              <Nav.Link
                className="text-white"
                href="https://www.spanishdict.com"
                target="_blank"
              >
                SpanishDict
              </Nav.Link>
              <Nav.Link
                className="text-white"
                href="https://www.cxc.org"
                target="_blank"
              >
                CXC
              </Nav.Link>
              <Nav.Link
                className="text-white"
                href="www.cxc-store.com"
                target="_blank"
              >
                CXC Store
              </Nav.Link>
              <Nav.Link
                className="text-white"
                href="passmycxc.com"
                target="_blank"
              >
                Pass My CXC
              </Nav.Link>
            </Nav>
          </Col>
          <Col sm={12} md={4} lg={4} xl={4}>
            <br className="d-sm-none" />
            <Nav className="flex-column">
              <h6 className="text-white">Jump Start</h6>

              <Nav.Link className="text-white" href="/">
                Oral Exercise
              </Nav.Link>
              <Nav.Link
                className="text-white"
                href="/topics/directed-situations"
              >
                Directed Situation
              </Nav.Link>
              <Nav.Link className="text-white" href="/topics/letter-writing">
                Letter Writing
              </Nav.Link>
              <Nav.Link className="text-white" href="/">
                Contextual Dialogue
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <br /> <br />
      </Container>
    </div>

    <br />
    <Container>
      <p className="float-right">
        <a href="/sitemap.xml">Sitemap</a>
      </p>
      <p>
        &copy; CXC Spanish Online &middot; <a href="about">About</a> &middot;
        <a href="/privacy"> Privacy</a> &middot; <a href="/terms">Terms</a>
      </p>
    </Container>
  </footer>
);

export default Footer;
