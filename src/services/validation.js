
export default function validation (input) {
  
  const regExp = /^(\d{1,2}\s\d{1,2}\n)+-1$/gm;

  if (regExp.test(input)) return true;
  else return false;
}