import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Navbar />
      <Home />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
