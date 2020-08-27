import { sayHello, getUserName } from './cli.js';
import { makeGreeting } from './index.js';

const brainGames = () => {
makeGreeting();
const userName = getUserName();
sayHello(userName);
}

export { brainGames };