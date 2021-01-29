import { getAllPostsForHome } from "../lib/graphcms";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import styles from "../pages/index.module.css";
import { BsFillCalendarFill } from "react-icons/bs";
import { FaClipboardList, FaUserFriends } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Button,
  Jumbotron,
  Image,
  FormFeedback,
  Form,
  FormGroup,
  Label,
  Input,
} from "react-bootstrap";
import Link from "next/link";
import React, { useState } from "react";
import getTheme from "../theme.js";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const theme = getTheme();

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
  };

  const validateForm = () => {
    if (email < 4 || message < 4 || name < 4) {
      setStatus("Error, every field must be at least 4 characters. ");
    } else {
      setStatus("Message sending needs to be implemented.");
      resetForm();
    }
  };

  return (
    <>
      <Row>
        <Col xs={12} lg={12}>
          <Form className="text-center" style={{ marginTop: 30 }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label
                style={{ color: "#FFFFFF", fontWeight: 600 }}
                className="block text-left"
              >
                What's your email?
              </Form.Label>
              <Form.Control
                className={[styles.input]}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder=""
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label
                style={{ color: "#FFFFFF", fontWeight: 600 }}
                className="block text-left"
              >
                What's your name?
              </Form.Label>
              <Form.Control
                className={[styles.input]}
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label
                style={{ color: "#FFFFFF", fontWeight: 600 }}
                className="block text-left"
              >
                What's your message?
              </Form.Label>
              <Form.Control
                className={[styles.input]}
                value={message}
                as="textarea"
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Button
              className={[styles.actionButton, styles.grow]}
              style={{ backgroundColor: theme.secondary }}
              onClick={(event) => {
                event.preventDefault();
                validateForm();
              }}
            >
              Send Message
            </Button>{" "}
            <h1 style={{ marginTop: 20, color: "white" }}>{status}</h1>
          </Form>
        </Col>
      </Row>
    </>
  );
}
