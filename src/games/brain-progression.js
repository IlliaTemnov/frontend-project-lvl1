import playGame from '../index.js';
import getRandomIntFromInterval from '../randomInt.js';

const description = 'What number is missing in the progression?';
const arrLength = 10;
const startStepPoint = 2;
const endStepPoint = 9;

const genArrStep = () => getRandomIntFromInterval(startStepPoint, endStepPoint);
const genArrStart = () => getRandomIntFromInterval(0, 100);
const genRandomIndexFromArr = () => getRandomIntFromInterval(0, arrLength - 1);

const genProgression = (step, start) => {
  const progression = [];
  for (let i = 0; i <= arrLength - 1; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const genRoundData = () => {
  const gameRoundQuestion = genProgression(
    genArrStep(),
    genArrStart(),
  );
  const index = genRandomIndexFromArr();
  const gameRoundAnswer = gameRoundQuestion[index];
  gameRoundQuestion[index] = '..';
  return { question: gameRoundQuestion.join(' '), answer: String(gameRoundAnswer) };
};

export default () => playGame(description, genRoundData);
