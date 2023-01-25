import React from "react";
import "../../styles/Resume.css";
// links for react bootstrap styling
import Container from "react-bootstrap/Container";

export default function Resume() {
    const onButtonClick = () => {

        fetch("Morgan_Dickerson_Resume.pdf").then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Morgan_Dickerson_Resume.pdf";
                alink.click();
            })
        })
    }
    return (
        <Container className="aboutContainer">
            <>
                <center>
                    <h1>Resume</h1>
                    <hr></hr>
                    <h2 className="rText">Download my resume:</h2><button onClick={onButtonClick}>here</button>
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
