import React from "react";
import "./SocialMedia.css";

function SocialMedia() {
    return (
        <div id="socialDiv">
            <h1>Let's Get In Touch!</h1>
            <div id="iconsDiv">
                <a href="https://www.facebook.com/TrombonePhil92" target="_blank" className="fab fa-facebook fa-2x"></a>
                <a href="https://twitter.com/TrombonePhil92" target="_blank" className="fab fa-twitter fa-2x"></a>
                <a href="https://www.linkedin.com/in/p-jones92" target="_blank" className="fab fa-linkedin fa-2x"></a>
                <a href="https://github.com/ptj92e" target="_blank" className="fab fa-github fa-2x"></a>
                <a href="https://drive.google.com/open?id=1w986VtOVbPJq7OfwunDdB7Phe3j6Xeg22XjMgksMvZw" target="_blank" className="fas fa-file-word fa-2x"></a>
            </div>
        </div>
    )
}
export default SocialMedia;