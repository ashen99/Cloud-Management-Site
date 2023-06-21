import "./App.css"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Support from "./components/Support";
import Platform from "./components/Platform";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <About/>
            <Support/>
            <Platform/>
        </div>
    );
}

export default App;
