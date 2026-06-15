

// document.querySelector('button').addEventListener('click', handleClick);

// function handleClick() {
//     alert('I got clicked');
// }

var numDrumBtns = document.querySelectorAll('.drum').length;
var buttonInnerHTML = this.innerHTML;

function handleSwitch(val) {
    switch (val) {
        case 'w':
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case 'k':
            var kickbass = new Audio('./sounds/kick-bass.mp3');
            kickbass.play();
            break;
        case 'l':
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        default:
            break;
    }
}

// handle animation
function buttonAnimation(currentKey) {

    var activeButton = document.querySelector('.' + currentKey);
    
    //adding css class t
    activeButton.classList.add('pressed');

    setTimeout(function() {
        activeButton.classList.remove('pressed');
        
    }, 100 /* miliseconds */);
}

// Detecting button pressed 
for (let i = 0; i < numDrumBtns; i++) {

    /** 
     * select elements involved 
     * add event listeners and pass function 
     */ 
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {     

        // this = get the identity that triggers the event
        var buttonInnerHTML = this.innerHTML;

        handleSwitch(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });

}

// Detecting key pressed
document.addEventListener('keydown', function (e) { //added to the entire document

    /**
     * e - tap into the identity that triggers the event
     * .key - identifies the key pressed
     */ 
    var keyPressed = e.key;

    handleSwitch(keyPressed);
    buttonAnimation(keyPressed);
});


// OR
// var numDrumBtns = document.querySelectorAll('.drum').length;

// for (let i = 0; i < numDrumBtns; i++) {

//     //Using normal function
//     document.querySelectorAll('.drum')[i].addEventListener('click', handleClick); 

//     function handleClick() {
//         alert('I got clicked!');
//     }
// }

// OR
// var i = 0

// while (i < numDrumBtns) {
//     document.querySelectorAll('.drum')[i].addEventListener('click', function () {
//         alert('I got clicked!');
//     });
//     i++;
// }

