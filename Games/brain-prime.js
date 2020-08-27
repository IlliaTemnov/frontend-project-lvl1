import { sayHello, getUserName, getUserAnswer } from '../cli.js';
import { makeGreeting, getRandomInt, playGameRounds, isPrime, isAnswerCorrect} from '../index.js';

const brainIsPrimeRound = (userName) => {
  const minValue = 1;
  const maxValue = 100;
  const randomInt = getRandomInt(minValue, maxValue);
  console.log(`Question: ${randomInt}`);
  const userAnswer = getUserAnswer();
  const correctAnswer = isPrime(randomInt);
  const result = isAnswerCorrect(userAnswer, correctAnswer, userName);
  return result;
};

const brainIsPrimeGame = () => {
  makeGreeting();
  const userName = getUserName();
  sayHello(userName);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  playGameRounds(  brainIsPrimeRound, userName);
}

export { brainIsPrimeGame };
