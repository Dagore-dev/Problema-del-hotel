import { useState } from 'react';

import './styles.css'

export default function Form ( { booking, setOutput } ) {
  const [state, setState] = useState('');
  
  function handleChange (e) {
    setState(e.target.value);
  }
  
  function handleSubmit (e) {
    e.preventDefault();
    setOutput( booking(state) );
    setState('');
  }

  return (
    <form onSubmit={handleSubmit} className="form">

      <label htmlFor="input" className="form__label">Introduzca el input del problema:</label>

      <textarea id="input" className="form__textarea" onChange={handleChange} value={state}></textarea>

      <button className="form__button">Click me!</button>

    </form>
  )
}