import "./Contact.css";
import { useState } from "react";


function Contact() {
    const [result, setResult] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", "020b1262-a55a-4759-a587-b3198e67feac");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        if (data.success) {
            setResult("Message sent. Thank you!");
            event.target.reset();
        } else {
            setResult(data.message);
        }
    };
    return (
        <section id="contact-me" className="contact">
            <h2>Contact me</h2>
            <div className="contact-layout">
                <aside>
                    <h3>Toronto, ON, Canada</h3>
                </aside>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name" aria-label="name">
                            <input type="text" id="name" placeholder="Your Name" name="name" required />
                        </label>
                        <label htmlFor="email" aria-label="email">
                            <input type="email" id="email" placeholder="Your Email" name="email" required />
                        </label>
                        <label htmlFor="employer-link" aria-label="website link">
                            <input type="url" id="employer-link" placeholder="Your company's website (Optional)" name="website" />
                        </label>
                        <label htmlFor="message" aria-label="message">
                            <textarea id="message" placeholder="Your message" name="message" required></textarea>
                        </label>
                        <button type="submit">Submit</button>
                        <input type="checkbox" name="botcheck" style={{ display: "none" }} />
                    </form>
                    <p role="status">{result}</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;