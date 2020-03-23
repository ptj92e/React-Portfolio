import React from "react";
import "./Navbar.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky">
            <a className="navbar-brand" href="#">Phillip Jones</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a onClick={() => props.handlePageChange("Home")} className={props.currentPage === "Home" ? "nav-link active" : "nav-link"} href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => props.handlePageChange("Projects")}  className={props.currentPage === "Projects" ? "nav-link active" : "nav-link"} href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => props.handlePageChange("Contact")}className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"} href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;