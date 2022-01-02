import './App.css';
import {Routes, Route} from 'react-router-dom';
import Kit1 from './pages/kit1/Kit1.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Kit1/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
