import { useState } from "react";
import {
  Container,
  Form,
  Button,
  Table,
  Alert,
  Modal
} from "react-bootstrap";

export default function Student() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);

  const addStudent = () => {
    setStudents([
      ...students,
      { id: students.length + 1, name }
    ]);
    setMsg("Student Added Successfully");
  };

  return (
    <Container>
      <Alert variant="success">{msg}</Alert>

      <Form>
        <Form.Control
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={addStudent}>
          Add Student
        </Button>
      </Form>

      <Table bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Edit Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control />
        </Modal.Body>
      </Modal>
    </Container>
  );
}