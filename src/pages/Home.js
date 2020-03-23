import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Title from "../components/Title/Title";
import About from "../components/About/About";

function Home() {
    return(
        <div>
            <Navbar />
            <Title />
            <About />
        </div>
    );
};

export default Home;