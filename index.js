// Code your solutions in this file
function writeCards(names, eventName) {
  let cards = [];
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return cards;
}

function countdown(number) {
  let i = number
  while (i >= 0) {
    console.log(i);
    i--;
  }
}
