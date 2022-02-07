
//Wait for the DOM to finish loading
//Get the button element and add event listener to them.

document.addEventListener('DOMContentLoaded', function () {
    addEventListener();
});

var candles = [];
console.log(candles);


function birthdayCakeCandle() {
    let age = prompt("How old will you be on your next birthday?");
    if (age != null) {
        console.log(age);
    }
    
}

function addEventListener(){
    let button = document.getElementById('candle-btn');
    button.addEventListener('click', function () {
        birthdayCakeCandle();
    });
};

