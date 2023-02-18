import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Row, Col, Nav, Button, Form} from 'react-bootstrap';
import { AskingQuestionsFunction } from '../Services/DataServices';
import { useState } from 'react';



export default function AskingQuestionsComponent(){
  const [userInput, setUserInput] = useState("sum goes here");
  const [userInput2, setUserInput2] = useState("sum goes here");
  const [displayName, setDisplayName] = useState("text goes here")
  const handleUserInput = async ()=>{

    const pattern = /^[a-zA-Z]+$/;
    if(pattern.test(userInput, userInput2)){
      console.log(pattern)
  
      let response = await AskingQuestionsFunction(userInput, userInput2)
      setDisplayName(response);
    }else{
      console.log(alert("Enter a valid response."))
    }

  } 


  
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
          <h1>Asking Questions</h1>
          </Col>
        </Row>
        <Row>
        <Col className='H1-Header'>
          <p>In the text boxes below, enter your name and what you will be for Halloween. After clicking the enter button a sentence will appear with both of your entries.</p>
          </Col>
        </Row>
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
            <Col>
            <Form.Control onChange={(e) => setUserInput2(e.target.value)} className="TextBar-Size" type="text" placeholder="Type favorite halloween costume here..."/>
            </Col>
          </Row>
          <Row>
          <Button onClick={handleUserInput} className='Button-Submit' variant="secondary" size='lg' style={{height: '50px', width : '100px'}}>Enter</Button>
          </Row>
          <Row>
            <h1 className="H1-Header">{displayName}</h1>
          </Row>
        </Container>
        </div>

      </div>
    )
    
}