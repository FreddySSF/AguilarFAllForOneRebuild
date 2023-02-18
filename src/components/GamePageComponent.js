import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Row, Col, Nav, Button, Stack} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function GamePageComponent(){
    return(

    <div className='App-header'>
    <Container fluid className = 'p-0'>
      <Row className = 'p-0'>
        <Col className = 'p-0'>
        <Navbar className='Nav-Class' expand="lg">
      <Container>
        <Navbar.Brand href="">Freddy's All For One</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Col>
      </Row>
      </Container>

      <div>
        <Container>
        <Row>
          <Col className='H1-Header'>
          <h1> Freddy's All For One</h1>
          </Col>
        </Row>
      </Container>
      </div>


      <Container>
        <Row>
          <Col className='Button-Place'>
          <Stack direction="horizontal" gap={5}>
      <Button className='Button-Size' variant="secondary" size='lg' style={{height: '75px', width : '200px'}} as={Link} to="SayHelloComponent">Say Hello</Button>
      <Button className='Button-Size' variant="secondary" size='lg' style={{height: '75px', width : '200px'}} as={Link} to="AddingTwoNumbersComponents">Adding Two Numbers</Button>
      <Button className='Button-Size' variant="secondary" size='lg' style={{height: '75px', width : '200px'}} as={Link} to="AskingQuestionsComponent">Asking Questions</Button>
      </Stack>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className='Button-Place'>
          <Stack direction="horizontal" gap={5}>
      <Button className='Button-Size' variant="secondary" size='lg' style={{height: '75px', width : '200px'}} as={Link} to="GreaterThanOrLessThanComponent">Greater Than Or Less Than</Button>
      <Button className='Button-Size' variant="secondary" size='lg' style={{height: '75px', width : '200px'}} as={Link} to="MadLibComponent">Mad Lib</Button>
      <Button className='Button-Size' variant="secondary" size='lg' style={{height: '75px', width : '200px'}} as={Link} to="OddOrEvenComponent">Odd Or Even</Button>
      </Stack>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className='Button-Place'>
          <Stack direction="horizontal" gap={5}>
      <Button className='Button-Size' variant="secondary" size='lg' style={{height: '75px', width : '200px'}} as={Link} to="ReverseItComponent">Reverse It</Button>
      <Button className='Button-Size' variant="secondary" size='lg' style={{height: '75px', width : '200px'}} as={Link} to="StudentDirectoryComponent">Student Directory</Button>
      <Button className='Button-Size' variant="secondary" size='lg' style={{height: '75px', width : '200px'}} as={Link} to="RestaurantPickerComponent">Restaurant Picker</Button>
      </Stack>
          </Col>
        </Row>
      </Container>

</div>
    );
}
  
  
 