import React from "react";
import Icon from "../../images/icon2.png";
import "../../styles/About.css";
// links for react bootstrap styling
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
    return (
        <Container className="aboutContainer">
            <Row>
                <Col lg={4}>
                    <img className="aboutImage" src={Icon} alt="me smiling against a yellow background" />
                </Col>
                <Col lg={8}>
                    <h1>About Me</h1>
                    <hr></hr>
                    <p>Hi! My name is Morgan Dickerson and I'm a Full-Stack Web Dev! Designing and editing web pages is my passion. Editing tumblr themes and twitter themes (when they still existed) is actually how I first got into coding! When I'm not doing that I'm creating art or gaming. I've been drawing for roughly 12 years now, give or take, and I don't plan on slowing down with that just cause I learned how to code! (I actually drew the image off to the right!)</p>
                    <p>My coding knowledge was very limited before the LPN Coding Bootcamp but thanks to it I'm now all the better!</p>
                </Col>
            </Row>
        </Container>
    );
}