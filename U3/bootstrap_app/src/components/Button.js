import React from "react";
import Button from "react-bootstrap/Button";

function MyButton() {
  return (
   <div className="container mt-3">
      {/* {' '} creates Gaps between two Buttons */}
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>{' '}
      <Button variant="link">Link</Button>
    </div>
  );
}

export default MyButton;




/*
Creates a responsive fixed-width container
amd adds  (margin-top) mt-3 spacing level.

Common Button Variants in React Bootstrap
| Variant     | Appearance             |
| ----------- | ---------------------- |
| `primary`   | Blue button            |
| `secondary` | Gray button            |
| `success`   | Green button           |
| `warning`   | Yellow/Orange button   |
| `danger`    | Red button             |
| `info`      | Light blue button      |
| `light`     | White/light button     |
| `dark`      | Black/dark button      |
| `link`      | Looks like a hyperlink |
*/