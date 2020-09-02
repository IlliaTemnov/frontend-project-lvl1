import { getUserAnswer } from '../cli.js';
import {
  getRandomInt, isAnswerCorrect, minValue, maxValue, game,
} from '../index.js';

const printGameRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
};

const isEven = (num) => {
  const result = num % 2 === 0 ? 'yes' : 'no';
  return result;
};

const brainEvenRound = (userName) => {
  const randomInt = getRandomInt(minValue, maxValue);
  console.log(`Question: ${randomInt}`);
  const userAnswer = getUserAnswer();
  const correctAnswer = isEven(randomInt);
  return isAnswerCorrect(userAnswer, correctAnswer, userName);
};

const playGame = () => game(printGameRules, brainEvenRound);

export default playGame;
