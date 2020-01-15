import {
  Container,
  Row,
  Col,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Form,
  FormGroup,
  FormInput,
  FormTextarea
} from "shards-react";

class SubmitStory extends React.Component {
  constructor(props) {
    super(props);

    // Bind change
    this.handleChange = this.handleChange.bind(this);

    this.state = {};
  }

  // Handle change
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>Submit Your Story</CardTitle>

          <Form>
            <FormGroup>
              <label htmlFor="#username">Username</label>
              <FormInput id="#username" placeholder="Username" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#password">Paste Your Story</label>
              <FormTextarea onChange={this.handleChange} />
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default SubmitStory;
