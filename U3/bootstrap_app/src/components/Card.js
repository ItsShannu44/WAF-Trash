import React from "react";
//Import Card Components
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function MyCard() {
  return (

    <div className="container mt-3">
      <Card style={{ width: '20rem' }}>
      <Card.Img
            variant="top"
            src="https://pes.edu/wp-content/uploads/2025/06/PESU-new-logo.png"
        />
        <Card.Body>
          <Card.Title>
            PES University
          </Card.Title>
          <Card.Text>
            MCA Department-React Bootstrap Card.
          </Card.Text>

          <Button variant="info">
            Read More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCard;