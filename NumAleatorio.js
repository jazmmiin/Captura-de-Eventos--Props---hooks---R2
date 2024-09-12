
const form = document.querySelector('form');
const guessInput = document.querySelector('#guess');
const resultElement = document.querySelector('#result');

let randomNumber = Math.floor(Math.random() * 100) + 1;

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const userGuess = parseInt(guessInput.value); 

  if (userGuess < randomNumber) {
    resultElement.textContent = 'Más alto!';
  } else if (userGuess > randomNumber) {
    resultElement.textContent = 'Más bajo!';
  } else {
    resultElement.textContent = '¡Correcto! El número era ' + randomNumber;
  }
});