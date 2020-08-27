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
  for (let i = 0; i < maxRounds; i += 1) {
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

const findGSD = (a, b) => {
  if (b == 0) {
    return a;
}
return findGSD(b, a % b);
};

const createArithmeticProgressionArr = () => {
  const arrLength = 10;
  const minStartNumber = 1;
  const maxStartNumber = 50;
  const minStep = 2;
  const maxStep = 9;
  const step = getRandomInt(minStep, maxStep);
  let startNumber = getRandomInt(minStartNumber, maxStartNumber);
  let arithmeticProgressionArr = [startNumber];
  for (let i = 1; i < arrLength; i += 1) {
    startNumber = startNumber + step
    arithmeticProgressionArr.push(startNumber);
  }
  return arithmeticProgressionArr;
}


const changeArrElToDoubleDot = (arr) => {
  const positionIndex = getRandomInt(0, arr.length-1);
  const cutEl = arr.splice(positionIndex, 1, "..");
  const result = [arr.join(' '), cutEl.join('')];
  return result;
}


export { makeGreeting, getRandomInt, isEven, getRandomSign, playGameRounds, findGSD, createArithmeticProgressionArr, changeArrElToDoubleDot };