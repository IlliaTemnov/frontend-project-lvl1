import readlineSync from 'readline-sync';
import { makeGreeting } from './brain-games.js';
import { sayHello, getUserName } from './cli.js';

const printGameRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
}

const getRandomInt = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const isEven = (num) => {
  const result = num % 2 === 0 ? true : false;
  return result;
};

const getUserAnswer = () => {
  let userAnswer = readlineSync.question('Your answer: ');
  userAnswer = userAnswer === 'yes'? true : false;
  return  userAnswer;
}

const askQuestion = (randomInt) => {
  console.log(`Question: ${randomInt}`);
}

const brainEvenRound = () => {
  const minValue = 1;
  const maxValue = 100;
  const randomInt = getRandomInt(minValue, maxValue);
  askQuestion(randomInt);
  const userAnswer = getUserAnswer();
  const result = isEven(randomInt) === userAnswer ? true : false;
  return result;
}

const brainEvenGame = () => {
  const maxRounds = 3;
  let counterOfWins = 0;
  makeGreeting();
  const userName = getUserName();
  sayHello(userName);
  printGameRules();
  for (let i = 0; i < maxRounds; i++) {
  let gameRound = brainEvenRound();
  if (gameRound) {
    counterOfWins += 1;
    console.log('Correct!');
  }
  if (!gameRound) {
  return console.log(`"yes" is wrong answer ;(. Correct answer was "no". Let's try again, ${userName}!`);
  }
  if (counterOfWins === 3) {
    return console.log(`Congratulations, ${userName}!`);
  }
  }
}

export { brainEvenGame };
