import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  const [showImage, setShowImage] = useState(false);

  const handleClose = () => setShowImage(false);
  const handleShow = () => setShowImage(true);

  return (
    <>
      <Card className="project-card-view">
        <div className="project-img-wrapper">
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt={props.title}
            onClick={handleShow}
            className={`project-card-img ${
              props.imageType === "mobile" ? "mobile-img" : "web-img"
            }`}
            title="Click to view full screenshot"
          />
        </div>

        <p className="project-img-hint">
          Click the image to view the full screenshot.
        </p>

        <Card.Body className="project-card-body">
          <Card.Title>
            <strong className="purple">{props.title}</strong>
          </Card.Title>

          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </Card.Body>
      </Card>

      <Modal
        show={showImage}
        onHide={handleClose}
        centered
        size="xl"
        className="project-image-modal"
      >
        <Modal.Body className="project-modal-body">
          <button className="project-modal-close" onClick={handleClose}>
            ×
          </button>

          <img
            src={props.imgPath}
            alt={props.title}
            className="project-modal-img"
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCards;