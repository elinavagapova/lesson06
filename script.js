'use strict';

let number = +prompt('Угадай число от 1 до 100');

const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function gameBot() {
  const y = 57;

  function check() {
    if (!isNumber(number)) {
      number = +prompt('Введи число!');
      check();
    }
  }

  function userNumber() {
    if (number == y) {
      alert('Поздравляю, Вы угадали!!!');
    } else if (number > y) {
      number = +prompt('Загаданное число меньше');
      gameBot();
    } else {
      number = +prompt('Загаданное число больше');
      gameBot();
    }
  }
  
  if (number == false) {
    alert('Игра окончена');
  } else {
    check();
    userNumber();
  }

}

gameBot();