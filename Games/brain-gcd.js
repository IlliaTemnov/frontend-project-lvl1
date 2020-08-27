import { sayHello, getUserName, getUserAnswer } from '../cli.js';
import { makeGreeting, getRandomInt, playGameRounds, findGSD, isAnswerCorrect} from '../index.js';

const brainGCDRound = (userName) => {
  const minValue = 1;
  const maxValue = 100;
  const firstRandomInt = getRandomInt(minValue, maxValue);
  const secondRandomInt = getRandomInt(minValue, maxValue);
  console.log(`Question: ${firstRandomInt} ${secondRandomInt}`);
  const userAnswer = getUserAnswer();
  const correctAnswer = findGSD(firstRandomInt, secondRandomInt);
  const result = isAnswerCorrect(userAnswer, correctAnswer, userName);
  return result;
};

const brainGCDGame = () => {
  makeGreeting();
  const userName = getUserName();
  sayHello(userName);
  console.log('Find the greatest common divisor of given numbers.');
  playGameRounds( brainGCDRound, userName);
}

export { brainGCDGame };