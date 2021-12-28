import './App.css';
import {Routes, Route} from 'react-router-dom';
import Kit1 from './pages/kit1/Kit1.js';
import Kit2 from './pages/kit2/Kit2.js';
import Kit3 from './pages/kit3/Kit3.js';
import Kit4 from './pages/kit4/Kit4.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Kit1/>}/>
        <Route exact path='/kit2' element={<Kit2/>}/>
        <Route exact path='/kit3' element={<Kit3/>}/>
        <Route exact path='/kit4' element={<Kit4/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
