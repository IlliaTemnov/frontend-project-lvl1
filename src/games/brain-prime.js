import {
  game, getRandIntFromHundred, compareAnswers,
} from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return 'no';
  return 'yes';
};

const gameRound = (userName) => {
  const randomInt = getRandIntFromHundred();
  console.log(`Question: ${randomInt}`);
  const correctAnswer = isPrime(randomInt);
  return compareAnswers(correctAnswer, userName);
};

const playGame = () => game(gameRules, gameRound);

export default playGame;
