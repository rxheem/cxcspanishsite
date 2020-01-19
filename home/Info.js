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

const images = [
  "https://imgur.com/4nbA7pB.png",
  "https://imgur.com/ExcTyNG.png",
  "https://imgur.com/Iz4EtNa.png",
  "https://imgur.com/c7coNR9.png",
  "https://imgur.com/U6trHjQ.png",
  "https://imgur.com/IdRNAUV.png",
  "https://imgur.com/lxqTzuj.png",
  "https://imgur.com/L1YAn09.png",
  "https://imgur.com/OSi1lxa.png",
  "https://imgur.com/iG0aSpk.png",
  "https://imgur.com/IaHhHVl.png",
  "https://imgur.com/0TvFd5n.png",
  "https://imgur.com/wEmhEWl.png",
  "https://imgur.com/XDxE0x9.png",
  "https://imgur.com/9t6cLu2.png",
  "https://imgur.com/SbvwKfQ.png",
  "https://imgur.com/8UFUMf6.png"
];

const imgData = [
  {
    "": "",
    "": "",
    "": "",
    "": ""
  },
  {
    "": "",
    "": "",
    "": "",
    "": ""
  },
  {
    "": "",
    "": "",
    "": "",
    "": ""
  },
  {
    "": "",
    "": "",
    "": "",
    "": ""
  },
  {
    "": "",
    "": "",
    "": "",
    "": ""
  }
];

const Info = props => (
  <div>
    <Card>
      <CardImg style={{ width: "100%" }} src={images[5].toString()} />
      <CardBody>
        <span />
      </CardBody>
    </Card>

    <br />
    <br />
  </div>
);

export default Info;
