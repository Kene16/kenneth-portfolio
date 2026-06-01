import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Paul Dela Cruz</span>{" "}
            from <span className="purple">Cavite, Philippines</span>.
            <br />
            I’m a fresh graduate of batch 2026 but already has an experience working and developing systems such as{" "}
            <span className="purple">Subdivision Management System</span> and{" "}
            <span className="purple">Dental Clinic Management System</span> which are currently deployed.
            <br />I hold Bachelor of Science in{" "}
            <span className="purple">Information Technology</span> from{" "}
            <span className="purple">Far Eastern University Cavite</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Go to the Gym 🏋️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Paul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
