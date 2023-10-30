import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo-ilab.png";
import fb from "../assets/images/logo-facebook.png";
import x from "../assets/images/logo-twitter.png";
import ig from "../assets/images/logo-instagram.png";
import "../assets/style/style.css";

function Footer() {
  return (
    <footer className="bd-footer my-auto bg-white">
      <Container className="py-5">
        <Row className="d-flex justify-content-between">
          <Col lg={3} className="mb-3">
            <ul className="list-unstyled small text-muted">
              <img
                src={logo}
                alt="logo"
                className="mb-5 rounded img-fluid mx-auto d-block"
              />
              <li className="mb-2 text-center fs-6">
                Copyright &copy;2022. Infinite Learning
              </li>
            </ul>
          </Col>

          <Col xs={6} lg={2} className="offset-lg-1 mb-3">
            <h3>Services</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/">Email Marketing</a>
              </li>
              <li className="mb-2">
                <a href="/">Campaigns</a>
              </li>
              <li className="mb-2">
                <a href="/">Branding</a>
              </li>
              <li className="mb-2">
                <a href="/">Offline</a>
              </li>
            </ul>
          </Col>

          <Col xs={6} xl={2} className="mb-3">
            <h3>About</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/">Our Story</a>
              </li>
              <li className="mb-2">
                <a href="/">Benefits</a>
              </li>
              <li className="mb-2">
                <a href="/">Team</a>
              </li>
              <li className="mb-2">
                <a href="/">Careers</a>
              </li>
            </ul>
          </Col>

          <Col xs={6} lg={2} className="mb-2">
            <h3>Follow Us</h3>
            <ul className="list-unstyled">
              <li className="my-3">
                <a href="/">
                  <img src={fb} alt="fb" width="15" height="20" className="me-2"/>
                  Facebook
                </a>
              </li>
              <li className="mb-3">
                <a href="/">
                  <img src={x} alt="X" width="20" height="20" className="me-2"/>
                  Twitter
                </a>
              </li>
              <li className="mb-3">
                <a href="/">
                  <img src={ig} alt="ig" width="20" height="20" className="me-2"/>
                  Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
