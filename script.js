'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log((document.querySelector('.guess').value = 23));
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  // the + sign converts the string to a number instead of using Number() function.
  const guess = +document.querySelector('.guess').value;
  console.log(guess, typeof guess);
  // Senza il punto esclamativo, il codice non funzionerebbe correttamente perché il valore 0 è considerato falsy in JavaScript. Quindi, se l'utente inserisce 0 come input, il messaggio "No number!" verrebbe visualizzato anche se 0 è un numero valido. L'uso del punto esclamativo (!) serve a verificare se il punteggio è zero e, in tal caso, mostrare il messaggio di perdita del gioco. L'if ha bisogno di un booleano per funzionare correttamente, quindi il punto esclamativo serve a convertire il numero in un booleano. Se il punteggio è 0, il messaggio "You lost the game!" verrà visualizzato e la funzione terminerà l'esecuzione con il return.
  // if (!score) {
  //   document.querySelector('.message').textContent = '💥 You lost the game!';
  //   if (score === undefined) {
  //     console.log('score is undefined');
  //     score = 0;
  //   }
  //   return;
  // }
  // the ! operator converts the number to a boolean, so if the number is 0, it will be false, and if it is any other number, it will be true.

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';

    displayMessage('⛔ No number!');
    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});
//When guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high!';
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game!';
//       score = 0;
//       document.querySelector('.score').textContent = score;

//       // Per selezionare una doppia classe, va fatto come sotto, con doppio punto nel caso di una classe o doppio ## nel caso di un id.
//       // document.querySelector('.btn.check').textContent =
//       //   'you cant push this button';
//     }

//     //When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low!';
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game!';
//       score = 0;
//       document.querySelector('.score').textContent = score;
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
