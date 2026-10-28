import "./Contact.css";

function Contact(){
    return(
        <section id="contact-me" className="contact">
            <h2>Contact me</h2>
            <form>
                <label htmlFor="name">
                    <input type="text" id="name" placeholder="Your Name"/>
                </label>
                <label htmlFor="email">
                    <input type="email" id="email" placeholder="Email pls"/>
                </label>
                <label htmlFor="employer-link">
                    <input type="url" id="employer-link" placeholder="Your company's website(Optional)"/>
                </label>
                <label htmlFor="message">
                    <textarea id="message" placeholder="Your message"></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;