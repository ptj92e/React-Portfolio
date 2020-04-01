import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

function Portfolio() {
    return (
        <div className="portfolio">
            <Router>
            <Navbar />
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/contact" component={Contact}/>
                </div>
            <Footer />
            </Router>
        </div>
    );
};

export default Portfolio;