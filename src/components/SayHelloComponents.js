import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Row, Col, Nav, Button, Form} from 'react-bootstrap';
import { SayHelloFunction } from '../Services/DataServices';
import { useState } from 'react';


export default function SayHelloComponent(){
const [userInput, setUserInput] = useState("");
const [displayName, setDisplayName] = useState("text goes here")
const handleUserInput = async ()=>{

  const pattern = /^[a-zA-Z]+$/;
  if(pattern.test(userInput)){
    console.log(pattern)

    let response = await SayHelloFunction(userInput)
  setDisplayName(response);
  }else{
    console.log(alert("Enter a valid response."))
  }

  
}

    return (
        <div className="App-header">
            <Container fluid className = 'p-0'>
      <Row className = 'p-0'>
        <Col className = 'p-0'>
        <Navbar className='Nav-Class' expand="lg">
      <Container>
        <Navbar.Brand href="#home">Freddy's All For One</Navbar.Brand>
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
          <h1> Say Hello</h1>
          </Col>
        </Row>
        <Col className='H1-Header'>
          <h3> Typing in your name and clicking Enter will display a greeting to you!</h3>
          </Col>
      </Container>
      </div>

      
      <div>
        <Container>
          <Row>
            <Col>
            <Form.Control onChange={(e) => setUserInput(e.target.value)} className="TextBar-Size" type="text" placeholder="Type name here..."/>
            </Col>
          </Row>
          <Row>
          <Button onClick={handleUserInput} className='Button-Submit' variant="secondary" size='lg' style={{height: '50px', width : '100px'}}>Enter</Button>
          </Row>
          <Row>
            <h1 className='Text-Placeholder'>{displayName}</h1>
          </Row>
        </Container>
        </div>

        </div>

        
    )
    
}