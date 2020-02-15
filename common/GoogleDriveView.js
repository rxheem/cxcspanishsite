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

const GoogleDriveView = props => (
  <Card>
    <CardImg
      src="https://images.idgesg.net/images/article/2019/04/google-drive-docs-suite-logos-100794638-large.jpg"
      style={{ width: "100%", padding: "20px" }}
    />
    <CardBody>
      <p>
        You can also see the papers on our Google Drive folder, if you are not
        able to access Dropbox.
      </p>
      <Button
        target="_blank"
        theme="success"
        href="https://drive.google.com/open?id=1zPeCEOLnKcTIo5QewZL7YJsm7u9gsTI4"
      >
        <i style={{ paddingRight: "5px" }} class="fab fa-google-drive"></i>
        View Folder
      </Button>
    </CardBody>
  </Card>
);

export default GoogleDriveView;
