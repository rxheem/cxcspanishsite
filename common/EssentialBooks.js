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
import PDFFile from "./PDFFile";

const EssentialBooks = props => (
  <div>
    <Card>
      <CardBody>
        <CardTitle className="">Essentials</CardTitle>

        <br />
        <ul style={{ marginLeft: "-25px", listStyleType: "none" }}>
          <li>
            <PDFFile
              title="Spanish For Dummies"
              href="https://dl.dropbox.com/s/rjglra0ra4ved1z/Spanish%20Essentials%20For%20Dummies.pdf?dl=0"
            />
          </li>
          <li style={{ paddingTop: "10px" }}>
            <PDFFile
              title="Modern Spanish Grammar"
              href="https://dl.dropbox.com/s/fibr4yjdzv4qovn/modern-spanish-grammar.pdf?dl=0"
            />
          </li>
          <li style={{ paddingTop: "10px" }}>
            <PDFFile
              title="Spanish Basics"
              href="https://dl.dropbox.com/s/hmime50fn00u7k1/Free%20K.pdf?dl=0"
            />
          </li>
        </ul>
      </CardBody>
    </Card>
  </div>
);

export default EssentialBooks;
