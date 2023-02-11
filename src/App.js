import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Calculator from './components/Calculator';

function App() {
  const [showCalculator,setShowCalculator]=useState(false)
  return (
    <div className="App">
     {/* <button className='btn btn-secondary mt-5' onClick={()=>setShowCalculator(true)}>
      Show Calculator
     </button> */}
     {/* {showCalculator &&  */}
     <Calculator/>
    </div>
  );
}

export default App;
