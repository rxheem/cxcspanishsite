import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Form,
  FormInput,
  FormGroup
} from "shards-react";
import Img from "react-image";

class MailingListSubscribe extends React.Component {
  render() {
    return (
      <Card>
        <CardImg
          style={{ maxHeight: "200px" }}
          src="https://webuildsites.com.au/wp-content/uploads/2019/02/how-to-setup-gmail-forwarding-1080x675.jpg"
        />
        <CardBody>
          <CardTitle>Joing Our Mailing List</CardTitle>
          <p>
            Join our mailing list to get free weekly booklets, study notes and
            exercises right in your email.
          </p>

          <Form>
            <FormGroup>
              <label htmlFor="name">Full Name</label>
              <FormInput type="text" id="name" placeholder="Enter name" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#password">Email</label>
              <FormInput type="email" id="email" placeholder="Enter email" />
            </FormGroup>
          </Form>
          <Button>Subscribe &rarr;</Button>
        </CardBody>
      </Card>
    );
  }
}

export default MailingListSubscribe;
