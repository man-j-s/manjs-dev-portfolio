import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import ResumePage from "./pages/ResumePage/ResumePage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App(){
    return(
        <div className="app">
            <ScrollToTop/>
            <Navbar/>
            <main>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/resume" element={<ResumePage />}/>
            </Routes>
            </main>
            <Footer/>
        </div>
    )
}

export default App;
