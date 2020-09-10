import playGame from '../index.js';
import getRandomIntFromInterval from '../randomInt.js';

const description = 'What number is missing in the progression?';
const arrLength = 10;
const startPoint = 2;
const endPoint = 50;
const endStepPoint = 9;

const genArrStep = () => getRandomIntFromInterval(startPoint, endStepPoint);
const genArrStart = () => getRandomIntFromInterval(startPoint, endPoint);
const genArrIndex = () => getRandomIntFromInterval(0, arrLength - 1);

const genAPArr = (step, start, index) => {
  const aPPArr = [start];
  let nextStep = start;
  for (let i = 1; i < arrLength; i += 1) {
    nextStep += step;
    aPPArr.push(nextStep);
  }
  const cutEl = aPPArr.splice(index, 1, '..');
  return [aPPArr.join(' '), cutEl.join('')];
};

const genRoundData = () => {
  const [gameRoundQuestion, gameRoundAnswer] = genAPArr(genArrStep(), genArrStart(), genArrIndex());
  return { question: gameRoundQuestion, answer: gameRoundAnswer };
};

export default () => playGame(description, genRoundData);
