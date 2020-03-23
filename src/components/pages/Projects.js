import React, { Component } from "react";
import ProjectTitle from "../ProjectTitle/ProjectTitle";
import ProjectCard from "../ProjectCard/ProjectCard";
import data from "../../utils/data.json";
// import Wrapper from "../Wrapper/Wrapper";

class Projects extends Component {
    state = {
        projects: data.projects
    }
    render() {
        return (
            <div>
                <ProjectTitle />
                <div className="container projectContainer">
                    {this.state.projects.map(project => (
                        <ProjectCard
                            title={project.title}
                            technologies={project.technologies}
                            description={project.description}
                            image={project.image}
                            github={project.github}
                            heroku={project.heroku}
                        />
                    ))}
                </div>
            </div>
        );
    }
};

export default Projects;