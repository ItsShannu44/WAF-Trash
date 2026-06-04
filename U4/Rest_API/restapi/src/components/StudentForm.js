// StudentForm.js
import React, { useState } from "react";

import {
  Card,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";

// Student Form Component
function StudentForm(props) {

  // State Variables
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  // Form Submit Function
  const submitHandler = (event) => {

    // Prevent Page Refresh
    event.preventDefault();

    // Send Data to Parent Component
    props.getStudentData(name, course);

    // Clear Form Fields
    setName("");
    setCourse("");
  };

  return (

    <Card className="shadow">
      <Card.Body>
        <h2 className="text-center">
          Student Registration Form
        </h2>

        {/* Form */}
        <Form onSubmit={submitHandler}>

          {/* Student Name */}
          <Form.Group
            as={Row}>

            <Form.Label column>
              Student Name
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Col>
          </Form.Group>
          {/* Course */}
          <Form.Group
            as={Row}>
          <Form.Label column>
              Course
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              />
            </Col>
          </Form.Group>

          {/* Submit Button */}
          <div className="text-center">

            <Button
              type="submit"
              variant="success"
            >Submit
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
export default StudentForm;