import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Row, Col, Nav, Button, Form, Stack} from 'react-bootstrap';
import { MadLibFunction } from '../Services/DataServices';
import { useState } from 'react';



export default function MadLibComponent(){
      const [userInput, setUserInput] = useState("");
      const [userInput2, setUserInput2] = useState("");
      const [userInput3, setUserInput3] = useState("");
      const [userInput4, setUserInput4] = useState("");
      const [userInput5, setUserInput5] = useState("");
      const [userInput6, setUserInput6] = useState("");
      const [userInput7, setUserInput7] = useState("");
      const [userInput8, setUserInput8] = useState("");
      const [userInput9, setUserInput9] = useState("");
      const [userInput10, setUserInput10] = useState("");
      const [displayName, setDisplayName] = useState("Mad Lib story goes here..")
      const handleUserInput = async ()=>{
       
       
  const pattern = /^[a-zA-Z]+$/;
  if(pattern.test(userInput)){
    console.log(pattern)

         
    let response = await MadLibFunction(userInput, userInput2, userInput3, userInput4, userInput5, userInput6, userInput7, userInput8, userInput9, userInput10)
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
          <h1>Mad Lib</h1>
          </Col>
        </Row>
        <Row>
          <Col className='H1-Header'>
          <p>For this mad lib activity, fill in the blanks accordingly and click the enter button to surface the mad lib story with your inputs!</p>
          </Col>
        </Row>
      </Container>
      </div>

      <div>
        <Container>
          <Row>
            <Col>
            <Stack direction="horizontal" gap={5}>
            <Form.Control onChange={(e) => setUserInput(e.target.value)} className="TextBar-Size" type="text" placeholder="Type your name here..."/>
         
            <Form.Control onChange={(e) => setUserInput2(e.target.value)} className="TextBar-Size" type="text" placeholder="Type your friends name here..."/>
         
            <Form.Control onChange={(e) => setUserInput3(e.target.value)} className="TextBar-Size" type="text" placeholder="Type the name of one of your favorite places..."/>
            </Stack>
            </Col>
          </Row>
          </Container>

          <Container>
          <Row>
            <Col>
            <Stack direction="horizontal" gap={5}>
            <Form.Control onChange={(e) => setUserInput4(e.target.value)} className="TextBar-Size" type="text" placeholder="Type an adjective..."/>
          
            <Form.Control onChange={(e) => setUserInput5(e.target.value)} className="TextBar-Size" type="text" placeholder="Type the name of a superhero..."/>
        
            <Form.Control onChange={(e) => setUserInput6(e.target.value)} className="TextBar-Size" type="text" placeholder="Type the name of another superhero..."/>
            </Stack>
            </Col>
          </Row>
          </Container>

          <Container>
          <Row>
            <Col>
            <Stack direction="horizontal" gap={5}>
            <Form.Control onChange={(e) => setUserInput7(e.target.value)} className="TextBar-Size" type="text" placeholder="Type the name of a villain..."/>
        
            <Form.Control onChange={(e) => setUserInput8(e.target.value)} className="TextBar-Size" type="text" placeholder="Type a superpower you would like..."/>
         
            <Form.Control onChange={(e) => setUserInput9(e.target.value)} className="TextBar-Size" type="text" placeholder="Type a different superpower you would like..."/>
           </Stack>
            </Col>
          </Row>
          </Container>

          <Container>
          <Row>
            <Col>
            <Stack direction="horizontal" gap={5}>
            <Form.Control onChange={(e) => setUserInput10(e.target.value)} className="TextBar-Size" type="text" placeholder="Type the name of an amusement park..."/>
          </Stack>
          </Col>
          </Row>

        <Container>
          <Row>
            <Col>
            <Stack direction="horizontal" gap={5}>
            <Button onClick={handleUserInput} className='Button-Submit' variant="secondary" size='lg' style={{height: '50px', width : '100px'}}>Enter</Button>
            </Stack>
            </Col>
          </Row>
        </Container>

          <Row>
            <h1 className="H1-Header">{displayName}</h1>
          </Row>
        </Container>
        </div>


      </div>
    )
    
}