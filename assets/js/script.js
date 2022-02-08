
//Wait for the DOM to finish loading
//Get the button element and add event listener to them.

document.addEventListener('DOMContentLoaded', function () {
    addEventListener();
});

function birthdayCakeCandle() {
    let x = prompt("How old will you be on your next birthday?");
    let age = parseInt(x);

    // create an array of random numbers between 1 & 5 as long as the age 
    // this sets maximum height for candles to 5
    let candles = Array.from({length: age}, () => Math.floor(Math.random() * 5 + 1));

    document.getElementById("container").innerHTML = `
    <div class="candles-div">
    <p>You have ${age} candles</p>
    <p>${candles}</p>
    </div>
    `;

    let candlesArr = candles.sort().reverse();

    let tallCandle = candlesArr[0];
    let numOfCandles = 0;
    for (i=0; i <= candlesArr.length; i++)
        if (candlesArr[i] === tallCandle) {
            numOfCandles += 1;
        }

    document.getElementById("result-container").innerHTML = `
    <div class="candles-div">
    <p>Your tallest candle is ${tallCandle} unit/s high</p>
    <p>You can blow out ${numOfCandles} candles. </p>
    </div>
    `;

    return numOfCandles;
}

function addEventListener(){
    let button = document.getElementById('candle-btn');
    button.addEventListener('click', function () {
        birthdayCakeCandle();
    });
}

