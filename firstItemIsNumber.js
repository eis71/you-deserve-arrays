const prompt = require('prompt-sync')({sigint: true});

let interFace = JSON.parse(prompt("Enter an Array: "));
let booBoo = false;

if (!isNaN(interFace[0])){
    booBoo = true;
}

console.log(booBoo);