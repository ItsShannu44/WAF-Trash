import { BrowserRouter, Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Alert } from "react-bootstrap";
import { useState } from "react";

function Home() {
  return <h3>Home Page</h3>;
}

function Students() {
  return <h3>Student List Page</h3>;
}

function Reports() {
  return <h3>Reports Page</h3>;
}

function Navigation({ username, count }) {
  const location = useLocation();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Student Portal</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/students">Students</Nav.Link>
            <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Alert variant="info">
        Current Route: {location.pathname} <br />
        User: {username} <br />
        Navigation Count: {count}
      </Alert>
    </>
  );
}

export default function App() {
  const [username] = useState("Shanmukha");
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navigation username={username} count={count} />
      <Routes>
        <Route path="/" element={<Navigate to="/students" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}