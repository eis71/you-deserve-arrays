const prompt = require('prompt-sync')({sigint: true});

let interFace = JSON.parse(prompt("Enter an Array: "));
let booBoo = false;

if (interFace.length >= 10){
    booBoo = true;
}

console.log(booBoo);