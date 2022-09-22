const prompt = require('prompt-sync')({sigint: true});

let interFace = JSON.parse(prompt("Enter an Array: "));

console.log(interFace[0]);