import "./Skills.css";

function Skills(){
    return(
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <h3 className="skills-main-heading">Programming Languages & Frameworks</h3>
            <div className="skills-container">
            <div className="skills-group-left">
                <h4>Languages</h4>
                <ul>
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
            <div className="skills-group-right">
                <h4>Tools</h4>
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