const makeGreeting = () => {
  console.log('Welcome to the Brain Games!');
};

const getRandomInt = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const isEven = (num) => {
  const result = num % 2 === 0 ? 'yes' : 'no';
  return result;
};

const getRandomSign = (...args) => {
  const minValue = 1;
  const maxValue = args.length - 1;
  return args[getRandomInt(minValue, maxValue)];
}

const playGameRounds = (gameRound, userName) => {
  const maxRounds = 3;
  let counterOfWins = 0;
  for (let i = 0; i < maxRounds; i++) {
    let round = gameRound(userName);
    if (!round) { return }
    if (round) {
      counterOfWins += 1;
      console.log('Correct!');
    }
    if (counterOfWins === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    }
} 

export { makeGreeting, getRandomInt, isEven, getRandomSign, playGameRounds};