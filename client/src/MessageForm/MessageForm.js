import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const  messageForm = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label id="top-label">Enter your amazing message</Form.Label>
        <Form.Control as="textarea" placeholder="Enter your amazing message" rows="3" id="message-to-send"/>
      </Form.Group>
      <Button variant="primary" type="button" id="submit">
        Submit
      </Button>
    </Form>
  );
};

export default messageForm;

