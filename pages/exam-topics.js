import Router from "next/router";
import ExamTopics from "./topics";

const Exams = props => (
  <div>{process.browser ? Router.push("/topics") : <ExamTopics />}</div>
);

export default Exams;
