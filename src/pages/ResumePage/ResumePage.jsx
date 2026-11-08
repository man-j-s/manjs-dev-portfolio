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
        <h2>{resume.headline.primary}</h2>
        <h2>{resume.basics.location}</h2>
        <a href={resume.basics.profiles.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><SiGithub/> Github</a><br/>
        <a href={resume.basics.profiles.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><SlSocialLinkedin /> LinkedIn </a>
        <a href="/#contact-me">Contact</a>
        <section>
            <h2>Summary</h2>
            <p>{resume.summary}</p>
        </section>
        <section>
        <h2>Experience</h2>
        {resume.work.map((job) => (
            <article key={job.company}>
                <h3>{job.company}</h3>
                <h3>{job.title}</h3>
                <h3>{job.location}</h3>
                <h3>{job.start}</h3> <h3>{job.end ? job.end : 'Present'}</h3>
                <ul>
                    <li key={job.highlights}>Collect $100K+ CAD per month in outstanding debt through outbound calls to debtors</li>
                    <li key={job.highlights}>Lead a team of 10-12 collectors: manage performance, train and onboard new hire</li>
                    <li key={job.highlights}>Design collection strategies based on market conditions to meet collection goals</li>
                    <li key={job.highlights}>Conduct skip tracing from publicly available data, storing results in a reusable format and analyzing the data</li>
                    <li key={job.highlights}>Coordinate with law firms, litigators, and lenders on account recovery</li>
                    <li key={job.highlights}>Prepare and maintain collections reports</li>
                </ul>
            </article>
        ))}
        </section>
        </div>
);
}

export default ResumePage;