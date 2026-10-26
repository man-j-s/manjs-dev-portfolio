import "./Footer.css"
import { SiGithub } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

function Footer(){
    return(
        <footer className="footer">
            <p>&copy; 2026 ManJ Singh. All rights reserved.</p>
            <ul className="footbar">
                <li><a href="https://www.linkedin.com/in/man-j-s/"><SlSocialLinkedin /> LinkedIn</a></li>
                <li><a href="https://github.com/man-j-s/"><SiGithub /> Github</a></li>
            </ul>
        </footer>
    );
}

export default Footer;