
import './styles.css';

export default function Constraints () {

  return (
    <div className="constraints">
      <h2>Input</h2>

      <p>
        La primera línea de entrada contiene dos números enteros N y K (1 &#8805; K &#60; N  	&#8804; 100000), siendo N el número de huéspedes potenciales y K el número de camas. Luego siguen N líneas, cada una con dos números enteros xi e yi, lo que significa que el huésped i quiere llegar a la hora xi y salir a la hora yi. Esto significa que dos huéspedes i y j, donde xi = yj, pueden usar la misma cama, ya que un invitado se va al  tiempo que llega el otro. Puede suponer que 0 &#8804; xi &#60; yi &#8804; 24.
      </p>

      <p>
        Para que el programa sepa que no tiene más entradas, ingrese -1.
      </p>

      <table className="constraints__table">
        
        <thead>
          <tr>
            <th>Ejemplo</th>
            <th>Input</th>
            <th>Output</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Ejemplo 1</td>
            <td>
              <pre>
                3 1<br />
                1 2<br />
                2 3<br />
                2 3<br />
                -1(finaliza el input)
              </pre>
            </td>
            <td>2</td>
          </tr>

          <tr>
            <td>Ejemplo 2</td>
            <td>
              <pre>
                4 1<br />
                1 3<br />
                4 6<br />
                7 8<br />
                2 5<br />
                -1 (finaliza el input)
              </pre>
            </td>
            <td>3</td>
          </tr>

          <tr className="constraints__table__row">
            <td>Ejemplo 3</td>
            <td>
              <pre>
                5 2<br />
                1 4<br />
                5 9<br />
                2 7<br />
                3 8<br />
                6 10<br />
                -1 (finaliza el input)
              </pre>
            </td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}