import Head from "next/head";
import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";
import { Container } from "shards-react";
import HeaderImports from "./HeaderImports";

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

// Other
import ReactGA from "react-ga";

//
ReactGA.initialize("UA-146229442-1");

// Render on client side
if (process.browser) {
  ReactGA.initialize("UA-146229442-1", {
    debug: true,
    titleCase: false,
    gaOptions: {
      userId: 123
    }
  });

  ReactGA.pageview(window.location.pathname + window.location.search);
}

const Fragment = React.Fragment;

const Layout = props => (
  <Fragment>
    <Head>
      <title>CXC Spanish | Guide, Past Papers and Exercises</title>
      <meta
        name="og:title"
        content="CXC Spanish | Guide, Past Papers and Exercises"
      />
      <meta name="og:site_name" content="CXC Spanish Online" />
      <meta
        name="description"
        content="CXC Spanish Online is the perfect free online study guide to pass your CXC Spanish exam with syllabus revision, exercises and downloadable resouces."
      />
    </Head>
    <HeaderImports />
    <NavbarComponent />

    <br />
    <Fragment>{props.children}</Fragment>
    <br />
    <Footer />
  </Fragment>
);

export default Layout;
