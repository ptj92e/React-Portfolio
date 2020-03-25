import React, { Component } from "react";
import { thisExpression } from "@babel/types";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

class Portfolio extends Component {
    state= {
        currentPage: "Home"
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    renderPage = () => {
        if (this.state.currentPage === "Home") {
            return <Home />;
        } else if (this.state.currentPage === "Projects") {
            return <Projects />;
        } else if (this.state.currentPage === "Contact") {
            return <Contact />
        }
    };
    render() {
        return (
            <div className="portfolio">
                <Navbar currentPage={this.state.currentPage} handlePageChange={this.handlePageChange} />
                {this.renderPage()}
                <Footer />
            </div>
        );
    };
};
export default Portfolio;