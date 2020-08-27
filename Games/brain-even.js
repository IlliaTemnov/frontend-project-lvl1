import { sayHello, getUserName, getUserAnswer } from '../cli.js';
import { makeGreeting, getRandomInt, isEven, playGameRounds} from '../index.js';

const brainEvenRound = (userName) => {
  const minValue = 1;
  const maxValue = 100;
  const randomInt = getRandomInt(minValue, maxValue);
  console.log(`Question: ${randomInt}`);
  const userAnswer = getUserAnswer();
  const result = isEven(randomInt) === userAnswer ? true : false;
  if (result === false) { return console.log(`"yes" is wrong answer ;(. Correct answer was "no". Let's try again, ${userName}!`) }
  return result;
}

const brainEvenGame = () => {
  makeGreeting();
  const userName = getUserName();
  sayHello(userName);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  playGameRounds(brainEvenRound, userName);
}

export { brainEvenGame, getRandomInt, getUserAnswer };
