import {
  Container,
  Row,
  Col,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";
import { BrowserView, MobileView } from "react-device-detect";

// Style for the onft icons
const liStyles = {
  display: "inline!important",
  paddingLeft: "50px"
};

const oLiStyles = {
  display: "inline"
};

const ulStyles = {
  listStyleType: "none",
  paddingTop: "15px"
};

const SocialLinks = props => (
  <div>
    <BrowserView>
      <br />
      <Card>
        <span className="border border-light">
          <ul style={ulStyles}>
            <li style={oLiStyles}>
              <i style={{ color: "#8a3ab9" }} className="fab fa-instagram" />
              <a
                className="text-muted"
                style={{ paddingLeft: "10px" }}
                href="https://www.instagram.com/cxcspanish/"
                target="_blank"
              >
                cxcspanish
              </a>
            </li>
            <li style={liStyles}>
              <i style={{ color: " #3b5998" }} className="fab fa-facebook" />
              <a
                className="text-muted"
                style={{ paddingLeft: "10px" }}
                href="https://www.facebook.com/cxcspanishguide/?__tn__=%2Cd%2CP-R&eid=ARBp5b8r2d06OFKljjfcKxLq6dNjDPkODENJqB9yAsRgKUQHpmOrhWiLifsxgPnYtt5njC48bXpGjQii"
                target="_blank"
              >
                CXC Spanish Gude
              </a>
            </li>
            <li style={liStyles}>
              <i style={{ color: "red" }} className="fab fa-youtube" />
              <a
                className="text-muted"
                style={{ paddingLeft: "10px" }}
                href="https://www.youtube.com/channel/UC0eO_ApReknTjj50B7_LQyw"
                target="_blank"
              >
                CXC Spanish Online
              </a>
            </li>
          </ul>
        </span>
      </Card>
    </BrowserView>
  </div>
);

export default SocialLinks;
