import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import { Skills } from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
