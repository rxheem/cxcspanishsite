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

import { BrowserView, MobileView } from "react-device-detect";
import PDFFile from "../common/PDFFile";

// Style for the onft icons
const liStyles = {
  display: "inline!important",
  paddingLeft: "50px"
};

const oLiStyles = {
  display: "inline"
};

const ulStyles = {
  listStyleType: "none",
  paddingTop: "15px"
};

const ListeningLayout = props => (
  <div>
    <Row>
      <Col sm={12} md={8} lg={8} xl={8}>
        {props.children}

        <BrowserView>
          <br />
          <Card>
            <span className="border border-light">
              <ul style={ulStyles}>
                <li style={oLiStyles}>
                  <i
                    style={{ color: "#8a3ab9" }}
                    className="fab fa-instagram"
                  />
                  <a
                    className="text-muted"
                    style={{ paddingLeft: "10px" }}
                    href="https://www.instagram.com/cxcspanish/"
                    target="_blank"
                  >
                    cxcspanish
                  </a>
                </li>
                <li style={liStyles}>
                  <i
                    style={{ color: " #3b5998" }}
                    className="fab fa-facebook"
                  />
                  <a
                    className="text-muted"
                    style={{ paddingLeft: "10px" }}
                    href="https://www.facebook.com/cxcspanishguide/?__tn__=%2Cd%2CP-R&eid=ARBp5b8r2d06OFKljjfcKxLq6dNjDPkODENJqB9yAsRgKUQHpmOrhWiLifsxgPnYtt5njC48bXpGjQii"
                    target="_blank"
                  >
                    CXC Spanish Gude
                  </a>
                </li>
                <li style={liStyles}>
                  <i style={{ color: "#00acee" }} className="fab fa-twitter" />
                  <a
                    className="text-muted"
                    style={{ paddingLeft: "10px" }}
                    href="https://www.twitter.com/cxcspanish"
                    target="_blank"
                  >
                    cxcspanish
                  </a>
                </li>
              </ul>
            </span>
          </Card>
        </BrowserView>
      </Col>
      <Col sm={12} md={4} lg={4} xl={4}>
        <br className="d-sm-none" />
        <Card>
          <CardImg
            src="https://cdn.blog.psafe.com/en/blog/wp-content/uploads/2016/10/BLOG_EN_0610_The-Benefits-of-Dropbox-for-Your-Android.jpg"
            style={{ width: "100%" }}
          />
          <CardBody>
            <p>
              We've sourced all the past papers so you don't have to. Check out
              our Dropbox folder to get pass paper for any CSEC or CAPE subject.
            </p>
            <Button href="https://www.dropbox.com/sh/0iwksvyxx6hnx8u/AADS2oBLhV7Ouofp9d0fc593a?dl=0">
              <i style={{ paddingRight: "5px" }} className="fab fa-dropbox"></i>
              View Folder
            </Button>
          </CardBody>
        </Card>

        <br />
        <Card>
          <CardBody>
            <CardTitle className="">Essentials</CardTitle>

            <br />
            <ul style={{ marginLeft: "-25px", listStyleType: "none" }}>
              <li>
                <PDFFile
                  title="Spanish For Dummies"
                  href="https://dl.dropbox.com/s/rjglra0ra4ved1z/Spanish%20Essentials%20For%20Dummies.pdf?dl=0"
                />
              </li>
              <li style={{ paddingTop: "10px" }}>
                <PDFFile
                  title="Modern Spanish Grammar"
                  href="https://dl.dropbox.com/s/fibr4yjdzv4qovn/modern-spanish-grammar.pdf?dl=0"
                />
              </li>
              <li style={{ paddingTop: "10px" }}>
                <PDFFile
                  title="Spanish Basics"
                  href="https://dl.dropbox.com/s/hmime50fn00u7k1/Free%20K.pdf?dl=0"
                />
              </li>
            </ul>
          </CardBody>
        </Card>

        <br />
        <Card>
          <CardImg
            src="https://images.idgesg.net/images/article/2019/04/google-drive-docs-suite-logos-100794638-large.jpg"
            style={{ width: "100%", padding: "20px" }}
          />
          <CardBody>
            <p>
              You can also see the papers on our Google Drive folder, if you are
              not able to access Dropbox.
            </p>
            <Button
              theme="success"
              href="https://drive.google.com/open?id=1zPeCEOLnKcTIo5QewZL7YJsm7u9gsTI4"
            >
              <i
                style={{ paddingRight: "5px" }}
                class="fab fa-google-drive"
              ></i>
              View Folder
            </Button>
          </CardBody>
        </Card>

        <div style={{ display: "none" }}>
          <br />
          <Card>
            <CardBody>
              <CardTitle className="text-info">CSEC Past Papers</CardTitle>

              <br />
              <ul style={{ marginLeft: "-25px", listStyleType: "none" }}>
                <li>
                  <PDFFile
                    title="Economic"
                    href="https://dl.dropbox.com/s/jxvrisgi1yzevu3/csec%C2%AE_economics_past_papers.pdf?dl=0"
                  />
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <PDFFile
                    title="Principles of Business"
                    href="https://dl.dropbox.com/s/7nqmtd37s999yj0/csecc2ae-principles-of-business-past-papers-2005-2017.pdf?dl=0"
                  />
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <PDFFile
                    title="Principles of Accounts"
                    href="https://dl.dropbox.com/s/mnaf0jko2lwdm0c/csecc2ae-principles-of-accounts-past-papers-2005-2017.pdf?dl=0"
                  />
                </li>
                <li style={{ paddingTop: "10px" }}>
                  <PDFFile
                    title="Physics"
                    href="https://dl.dropbox.com/s/90g671h3mmosk0z/CSEC%20Physics%20January%202019%20P2.pdf?dl=0"
                  />
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>

        <br />
        <Card>
          <CardBody>
            <CardTitle className="text-info">CAPE Past Papers</CardTitle>

            <br />
            <ul style={{ marginLeft: "-25px", listStyleType: "none" }}>
              <li>
                <PDFFile title="Spanish" href="" />
              </li>
              <li style={{ paddingTop: "10px" }}>
                <PDFFile
                  title="Agricultural Science"
                  href="https://dl.dropbox.com/s/eqc4v3bjrk1yh9j/CAPE%20Agricultural%20Science%20Past%20Papers.pdf?dl=0"
                />
              </li>
              <li style={{ paddingTop: "10px" }}>
                <PDFFile
                  title="Biology"
                  href="https://dl.dropbox.com/s/lzugxqjfns8l7ee/CAPE%20Biology%20Past%20Papers%20unit%201_2%202005-2016.pdf?dl=0"
                />
              </li>
              <li style={{ paddingTop: "10px" }}>
                <PDFFile
                  title="Law"
                  href="https://dl.dropbox.com/s/0tdxb2o1fx4k3ti/CAPE%C2%AE%20Law%20Past%20Papers%20u%201%20_%202%202005%20-2016.pdf?dl=0"
                />
              </li>
              <li style={{ paddingTop: "10px" }}>
                <PDFFile
                  title="Food and Nutrition"
                  href="https://dl.dropbox.com/s/9zzq4eehfvjnsrt/CAPE%20Food%20and%20Nutrition%20Past%20Papers%20Ui%20_U2%202005%20-%202016.pdf?dl=0"
                />
              </li>
              <li style={{ paddingTop: "10px" }}>
                <PDFFile
                  title="Sociology"
                  href="https://dl.dropbox.com/s/x1h7tmn4lam6ryn/CAPE%20Sociology%20Past%20Papers%20U1%20_U%202005-2016.pdf?dl=0"
                />
              </li>
              <li style={{ paddingTop: "10px" }}>
                <PDFFile
                  title="French"
                  href="https://dl.dropbox.com/s/5g8gm6h4jcwikex/CAPE%20French%20Past%20Papers%20U1%20_U2%202005-2016.pdf?dl=0"
                />
              </li>
              <li style={{ paddingTop: "10px" }}>
                <PDFFile
                  title="Computer Science"
                  href="https://dl.dropbox.com/s/uifq5ynywxvdga8/CAPE%20Computer%20Science%20Past%20Papers%20u1_U2%202005-2016.pdf?dl=0"
                />
              </li>
            </ul>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

export default ListeningLayout;
