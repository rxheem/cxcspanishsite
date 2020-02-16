import {
  Container,
  BreadcrumbItem,
  Row,
  Col,
  Breadcrumb,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Form,
  FormInput,
  FormGroup
} from "shards-react";

// Common
import PDFFile from "./PDFFile";

const CAPEPastPapers = props => (
  <Card>
    <CardBody>
      <CardTitle className="text-info">CAPE Past Papers</CardTitle>

      <br />
      <ul style={{ marginLeft: "-25px", listStyleType: "none" }}>
        <li>
          <PDFFile title="Spanish" href="" />
        </li>
        <li style={{ paddingTop: "10px" }}>
          <PDFFile
            title="Agricultural Science"
            href="https://dl.dropbox.com/s/eqc4v3bjrk1yh9j/CAPE%20Agricultural%20Science%20Past%20Papers.pdf?dl=0"
          />
        </li>
        <li style={{ paddingTop: "10px" }}>
          <PDFFile
            title="Biology"
            href="https://dl.dropbox.com/s/lzugxqjfns8l7ee/CAPE%20Biology%20Past%20Papers%20unit%201_2%202005-2016.pdf?dl=0"
          />
        </li>
        <li style={{ paddingTop: "10px" }}>
          <PDFFile
            title="Law"
            href="https://dl.dropbox.com/s/0tdxb2o1fx4k3ti/CAPE%C2%AE%20Law%20Past%20Papers%20u%201%20_%202%202005%20-2016.pdf?dl=0"
          />
        </li>
        <li style={{ paddingTop: "10px" }}>
          <PDFFile
            title="Food and Nutrition"
            href="https://dl.dropbox.com/s/9zzq4eehfvjnsrt/CAPE%20Food%20and%20Nutrition%20Past%20Papers%20Ui%20_U2%202005%20-%202016.pdf?dl=0"
          />
        </li>
        <li style={{ paddingTop: "10px" }}>
          <PDFFile
            title="Sociology"
            href="https://dl.dropbox.com/s/x1h7tmn4lam6ryn/CAPE%20Sociology%20Past%20Papers%20U1%20_U%202005-2016.pdf?dl=0"
          />
        </li>
        <li style={{ paddingTop: "10px" }}>
          <PDFFile
            title="French"
            href="https://dl.dropbox.com/s/5g8gm6h4jcwikex/CAPE%20French%20Past%20Papers%20U1%20_U2%202005-2016.pdf?dl=0"
          />
        </li>
        <li style={{ paddingTop: "10px" }}>
          <PDFFile
            title="Computer Science"
            href="https://dl.dropbox.com/s/uifq5ynywxvdga8/CAPE%20Computer%20Science%20Past%20Papers%20u1_U2%202005-2016.pdf?dl=0"
          />
        </li>
      </ul>
    </CardBody>
  </Card>
);

export default CAPEPastPapers;
