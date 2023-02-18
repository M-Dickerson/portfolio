import React from 'react';
import "../../styles/Portfolio.css";
// links for react bootstrap styling
import { Row, Col, Card, Button, Container } from "react-bootstrap";

export default function Portfolio() {
    return (
        <div>
            <Container className="aboutContainer">
                <h1>Portfolio</h1>
                <hr></hr>
                <Row>
                    <Col lg={6}>
                        <Card className="portImage">
                            <Card.Img className="image" src="https://i.imgur.com/r4XKrnY.jpg" alt="a book on a white bedsheet next to coffee and a pair of glasses" />
                            <Card.ImgOverlay>
                                <Card.Title className="middle text">NY Times Calendar</Card.Title>
                                <Card.Text className="middle text">An application which allows users to see the best-selling NY Times novels of any date</Card.Text>
                                <Card.Text className="text middle">
                                    <Button className="button" href="https://github.com/M-Dickerson/nytimes-googlecalendar">GitHub</Button>
                                    <Button className="button" href="https://alexhannani.github.io/nytimes-googlecalendar/">Deployed App</Button>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="portImage">
                            <Card.Img className="image" src="https://i.imgur.com/qz15czh.jpg" alt="a phone with the definition of design displayed on the screen" />
                            <Card.ImgOverlay>
                            <Card.Title className="middle text">My First Portfolio</Card.Title>
                                <Card.Text className="middle text">Javascript</Card.Text>
                                <Card.Text className="text middle">
                                    <Button className="button" href="https://github.com/M-Dickerson/my-portfolio">GitHub</Button>
                                    <Button className="button" href="https://m-dickerson.github.io/my-portfolio/">Deployed App</Button>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="portImage">
                            <Card.Img className="image" src="https://i.imgur.com/vAka5lq.jpg" alt="a border collie running with a ball in its mouth" />
                            <Card.ImgOverlay>
                                <Card.Title className="middle text">Pet Play Date!</Card.Title>
                                <Card.Text className="middle text">A full-stack application which allows users to keep track of their animals upcoming playdates</Card.Text>
                                <Card.Text className="text middle">
                                    <Button className="button" href="https://github.com/M-Dickerson/pet-playdate">GitHub</Button>
                                    <Button className="button" href="https://mighty-harbor-79876.herokuapp.com/">Deployed App</Button>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="portImage">
                            <Card.Img className="image" src="https://i.imgur.com/z4jfvR8.jpg" alt="a purple and orange gradient starry sky" />
                            <Card.ImgOverlay>
                            <Card.Title className="middle text">Journey Journals</Card.Title>
                                <Card.Text className="middle text">A full-stack application that allows travelers to post about and share their adventures with others</Card.Text>
                                <Card.Text className="text middle">
                                    <Button className="button" href="https://github.com/M-Dickerson/journey-journals">GitHub</Button>
                                    <Button className="button" href="https://hidden-reef-01487.herokuapp.com/">Deployed App</Button>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}