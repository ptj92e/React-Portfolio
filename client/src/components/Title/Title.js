import React from "react";
import "./Title.css";

function Title() {
    return (
        <div className="title">
            <div className="textDiv">
                <h4>Welcome to the portfolio of</h4>
                <h1>Phillip Jones</h1>
                <h4>Full Stack Web Developer</h4>
            </div>
            <div className="scrollDiv">
                <i className="fas fa-chevron-circle-up fa-2x"></i>
                <p>Scroll up to view more</p>
            </div>
        </div>
    );
};

export default Title;