import React from "react";
import "../../styles/Resume.css";
import myResume from "../../MDickerson_resume.docx.pdf"
// links for react bootstrap styling
import Container from "react-bootstrap/Container";

export default function Resume() {
    return (
        <Container className="aboutContainer">
            <>
                <center>
                    <h1>Resume</h1>
                    <hr></hr>
                    <h2 className="rText">Click <a className="rButton" href={myResume} target="_blank"
                        rel="noreferrer">
                        here
                    </a> to view my resume!</h2>
                    <br></br>
                    <br></br>
                    <h3 className="rText">Front End Proficiencies</h3>
                    <p className="rText">HTML, CSS, JavaScript, jQuery, responsive design, React, Bootstrap, Materalize</p>
                    <br></br>
                    <h3 className="rText">Back End Proficiencies</h3>
                    <p className="rText">APIs, Node, Express, MySQL/Sequelize, MongoDB/Mongoose, REST, GraphQL</p>
                </center>
            </>
        </Container>
    );
};
