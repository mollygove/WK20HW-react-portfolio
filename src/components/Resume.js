import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import resume from "../images/resume.jpg";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";

function Resume() {
  return (
    <Container className="mt-3">
      <h2 className="text-center mt-3" id="about">
        Resume
      </h2>
      <Row className="me-auto mt-3">
        <Col>
          <h3 className="text-center mt-3">Click image for my resume!</h3>
          <div className="text-center mt-3">
            <a
              href="https://drive.google.com/file/d/1njENBTPUvMcG1Sl5ubODHUikp2ng-Y_F/view"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={resume} rounded />
            </a>
          </div>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Container>
              <Row>
                <Col>
                  <Image src={html} />
                </Col>
                <Col>
                  <Image src={css} />
                </Col>
              </Row>
            </Container>
            <Container className="mt-5">
              <Row>
                <Col>
                  <Image src={javascript} />
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
