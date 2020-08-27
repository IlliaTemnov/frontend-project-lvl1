import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
}

const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
}

export { sayHello, getUserName };