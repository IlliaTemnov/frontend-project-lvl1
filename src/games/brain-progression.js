import {
  getRandomInt, game, compareAnswers,
} from '../index.js';

const gameRules = 'What number is missing in the progression?';

const createArithmeticProgressionArr = () => {
  const arrLength = 10;
  const minStartNumber = 1;
  const maxStartNumber = 50;
  const minStep = 2;
  const maxStep = 9;
  const step = getRandomInt(minStep, maxStep);
  let startNumber = getRandomInt(minStartNumber, maxStartNumber);
  const arithmeticProgressionArr = [startNumber];
  for (let i = 1; i < arrLength; i += 1) {
    startNumber += step;
    arithmeticProgressionArr.push(startNumber);
  }
  return arithmeticProgressionArr;
};

const changeArrElToDoubleDot = (arr) => {
  const positionIndex = getRandomInt(0, arr.length - 1);
  const cutEl = arr.splice(positionIndex, 1, '..');
  const result = [arr.join(' '), cutEl.join('')];
  return result;
};

const gameRound = (userName) => {
  const randomArithmeticProgressionArr = changeArrElToDoubleDot(createArithmeticProgressionArr());
  console.log(`Question: ${randomArithmeticProgressionArr[0]}`);
  const correctAnswer = randomArithmeticProgressionArr[1];
  return compareAnswers(correctAnswer, userName);
};

const playGame = () => game(gameRules, gameRound);

export default playGame;
