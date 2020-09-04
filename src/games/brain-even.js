import {
  getRandIntFromHundred, game, compareAnswers,
} from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => {
  const result = num % 2 === 0 ? 'yes' : 'no';
  return result;
};

const gameRound = (userName) => {
  const randomInt = getRandIntFromHundred();
  console.log(`Question: ${randomInt}`);
  const correctAnswer = isEven(randomInt);
  return compareAnswers(correctAnswer, userName);
};

const playGame = () => game(gameRules, gameRound);

export default playGame;
