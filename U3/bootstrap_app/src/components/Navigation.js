//Enables JSX syntax
import React from "react";
//Import Navigation Components
import {
  Navbar,
  Nav,
  Container
} from "react-bootstrap";

function NavigationBar() {
  return (
   
    <Navbar bg="dark"  variant="dark" expand="lg">
    {/*Provides responsive layout*/}
      <Container>

        {/* Website Title */}
        <Navbar.Brand href="#">
          PESU MCA
        </Navbar.Brand>

{/* Mobile Toggle Button, menu collapses and toggle button appears*/}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
        {/*Creates navigation links*/}
          <Nav className="ms-auto">

            <Nav.Link href="#" Active>
              Home
            </Nav.Link>

            <Nav.Link href="#">
              Students
            </Nav.Link>

            <Nav.Link href="#">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;