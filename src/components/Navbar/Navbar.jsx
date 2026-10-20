import "./Navbar.css"; //this Import tells JS that where to import .css from
import { useEffect, useState } from "react";

function Navbar(){
   const [isOpen, setIsOpen] = useState(false)
   const[scrolled, setScrolled] = useState(false);
   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   },[]);
   return(
      <nav className={scrolled ? "navbar scrolled" : "navbar"}>
         <div className="navbar-top">
            <a href="#hero" title="Home">Man_J_S_S</a>
      <button className="hamburger" aria-label="Toggle menu" onClick = {() => setIsOpen(!isOpen)}>☰</button>
         </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#download-resume">Download Resume(PDF)</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#contact-me">Contact Me</a></li>
         </ul>
      </nav>
   );
}

export default Navbar; //this export makes sure that this above function is available for other files in the project folder.