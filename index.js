
homeBtnOne = document.getElementById('home-score-btn-1')
homeBtnTwo = document.getElementById('home-score-btn-2')
homeBtnThree = document.getElementById('home-score-btn-3')



scoreEl = document.getElementById('score')
guestEl = document.getElementById('guest')

let homeScore = 0
let guest = 0

function addOne() {
    homeScore += 1
    scoreEl.textContent = homeScore
}

function addTwo() {
    homeScore += 2
    scoreEl.textContent = homeScore
}

function addThree() {
    homeScore += 3
    scoreEl.textContent = homeScore
}
function addOneGuest() {
    guest += 1
    guestEl.textContent = guest
}
function addTwoGuest() {
    guest += 2
    guestEl.textContent = guest
}

function addThreeGuest() {
    guest += 1
    guestEl.textContent = guest
}