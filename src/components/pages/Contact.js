import React, { useState } from "react";
import "../../styles/Contact.css";
// links for react bootstrap styling
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

// link to herotofu for form submission
const FORM_ENDPOINT = "https://public.herotofu.com/v1/c99230a0-9cdd-11ed-82c7-3d7607318e65";

// displays a confirmation when the form is submitted
const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </>
        );
    }
    // form code
    return (
        <Container className="aboutContainer">
            <h1>Contact Me</h1>
            <hr></hr>
            <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
            >
                <div className="mb-3 pt-0">
                    <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        className="form"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="form"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <textarea
                        placeholder="Your message"
                        name="message"
                        className="form"
                        required
                    />
                </div>
                <div className="mb-3 pt-0 fButton">
                    <Button className="button" type="submit">Send a message</Button>
                </div>
            </form>
        </Container>
    );
};

export default ContactForm;