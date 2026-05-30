import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const students = [
  { id: 101, name: "John", marks: 85 },
  { id: 102, name: "Mike", marks: 90 },
  { id: 103, name: "David", marks: 88 }
];

function StudentProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find(s => s.id === Number(id));

  const nextStudent = () => {
    const index = students.findIndex(s => s.id === Number(id));
    const next = students[(index + 1) % students.length];
    navigate(`/student/${next.id}`);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>
          ID: {student.id}<br />
          Marks: {student.marks}
        </Card.Text>
        <Button onClick={nextStudent}>Next Student</Button>
      </Card.Body>
    </Card>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/student/101">101</Link> |
      <Link to="/student/102">102</Link>

      <Routes>
        <Route path="/student/:id" element={<StudentProfile />} />
      </Routes>
    </BrowserRouter>
  );
}