import React from "react";
import "../styles/Navbar.css";

import { Nav, Navbar } from "react-bootstrap";

export default function Navba({ handlePageChange }) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey="#About">
            <Nav.Item>
              <Nav.Link href="#About" onClick={() => handlePageChange("About")}>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Contact" onClick={() => handlePageChange("Contact")}>Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Portfolio" onClick={() => handlePageChange("Portfolio")}>Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Resume" onClick={() => handlePageChange("Resume")}>Resume</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}