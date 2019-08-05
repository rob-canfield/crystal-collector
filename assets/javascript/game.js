// Click button ---> Random number generates to begin game.


function randomNum() 
    {randomNum = Math.floor(Math.random() * 120) + 19;
        console.log(randomNum);
        $("#rndm-nmbr").append("<h2>" + randomNum + "</h2>");
    }
randomNum();

var redCrystalNum = Math.floor(Math.random() * 13) + 1;
var blueCrystalNum = Math.floor(Math.random() * 13) + 1;
var yellowCrystalNum = Math.floor(Math.random() * 13) + 1;
var greenCrystalNum = Math.floor(Math.random() * 13) + 1;


function crystalNums() {
    $("#redcrystal").on('click', function () {   
         
        if (redCrystalNum !== blueCrystalNum && redCrystalNum !== yellowCrystalNum && redCrystalNum !== greenCrystalNum){
            crystals.push(redCrystalNum); 
            sum = arrsum(crystals)
        } else {
            redCrystalNum = Math.floor(Math.random() * 13) + 1;
        } 
    });

    $("#bluecrystal").on('click', function () { 
        if (blueCrystalNum !== redCrystalNum && blueCrystalNum !== yellowCrystalNum && blueCrystalNum !== greenCrystalNum){
            crystals.push(blueCrystalNum); 
        } else {
            blueCrystalNum = Math.floor(Math.random() * 13) + 1;
        }   
    });

    $("#yellowcrystal").on('click', function () {
        if (yellowCrystalNum !== redCrystalNum && yellowCrystalNum !== blueCrystalNum && yellowCrystalNum !== greenCrystalNum){
            crystals.push(yellowCrystalNum); 
        } else {
            yellowCrystalNum = Math.floor(Math.random() * 13) + 1;
        } 
    });

    $("#greencrystal").on('click', function () {  
        if (greenCrystalNum !== redCrystalNum && greenCrystalNum !== blueCrystalNum && greenCrystalNum !== yellowCrystalNum){
            crystals.push(greenCrystalNum);
        } else {
            greenCrystalNum = Math.floor(Math.random() * 13) + 1;
        }   
    });
}
crystalNums();

var crystals = []
console.log(crystals);

var sum = 0

function arrsum(arr) {
    sum = (arr.reduce(function(xs, x) {
        xs = xs + x
    }, 0))
}

var totalScore = sum

var wins = 0
var losses = 0

if (totalScore === randomNum){
    wins++
    $("#wins").append("WINS: " + wins);
    randomNum();
    crystalNums();
    alert("You're a freaking wizard");
} else if (totalScore > randomNum){
    losses++
    $("#losses").append("LOSSES: " + losses);
    randomNum();
    crystalNums();
    alert("try again...")
}





// Generate random numbers for each crystal ---> save to var

// Sum crystal vars on click, 

// Check against randomNum, 

// If = display win, 

// If greater than display lose

