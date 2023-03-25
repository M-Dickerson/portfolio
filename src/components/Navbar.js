import React from "react";
import "../styles/Navbar.css";

import { Nav } from "react-bootstrap";

export default function Navbar ({handlePageChange}) {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
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
    </>
  );
}