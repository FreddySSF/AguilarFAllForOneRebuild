import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Row, Col, Nav, Button, Form} from 'react-bootstrap';
import { GreaterThanOrLessThanFunction } from '../Services/DataServices';
import { useState } from 'react';



export default function GreaterThanOrLessThanComponent(){
  const [userInput, setUserInput] = useState("")
  const [userInput2, setUserInput2] = useState("")
  const [displayName, setDisplayName] = useState("numbers go here")
  const handleUserInput = async ()=>{
    
    const pattern = /^\d+$/;
  if(pattern.test(userInput, userInput2)){
    console.log(pattern)

    let response = await GreaterThanOrLessThanFunction(userInput, userInput2)
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
          <h1> Greater Than Or Less Than</h1>
          </Col>
        </Row>
        <Row>
          <Col className='H1-Header'>
          <p>Within the text boxes below enter two numbers. After clicking the enter button, a message will surface below stating if one number is greater than, less than or equal too the other.</p>
          </Col>
        </Row>
      </Container>
      </div>

      <div>
        <Container>
          <Row>
            <Col>
            <Form.Control onChange={(e) => setUserInput(e.target.value)} className="TextBar-Size" type="text" placeholder="Type number here..."/>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Control onChange={(e) => setUserInput2(e.target.value)} className="TextBar-Size" type="text" placeholder="Type number here..."/>
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