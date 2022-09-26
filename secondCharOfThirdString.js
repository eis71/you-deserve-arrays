const prompt = require('prompt-sync')({sigint: true});

let interFace = JSON.parse(prompt("Enter an Array: "));

if (typeof interFace[2] === 'string'){
    console.log(interFace[2].charAt(1));
} else {
    console.log("ERROR! INPUT A STRING!")
}