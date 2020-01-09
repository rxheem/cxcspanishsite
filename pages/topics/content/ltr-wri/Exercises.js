import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
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
            <PDFFile title="May 2013 Paper" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="January 2014 Paper" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="May 2014 Paper" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="January 2015 Paper" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="June 2016 Paper" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="June 2017 Paper" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="January 2018 Paper" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="May/ June 2018 Paper" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="January 2019 Paper" href="" />
          </li>
        </ul>
        <br />

        <Button>View Archives &rarr;</Button>
      </CardBody>
    </Card>
  </Fragment>
);

export default Exercises;
