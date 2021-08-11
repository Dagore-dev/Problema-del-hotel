import { useState } from 'react';
import './App.css';
import booking from './booking';

function App() {
  const [state, setState] = useState('');
  
  function handleChange (e) {
    setState(e.target.value);
  }
  
  function handleSubmit (e) {
    e.preventDefault();
    booking(state);
  }

  return (
    <form onSubmit={handleSubmit} className="App">

      <label htmlFor="input">Introduzca el input del problema</label>

      <textarea id="input" onChange={handleChange} value={state}></textarea>

      <button>Click me!</button>

    </form>
  );
}

export default App;
