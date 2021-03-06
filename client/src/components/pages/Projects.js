import React, { Component } from "react";
import ProjectTitle from "../ProjectTitle/ProjectTitle";
import ProjectCard from "../ProjectCard/ProjectCard";
import data from "../../utils/data.json";

class Projects extends Component {
    state = {
        projects: data.projects
    }
    render() {
        return (
            <div>
                <ProjectTitle />
                <div className="projectContainer">
                    {this.state.projects.map(project => 
                        (
                            <ProjectCard
                                className="projectCard"
                                key={project.title}
                                id={project.id}
                                title={project.title}
                                technologies={project.technologies}
                                description={project.description}
                                image={project.image}
                                github={project.github}
                                heroku={project.heroku}
                            />
                        )
                    )}
                </div>
            </div>
        );
    }
};

export default Projects;