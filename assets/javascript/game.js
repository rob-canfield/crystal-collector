function random() {
    return Math.floor(Math.random() * 120) + 19;
}

function randomLess() {
    return Math.floor(Math.random() * 13) + 1;
}

var randomNumber = random();
console.log(randomNumber);
$("#rndm-nmbr").text(randomNumber);

var redCrystalNum = randomLess();
var blueCrystalNum = randomLess();
var yellowCrystalNum = randomLess();
var greenCrystalNum = randomLess();

var totalScore = 0

var wins = 0
var losses = 0

$("#redcrystal").on('click', function () {

    if (redCrystalNum !== blueCrystalNum && redCrystalNum !== yellowCrystalNum && redCrystalNum !== greenCrystalNum) {
        totalScore = (totalScore += redCrystalNum);
        $("#score").text(totalScore);
    } else {
        redCrystalNum = randomLess();
    }
});

$("#bluecrystal").on('click', function () {
    if (blueCrystalNum !== redCrystalNum && blueCrystalNum !== yellowCrystalNum && blueCrystalNum !== greenCrystalNum) {
        totalScore = (totalScore += blueCrystalNum);
        $("#score").text(totalScore);
    } else {
        blueCrystalNum = randomLess();
    }
});

$("#yellowcrystal").on('click', function () {
    if (yellowCrystalNum !== redCrystalNum && yellowCrystalNum !== blueCrystalNum && yellowCrystalNum !== greenCrystalNum) {
        totalScore = (totalScore += yellowCrystalNum);
        $("#score").text(totalScore);
    } else {
        yellowCrystalNum = randomLess();
    }
});

$("#greencrystal").on('click', function () {
    if (greenCrystalNum !== redCrystalNum && greenCrystalNum !== blueCrystalNum && greenCrystalNum !== yellowCrystalNum) {
        totalScore = (totalScore += greenCrystalNum);
        $("#score").text(totalScore);
    } else {
        greenCrystalNum = randomLess();
    }
});


$(".crystal").on('click', function () {
    if (randomNumber === totalScore) {
        wins++
        $("#wins").text("WINS: " + wins);
        alert("You're a freaking wizard");
        totalScore = 0
        $("#score").text(totalScore);
    } else if (totalScore > randomNumber) {
        losses++
        $("#losses").text("LOSSES: " + losses);
        alert("try again...")
        totalScore = 0
        $("#score").text(totalScore);
    }
});



















// Generate random numbers for each crystal ---> save to var

// Sum crystal vars on click, 

// Check against randomNum, 

// If = display win, 

// If greater than display lose

