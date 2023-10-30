import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../assets/images/logo-ilab.png";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      bg="light"
      className="shadow-sm position-fixed top-0 w-100"
    >
      <Container className="py-2">
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" width="80" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            <Nav.Item>
              <Nav.Link href="/" className="fs-5 fw-normal" active>
                HOME
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about" className="fs-5 fw-normal">
                ABOUT US
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact" className="fs-5 fw-normal">
                CONTACT
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="d-grid gap-2 d-md-flex">
            <Button variant="outline-dark" className="px-3 btn-lg">
              SIGNUP
            </Button>
            <Button variant="primary" className="px-3 btn-lg">
              LOGIN
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
