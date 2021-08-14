
export default function Result ( { output } ) {

  return (
    output === ''
      ? <p>Esperando input para el problema.</p>
      : <p>Pueden acomodarse {output.length} huéspedes.</p>
  )
}