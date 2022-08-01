import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from './Project';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';

function Work({ image, title, text, github, deployed }) {
  return (
    <Container>
        <h2 className='text-center' id='portfolio'>Portfolio</h2>
        <Row>
            <Col>
                <Project 
                    image={project1} 
                    title='Code Quiz'
                    text='This application displays a quiz to test your knowledge about code.'
                    github='https://github.com/mollygove/WK4HW-Quiz'
                    deployed='https://mollygove.github.io/WK4HW-Quiz/'
                />
            </Col>
            <Col>
                <Project 
                    image={project2} 
                    title='Scheduling App'
                    text='This is an application to keep track of your life'
                    github='https://github.com/mollygove/WK5HW-Gove-Scheduler'
                    deployed='https://mollygove.github.io/WK5HW-Gove-Scheduler/'
                />
            </Col>
            <Col>
                <Project 
                    image={project3} 
                    title='Personal Assistant'
                    text='An event planner application that allows a user to search for major events happening in major cities that will provide a list of events to attend.'
                    github='https://github.com/mollygove/Personal-Assistant'
                    deployed='https://bungycode.github.io/Personal-Assistant/'
                />
            </Col>
        </Row>
    </Container>
  );
}

export default Work;