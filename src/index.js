const { add, baseUrl } = require("./fn");
const { generateUser } = require("./casual");

// console.log("fn===", fn);
// console.log("baseUrl===", baseUrl);

const rez1 = fn.add(10, 50);
// const rez2 = add(20, 70);

// const totalAmount = rez1 + rez2;
// console.log("totalAmount===", totalAmount);

//commonJs export - module.exports = {}
//commonJs import - const sum = require('./fn/js)

//ES6 module export - export, export default
//ES6 module import - import {sum} from './fn/js'

generateUser();
console.log("index.js===", generateUser());
