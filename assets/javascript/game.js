// animation for crystals
$(".crystal").click(function () {
    $('.crystal-animation').toggleClass('crystal-animation-active');
});

var randomNumber = randomNum(19, 120);
var crystalOne = crystalNum(1, 12);
var crystalTwo = crystalNum(1, 12);
var crystalThree = crystalNum(1, 12);
var crystalFour = crystalNum(1, 12);
var score = 0;
var wins = 0;
var losses = 0;
console.log(crystalOne);

$('.score').text(score);

// Generates a Random Number for player
$('.random-number').text(randomNumber);

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function crystalNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Resets the page after a win or loss
function reset() {
    randomNumber = randomNum(19, 120);
    crystalOne = crystalNum(1, 12);
    crystalTwo = crystalNum(1, 12);
    crystalThree = crystalNum(1, 12);
    crystalFour = crystalNum(1, 12);
    score = 0;
    $('.score').text(score);
    $('.random-number').text(randomNumber);

    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function crystalNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

   
}


// function to add crystal amount to total score
$(".crystal-one").on("click", function () {
    score = (crystalOne + score);
    $('.score').text(score);

    if (score === randomNumber) {
        // Add a win and reset
        wins++;
        $('.add-win').text(wins);
        reset();
    } else if (score > randomNumber) {
        // Add a loss and reset
        losses++;
        $('.add-loss').text(losses);
        reset();
    } else {
    }
})

$(".crystal-two").on("click", function () {
    score = (crystalTwo + score);
    $('.score').text(score);

    if (score === randomNumber) {
        // Add a win and reset
        wins++;
        $('.add-win').text(wins);
        reset();
    } else if (score > randomNumber) {
        // Add a loss and reset
        losses++;
        $('.add-loss').text(losses);
        reset();
    } else {
    }
})

$(".crystal-three").on("click", function () {
    score = (crystalThree + score);
    $('.score').text(score);

    if (score === randomNumber) {
        // Add a win and reset
        wins++;
        $('.add-win').text(wins);
        reset();
    } else if (score > randomNumber) {
        // Add a loss and reset
        losses++;
        $('.add-loss').text(losses);
        reset();
    } else {
    }
})

$(".crystal-four").on("click", function () {
    score = (crystalFour + score);
    $('.score').text(score);

    if (score === randomNumber) {
        // Add a win and reset
        wins++;
        $('.add-win').text(wins);
        reset();
    } else if (score > randomNumber) {
        // Add a loss and reset
        losses++;
        $('.add-loss').text(losses);
        reset();
    } else {
    }
})