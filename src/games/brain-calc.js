import {
  getRandomInt, game, getRandIntFromHundred, compareAnswers,
} from '../index.js';

const gameRules = 'What is the result of the expression?';

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

const gameRound = (userName) => {
  const firstRandomInt = getRandIntFromHundred();
  const secondRandomInt = getRandIntFromHundred();
  const randomSign = getRandomSign('+', '-', '*');
  console.log(`Question: ${firstRandomInt} ${randomSign} ${secondRandomInt}`);
  const correctAnswer = String(calculate(randomSign, firstRandomInt, secondRandomInt));
  return compareAnswers(correctAnswer, userName);
};

const playGame = () => game(gameRules, gameRound);

export default playGame;
