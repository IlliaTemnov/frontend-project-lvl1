import playGame from '../index.js';
import getRandomIntFromInterval from '../randomInt.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';

const getGameRoundData = () => {
  const gameRoundQuestion = getRandomIntFromInterval(1, 100);
  const gameRoundAnswer = gameRoundQuestion % 2 === 0 ? 'yes' : 'no';
  return [gameRoundQuestion, gameRoundAnswer];
};

export default () => playGame(gameRules, getGameRoundData);
