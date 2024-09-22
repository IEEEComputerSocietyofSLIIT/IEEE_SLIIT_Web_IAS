import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Team/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
