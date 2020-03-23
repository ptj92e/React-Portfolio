import React from "react";
import "./Title.css";

function Title() {
    return (
        <div className="container title">
            <h4>Welcome to the portfolio of</h4>
            <h1>Phillip Jones</h1>
            <h4>Full Stack Web Developer</h4>
            <i className="fas fa-chevron-circle-up"></i>
            <p>Scroll up to view more</p>
        </div>
    );
};

export default Title;