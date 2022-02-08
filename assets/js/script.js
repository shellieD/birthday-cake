
//Wait for the DOM to finish loading
//Get the button element and add event listener to them.

document.addEventListener('DOMContentLoaded', function () {
    addEventListener();
});

/**
 * Accepts user input and converts from str to in.
 * Creates an array of random numbers (min 1 max 5) 
 * The array length is determined by the user input
 * Sorts array numerically then iterates through array
 * to find how many times the largest number appears
 * 
 * @returns numOfCandles
 */
function birthdayCakeCandle() {
    let x = prompt("How old will you be on your next birthday?");
    let age = parseInt(x);

    // Create an array of random numbers between 1 & 5 as long as the age 
    // This sets maximum height for candles to 5
    // This line of code is adapted from Stack Overflow - more info in README.md
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

/**
 * Adds event listener to button.  When button is clicked, the 
 * birdayCakeCandles function is called.
 */
function addEventListener(){
    let button = document.getElementById('candle-btn');
    button.addEventListener('click', function () {
        birthdayCakeCandle();
    });
}
