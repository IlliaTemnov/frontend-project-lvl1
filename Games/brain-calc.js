import { makeGreeting } from './brain-games.js';
import { sayHello, getUserName } from '../cli.js';
import { getRandomInt, getUserAnswer } from './brain-even.js';

const printGameRules = () => {
  console.log('What is the result of the expression?');
}

const getRandomSign = (...args) => {
  const minValue = 1;
  const maxValue = args.length - 1;
  return args[getRandomInt(minValue, maxValue)];
}

const askQuestion = ( firstRandomInt, secondRandomInt, randomSign ) => {
  console.log(`Question: ${firstRandomInt} ${randomSign} ${secondRandomInt}`);
}

const brainCalcRound = (userName) => {
  const minValue = 1;
  const maxValue = 100;
  const firstRandomInt = getRandomInt(minValue, maxValue);
  const secondRandomInt = getRandomInt(minValue, maxValue);
  const randomSign = getRandomSign('+', '-', '*');
  askQuestion(firstRandomInt, secondRandomInt, randomSign);
  const string = `${firstRandomInt} ${randomSign} ${secondRandomInt}`;
  const userAnswer = getUserAnswer();
  const correctAnswer = eval(string);
  const result =  correctAnswer.toString() === userAnswer ? true : false;
  if (result === false) { return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`) }
  return result;
}

const brainCalcGame = () => {
  const maxRounds = 3;
  let counterOfWins = 0;
  makeGreeting();
  const userName = getUserName();
  sayHello(userName);
  printGameRules();
  for (let i = 0; i < maxRounds; i++) {
  let gameRound = brainCalcRound(userName);
  if (!gameRound) { return }
  if (gameRound) {
    counterOfWins += 1;
    console.log('Correct!');
  }
  if (counterOfWins === 3) {
    return console.log(`Congratulations, ${userName}!`);
  }
  }
}

export { brainCalcGame };