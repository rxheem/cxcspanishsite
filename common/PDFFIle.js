import FA from "react-fontawesome";

const PDFFile = props => (
  <a href={props.href} download>
    <FA name="file-pdf" style={{ color: "#f00" }} />
    <span className="" style={{ paddingLeft: "10px" }}>
      {props.title}
    </span>
  </a>
);

export default PDFFile;
