import { sayHello, getUserName, getUserAnswer } from '../cli.js';
import { makeGreeting, getRandomInt, getRandomSign, playGameRounds, isAnswerCorrect} from '../index.js';

const brainCalcRound = (userName) => {
  const minValue = 1;
  const maxValue = 100;
  const firstRandomInt = getRandomInt(minValue, maxValue);
  const secondRandomInt = getRandomInt(minValue, maxValue);
  const randomSign = getRandomSign('+', '-', '*');
  console.log(`Question: ${firstRandomInt} ${randomSign} ${secondRandomInt}`);
  const userAnswer = getUserAnswer();
  const correctAnswer = eval(`${firstRandomInt} ${randomSign} ${secondRandomInt}`);
  const result = isAnswerCorrect(userAnswer, correctAnswer, userName);
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