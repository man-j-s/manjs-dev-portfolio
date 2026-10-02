import "./Navbar.css"; //this Import tells JS that where to import .css from

function Navbar(){
   return(
      <nav className="navbar">
         Man_j_S_S
         <ul>
            <li><a href="#hero">Home</a></li> {/*This is hero section*/}
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