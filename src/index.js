import {
  getUserAnswer, makeGreeting,
} from './cli.js';

const playGame = (description, getGameRoundData) => {
  const userName = makeGreeting();
  console.log(description);
  const maxRounds = 3;
  for (let i = 0; i < maxRounds; i += 1) {
    const { question, answer } = getGameRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = getUserAnswer();
    if (answer !== userAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. 
    Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playGame;
