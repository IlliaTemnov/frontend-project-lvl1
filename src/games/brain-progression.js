import playGame from '../index.js';
import getRandomIntFromInterval from '../randomInt.js';

const gameRules = 'What number is missing in the progression?';

const createArithmeticProgressionArr = () => {
  const arrLength = 10;
  const step = getRandomIntFromInterval(2, 9);
  let startNumber = getRandomIntFromInterval(1, 50);
  const arithmeticProgressionArr = [startNumber];
  for (let i = 1; i < arrLength; i += 1) {
    startNumber += step;
    arithmeticProgressionArr.push(startNumber);
  }
  return arithmeticProgressionArr;
};

const changeRandomArrElToDoubleDot = (arr) => {
  const positionIndex = getRandomIntFromInterval(0, arr.length - 1);
  const cutEl = arr.splice(positionIndex, 1, '..');
  return [arr.join(' '), cutEl.join('')];
};

const getGameRoundData = () => {
  const progressionArr = changeRandomArrElToDoubleDot(createArithmeticProgressionArr());
  const gameRoundQuestion = `${progressionArr[0]}`;
  const gameRoundAnswer = progressionArr[1];
  return [gameRoundQuestion, gameRoundAnswer];
};

export default () => playGame(gameRules, getGameRoundData);
