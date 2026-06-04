
import React from "react";

import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
} from "react-bootstrap";

import { Link } from "react-router-dom";

// Navigation Component
function NavigationBar(props) {

  return (

    <Navbar
      bg="primary"
      variant="dark"
    >

      <Container>

        {/* Navbar Brand */}
        <Navbar.Brand>
          {props.title}
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle />

        {/* Navbar Collapse */}
        <Navbar.Collapse>

          {/* Navigation Links */}
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/students">
              Students
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>

          </Nav>

          {/* Search Form */}
          <Form className="d-flex">

            <Form.Control
              type="text"
              placeholder="Dummy Search"
             />

            <Button variant="light">
              Search
            </Button>

          </Form>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default NavigationBar;