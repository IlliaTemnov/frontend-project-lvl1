import { sayHello, getUserName, getUserAnswer } from '../cli.js';
import { makeGreeting, playGameRounds, createArithmeticProgressionArr, changeArrElToDoubleDot } from '../index.js';


const brainProgressionRound = (userName) => {
  const randomArithmeticProgressionArr = changeArrElToDoubleDot(createArithmeticProgressionArr());
  console.log(`Question: ${randomArithmeticProgressionArr[0]}`);
  const userAnswer = getUserAnswer();
  const correctAnswer = randomArithmeticProgressionArr[1];
  const result = correctAnswer === userAnswer ? true : false;
  if (result === false) { return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`) }
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
