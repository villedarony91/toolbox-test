import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const MessageForm = () => {

  const [messageState, setMessageState] = useState({
    messageToSend: "",
    messageReceived: "",
  });

  const sendMessageHandler = () => {
    axios
      .post("http://localhost:3300/api/v1", {
        message: messageState.messageToSend,
      })
      .then((response) => {
        console.log(response);
        setMessageState({
          messageReceived: response.data.message,
        });
      });
  };

  const messageToSendHandler = (event) => {
    setMessageState({
      messageToSend: event.target.value,
    });
  };

  return (
    <Form>
      <Form.Group controlId="messageSent">
        <Form.Label id="top-label">Enter your amazing message</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter your amazing message"
          rows="3"
          id="message-to-send"
          value={messageState.messageToSend}
          onChange={messageToSendHandler}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="button"
        id="submit"
        onClick={sendMessageHandler}
      >
        Submit
      </Button>
      <Form.Group controlId="messageReceived">
        <Form.Label id="top-label-receive">Message received</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Waiting to receive an amazing message"
          rows="3"
          id="message-received"
          value={messageState.messageReceived}
        />
      </Form.Group>
    </Form>
  );
};

export default MessageForm;
