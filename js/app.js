document.querySelector('button').addEventListener('click', rollDice);

function rollDice() {

  let nr = Math.floor((Math.random()*6)+1);
document.querySelector('img').src = nr + '-tärning.png';
}