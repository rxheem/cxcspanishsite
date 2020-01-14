import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";
import { Card, Container, Alert } from "shards-react";
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
import "../assets/js/facebook.js";
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

    <NavbarComponent />

    <br />
    <main role="main" id="main" className="main">
      <Fragment>{props.children}</Fragment>
    </main>
    <br />
    <Footer />
    <HeaderImports />
  </Fragment>
);

export default Layout;
