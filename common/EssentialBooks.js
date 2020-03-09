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
        <CardTitle className="">Quick Read</CardTitle>

        <br />
        <ul style={{ marginLeft: "-25px", listStyleType: "none" }}>
          <li>
            <PDFFile
              title="Exam Preparation Tips"
              href="https://dl.dropbox.com/s/4g3yvg26k5ef4kf/Exam%20Preparation%20%233.pdf?dl=0"
            />
          </li>
          <li style={{ paddingTop: "10px" }}>
            <PDFFile
              title="Study Tips"
              href="https://dl.dropbox.com/s/ap42b9b9wqvyy56/Exam%20Preparation%20%232%20%281%29.pdf?dl=0"
            />
          </li>
          <li style={{ paddingTop: "10px" }}>
            <PDFFile
              title="Tips for Parents and Students"
              href="https://dl.dropbox.com/s/u11rjf2ez6wkiqq/Tips%20for%20Parents%20and%20Students.pdf?dl=0"
            />
          </li>
          <li style={{ paddingTop: "10px" }}>
            <PDFFile
              title="1st Year Spanish Paper"
              href="https://dl.dropbox.com/s/lco1djtd7qeq95n/SPAN1001%201.pdf?dl=0"
            />
          </li>
        </ul>

        <br />
        <br />
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
