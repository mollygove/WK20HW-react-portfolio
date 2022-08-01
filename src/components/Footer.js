import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";



export default function CustomFooter() {
  return (
    <footer className="mt-3">
      <Row>
        <Col sm={{ span: 1, offset: 4 }} className="text-center">
          <a href="https://github.com/mollygove" target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub} size="xl"/>
          </a>
        </Col>
        <Col sm={2} className="text-center">
          <h6>Molly Gove &copy; {new Date().getFullYear()}</h6>
        </Col>
        <Col sm={1} className="text-center">
          <a href="https://www.linkedin.com/in/molly-gove" target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} size="xl"/>
          </a>
        </Col>
      </Row>
    </footer>
  );
}