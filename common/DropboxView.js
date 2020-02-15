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
  Button
} from "shards-react";

const DropboxView = props => (
  <Card>
    <CardImg
      src="https://cdn.blog.psafe.com/en/blog/wp-content/uploads/2016/10/BLOG_EN_0610_The-Benefits-of-Dropbox-for-Your-Android.jpg"
      style={{ width: "100%" }}
    />
    <CardBody>
      <p>
        Need past papers? We have the past papers booklets and solutions for all
        CXC subjects.
      </p>
      <Button
        target="_blank"
        href="https://www.dropbox.com/sh/0iwksvyxx6hnx8u/AADS2oBLhV7Ouofp9d0fc593a?dl=0"
      >
        <i style={{ paddingRight: "5px" }} className="fab fa-dropbox"></i>
        Get them now
      </Button>
    </CardBody>
  </Card>
);

export default DropboxView;
