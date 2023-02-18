import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Row, Col, Nav, Button, Form} from 'react-bootstrap';
import { AddingTwoNumbersFunction } from '../Services/DataServices';
import { useState } from 'react';



export default function AddTwoNumbersComponent(){
  const [userInput, setUserInput] = useState("");
  const [userInput2, setUserInput2] = useState("");
  const [displayName, setDisplayName] = useState("")
  const handleUserInput = async ()=>{
  
    const pattern = /^\d+$/;
  if(pattern.test(userInput, userInput2)){
    console.log(pattern)

    let response = await AddingTwoNumbersFunction(userInput, userInput2)
    setDisplayName(response);
  }else{
    console.log(alert("Enter a valid response."))
  }
   
  } 


 return(

    <div className='App-header'>
<Container fluid className = 'p-0'>
<Row className = 'p-0'>
  <Col className = 'p-0'>
  <Navbar className='Nav-Class' expand="lg">
<Container>
  <Navbar.Brand>
    <Nav.Item>Freddy's All For One</Nav.Item>
    </Navbar.Brand>
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
    <Col>
    <h1 className="H1-Header">Adding Two Numbers</h1>
    </Col>
  </Row>
  <Col className="H1-Header">
    <p> Typing in two numbers and clicking enter will add them together!</p>
    </Col>
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
      <h1 className="H1-Header">The sum of your numbers is {displayName}</h1>
    </Row>
  </Container>
  </div>


</div>
 )
}


  


   
    
    
