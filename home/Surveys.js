import {
  Container,
  BreadcrumbItem,
  Row,
  Col,
  Breadcrumb,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Form,
  FormInput,
  FormGroup,
  Collapse,
  Alert,
  Badge
} from "shards-react";

const Surveys = props => (
  <div>
    <Card>
      <CardBody>
        <CardTitle>Take a Quick Survey</CardTitle>

        <p>
          Our surveys help us better understand out students so we know how to
          approach certain topics better. We also use these surveys to assess a
          student's level and fluency in Spanish.
        </p>

        <ul>
          <li>
            <a href="https://www.surveymonkey.com/r/9SVBYYN ">
              Student Comprehension Survey
            </a>
          </li>
        </ul>
      </CardBody>
    </Card>
  </div>
);

export default Surveys;
