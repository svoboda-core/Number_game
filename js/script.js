
var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var lowOrHi2 = document.querySelector('.lowOrHi2');
var BigOrHi = document.querySelector('.BigOrHi');
var lowOrHi3 = document.querySelector('.lowOrHi3');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;

function checkGuess() {
	// Переменная для функции
	var userGuess = Number(guessField.value);

	if (guessCount === 1) {
		guesses.textContent = 'Предедущие значения: ';
	}
	guesses.textContent += userGuess + ' ';

	if (userGuess === randomNumber) {
		lastResult.textContent = 'Поздравляю! Вы выиграли!!!';
		lastResult.style.backgroundColor = 'green';
		lowOrHi.textContent = '';
		lowOrHi2.textContent = '';
		BigOrHi.textContent = '';
		lowOrHi3.textContent = '';
		setGameOver();
	} else if (guessCount === 10) {
		lastResult.textContent = '!!!Вы проиграли!!! Попробу снова.';
		lastResult.style.backgroundColor = 'red';
		setGameOver();
	} else {
		//lastResult.textContent = 'Wrong!';
		//lastResult.style.backgroundColor = 'red';
		if (userGuess < randomNumber) {
			lowOrHi.textContent = 'Указаное число ';
			lowOrHi2.textContent = 'МЕНЬШЕ';
			BigOrHi.textContent = '';
			lowOrHi3.textContent = ' загаданого!';
		} else if (userGuess > randomNumber) {
			lowOrHi.textContent = 'Указаное число ';
			lowOrHi2.textContent = '';
			BigOrHi.textContent = 'БОЛЬШЕ';
			lowOrHi3.textContent = ' загаданого!';
		} else if (userGuess !== NaN) {
			lastResult.textContent = 'Вы указали не число. Начните заново';
			lastResult.style.backgroundColor = 'red';
			setGameOver();
		}
	}

	guessCount++;
	guessField.value = '';
	guessField.focus();
}
// Содание событий 
guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement('button');
	resetButton.textContent = 'Начать новую игру';
	document.body.appendChild(resetButton);
	resetButton.addEventListener('click', resetGame); // Второе значение в скобках это функция
}

function resetGame() {
	guessCount = 1;

	var resetParas = document.querySelectorAll('.resultParas p');
	for (var i = 0; i < resetParas.length; i++) {
		resetParas[i].textContent = '';
	}

	resetButton.parentNode.removeChild(resetButton);

	guessField.disabled = false;
	guessSubmit.disabled = false;
	guessField.value = '';
	guessField.focus();

	lastResult.style.backgroundColor = 'white';

	randomNumber = Math.floor(Math.random() * 100) + 1;
}