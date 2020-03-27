import React, { Component } from "react";
import "./Canvas.css";

class Canvas extends Component {
    componentDidMount() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        window.onload = () => {
            console.log("Canvas Loaded");
            ctx.beginPath();
            ctx.rect(0, 0, 1500, 1000);
            ctx.fillStyle = "#25274d";
            ctx.fill();
        }
    }
    render() {
        return (
            <div>
                <canvas id="canvas" width={1500} height={1500} />
            </div>
        )
    }
}
export default Canvas;