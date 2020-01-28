import { Container, NavLink, FormInput } from "shards-react";
import { Navbar, Nav, NavItem, Row, Col } from "react-bootstrap";
import YouTube from "react-youtube";
import Obfuscate from "react-obfuscate";

const Footer = props => (
  <footer>
    <div className="bg-light">
      <br />
      <br />
      <Container>
        <Row>
          <Col sm={12} md={4} lg={4} xl={4}>
            <h6 className="text-dark">Read Our Short Stories</h6>
            <Nav className="flex-column">
              <Nav.Link className="text-dark" href="/stories/garbancito">
                Garbancito
              </Nav.Link>
              <Nav.Link className="text-dark" href="/stories/el-amigo-fiel">
                El Amigo Fiel
              </Nav.Link>
              <Nav.Link className="text-dark" href="/stories/la-llorona">
                La Llorona
              </Nav.Link>
              <Nav.Link className="text-dark" href="/stories/estrellita-de-oro">
                Estrellita de Oro
              </Nav.Link>
              <Nav.Link className="text-dark" href="/stories/la-muneca-menor">
                La Muñeca Menor
              </Nav.Link>
              <Nav.Link href="/short-stories">View all...</Nav.Link>
            </Nav>
          </Col>
          <Col sm={12} md={4} lg={4} xl={4}>
            <br className="d-sm-none" />
            <h6 className="text-dark">Past Papers</h6>
            <Nav style={{ marginLeft: "-15px" }}>
              <Nav.Link
                downloadable
                target="_blank"
                href="https://www.dropbox.com/s/h76ga6bxhdeex94/CSEC%C2%AE%20Spanish%20Past%20Papers-2_nodrm%20%281%29.pdf?dl=0"
              >
                CSEC
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://www.dropbox.com/s/bjz288n93t2kein/CAPE%20Spanish%20Past%20Papers.pdf?dl=0"
              >
                CAPE
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://www.dropbox.com/sh/0iwksvyxx6hnx8u/AADS2oBLhV7Ouofp9d0fc593a?dl=0"
              >
                View Archives
              </Nav.Link>
            </Nav>

            <br />

            <h6>
              <a style={{ color: "black" }} href="/mailing-list">
                Mailing List
              </a>
            </h6>
            <p>
              Subscribe to our mailing list and get free weelkly emails, past
              papers and exercise booklets.
            </p>

            <FormInput placeholder="Enter email" />
          </Col>
          <Col sm={12} md={4} lg={4} xl={4}>
            <br className="d-sm-none" />
            <h6 className="text-dark">Social Media</h6>
            <Nav>
              <Nav.Link
                target="_blank"
                href="https://www.facebook.com/cxcspanishguide/?__tn__=%2Cd%2CP-R&eid=ARBp5b8r2d06OFKljjfcKxLq6dNjDPkODENJqB9yAsRgKUQHpmOrhWiLifsxgPnYtt5njC48bXpGjQii"
              >
                <i
                  style={{ color: " #3b5998" }}
                  className="fab fa-facebook fa-2x"
                />
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://www.instagram.com/cxcspanish/"
              >
                <i
                  style={{ color: "#8a3ab9" }}
                  className="fab fa-instagram fa-2x"
                />
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://www.twitter.com/cxcspanish"
              >
                <i
                  style={{ color: "#00acee" }}
                  className="fab fa-twitter fa-2x"
                />
              </Nav.Link>
              <Nav.Link target="_blank" href="/">
                <i
                  style={{ color: "#c4302b", height: "40px" }}
                  className="fab fa-youtube fa-2x"
                ></i>
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://chat.whatsapp.com/EWpufXW93Y5G5V9BlOqgRF"
              >
                <i
                  style={{ color: "#075E54" }}
                  className="fab fa-whatsapp fa-2x"
                ></i>
              </Nav.Link>
            </Nav>

            <br />
            <h6 className="text-dark">Contact Us</h6>

            <Nav style={{ marginLeft: "-15px" }} className="flex-column">
              <Nav.Link href="mailto:hola@cxcspanish.com">
                <i style={{ color: "grey" }} className="fas fa-envelope"></i>
                <span style={{ paddingLeft: "10px" }}>hola@cxcspanish.com</span>
              </Nav.Link>
              <Nav.Link href="mailto:holacxcspanish@gmail.com">
                <i style={{ color: "grey" }} className="fas fa-envelope"></i>
                <span style={{ paddingLeft: "10px" }}>
                  holacxcspanish@gmail.com
                </span>
              </Nav.Link>
              <Nav.Link href="/">
                <i style={{ color: "green" }} className="fas fa-phone"></i>
                <span style={{ paddingLeft: "10px", color: "black" }}>
                  (876) 565-3942
                </span>
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <br />
        <br />
      </Container>
    </div>
    <div className="bg-dark">
      <br /> <br />
      <Container>
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
              <Nav.Link className="text-white" href="/past-papers">
                Past Papers
              </Nav.Link>
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
        <a href="/privacy">Privacy</a> &middot; <a href="/terms">Terms</a>
      </p>
    </Container>
  </footer>
);

export default Footer;
