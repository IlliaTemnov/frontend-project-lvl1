import playGame from '../index.js';
import getRandomIntFromInterval from '../randomInt.js';

const description = 'What is the result of the expression?';

const getRandomSign = () => {
  const signsArr = ['+', '-', '*'];
  return signsArr[getRandomIntFromInterval(0, signsArr.length - 1)];
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

const genRoundData = () => {
  const num1 = getRandomIntFromInterval(1, 100);
  const num2 = getRandomIntFromInterval(1, 100);
  const randomSign = getRandomSign();
  const gameRoundQuestion = `${num1} ${randomSign} ${num2}`;
  const gameRoundAnswer = String(calculate(randomSign, num1, num2));
  return { question: gameRoundQuestion, answer: gameRoundAnswer };
};

export default () => playGame(description, genRoundData);
