import React from "react";
import Icon from "../../images/icon2.png";
import "../../styles/About.css";
// links for react bootstrap styling
import { Container, Row, Col, Accordion, useAccordionButton, Card } from "react-bootstrap";

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <h2
            type="text"
            style={{ backgroundColor: 'none' }}
            onClick={decoratedOnClick}
        >
            {children}
        </h2>
    );
}

export default function About() {
    return (
        <Container className="aboutContainer">
            <Row>
                <Col lg={4}>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Card>
                            <Card.Header className="accordianImage">
                                <CustomToggle eventKey="0"></CustomToggle><i class="fa-solid fa-window-minimize"></i><i class="fa-regular fa-window-restore"></i><i class="fa-solid fa-xmark"></i>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <img className="aboutImage" src={Icon} alt="me smiling against a yellow background" />
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
                <Col lg={8}>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Card>
                            <Card.Header>
                                <CustomToggle eventKey="0">About Me</CustomToggle><i class="fa-solid fa-xmark"></i>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Hi! My name is Morgan and I'm a Full-Stack Web Dev! I used to spend a lot of time editing Tumblr blog themes but I'd never go any further than that out of fear of breaking something. It feels nice not having to worry about that anymore haha! When I'm not coding I'm either creating art or gaming. I've been drawing for roughly 12 years now, give or take, and I mostly do digital art. Fun fact: I actually drew the image to the left! (And yes, that is me!)</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
}