import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Dropdown from './components/dropdown/dropdown';
import Navigation from './components/nav/nav';
import Kit1 from './pages/kit1/Kit1.js';


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <div className="App">
      <Dropdown toggle={toggle}/>
      <Navigation isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route exact path='/' element={<Kit1/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
