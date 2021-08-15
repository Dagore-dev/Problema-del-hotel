export default function parseInput (input) {

  const regExp = /\n/gm;

  function stringToNumArr(item) {
    const regExp = /\s/g;

    return item
      .split(regExp)
      .map(
        number => parseInt(number)
      )
  }

  return input
    .split(regExp)
    .map(
      (item) => {
        return item !== "-1"
          ? stringToNumArr(item)
          : item;
      }
    )
}