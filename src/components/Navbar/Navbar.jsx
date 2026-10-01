import "./Navbar.css"; //this Import tells JS that where to import .css from

function Navbar(){
   return(
      <nav>
         Man_j_S_S
         <ul>
            <li><a href="#About_Me">About Me</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Download_Resume">Download Resume(PDF)</a></li>
            <li><a href="#Blogs">Blogs</a></li>
            <li><a href="#Contact_me">Contact Me</a></li>
         </ul>
      </nav>
   );
}

export default Navbar; //this export makes sure that this above function is available for other files in the project folder.