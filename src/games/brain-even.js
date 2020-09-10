import playGame from '../index.js';
import getRandomIntFromInterval from '../randomInt.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => {
  const result = num % 2 === 0;
  return result;
};

const genRoundData = () => {
  const gameRoundQuestion = getRandomIntFromInterval(1, 100);
  const gameRoundAnswer = isEven(gameRoundQuestion) ? 'yes' : 'no';
  return { question: gameRoundQuestion, answer: gameRoundAnswer };
};

export default () => playGame(description, genRoundData);
