import "./Skills.css";

function Skills(){
    return(
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="skills-container">
            <div>
                <h3>Programming Languages & Frameworks</h3>
                <ul>
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
            <div>
                <h3>Tools</h3>
                <ul>
                    <li>Github</li>
                    <li>POSTMAN</li>
                    <li>VS Code</li>
                    <li>Slack</li>
                </ul>
            </div>
            </div>         
        </section>
    );
}

export default Skills;