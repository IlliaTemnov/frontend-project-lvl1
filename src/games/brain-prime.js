import playGame from '../index.js';
import getRandomIntFromInterval from '../randomInt.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num <= 1) { return false; }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) { return false; }
  }
  return true;
};

const getGameRoundData = () => {
  const num = getRandomIntFromInterval(2, 100);
  const gameRoundQuestion = `${num}`;
  const gameRoundAnswer = isPrime(num) ? 'yes' : 'no';
  return [gameRoundQuestion, gameRoundAnswer];
};

export default () => playGame(gameRules, getGameRoundData);
