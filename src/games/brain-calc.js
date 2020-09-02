import { getUserAnswer } from '../cli.js';
import {
  getRandomInt, isAnswerCorrect, game, minValue, maxValue,
} from '../index.js';

const printGameRules = () => {
  console.log('What is the result of the expression?');
};

const getRandomSign = (...args) => {
  const minNum = 1;
  const maxNum = args.length - 1;
  return args[getRandomInt(minNum, maxNum)];
};

const calculate = (sign, num1, num2) => {
  let result;
  switch (sign) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      throw new Error(`Unknown sign: '${sign}'!`);
  }
  return result;
};

const brainCalcRound = (userName) => {
  const firstRandomInt = getRandomInt(minValue, maxValue);
  const secondRandomInt = getRandomInt(minValue, maxValue);
  const randomSign = getRandomSign('+', '-', '*');
  console.log(`Question: ${firstRandomInt} ${randomSign} ${secondRandomInt}`);
  const userAnswer = getUserAnswer();
  const correctAnswer = String(calculate(randomSign, firstRandomInt, secondRandomInt));
  return isAnswerCorrect(userAnswer, correctAnswer, userName);
};

const playGame = () => game(printGameRules, brainCalcRound);

export default playGame;
