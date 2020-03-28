import React, { Component } from "react";
import "./Canvas.css";

class Canvas extends Component {
    componentDidMount() {
        let c = document.getElementById("canvas");
        let ctx = c.getContext("2d");
        c.height = window.innerHeight;
        c.width = window.innerWidth;
        let binary = "01";
        binary = binary.split("");
        let fontSize = 20;
        let columns = c.width/fontSize;
        let drops = [];
        for (let x = 0; x < columns; x++)
        drops[x] = 1;
        function draw() {
            ctx.fillStyle = "rgba(37, 39, 77, 0.2)";
            ctx.fillRect(0, 0, c.width, c.height);
            ctx.fillStyle = "#aaabb8";
            ctx.font = fontSize + "px Arial";
            for (let i = 0; i < drops.length; i++) {
                let text = 0;
                if (i % 2 === 0) {
                    text = binary[0];
                } else {
                    text = binary[1]
                }
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > c.height && Math.random() > 0.975)
                drops[i] = 0;
                drops[i]++;
            }
        }
        setInterval(draw, 100);
    }
    render() {
        return (
            <div>
                <canvas id="canvas" />
            </div>
        )
    }
}
export default Canvas;