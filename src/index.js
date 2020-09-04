import { sayHello, getUserAnswer, getUserName } from './cli.js';

const minValue = 1;
const maxValue = 100;

const makeGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  sayHello(userName);
  return userName;
};

const getRandomInt = (min, max) => Math.round(Math.random() * (max - min) + min);

const getRandIntFromHundred = () => getRandomInt(minValue, maxValue);

const playGameRounds = (gameRound, userName) => {
  const maxRounds = 3;
  for (let i = 0; i < maxRounds; i += 1) {
    const round = gameRound(userName);
    if (!round) { return; }
    if (round) {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

const isAnswerCorrect = (userAnswer, correctAnswer) => {
  const result = correctAnswer === userAnswer;
  return result;
};

const compareAnswers = (correctAnswer, userName) => {
  const userAnswer = getUserAnswer();
  const result = isAnswerCorrect(userAnswer, correctAnswer);
  if (result === false) {
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. 
  Let's try again, ${userName}!`);
  }
  return result;
};

const game = (gameRules, round) => {
  const userName = makeGreeting();
  console.log(gameRules);
  playGameRounds(round, userName);
};

export {
  makeGreeting, getRandomInt, playGameRounds, isAnswerCorrect, game, getRandIntFromHundred,
  compareAnswers,
};
