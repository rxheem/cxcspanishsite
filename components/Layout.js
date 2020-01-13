import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";
import { Card, Container, Alert } from "shards-react";
import HeaderImports from "./HeaderImports";
import Clipboard from "react-clipboard.js";

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
import "../assets/js/facebook.js";

// Other
import ReactGA from "react-ga";
import MessengerCustomerChat from "react-messenger-customer-chat";

// Google Analytics
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
    <MessengerCustomerChat
      pageId="<https://cxcspanish.cxcspanish.now.sh>"
      appId="669007593616991"
      htmlRef="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
    />
    <div
      class="fb-customerchat"
      attribution="setup_tool"
      page_id="105703077445673"
    ></div>
    <HeaderImports />
    <NavbarComponent />
    <Alert className="text-center" theme="danger">
      Please note that this is the beta version of the website and some contents
      have been disabled or may not work properly.
      <br />
      <a className="alert-link" href="/FAQ">
        Read our FAQ
      </a>
      <br />
      Please report all errors and blank pages to{" "}
      <a className="alert-link" href="mailto:hola@cxcspanish.com">
        hola@cxcspanish.com
      </a>
    </Alert>
    <br />

    <Fragment>{props.children}</Fragment>
    <br />
    <Footer />
  </Fragment>
);

export default Layout;
