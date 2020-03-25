import React, { Component } from "react";
import ProjectTitle from "../ProjectTitle/ProjectTitle";
import ProjectCard from "../ProjectCard/ProjectCard";
import data from "../../utils/data.json";
import Footer from "../Footer/Footer";

class Projects extends Component {
    state = {
        projects: data.projects
    }
    render() {
        return (
            <div>
                <ProjectTitle />
                <div className="container projectContainer">
                    {this.state.projects.map(project => 
                        (project.id % 2 === 0) ? (
                            <ProjectCard
                                className="rightCard"
                                key={project.title}
                                id={project.id}
                                title={project.title}
                                technologies={project.technologies}
                                description={project.description}
                                image={project.image}
                                github={project.github}
                                heroku={project.heroku}
                            />
                        ) : (
                            <ProjectCard
                                className="leftCard"
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
                <Footer />
            </div>
        );
    }
};

export default Projects;