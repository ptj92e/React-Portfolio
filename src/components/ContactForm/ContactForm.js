import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
    const [formObject, setFormObject] = useState({
        fullName: "",
        email: "",
        message: ""
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value});
        console.log(formObject);
    };

    return (
        <form id="contactForm">
            <label htmlFor="fullName">Full Name:</label><br />
            <input type="text" onChange={handleInputChange} name="fullName"></input><br />
            <label htmlFor="email">E-Mail:</label><br />
            <input type="text" onChange={handleInputChange} name="email"></input><br />
            <label htmlFor="message">Message:</label><br />
            <textarea type="text" onChange={handleInputChange} name="message"></textarea><br />
            <button id="submitForm">Submit</button>
        </form>
    )
}
export default ContactForm;