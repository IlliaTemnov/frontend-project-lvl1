import playGame from '../index.js';
import getRandomIntFromInterval from '../randomInt.js';

const gameRules = 'What is the result of the expression?';

const getRandomSign = (...args) => {
  const minNum = 1;
  const maxNum = args.length - 1;
  return args[getRandomIntFromInterval(minNum, maxNum)];
};

const calculate = (sign, num1, num2) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown sign: '${sign}'!`);
  }
};

const getGameRoundData = () => {
  const num1 = getRandomIntFromInterval(1, 100);
  const num2 = getRandomIntFromInterval(1, 100);
  const randomSign = getRandomSign('+', '-', '*');
  const gameRoundQuestion = `${num1} ${randomSign} ${num2}`;
  const gameRoundAnswer = String(calculate(randomSign, num1, num2));
  return [gameRoundQuestion, gameRoundAnswer];
};

export default () => playGame(gameRules, getGameRoundData);
