import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Row, Col, Nav, Button, Form} from 'react-bootstrap';
import { StudentDirectoryFunctionFirstName, StudentDirectoryFunctionLastName, StudentDirectoryFunctionSlackName, StudentDirectoryFunctionEmail } from '../Services/DataServices';
import { useState } from 'react';



export default function StudentDirectoryComponent(){
  const [userInput, setUserInput] = useState([]);
  let [studentDirectoryInput, setStudentDirectoryInput] = useState("");

    return (

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
          <h1>Student Directory</h1>
          </Col>
        </Row>
        <Row>
          <Col className='H1-Header'>
          <p>Within the text box below, enter either the first name, last name, slack name or email of the student whose information you want to surface. then click the corresponding button to surface the data.</p>
          </Col>
        </Row>
      </Container>
      </div>

      <div>
        <Container>
          <Row>
            <Col>
            <Form.Control onChange={(e) => setStudentDirectoryInput(e.target.value)} className="TextBar-Size" type="text" placeholder="Type number here..."/>
            </Col>
          </Row>
        </Container>
          
          
           
        <Container className="H1-Header">
          <Row>
            <Col>

          <Button onClick={async () => {
            setUserInput(await StudentDirectoryFunctionFirstName(studentDirectoryInput));
          }}  variant="secondary" size='lg' style={{height: '70px', width : '180px'}}>Enter First Name
          </Button>
       
          <Button onClick={async () => {
            setUserInput(await StudentDirectoryFunctionLastName(studentDirectoryInput));
          }}  variant="secondary" size='lg' style={{height: '70px', width : '180px'}}>Enter Last Name
          </Button>
       
          <Button onClick={async () => {
            setUserInput(await StudentDirectoryFunctionSlackName(studentDirectoryInput));
          }}  variant="secondary" size='lg' style={{height: '70px', width : '180px'}}>Enter Slack Name
          </Button>
         
          <Button onClick={async () => {
            setUserInput(await StudentDirectoryFunctionEmail(studentDirectoryInput));
          }} variant="secondary" size='lg' style={{height: '70px', width : '180px'}}>Enter Email
          </Button>

          </Col>
          </Row>
          </Container>


          <Container>
             <Row>
            <h1 className="Answer-Placement">First Name: {userInput[0]}</h1>
            <h1 className="Answer-Placement">Last Name: {userInput[1]}</h1>
            <h1 className="Answer-Placement">Slack Name: {userInput[2]}</h1>
            <h1 className="Answer-Placement">Email: {userInput[3]}</h1>
            <h1 className="Answer-Placement">Hobbies: {userInput[4]}</h1>
             </Row>
          </Container>
        </div>

      </div>
    )
    
}