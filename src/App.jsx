
import About from './components/About';
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className='dark:bg-black '>
    <Header />

    <Router>
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />

    {/* <Projects />
    <Contact /> */}
    </Routes>

    </Router>
    <Footer/>
    </div>
  );
}

export default App;
