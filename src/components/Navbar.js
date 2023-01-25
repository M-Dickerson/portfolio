import React from "react";
import "../styles/Navbar.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navba({ handlePageChange }) {
    return (
        <Nav className="navbar">
            <Nav defaultActiveKey="#About" as="ul">
                <Navbar.Brand className="justify-content-start">
                    <Navbar.Text className="headerName">Morgan D</Navbar.Text>
                </Navbar.Brand>

                <Nav.Item as="li">
                    <Nav.Link href="#About" onClick={() => handlePageChange("About")}>About</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="#Portfolio" onClick={() => handlePageChange("Portfolio")}>Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="#Contact" onClick={() => handlePageChange("Contact")}>Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="#Resume" onClick={() => handlePageChange("Resume")}>Resume</Nav.Link>
                </Nav.Item>
            </Nav>
        </Nav>
    );
}