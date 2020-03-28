import React from "react";
import "./About.css";

function About() {
    return (
        <div className="aboutDiv">
            <h1>About Me:</h1>
            <div id="infoDiv">
                <div id="pastDiv">
                    <i className="fas fa-headphones fa-5x"></i>
                    <p>I am a full stack web developer boasting a background in music education. Music has taught me so many skills necessary for a career in web development. A meticulous attention to detail and the ability to creatively solve problems are just some of the skills I have developed through music. </p>
                </div>
                <div id="programmerDiv">
                    <i className="fas fa-laptop-code fa-5x"></i>
                    <p>I received a full-stack certificate from the Vanderbilt University Coding Bootcamp in Nashville, TN. Some of the areas we studied were HTML, CSS, JavaScript, ES6, Node, Express, mySQL, Mongoose, and React.js just to name a few. If you would like to see more, check out my projects page to see some of the work I have done.</p>
                </div>
                <div id="funDiv">
                    <i className="fas fa-dice-d20 fa-5x"></i>
                    <p>When I a not coding, I enjoy spending time taking care of my mind and body. I enjoy playing video games, board games, and <b>especially</b> Dungeons and Dragons. I also enjoy lifting weights as a way to relieve stress and to take care of myself. I also like to keep my coding skills sharp by always looking for new things to learn.</p>
                </div>
            </div>
        </div>
    );
};

export default About;