import { Container, Row, Col, Image } from "react-bootstrap";
import { EXAMPLE_PATH } from "../lib/constants";
import Contact from "./contact";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoInstagram, IoLogoGithub } from "react-icons/io";
import Link from "next/link";
import styles from "../pages/index.module.css";
import getTheme from "../theme.js";

export default function Footer() {
  const theme = getTheme();

  return (
    <footer style={{ backgroundColor: theme.back }}>
      <Container>
        <Row
          className="d-flex justify-content-center"
          style={{ paddingTop: 80 }}
        >
          <Col xs={12} lg={6}>
            <p
              style={{
                marginTop: 40,
                color: "#ebebec",
                fontSize: 28,
                fontWeight: "600",
              }}
            >
              Got a question? <br /> Let's Talk.
            </p>
            <h6
              style={{
                color: "#999aa2",
                marginTop: 10,
                fontSize: 14,
                lineHeight: 2,
              }}
            >
              Follow us on social media for peak productivity strategies,
              exclusive updates, and special discounts.
            </h6>
            <div style={{ marginTop: 20 }}>
              <a style={{ fontSize: 16, color: theme.secondary }}>
                contact@carlosnunez.io
              </a>
            </div>
          </Col>
          <Col xs={12} lg={6} className="text-center ">
            <Contact />
          </Col>
        </Row>

        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Image
              src="/logo1.png"
              style={{ height: 35, color: "red", marginTop: 90 }}
            />
          </Col>
          <Col xs={12}>
            <h2
              className="text-center"
              style={{ color: "#FFFFFF", marginTop: 20 }}
            >
              Thank's for viewing,{" "}
              <span style={{ fontWeight: 600 }}>connect with me below!</span>
            </h2>
          </Col>
          <Col xs={12}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              <a href="https://github.com/carlos-nunez" target="_blank">
                <IoLogoGithub
                  style={{ color: "white", fontSize: 20, margin: 10 }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/carlos-nunezz/"
                target="_blank"
              >
                <RiLinkedinFill
                  style={{ color: "white", fontSize: 20, margin: 10 }}
                />
              </a>
              <a
                href="https://www.instagram.com/carlos_nunezz_/"
                target="_blank"
              >
                <IoLogoInstagram
                  style={{ color: "white", fontSize: 20, margin: 10 }}
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
