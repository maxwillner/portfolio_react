import React, { Component } from "react";
import About from "../About";
import Portfolio from "../Portfolio";
import Resume from "../Resume";
import ContactForm from "../Contact";

function Project(props) {
    const currentsection = {
        name: "contact"
    };

    return (
        <section>
            <h1>{currentsection.name}</h1>
            <ContactForm></ContactForm>
        </section>
    )
}

export default Project;