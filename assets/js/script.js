
//Wait for the DOM to finish loading
//Get the button element and add event listener to them.

document.addEventListener('DOMContentLoaded', function () {
    addEventListener();
});

function birthdayCakeCandle() {
    let x = prompt("How old will you be on your next birthday?");
    let age = parseInt(x);
    console.log(age)
    // create an array of random numbers between 1 & 5 as long as the age 
    // this will 
    let candles = Array.from({length: age}, () => Math.floor(Math.random() * 5 + 1));
    console.log(candles);
    candles.sort();
    console.log(candles);
    
}

function addEventListener(){
    let button = document.getElementById('candle-btn');
    button.addEventListener('click', function () {
        birthdayCakeCandle();
    });
};

