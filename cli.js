import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
}

const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
}

const getUserAnswer = () => {
  let userAnswer = readlineSync.question('Your answer: ');
  return  userAnswer;
}

export { sayHello, getUserName, getUserAnswer };