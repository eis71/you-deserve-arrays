const prompt = require('prompt-sync')({sigint: true});

let interFace = JSON.parse(prompt("Enter an Array: "));

let interFaceL = interFace[interFace.length - 1];

console.log(interFaceL);




