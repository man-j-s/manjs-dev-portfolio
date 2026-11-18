import "./Hero.css";

function Hero() {
    return (
        <section className="hero" id="hero">
            <h1>Hi, I’m Manj, but you can call me Mj</h1>
            <h2>Software Developer</h2>
            <p>I turn problems I’ve faced at work into working software. Five years in financial services, now building backend tools.</p>
            <a href="#projects">Check my work</a>
            <a href="https://github.com/man-j-s" target="_blank" rel="noopener noreferrer">Check my GitHub</a>
            <div className="about-me">
                <h2>About Me</h2>

                <p>I’m curious by nature. I see technology everywhere, and I often think, “I would have built this differently.” At some point I decided to stop wondering and learn to build it myself. I taught myself Python, SQL and JavaScript, and I started building real things.</p>

                <p>For five years I’ve worked in debt collections, and since September 2021 I’ve led a team of 10-12 collectors. One task eats hours of my day and my team’s: skip tracing, which means finding information about debtors from public sources on the internet. To solve that, I’m building a tool. Skiptracer is a FastAPI backend where collectors can search public sources and keep the results. So far it has JWT login, protected search endpoints, and PostgreSQL storage. I’m now adding Google search, email checks, and confidence scoring. It’s still in progress, but you can see the current version on GitHub. <a href="https://github.com/man-j-s/skiptracer" target="_blank" rel="noopener noreferrer">Check the Skiptracer project</a></p>

                <p>I’m looking for my first backend developer role in Toronto, and I’m open to relocation and US remote work. Longer term, I want to grow into machine learning and AI. If you have feedback or ideas on my work, I’d like to hear them.<a href="#contact-me">Get in touch</a></p>
                <a href="/ManJ_S_Resume.pdf" download="ManJ_S_Resume.pdf">Download Resume</a>
            </div>
        </section>
    );
}

export default Hero;

{/* <h2>From the world of Finance, transition to the world of Tech, driven by curiosity</h2> */ }

// Hi, I’m Manj, but you can call me Mj.
// Backend Developer
// I turn problems I’ve faced at work into working software. Five years in financial services, now building backend tools.

// About Me

// I’m curious by nature. I see technology everywhere, and I often think, “I would have built this differently.” At some point I decided to stop wondering and learn to build it myself. I taught myself Python, SQL and JavaScript, and I started building real things.

// For five years I’ve worked in debt collections, and since September 2021 I’ve led a team of 10-12 collectors. One task eats hours of my day and my team’s: skip tracing, which means finding information about debtors from public sources on the internet. To solve that, I’m building a tool. Skiptracer is a FastAPI backend where collectors can search public sources and keep the results. So far it has JWT login, protected search endpoints, and PostgreSQL storage. I’m now adding Google search, email checks, and confidence scoring. It’s still in progress, but you can see the current version on GitHub. (link: See the Skiptracer project, pointing to github.com/man-j-s/skiptracer)

// I’m looking for my first backend developer role in Toronto, and I’m open to relocation and US remote work. Longer term, I want to grow into machine learning and AI. If you have feedback or ideas on my work, I’d like to hear them. (link: Get in touch, pointing to #contact-me)