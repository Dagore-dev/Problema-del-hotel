
export default function Result ( { output } ) {

  if (output === '') return <p className="result">Esperando input para el problema.</p>;
  
  if (typeof output === "number") return <p className="result">Pueden acomodarse {output} huéspedes.</p>;
  
  return <p className="result">{output}</p>;
}