import "./Projects.css";
import { SiPython, SiHtml5, SiCss, SiGithub, SiPostman, SiPostgresql } from "react-icons/si";

function Projects(){
    return(
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
            <article>
                <h3>Skip Analysis</h3>
                <img src="https://via.placeholder.com/400x200" alt="Skip Analysis project thumbnail" />
                <p>This tool addresses a common challenge in debt collections - locating hard-to-find debtors efficiently. It helps track and trace debtors, collect and store their publicly available information in an organized database for future reference, and generate analytical reports to support informed decision-making.
                </p>
                <h4>Tech stack</h4>
                <ul>
                    <li><SiPython /> Python</li>
                    <li><SiHtml5 /> HTML</li>
                    <li><SiCss /> CSS</li>
                    <li><SiPostgresql /> PostGresSQL</li>
                    <li><SiPostman /> Postman</li>
                </ul>
                <a href="https://github.com/man-j-s/skiptracer" target="_blank" rel="noopener noreferrer"><SiGithub /> Project Code</a>
                <span> In progress</span>
            </article>
            </div>
        </section>
    );
}

export default Projects;