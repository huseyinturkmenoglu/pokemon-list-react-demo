import React from 'react'
import { Button, Alert } from 'react-bootstrap';

export default function Message({ name, show, hideMessage }) {

  return (
    <>
      <Alert show={show} variant="warning" className="alert-relocation">
        <p>
          Added {name} &#128522;
        </p>
        <hr />
        <div className="d-flex justify-content-center">
          <Button onClick={() => hideMessage()} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
    </>
  );
}