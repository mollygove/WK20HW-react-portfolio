import Card from 'react-bootstrap/Card';

function Project (props) {
  return (
    <Card style={{ width: '18rem' }} className='h-100'>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <div className='d-flex justify-content-around'>
            <a className='btn btn-primary space-evenly' href={props.github} target='_blank' rel='noreferrer'>GitHub</a>
            <a className='btn btn-primary' href={props.deployed} target='_blank' rel='noreferrer'>Project</a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Project;