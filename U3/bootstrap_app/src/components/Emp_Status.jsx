import { useNavigate, useSearchParams } from "react-router-dom";
import { Form, Table, Alert } from "react-bootstrap";

const employees = [
  { id: 1, name: "John", status: "active" },
  { id: 2, name: "Mike", status: "inactive" },
  { id: 3, name: "David", status: "leave" }
];

export default function Employee() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const status = params.get("status") || "";

  const handleChange = (e) => {
    navigate(`/employees?status=${e.target.value}`);
  };

  const filtered = employees.filter(
    emp => !status || emp.status === status
  );

  return (
    <>
      <Form.Select onChange={handleChange}>
        <option>Select Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
        <option value="leave">On Leave</option>
      </Form.Select>

      <Alert variant="success">
        Current Query: {status}
      </Alert>

      <Table striped bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}