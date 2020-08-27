import { sayHello, getUserName } from './cli.js';

const makeGreeting = () => {
console.log('Welcome to the Brain Games!');
}

const brainGames = () => {
makeGreeting();
const userName = getUserName();
sayHello(userName);
}

export { brainGames, makeGreeting };