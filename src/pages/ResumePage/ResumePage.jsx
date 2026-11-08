import resume from "../../data/resume.json";
import Resume from "../../components/Resume/Resume";
import "./ResumePage.css";
import { SiGithub } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

function ResumePage(){
    return(
        <div className="resume-page">
        <Resume />
        <h1>{resume.basics.name}</h1>
        <p>{resume.headline.primary}</p>
        <p>{resume.basics.location}</p>
        <div className="socialLinks">
            <a href={resume.basics.profiles.github} target="_blank" rel="noopener noreferrer"><SiGithub/> Github</a>
            <a href={resume.basics.profiles.linkedin} target="_blank" rel="noopener noreferrer"><SlSocialLinkedin /> LinkedIn </a>
            <a href="/#contact-me">Contact</a>
        </div>
        <section>
            <h2>Summary</h2>
            <p>{resume.summary}</p>
        </section>
        <section>
        <h2>Experience</h2>
        {resume.work.map((job) => (
            <article key={job.company}>
                <p>{job.company}</p>
                <h3>{job.title}</h3>
                <p>{job.location}</p>
                <p>{job.start} - {job.end ? job.end : 'Present'}</p>
                <ul>
                {job.highlights.map((item) => (
                        <li key={item}>{item}</li>
                ))}
                </ul>    
            </article>           
        ))}        
        </section>
        <section>
            <h2>Education</h2>
        {resume.education.map((edu) => (
            <article key={edu.institution}>
                <p>{edu.institution}</p>
                <p>{edu.degree}</p>
                <p>{edu.field}</p>
            </article>
        ))}    
        </section>
        </div>
);
}

export default ResumePage;