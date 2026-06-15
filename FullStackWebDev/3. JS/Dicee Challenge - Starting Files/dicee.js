// My Code
// var randomNumber = Math.floor((Math.random() * 6) + 1);

// function diceImg(imgClass) {
//     var randomNumber = Math.floor((Math.random() * 6) + 1);
//     if (randomNumber === 1){
//         document.querySelector(imgClass).setAttribute('src', './images/dice1.png');
//     } else if (randomNumber === 2) {
//         document.querySelector(imgClass).setAttribute('src', './images/dice2.png');
//     } else if (randomNumber === 3) {
//         document.querySelector(imgClass).setAttribute('src', './images/dice3.png');
//     } else if (randomNumber === 4) {
//         document.querySelector(imgClass).setAttribute('src', './images/dice4.png');
//     } else if (randomNumber === 5) {
//         document.querySelector(imgClass).setAttribute('src', './images/dice5.png');
//     } else if (randomNumber === 6) {
//         document.querySelector(imgClass).setAttribute('src', './images/dice6.png');
//     }
//     return randomNumber
// }

// var number1 = diceImg('.img1');
// var number2 = diceImg('.img2');

// if (number1 > number2) {
//     document.querySelector('h1').textContent = 'Player 1 WINS';
// } else if (number1 < number2) {
//     document.querySelector('h1').textContent = 'Player 2 WINS';
// } else {
//     document.querySelector('h1').textContent = 'DRAW';
// }

// Angela's Code
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomImageSource1 = './images/dice' + randomNumber1 + '.png';
document.querySelectorAll('img')[0].setAttribute('src', randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
var randomImageSource2 = './images/dice' + randomNumber2 + '.png';
document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 1 WINS';
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 2 WINS';
} else {
    document.querySelector('h1').innerHTML = 'DRAW';
}
