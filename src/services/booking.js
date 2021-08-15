import validation from "./validation";
import parseInput from "./parseInput";
import compare from "./compare";

export default function booking (input) {
  
  const trimInput = input.trim();

  if (validation(trimInput) === false) return 'Por favor, introduzca un input válido.';

  const parsedInput = parseInput(trimInput);

  let beds = parsedInput[0][1];
  const clients = parsedInput.slice(1, parsedInput.length - 1);
  const bookings = clients.sort(compare);
  let bookedNow = [];
  let satisfiedClients = [];

  for (let i = 0; i <= 24; i++) {

    if (bookedNow.length > 0) {
      for (let booking of bookedNow) {
        if (booking[1] === i) {
          bookedNow.pop(booking);
          beds++;
        }
      }
    }

    if (beds > 0) {
      for (let booking of bookings) {
        if (booking[0] === i) {
          bookedNow.push(booking);
          satisfiedClients.push(booking);
          bookings.pop(booking);
          beds = beds - 1;
        }
      }
    }
  }
  return satisfiedClients.length;
}