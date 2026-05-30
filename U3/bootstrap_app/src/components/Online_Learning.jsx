import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card,
  Nav,
  Navbar
} from "react-bootstrap";

function Layout() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Learning Dashboard</Navbar.Brand>
      </Navbar>

      <Container>
        <Row>
          <Col md={3}>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="search">
                Search
              </Nav.Link>

              <Nav.Link as={Link} to="list">
                Course List
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

function Search() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Search Course</Card.Title>
      </Card.Body>
    </Card>
  );
}

function List() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>React Course</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/courses" element={<Layout />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}