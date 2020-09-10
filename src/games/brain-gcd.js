import playGame from '../index.js';
import getRandomIntFromInterval from '../randomInt.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGSD = (a, b) => {
  if (a === 0 && b === 0) { return null; }
  if (b === 0) {
    return a;
  }
  return findGSD(b, a % b);
};

const genRoundData = () => {
  const num1 = getRandomIntFromInterval(1, 100);
  const num2 = getRandomIntFromInterval(1, 100);
  const gameRoundQuestion = `${num1} ${num2}`;
  const gameRoundAnswer = String(findGSD(num1, num2));
  return { question: gameRoundQuestion, answer: gameRoundAnswer };
};

export default () => playGame(description, genRoundData);
