import React from "react";

function Nav() {

    const sections = [
        {name: "portfolio"},
        {name: "contact"},
        {name: "resume"},
    ];
    
    function sectionSelected(name) {
        console.log(`${name} clicked`)
    }

  return (
        <header>
            <nav> 
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">About me</a>
                    </li>
                     <li>
                        <span>Contact</span>
                    </li>
                    {sections.map((section) => (
                    <li className="mx-1"
                    key={section.name}>
                        <span onClick={() => sectionSelected(section.name)} > 
                        {section.name}
                        </span>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;