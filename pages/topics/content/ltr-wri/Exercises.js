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

        <h6>Easy</h6>
        <ul style={{ listStyleType: "none", marginLeft: "-20px" }}>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="May/ June 2013" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="January 2014" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="May/ June 2014" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="January 2015" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="May/ June 2016" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="May/ June 2017" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="January 2018" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="May/ June 2018" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="January 2019" href="" />
          </li>
        </ul>
        <br />

        <Button>View Archives &rarr;</Button>
      </CardBody>
    </Card>
  </Fragment>
);

export default Exercises;
