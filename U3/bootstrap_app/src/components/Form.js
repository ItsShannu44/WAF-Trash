import React from "react";
//Import Form Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function MyForm() {
  return (
    <div className="container mt-3">
      <h2>Student Login Form</h2>
      <Form>

        {/* Email Field */}
        <Form.Group className="mb-3">
          <Form.Label>
            Email Address
          </Form.Label>

          <Form.Control
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        {/* Password Field */}
        <Form.Group className="mb-3">
          <Form.Label>
            Password
          </Form.Label>

          <Form.Control
            type="password"
            placeholder="Enter password"
          />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default MyForm;