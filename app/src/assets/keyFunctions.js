export function randomNumber(maximum) {
  const number = Math.floor(Math.random() * maximum + 1)
  return number
}
export function roundNumber(number, place) {
  const returner = parseFloat(parseFloat(number).toFixed(place))
  return returner
}
