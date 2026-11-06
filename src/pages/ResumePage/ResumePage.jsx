import resume from "../../data/resume.json";

<h1>{resume.basics.name}</h1>

{resume.work.map((job) => (
    <article key={job.company}>
        <h3>{job.title}</h3>
    </article>
))}

function ResumePage(){
    return(
        <Resume />
    );
}

export default ResumePage;