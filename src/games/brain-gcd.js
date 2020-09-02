import { getUserAnswer } from '../cli.js';
import {
  getRandomInt, isAnswerCorrect, game, minValue, maxValue,
} from '../index.js';

const printGameRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const findGSD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGSD(b, a % b);
};

const brainGCDRound = (userName) => {
  const firstRandomInt = getRandomInt(minValue, maxValue);
  const secondRandomInt = getRandomInt(minValue, maxValue);
  console.log(`Question: ${firstRandomInt} ${secondRandomInt}`);
  const userAnswer = getUserAnswer();
  const correctAnswer = findGSD(firstRandomInt, secondRandomInt);
  return isAnswerCorrect(userAnswer, String(correctAnswer), userName);
};

const playGame = () => game(printGameRules, brainGCDRound);

export default playGame;
