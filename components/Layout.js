import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";
import { Container } from "shards-react";

// Assets
import "bootstrap/dist/css/bootstrap.css";
import CSS from "shards-ui/dist/css/shards.css";
import "../assets/css/carousel.css";
import "../assets/css/nf-carousel.css";
import "../assets/css/master.css";

// Javascript
import "../assets/js/fontawesome.js";
import "../assets/js/mixpanel.js";
import "../assets/js/quantcast.js";

const Fragment = React.Fragment;

const Layout = props => (
  <Fragment>
    <NavbarComponent />
    <br />
    <Fragment>{props.children}</Fragment>
    <br />
    <Footer />
  </Fragment>
);

export default Layout;
