import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
    return (
        <div className={props.className} id={props.id}>
            <img src={props.image} alt={props.title} />
            <div id="projectText">
                <h1>{props.title}</h1>
                <div id="linkDiv">
                    <a href={props.github}>GitHub</a>
                    <a href={props.heroku}>Heroku</a>
                </div>
                <h3>Technologies:</h3>
                <p>{props.technologies}</p>
                <h3>Description:</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;