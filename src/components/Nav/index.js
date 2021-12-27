import React from "react";

function Nav() {

    const sections = [
        {name: "about me"},
        {name: "portfolio"},
        {name: "resume"},
        {name: "contact"}
      ];
    
    function sectionSelected(name) {
        console.log(`${name} clicked`)
    }

  return (
        <header>
            <nav> 
                <ul className="flex-row">
                    {sections.map((section) => (
                    <li className="mx-2"
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