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
                            <Card.Img className="image" src="https://i.imgur.com/Go0ET3i.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className="middle text">NY Times Calendar</Card.Title>
                                <Card.Text className="middle text">Javascript</Card.Text>
                                <Card.Text className="text middle">
                                    <Button className="button" href="https://github.com/M-Dickerson/nytimes-googlecalendar">GitHub</Button>
                                    <Button className="button" href="https://alexhannani.github.io/nytimes-googlecalendar/">Deployed App</Button>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="portImage">
                            <Card.Img className="image" src="https://i.imgur.com/VQekBIJ.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                            <Card.Title className="middle text">My First Portfolio</Card.Title>
                                <Card.Text className="middle text">Javascript</Card.Text>
                                <Card.Text className="text middle">
                                    <Button className="button" href="https://github.com/M-Dickerson/my-portfolio">GitHub</Button>
                                    <Button className="button" href="https://m-dickerson.github.io/my-portfolio/">Deployed App</Button>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="portImage">
                            <Card.Img className="image" src="https://i.imgur.com/VQekBIJ.jpg" alt="Card image" />
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
                                <Card.Title className="middle text">Puppy Play Date!</Card.Title>
                                <Card.Text className="middle text">Node and Express</Card.Text>
                                <Card.Text className="text middle">
                                    <Button className="button" href="https://github.com/M-Dickerson/pet-playdate">GitHub</Button>
                                    <Button className="button" href="https://mighty-harbor-79876.herokuapp.com/">Deployed App</Button>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="portImage">
                            <Card.Img className="image" src="https://i.imgur.com/ornTUNs.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className="middle text">Puppy Play Date!</Card.Title>
                                <Card.Text className="middle text">
                                    <Button className="button" href="https://github.com/M-Dickerson/pet-playdate">T</Button>
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