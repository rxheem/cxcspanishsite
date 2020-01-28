import { Row, Col, Button } from "shards-react";
import Img from "react-image";

// Fragment
const Fragment = React.Fragment;

const Marketing = props => (
  <div className="marketing">
    <Row>
      <Col sm={12} md={4} lg={4} xl={4}>
        <Img
          src={[
            "https://upload.wikimedia.org/wikipedia/commons/6/6c/Flat_icon_ear.png",
            "https://www.flaticon.com/premium-icon/icons/svg/1453/1453597.svg",
            "https://thumbs.dreamstime.com/z/tunnels-ears-icon-long-shadow-white-background-tunnels-ears-icon-long-shadow-130808476.jpg",
            "https://lh3.googleusercontent.com/b1a0bNnNUJJM88DxJ_3-_aNZ3xmGQhdCg05BN063x71eOa1szP9__cCBx7jGnTrh-NI=s90",
            "https://png2.cleanpng.com/sh/83284134f4a955c5a44b2e0333fc81ce/L0KzQYm3VsE4N6ZvepH0aYP2gLBuTgBmdqRuh9C2cnX3ecPsjfVvfF54ed5ucz3lhcTwjvV0e153feZqaXywdbL5Tflkd58yTdQ7NkK6RoW5WfE3QWYzTKsDN0G3QIS4VcI6OmM8SaIDMUezRnB3jvc=/kisspng-pension-retirement-sales-business-retail-ear-icon-5b26276429a695.4987140315292271081706.png",
            "https://www.colourbox.com/preview/22111544-the-ear-icon-listen-symbol-flat.jpg",
            "https://comps.gograph.com/ear-icon-in-flat-style-isolated-on-white-background-part-of-body-symbol-stock-vector-illustration_gg88742647.jpg"
          ]}
          alt="image of listening"
          style={{ height: "180px" }}
          className="rounded-circle"
        />

        <br />
        <br />
        <h2>Listening</h2>
        <p>
          Improve your Spanish listening skills with audio recordings from
          native Spanish-speakers, and listen recorded extracts from CXC past
          papers questions.
        </p>
        <p>
          <Button theme="warning" href="/listening" role="button">
            Start Learning &raquo;
          </Button>
        </p>
      </Col>
      <Col sm={12} md={4} lg={4} xl={4}>
        <Img
          src={[
            "https://icons-for-free.com/iconfiles/png/512/equipment+pen+pencil+tool+write+writing+icon-1320165901782992167.png",
            "https://www.pikpng.com/pngl/m/97-978365_writing-icon-hd-png-download.png",
            "https://st2.depositphotos.com/4060975/9113/v/950/depositphotos_91131614-stock-illustration-writing-colored-vector-icon.jpg"
          ]}
          alt="image of listening"
          style={{ height: "180px" }}
          className="rounded-circle"
        />

        <br />
        <br />
        <h2>Writing</h2>
        <p>
          Practice writing for composing your{" "}
          <a href="/topics/letter-writing">letter</a> and{" "}
          <a href="topics/letter-writing">compositions</a>. Write on a wide
          range on past-paper topics including crime, drug abuse and
          contemporary social issues.
        </p>
        <p>
          <Button theme="info" href="#" role="button">
            Start Learning &raquo;
          </Button>
        </p>
      </Col>
      <Col sm={12} md={4} lg={4} xl={4}>
        <Img
          src={[
            "https://image.flaticon.com/icons/svg/426/426426.svg",
            "https://image.flaticon.com/icons/svg/326/326058.svg",
            "https://www.pinclipart.com/picdir/big/64-644580_motivational-clipart-public-speaking-public-speaking-speech-icon.png",
            "https://www.svgrepo.com/show/1734/speaking.svg",
            "https://image.flaticon.com/icons/svg/1653/1653630.svg",
            "https://image.flaticon.com/icons/svg/426/426426.svg",
            "https://image.flaticon.com/icons/svg/426/426426.svg",
            "https://previews.123rf.com/images/pandavector/pandavector1701/pandavector170103700/69812068-speaking-mouth-icon-in-flat-style-isolated-on-white-background-interpreter-and-translator-symbol-sto.jpg",
            "https://assets.dryicons.com/uploads/icon/svg/8859/cdf7ad61-0549-4442-a349-d17717288163.svg"
          ]}
          alt="image of speaking"
          style={{ height: "180px" }}
          className="rounded-circle"
        />

        <br />
        <br />
        <h2>Speaking</h2>
        <p>
          Imporve your ability to speak Spanish fluenty with our accent training
          exercises, daily paragraph readings and more! Find out how below.
        </p>
        <p>
          <Button theme="dark" href="/orals" role="button">
            Start Learning &raquo;
          </Button>
        </p>
      </Col>
    </Row>
  </div>
);

export default Marketing;
