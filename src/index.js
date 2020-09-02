import { sayHello, getUserName } from './cli.js';

const minValue = 1;
const maxValue = 100;

const makeGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  sayHello(userName);
  return userName;
};

const getRandomInt = (min, max) => Math.round(Math.random() * (max - min) + min);

const playGameRounds = (gameRound, userName) => {
  const maxRounds = 3;
  let counterOfWins = 0;
  for (let i = 0; i < maxRounds; i += 1) {
    const round = gameRound(userName);
    if (!round) { return; }
    if (round) {
      counterOfWins += 1;
      console.log('Correct!');
    }
    if (counterOfWins === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

const isAnswerCorrect = (userAnswer, correctAnswer, userName) => {
  const result = correctAnswer === userAnswer;
  if (result === false) {
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. 
  Let's try again, ${userName}!`);
  }
  return result;
};

const game = (rules, round) => {
  const userName = makeGreeting();
  rules();
  playGameRounds(round, userName);
};

export {
  makeGreeting, getRandomInt, playGameRounds, isAnswerCorrect, game, minValue, maxValue,
};
