// Click button ---> Random number generates to begin game.

function randomNumber(){

    var randomNum = Math.floor(Math.random() * 101)

    console.log(randomNum);

   $("#rndm-nmbr").append("<h2>" + randomNum + "</h2>");
}

randomNumber();


// Generate random numbers for each crystal ---> save to var

// Sum crystal vars on click, 

// Check against randomNum, 

// If = display win, 

// If greater than display lose

