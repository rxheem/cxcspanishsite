import Router from "next/router";
import Privacy from "./privacy";

const PrivacyPolicy = props => (
  <div>{process.browser ? Router.push("/privacy") : <Privacy />}</div>
);

export default PrivacyPolicy;
