import NavbarComponent from "./NavbarComponent";
import MiniNav from "./MiniNav";
import SlideMenu from "./SlideMenu";
import SystemInfo from "./SystemInfo";
import Footer from "./Footer";
import { Card, Container, Alert } from "shards-react";
import HeaderImports from "./HeaderImports";
import CoronaVirusTip from "./CoronaVirusTip";

// Assets
import "bootstrap/dist/css/bootstrap.css";
import CSS from "shards-ui/dist/css/shards.css";
import "../assets/css/carousel.css";
import "../assets/css/nf-carousel.css";
import "../assets/css/animate.css";
import "../assets/css/master.css";

// Javascript
import "../assets/js/rocketloader.js";
import "../assets/js/cloudflare.js";
import "../assets/js/fontawesome.js";
import "../assets/js/mixpanel.js";
import "../assets/js/quantcast.js";
import "../assets/js/tawkto.js";
import "../assets/js/mailchimp.js";
import "../assets/js/onesignal.js";

// Other
import ReactGA from "react-ga";
import MessengerCustomerChat from "react-messenger-customer-chat";

// Google Analytics

ReactGA.initialize("UA-146229442-1");
import * as Sentry from "@sentry/browser";

const Push = require("push.js");
if (process.browser) {
  Push.Permission.request();
}

// Render on client side
if (process.browser) {
  ReactGA.initialize("UA-146229442-1", {
    debug: false,
    alwaysSendToDefaultTracker: false,
    titleCase: false,
    gaOptions: {
      userId: 123
    }
  });

  ReactGA.pageview(window.location.pathname + window.location.search);
}

const Fragment = React.Fragment;

Sentry.init({
  dsn: "https://1ccf463850ed401c9dbbe2a620cb62e4@sentry.io/2633175"
});

const Layout = props => (
  <Fragment>
    <div
      class="fb-customerchat"
      attribution="setup_tool"
      page_id="105703077445673"
    ></div>

    <NavbarComponent />
    <CoronaVirusTip />
    <MiniNav />

    <br />
    <main role="main" id="main" className="main">
      <Fragment>{props.children}</Fragment>
    </main>
    <br />

    <MiniNav />

    <Footer />
    <SystemInfo hide={true} />

    <HeaderImports />
  </Fragment>
);

export default Layout;
