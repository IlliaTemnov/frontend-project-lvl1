import { sayHello, getUserName, getUserAnswer } from '../cli.js';
import { makeGreeting, playGameRounds, createArithmeticProgressionArr, changeArrElToDoubleDot, isAnswerCorrect } from '../index.js';


const brainProgressionRound = (userName) => {
  const randomArithmeticProgressionArr = changeArrElToDoubleDot(createArithmeticProgressionArr());
  console.log(`Question: ${randomArithmeticProgressionArr[0]}`);
  const userAnswer = getUserAnswer();
  const correctAnswer = randomArithmeticProgressionArr[1];
  const result = isAnswerCorrect(userAnswer, correctAnswer, userName);
  return result;
};

const brainnProgressionGame = () => {
  makeGreeting();
  const userName = getUserName();
  sayHello(userName);
  console.log('What number is missing in the progression?');
  playGameRounds(brainProgressionRound, userName);
}


export { brainnProgressionGame };
