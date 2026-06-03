import React from "react";
import { Button } from "react-bootstrap";

function ButtonOutline() {
  return (
    <div className="m-3">
      <Button variant="outline-primary" className="me-2">
        Primary
      </Button>

      <Button variant="outline-secondary" className="me-2">
        Secondary
      </Button>

      <Button variant="outline-success" className="me-2">
        Success
      </Button>

      <Button variant="outline-warning" className="me-2">
        Warning
      </Button>

      <Button variant="outline-danger" className="me-2">
        Danger
      </Button>

      <Button variant="outline-info" className="me-2">
        Info
      </Button>

      <Button variant="outline-light" className="me-2">
        Light
      </Button>

      <Button variant="outline-dark">
        Dark
      </Button>
    </div>
  );
}

export default ButtonOutline;
