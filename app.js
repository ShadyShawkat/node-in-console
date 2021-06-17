
const x = 1
const y = 3

const obj = {x,y}

console.log(`x = ${obj.x}, y = ${obj.y}`);
swap(obj)
console.log(`x = ${obj.x}, y = ${obj.y}`);

function swap (values) {
    let temp = values[Object.keys(values)[0]]
    values[Object.keys(values)[0]] = values[Object.keys(values)[1]]
    values[Object.keys(values)[1]] = temp
}

// const chalk = require('chalk')
// const { getNotes } = require('./notes');

// console.log(chalk.bold.inverse('success'));


// console.log(getNotes());

// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'This file was generated from node.');
// fs.appendFileSync('notes.txt', '\rHello again!!!')