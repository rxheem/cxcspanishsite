import {
  Navbar,
  Nav,
  NavItem,
  Container,
  NavLink,
  Row,
  Col
} from "shards-react";

const Footer = props => (
  <footer>
    <div className="container">
      <p className="float-right">
        <a href="#">Sitemap</a>
      </p>
      <p>
        &copy; CXC Spanish Online &middot; <a href="#">Privacy</a> &middot;{" "}
        <a href="#">Terms</a>
      </p>
    </div>
  </footer>
);

export default Footer;
