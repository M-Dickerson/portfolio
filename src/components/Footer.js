import React from "react";
import "../styles/Footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/M-Dickerson" target="blank"><i class="fa-brands fa-square-github"></i></a>
            <a href="https://www.linkedin.com/in/morgan-dickerson-512930260/" target='blank'><i class="fa-brands fa-linkedin"></i></a>
            <a href="mailto:dickerson.morgan@outlook.com"><i class="fa-solid fa-envelope"></i></a>
        </div>
    );
}