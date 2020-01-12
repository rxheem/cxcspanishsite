import { Toast } from "react-bootstrap";

const Message = props => (
  <div>
    <br />
    <Toast>
      <Toast.Header>
        <img
          src="https://cdn2.iconfinder.com/data/icons/mix-color-5/100/Mix_color_5__info-512.png"
          className="rounded mr-2"
          alt="alert icon"
          style={{ height: "20px" }}
        />
        <strong className="mr-auto">{props.title}</strong>
        <small>{props.time}</small>
      </Toast.Header>
      <Toast.Body>{props.message}</Toast.Body>
    </Toast>
    <br />
  </div>
);

export default Message;
