import {
  getUserAnswer, makeGreeting,
} from './cli.js';

const playGame = (gameRules, getGameRoundData) => {
  const userName = makeGreeting();
  console.log(gameRules);
  const maxRounds = 3;
  let gameRound = 0;
  while (maxRounds !== gameRound) {
    const [roundQuestion, roundCorrectAnswer] = getGameRoundData();
    console.log(`Question: ${roundQuestion}`);
    const userAnswer = getUserAnswer();
    if (roundCorrectAnswer !== userAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${roundCorrectAnswer}'. 
    Let's try again, ${userName}!`);
    }
    console.log('Correct!');
    gameRound += 1;
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playGame;
