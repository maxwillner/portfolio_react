import React from "react";
import headshot from "../../assets/Headshot.jpg";

function About() {
    return (
        <section>
            <div>
                <h1 id="about">About Me</h1>
                <img src={headshot} alt="Max Willner" className="img-thumbnail mx-1"></img>
                <p>My name is Max Willner and I am a new coder! I have experience with numerous languages including HTML, CSS, and Javascript, and am versed in full-stack development. </p> 
            </div>
        </section>
    );
}

export default About;