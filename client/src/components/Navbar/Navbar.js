import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <a className="navbar-brand" href="#">Phillip Jones</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i id="hamburger" className="fas fa-bars fa-lg"></i>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><Link to="/">Home</Link><span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><Link to="/projects">Projects</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><Link to="/contact">Contact</Link></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;