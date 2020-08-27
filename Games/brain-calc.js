import { sayHello, getUserName, getUserAnswer } from '../cli.js';
import { makeGreeting, getRandomInt, getRandomSign, playGameRounds} from '../index.js';

const brainCalcRound = (userName) => {
  const minValue = 1;
  const maxValue = 100;
  const firstRandomInt = getRandomInt(minValue, maxValue);
  const secondRandomInt = getRandomInt(minValue, maxValue);
  const randomSign = getRandomSign('+', '-', '*');
  console.log(`Question: ${firstRandomInt} ${randomSign} ${secondRandomInt}`);
  const userAnswer = getUserAnswer();
  const correctAnswer = eval(`${firstRandomInt} ${randomSign} ${secondRandomInt}`);
  const result =  correctAnswer.toString() === userAnswer ? true : false;
  if (result === false) { return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`) }
  return result;
}

const brainCalcGame = () => {
  makeGreeting();
  const userName = getUserName();
  sayHello(userName);
  console.log('What is the result of the expression?');
  playGameRounds(brainCalcRound, userName);
}

export { brainCalcGame };