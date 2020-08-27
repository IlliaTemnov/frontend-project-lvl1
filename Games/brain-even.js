import { sayHello, getUserName, getUserAnswer } from '../cli.js';
import { makeGreeting, getRandomInt, isEven, playGameRounds, isAnswerCorrect} from '../index.js';

const brainEvenRound = (userName) => {
  const minValue = 1;
  const maxValue = 100;
  const randomInt = getRandomInt(minValue, maxValue);
  console.log(`Question: ${randomInt}`);
  const userAnswer = getUserAnswer();
  const correctAnswer = isEven(randomInt);
  const result = isAnswerCorrect(userAnswer, correctAnswer, userName);
  return result;
}

const brainEvenGame = () => {
  makeGreeting();
  const userName = getUserName();
  sayHello(userName);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  playGameRounds(brainEvenRound, userName);
}

export { brainEvenGame };
