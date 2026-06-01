import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/vet-clinic.png";
import emotion from "../../Assets/Projects/pokedex.jpg";
import editor from "../../Assets/Projects/heybuddy.jpg";
import chatify from "../../Assets/Projects/subd.png";
import suicide from "../../Assets/Projects/padayon.png";
import bitsOfCode from "../../Assets/Projects/dent-clinic.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Subdivision Management System"
              description={
                <>
                  A subdivision management system built with Laravel, MySQL, Tailwind CSS,
                  and Leaflet JS. This is a{" "}
                  <strong className="purple">fully dynamic web application</strong> that
                  is ready to be sold. It is also responsive across all devices. The
                  uniqueness of this project lies in its interactive map, which displays
                  the payment status of each house based on monthly dues or garbage
                  collection fees.
                </>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Dental Clinic Management System"
              description={
                <>
                  A dental clinic management system built with Laravel, MySQL, and Tailwind CSS. This is a{" "}
                  <strong className="purple">fully dynamic web application</strong> that
                  is ready to be sold. This project includes features for managing patient records, appointments, and billing.
                </>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Veterinary Management System"
              description="A veterinary management system built with PHP, MySQL, JavaScript, and CSS. This project includes features for managing client's pet records, appointments, billing, and automated email reminder of pet's vaccination booster."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="HeyBuddy!"
              description="HeyBuddy! is a mobile application built with React Native and Firebase that provides a platform for users to connect and chat through unexpected encounters. The app's purpose is to have a unexpected encounter with their friends through gps. The app includes features such as real-time chat, and a notification of a buddy is near you."
                          
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Padayon Turismo"
              description="A travel Itenerary website built with React, Node.js, and MongoDB. This project includes features for Itenerary, Maps, and all the information of the tourist spots to be visited in Silang, Cavite."

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Pokedex Mobile"
              description="Just a simple Pokedex app built with React Native. Made it during my free time to get familiarized with the use of API online"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
