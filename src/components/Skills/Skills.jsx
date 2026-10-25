import "./Skills.css";
import { SiPython, SiJavascript, SiReact, SiHtml5, SiCss, SiGithub, SiPostman } from "react-icons/si";
import { FaSlack } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";

function Skills(){
    return(
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <h3 className="skills-main-heading">Programming Languages & Frameworks</h3>
            <div className="skills-container">
            <div className="skills-group-left">
                <h4>Languages</h4>
                <ul>
                    <li><SiPython />Python</li>
                    <li><SiJavascript />Javascript</li>
                    <li><SiReact />React</li>
                    <li><SiHtml5 />HTML</li>
                    <li><SiCss />CSS</li>
                </ul>
            </div>
            <div className="skills-group-right">
                <h4>Tools</h4>
                <ul>
                    <li><SiGithub />Github</li>
                    <li><SiPostman />POSTMAN</li>
                    <li><VscVscodeInsiders />VS Code</li>
                    <li><FaSlack />Slack</li>
                </ul>
            </div>
            </div>         
        </section>
    );
}

export default Skills;