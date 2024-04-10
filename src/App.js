
import './App.css';
import Home from './components/Home';
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from './components/Team';
import Investors from './components/Investors'
import Publications from './subcomponents/Publications';
import Footer from './components/Footer'
import Updates from './components/Updates';
import Research from './components/Research'
import Facilities from './components/Facilities';
import Contact from './components/Contact';
import Rock from './components/Rock';
import Gas from './components/Gas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Investors" element={<Investors />} />
          <Route path="/Facilities" element={<Facilities />} />
          <Route path="/Publications" element={<Publications />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Updates" element={<Updates />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Research" element={<Research />} />
          <Route path="/Rocket" element={<Rock />} />
          <Route path="/Turbine" element={<Gas />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
