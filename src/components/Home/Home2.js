import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    LET ME <span className="purple"> INTRODUCE </span> MYSELF
  </h1>

  <p className="home-about-body">
    I’m <b className="purple">Paul Kenneth Dela Cruz</b>, a Web Developer and
    IT Support Specialist with hands-on experience in building practical,
    secure, and user-focused digital systems.
    <br />
    <br />
    I recently completed my{" "}
    <i>
      <b className="purple">Bachelor of Science in Information Technology</b>
    </i>{" "}
    at Far Eastern University, and I have worked on live-hosted systems,
    mobile applications, QA testing, system deployment, documentation, and
    user support.
    <br />
    <br />
    I’m experienced in
    <i>
      <b className="purple">
        {" "}
        Laravel, PHP, MySQL, JavaScript, React Native, Firebase, Leaflet JS,
        Git, and GitHub{" "}
      </b>
    </i>
    — with a strong interest in both frontend and backend development.
    <br />
    <br />
    My key areas of interest include developing
    <i>
      <b className="purple">
        {" "}
        Web Applications, Mobile Applications, Management Systems,{" "}
      </b>
    </i>
    and digital solutions that improve business operations and user experience.
    <br />
    <br />
    Some of my deployed projects include the
    <b className="purple"> Subdivision Management System </b>
    and the
    <b className="purple"> Dental Clinic Management System</b>,
    where I implemented features such as RBAC, MFA, payment tracking,
    reports, appointments, records management, and interactive system modules.
    <br />
    <br />
    I also have experience in IT support through the
    <b className="purple"> Unilever Philippines DCODE Rollout Project</b>,
    where I supported deployment, QA testing, troubleshooting, user training,
    UAT support, documentation, and issue escalation.
  </p>
</Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-circle" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
