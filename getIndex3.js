const prompt = require('prompt-sync')({sigint: true});

let interFace = JSON.parse(prompt("Enter an Array: "));

if (interFace.length >= 4){
    console.log(interFace[3]);
} else if (interFace.length === 3){
    console.log(interFace[2]);
} else if (interFace.length === 2){
    console.log(interFace[1]);
} else if (interFace.length === 1){
    console.log(interFace[0]);
}