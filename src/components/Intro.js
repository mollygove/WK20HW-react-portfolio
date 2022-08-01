import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Molly from "../images/molly.png";
import Typewriter from "typewriter-effect";

function Intro() {
  return (
    <Container fluid="md" className="mt-100">
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div id="typewriter" textalign='center'>
            <Typewriter
              options={{
                strings: [
                  "<h1>Hey there, my name is <span style='color: ligh blue;'>Molly</span></h1>",
                  "<h1>Welcome to my page!</h1>",
                  "<h1>Thanks for stopping by!</h1>",
                  "<h1>TAKE A LOOK!</h1>",
                ],
                cursor: '❤️',
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'center'}}>
            <img src={Sherreka} alt="molly headshot"  />
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;