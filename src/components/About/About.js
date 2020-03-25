import React from "react";
import "./About.css";

function About() {
    return (
        <div className="aboutDiv">
            <h1>About Phillip:</h1>
            <div id="infoDiv">
                <div id="pastDiv">
                    <i className="fas fa-headphones fa-5x"></i>
                    <p>Spicy jalapeno bacon ipsum dolor amet lorem t-bone sausage ex frankfurter ham hock pastrami tongue. Sausage beef deserunt, chuck irure et ribeye tempor qui. Aute consequat et venison buffalo tenderloin. Pork chop mollit chicken, est burgdoggen pancetta jerky excepteur aliqua.</p>
                </div>
                <div id="programmerDiv">
                    <i className="fas fa-laptop-code fa-5x"></i>
                    <p>Spicy jalapeno bacon ipsum dolor amet lorem t-bone sausage ex frankfurter ham hock pastrami tongue. Sausage beef deserunt, chuck irure et ribeye tempor qui. Aute consequat et venison buffalo tenderloin. Pork chop mollit chicken, est burgdoggen pancetta jerky excepteur aliqua.</p>
                </div>
                <div id="funDiv">
                    <i className="fas fa-dice-d20 fa-5x"></i>
                    <p>Spicy jalapeno bacon ipsum dolor amet lorem t-bone sausage ex frankfurter ham hock pastrami tongue. Sausage beef deserunt, chuck irure et ribeye tempor qui. Aute consequat et venison buffalo tenderloin. Pork chop mollit chicken, est burgdoggen pancetta jerky excepteur aliqua.</p>
                </div>
            </div>
        </div>
    );
};

export default About;