import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Badge
} from "shards-react";

import PDFFile from "../../../../common/PDFFile";

// Fragment
const Fragment = React.Fragment;

const Exercises = props => (
  <Fragment>
    <br />
    <Card>
      <CardBody>
        <CardTitle>Exercises</CardTitle>
        <p>Try these exercises taken from past papers.</p>

        <ul style={{ listStyleType: "none", marginLeft: "-35px" }}>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="May 2013" href="" />
            <span style={{ paddingLeft: "10px" }}>
              <Badge pill theme="danger">
                8 years ago
              </Badge>
            </span>
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="January 2014" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="May 2014" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="January 2015" href="" />
            <span style={{ paddingLeft: "5px" }}>
              <Badge pill theme="success">
                new
              </Badge>
            </span>
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="June 2016" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="June 2017" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="January 2018" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="May/ June 2018" href="" />
            <span style={{ paddingLeft: "5px" }}>
              <Badge pill theme="success">
                new
              </Badge>
            </span>
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="January 2019" href="" />
            <span style={{ paddingLeft: "5px" }}>
              <Badge pill theme="success">
                new
              </Badge>
            </span>
          </li>
        </ul>
        <br />

        <Button>View Archives &rarr;</Button>
      </CardBody>
    </Card>
  </Fragment>
);

export default Exercises;
