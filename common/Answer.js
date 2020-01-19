import FA from "react-fontawesome";

const Answer = props => (
  <div>
    <FA className="text-danger" name="angle-double-right" />
    <span className="text-black" style={{ paddingLeft: "10px" }}>
      {props.text}
    </span>
    <p style={{ paddingLeft: "23px" }} className="text-muted">
      {props.translated}

      <a
        href={props.href}
        className={props.noIcon ? "invisible" : null}
        target="_blank"
      >
        <FA style={{ paddingLeft: "10px" }} name="external-link-alt" />
      </a>
    </p>
  </div>
);

export default Answer;
