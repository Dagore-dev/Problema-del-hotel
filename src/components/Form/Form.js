import { useState } from 'react';
import booking from 'booking';

import './styles.css'

export default function Form () {
  const [state, setState] = useState('');
  
  function handleChange (e) {
    setState(e.target.value);
  }
  
  function handleSubmit (e) {
    e.preventDefault();
    booking(state);
  }

  return (
    <form onSubmit={handleSubmit} className="form">

      <label htmlFor="input" className="form__label">Introduzca el input del problema:</label>

      <textarea id="input" className="form__textarea" onChange={handleChange} value={state}></textarea>

      <button className="form__button">Click me!</button>

    </form>
  )
}