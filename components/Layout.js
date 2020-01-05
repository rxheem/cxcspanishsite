import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";
import { Container } from "shards-react";

// Assets
import "bootstrap/dist/css/bootstrap.css";
import CSS from "shards-ui/dist/css/shards.css";
import "../assets/css/master.css";
import "../assets/css/carousel.css";

// Javascript
import "../assets/js/fontawesome.js";

const Fragment = React.Fragment;

const Layout = props => (
  <Fragment>
    <NavbarComponent />
    <Fragment>{props.children}</Fragment>
    <br />
    <Footer />
  </Fragment>
);

export default Layout;
