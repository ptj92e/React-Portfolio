import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
    return (
        <div className={props.className} id={props.id}>
            <img src={props.image} alt={props.title} />
            <div>
                <h1>{props.title}</h1>
                <h3>Technologies:</h3>
                <p>{props.technologies}</p>
                <h3>Description:</h3>
                <p>{props.description}</p>
                <h3>Links:</h3>
                <p>GitHub: <a href={props.github}>{props.title}</a></p>
                <p>GitHub: <a href={props.heroku}>{props.title}</a></p>
            </div>
        </div>
    )
}

export default ProjectCard;