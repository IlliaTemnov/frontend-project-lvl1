import { getUserAnswer } from '../cli.js';
import {
  getRandomInt, isAnswerCorrect, game, minValue, maxValue,
} from '../index.js';

const printGameRules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
};

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return 'no';
  return 'yes';
};

const brainIsPrimeRound = (userName) => {
  const randomInt = getRandomInt(minValue, maxValue);
  console.log(`Question: ${randomInt}`);
  const userAnswer = getUserAnswer();
  const correctAnswer = isPrime(randomInt);
  return isAnswerCorrect(userAnswer, correctAnswer, userName);
};

const playGame = () => game(printGameRules, brainIsPrimeRound);

export default playGame;
