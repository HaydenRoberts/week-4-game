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

// animation for crystals
$(".crystal").click(function () {
    $('.crystal-animation').toggleClass('crystal-animation-active');
});

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

function resetTwo() {
    randomNumber = randomNum(19, 120);
    crystalOne = crystalNum(1, 12);
    crystalTwo = crystalNum(1, 12);
    crystalThree = crystalNum(1, 12);
    crystalFour = crystalNum(1, 12);
    score = 0;
    wins = 0;
    losses = 0;
    $('body').removeClass('body-level-two body-level-three body-level-four body-level-five');
    $('body').addClass('body-reset');
    $('.btn').addClass('hidden');
    $('.middle-class').removeClass('victory');
    $('.victory-message').empty();
    $('.score').text(score);
    $('.random-number').text(randomNumber);
    $('.add-loss').text(losses);
    $('.add-win').text(wins);
    console.log('reset test');

    $(".crystal-1").html("<img src='assets/images/c1.png' class='crystal-size'>");
    $(".crystal-2").html("<img src='assets/images/c2.png' class='crystal-size'>");
    $(".crystal-3").html("<img src='assets/images/c3.png' class='crystal-size'>");
    $(".crystal-4").html("<img src='assets/images/c4.png' class='crystal-size'>");

    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function crystalNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
function checkWins() {
    if (wins > 4 && wins < 10) {
        $('body').removeClass('body-reset');
        $('body').addClass('body-level-two');
        crystalOne = crystalNum(1, 12);
        $(".crystal-1").html("<img src='assets/images/c1_lv2.png' class='crystal-size'>");
        console.log(crystalOne);
    } else if (wins > 9 && wins < 15) {
        $('body').addClass('body-level-three');
        crystalOne = crystalNum(1, 12);
        $(".crystal-2").html("<img src='assets/images/c2_lv3.png' class='crystal-size crystal-animation'>");
        console.log(crystalOne);
        console.log('Crystal 1: ' + crystalOne);
        crystalTwo = crystalNum(1, 12);
        console.log('Crystal 2: ' + crystalTwo);
    } else if (wins > 14 && wins < 20) {
        $('body').addClass('body-level-four');
        crystalOne = crystalNum(1, 12);
        $(".crystal-3").html("<img src='assets/images/c3_lv4.png' class='crystal-size crystal-animation'>");
        crystalTwo = crystalNum(1, 12);
        crystalThree = crystalNum(1, 12);
    } else if (wins > 19) {
        $('body').addClass('body-level-five');
        crystalOne = crystalNum(1, 12);
        $(".crystal-4").html("<img src='assets/images/c4_lv5.png' class='crystal-size crystal-animation'>");
        crystalTwo = crystalNum(1, 12);
        crystalThree = crystalNum(1, 12);
        crystalFour = crystalNum(1, 12);

        console.log('Crystal 1: ' + crystalOne);
        console.log('Crystal 2: ' + crystalTwo);
        console.log('Crystal 3: ' + crystalThree);
        console.log('Crystal 4: ' + crystalFour);
    } else if (wins > 20) {
        $('.hidden').removeClass('hidden');
        $('.victory-message').text('You Win!!');
        $('.middle-class').addClass('victory');
        $('.btn').text('Play Again?');
        $('button').on('click',function(){
            resetTwo();
        })
    } else {
        
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
        checkWins(wins);
        reset();
    } else if (score > randomNumber) {
        // Add a loss and reset
        losses++;
        $('.add-loss').text(losses);
        if (losses === 10) {
            resetTwo();
        }
        reset();
    } else {
        checkWins(wins);
    }
})

$(".crystal-two").on("click", function () {
    score = (crystalTwo + score);
    $('.score').text(score);

    if (score === randomNumber) {
        // Add a win and reset
        wins++;
        $('.add-win').text(wins);
        checkWins(wins);
        reset();
    } else if (score > randomNumber) {
        // Add a loss and reset
        losses++;
        $('.add-loss').text(losses);
        if (losses === 10) {
            resetTwo();
        }
        reset();
    } else {
        checkWins(wins);
    }
})

$(".crystal-three").on("click", function () {
    score = (crystalThree + score);
    $('.score').text(score);

    if (score === randomNumber) {
        // Add a win and reset
        wins++;
        $('.add-win').text(wins);
        checkWins(wins);
        reset();
    } else if (score > randomNumber) {
        // Add a loss and reset
        losses++;
        $('.add-loss').text(losses);
        if (losses === 10) {
            resetTwo();
        }
        reset();
    } else {
        checkWins(wins);
    }
})

$(".crystal-four").on("click", function () {
    score = (crystalFour + score);
    $('.score').text(score);

    if (score === randomNumber) {
        // Add a win and reset
        wins++;
        $('.add-win').text(wins);
        checkWins(wins);
        reset();
    } else if (score > randomNumber) {
        // Add a loss and reset
        losses++;
        $('.add-loss').text(losses);
        if (losses === 10) {
            resetTwo();
        }
        reset();
    } else {
        checkWins(wins);
    }
})