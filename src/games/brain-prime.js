import playGame from '../index.js';
import getRandomIntFromInterval from '../randomInt.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num <= 1) { return false; }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) { return false; }
  }
  return true;
};

const genRoundData = () => {
  const num = getRandomIntFromInterval(2, 100);
  const gameRoundQuestion = `${num}`;
  const gameRoundAnswer = isPrime(num) ? 'yes' : 'no';
  return { question: gameRoundQuestion, answer: gameRoundAnswer };
};

export default () => playGame(description, genRoundData);
