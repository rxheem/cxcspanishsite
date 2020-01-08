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
    <br className="d-sm-none" />
    <Card>
      <CardBody>
        <CardTitle>Exercises</CardTitle>
        <p>Try these exercises taken from past papers.</p>

        <h6>Easy</h6>
        <ul style={{ listStyleType: "none", marginLeft: "-20px" }}>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="Easy Exercise" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="Easy Exercise" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="Easy Exercise" href="" />
          </li>
        </ul>
        <br />

        <h6>Moderate</h6>
        <ul style={{ listStyleType: "none", marginLeft: "-20px" }}>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="Moderate Exercise" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="Moderate Exercise" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="Moderate Exercise" href="" />
          </li>
        </ul>
        <br />

        <h6>Challenging</h6>
        <ul style={{ listStyleType: "none", marginLeft: "-20px" }}>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="Challenging Exercise" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="Challenging Exercise" href="" />
          </li>
          <li style={{ paddingBottom: "8px" }}>
            <PDFFile title="Challenging Exercise" href="" />
          </li>
        </ul>
        <br />

        <Button>Read more &rarr;</Button>
      </CardBody>
    </Card>
  </Fragment>
);

export default Exercises;
