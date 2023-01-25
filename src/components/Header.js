import React, { useState } from "react";
// pages that will contain information
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
// link to navbar
import Navbar from "./Navbar";

export default function Header() {
    const [currentPage, setPage] = useState("About");

    const renderPage = () => {
        if (currentPage === "About") {
            return <About />;
        }
        if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}