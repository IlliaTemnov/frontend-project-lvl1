import { getUserAnswer } from '../cli.js';
import {
  isAnswerCorrect, getRandomInt, game,
} from '../index.js';

const printGameRules = () => {
  console.log('What number is missing in the progression?');
};

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

const brainProgressionRound = (userName) => {
  const randomArithmeticProgressionArr = changeArrElToDoubleDot(createArithmeticProgressionArr());
  console.log(`Question: ${randomArithmeticProgressionArr[0]}`);
  const userAnswer = getUserAnswer();
  const correctAnswer = randomArithmeticProgressionArr[1];
  return isAnswerCorrect(userAnswer, correctAnswer, userName);
};

const playGame = () => game(printGameRules, brainProgressionRound);

export default playGame;
