let homeCount = document.getElementById ("home-count")
let guestCount = document.getElementById ("guest-count")
let countOne = 0

function plusOne () {
    countOne += 1
    homeCount.textContent = countOne
}

function plusTwo () {
    countOne += 2
    homeCount.textContent = countOne
}

function plusThree () {
    countOne += 3
    homeCount.textContent = countOne
}

function plusOneGuest () {
    countOne += 1
    guestCount.textContent = countOne
}

function plusTwoGuest () {
    countOne += 2
    guestCount.textContent = countOne
}

function plusThreeGuest () {
    countOne += 3
    guestCount.textContent = countOne
}

function reset () {
    
    homeCount.textContent = 0
    guestCount.textContent = 0
    countOne = 0
}




// console.log (homeCount)