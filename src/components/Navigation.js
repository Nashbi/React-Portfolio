import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import resume from '../resume.pdf';

function Navigation() {
  return (
    <div id="#NavBar">
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Nashbi</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#abstract">Welcome</Nav.Link>
            <Nav.Link href="#AboutNashbi">About Me</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="../resume.pdf" download={resume}>Resume</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>


          </Nav>
        </Container>
      </Navbar> 
    </div>

  )};

  export default Navigation;
