import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useRef } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {

    emailjs
      .sendForm(
        'service_7lrqkcn',
        'template_69lqywi',
        form.current,
        'Uu6oPjsdafP3w83yl'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // service_7lrqkcn

  return (
    <Container>
      <h2 className="text-center mt-3" id="contact">
        Contact
      </h2>
      <Container className="d-flex justify-content-center">
        <Form ref={form} onSubmit={sendEmail} className="mb-0 w-50">
          <Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="to_name"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                name="from_name"
                required
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicInfo">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Insert Your Message"
              name="message"
              required
            />
          </Form.Group>
          <Container className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Container>
        </Form>
      </Container>
    </Container>
  );
};

export default Contact;