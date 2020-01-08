import { Toast } from "react-bootstrap";

const Message = props => (
  <React.Fragment>
    <br />
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">{props.title}</strong>
        <small>{props.time}</small>
      </Toast.Header>
      <Toast.Body>{props.message}</Toast.Body>
    </Toast>
  </React.Fragment>
);

export default Message;
