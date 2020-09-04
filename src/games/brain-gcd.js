import {
  game, getRandIntFromHundred, compareAnswers,
} from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findGSD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGSD(b, a % b);
};

const gameRound = (userName) => {
  const firstRandomInt = getRandIntFromHundred();
  const secondRandomInt = getRandIntFromHundred();
  console.log(`Question: ${firstRandomInt} ${secondRandomInt}`);
  const correctAnswer = findGSD(firstRandomInt, secondRandomInt);
  return compareAnswers(String(correctAnswer), userName);
};

const playGame = () => game(gameRules, gameRound);

export default playGame;
