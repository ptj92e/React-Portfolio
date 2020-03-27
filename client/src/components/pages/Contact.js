import React from "react";
import ContactTitle from "../ContactTitle/ContactTitle";
import SocialMedia from "../SocialMedia/SocialMedia";
import ContactForm from "../ContactForm/ContactForm";

function Contact(props) {
    return (
        <div>
            <ContactTitle />
            <ContactForm />
            <SocialMedia />
        </div>
    );
};

export default Contact;