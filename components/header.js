import Link from "next/link";
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Container,
  Image,
} from "react-bootstrap";
import { withRouter } from "next/router";
import React, { useState, useContext } from "react";
import styles2 from "./header.module.css";
import styles from "../pages/index.module.css";
import { RiMenu5Line } from "react-icons/ri";
import getTheme from "../theme.js";

function Header(props) {
  const { router } = props;
  const { pathname } = router;
  const theme = getTheme();

  return (
    <header>
      <Navbar
        sticky="top"
        style={{ padding: "2px 12px", backgroundColor: theme.back }}
        expand="lg"
        variant="light"
        className={[styles2.navBar]}
      >
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand style={{ paddingLeft: 0 }}>
              <Image src="/logo1.png" style={{ height: 25 }} />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle
            className={styles2.toggler}
            aria-controls="basic-navbar-nav"
          >
            <RiMenu5Line style={{ fontSize: 26, color: "#ffffff" }} />
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey="/" style={{ marginLeft: "auto" }}>
              <Link href="/" passHref>
                <Nav.Link className={styles2.navLink}>Home</Nav.Link>
              </Link>
              <Link href="/#recent" passHref>
                <Nav.Link className={styles2.navLink}>Recent Posts</Nav.Link>
              </Link>
              <Link href="/#contactme" passHref>
                <Nav.Link className={styles2.navLink10}>Get in touch</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default withRouter(Header);
