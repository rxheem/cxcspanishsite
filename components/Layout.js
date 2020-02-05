import NavbarComponent from "./NavbarComponent";
import MiniNav from "./MiniNav";
import SlideMenu from "./SlideMenu";
import SystemInfo from "./SystemInfo";
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
import "../assets/js/surveymonkey.js";

// Other
import ReactGA from "react-ga";
import MessengerCustomerChat from "react-messenger-customer-chat";

// Google Analytics
ReactGA.initialize("UA-146229442-1");

// Render on client side
if (process.browser) {
  ReactGA.initialize("UA-146229442-1", {
    debug: true,
    alwaysSendToDefaultTracker: false,
    titleCase: false,
    gaOptions: {
      userId: 123
    }
  });

  ReactGA.pageview(window.location.pathname + window.location.search);
}

const Fragment = React.Fragment;

if (process.browser) {
}

const Layout = props => (
  <Fragment>
    <MessengerCustomerChat
      pageId="105703077445673"
      appId="669007593616991"
      htmlRef="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
    />
    <div
      class="fb-customerchat"
      attribution="setup_tool"
      page_id="105703077445673"
    ></div>

    <NavbarComponent />
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
