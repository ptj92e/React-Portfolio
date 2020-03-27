import React from "react";
import "./SocialMedia.css";

function SocialMedia() {
    return (
        <div id="socialDiv">
            <h1>Social Media</h1>
            <div id="iconsDiv">
                <a href="https://www.facebook.com/TrombonePhil92" target="_blank" className="fab fa-facebook fa-2x"></a>
                <a href="https://twitter.com/TrombonePhil92" target="_blank" className="fab fa-twitter fa-2x"></a>
                <a href="https://www.linkedin.com/in/p-jones92" target="_blank" className="fab fa-linkedin fa-2x"></a>
                <a href="https://github.com/ptj92e" target="_blank" className="fab fa-github fa-2x"></a>
            </div>
        </div>
    )
}
export default SocialMedia;