import a from './modules/moduleA';
import b from './modules/moduleB';

window.showModules = () => {
	console.log(`the A module is ${a}`);
	console.log(`the B module is ${b}`);
};

console.log(process.env);
