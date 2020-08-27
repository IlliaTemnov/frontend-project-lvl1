import { sayHello, getUserName, getUserAnswer } from '../cli.js';
import { makeGreeting, getRandomInt, playGameRounds, findGSD} from '../index.js';

const brainGCDRound = (userName) => {
  const minValue = 1;
  const maxValue = 100;
  const firstRandomInt = getRandomInt(minValue, maxValue);
  const secondRandomInt = getRandomInt(minValue, maxValue);
  console.log(`Question: ${firstRandomInt} ${secondRandomInt}`);
  const userAnswer = getUserAnswer();
  const correctAnswer = findGSD(firstRandomInt, secondRandomInt);
  const result =  correctAnswer.toString() === userAnswer ? true : false;
  if (result === false) { return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`) }
  return result;
};

const brainGCD = () => {
  makeGreeting();
  const userName = getUserName();
  sayHello(userName);
  console.log('Find the greatest common divisor of given numbers.');
  playGameRounds( brainGCDRound, userName);
}

export { brainGCD };