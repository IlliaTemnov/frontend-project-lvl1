import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
};

const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const makeGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  sayHello(userName);
  return userName;
};

export {
  sayHello, getUserName, getUserAnswer, makeGreeting,
};
