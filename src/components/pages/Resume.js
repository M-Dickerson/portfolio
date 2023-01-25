import React from "react";
import Container from "react-bootstrap/Container";

export default function Resume() {
    const onButtonClick = () => {

        fetch('Morgan_Dickerson_Resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Morgan_Dickerson_Resume.pdf';
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
                <h3>Download my resume:</h3>
                <button onClick={onButtonClick}>
                    here
                </button>
            </center>
        </>
        </Container>
    );
};
