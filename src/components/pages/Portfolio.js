import React from 'react';
import "../../styles/Portfolio.css";
// links for react bootstrap styling
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";

export default function Portfolio() {
    return (
        <div>
            <Container className="aboutContainer">
                <h1>Portfolio</h1>
                <hr></hr>
                <Row>
                    <Col lg={6}>
                        <Card className="portImage">
                            <Card.Img className="image" src="https://i.imgur.com/ornTUNs.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Text className="middle text">
                                    <Button className="text" href="https://mighty-harbor-79876.herokuapp.com/">Puppy Play Date!</Button>
                                    <br></br>
                                    <a href="https://github.com/M-Dickerson/pet-playdate">GitHub <i class="fa-brands fa-square-github"></i></a>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="portImage">
                            <Card.Img className="image" src="https://i.imgur.com/ornTUNs.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className="middle text">Puppy Play Date!</Card.Title>
                                <Card.Text className="middle text">
                                    <Button href="https://github.com/M-Dickerson/pet-playdate">T</Button>
                                </Card.Text>
                                <Card.Text className="middle text">Placeholder text</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="portImage">
                            <Card.Img className="image" src="https://i.imgur.com/ornTUNs.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className="middle text">Puppy Play Date!</Card.Title>
                                <Card.Text className="middle text">
                                    <Button href="https://github.com/M-Dickerson/pet-playdate">T</Button>
                                </Card.Text>
                                <Card.Text className="middle text">Placeholder text</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="portImage">
                            <Card.Img className="image" src="https://i.imgur.com/ornTUNs.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Text className="middle text">
                                    <Button href="https://mighty-harbor-79876.herokuapp.com/">Puppy Play Date!</Button>
                                    <br></br>
                                    <a href="https://github.com/M-Dickerson/pet-playdate">GitHub <i class="fa-brands fa-square-github"></i></a>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="portImage">
                            <Card.Img className="image" src="https://i.imgur.com/ornTUNs.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className="middle text">Puppy Play Date!</Card.Title>
                                <Card.Text className="middle text">
                                    <Button href="https://github.com/M-Dickerson/pet-playdate">T</Button>
                                </Card.Text>
                                <Card.Text className="middle text">Placeholder text</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="portImage">
                            <Card.Img className="image" src="https://i.imgur.com/ornTUNs.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className="middle text">Puppy Play Date!</Card.Title>
                                <Card.Text className="middle text">
                                    <Button href="https://github.com/M-Dickerson/pet-playdate">T</Button>
                                </Card.Text>
                                <Card.Text className="middle text">Placeholder text</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}