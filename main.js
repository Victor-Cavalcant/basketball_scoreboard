const homeBtn1 = document.getElementById('homeBtn1')
const homeBtn2 = document.getElementById('homeBtn2')
const homeBtn3 = document.getElementById('homeBtn3')
const gestBtn1 = document.getElementById('guestBtn1')
const gestBtn2 = document.getElementById('guestBtn2')
const gestBtn3 = document.getElementById('guestBtn3')
const newGameBtn = document.getElementById('newGameBtn')


const homeScoreEl = document.getElementById('homeScore')
const guestScoreEl = document.getElementById('guestScore')

let homeScore = 0
let guestScore = 0

homeBtn1.addEventListener('click', function(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
})

homeBtn2.addEventListener('click', function(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
})

homeBtn3.addEventListener('click', function(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}) 

gestBtn1.addEventListener('click', function(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
})

gestBtn2.addEventListener('click', function(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
})

gestBtn3.addEventListener('click', function(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
})

newGameBtn.addEventListener('click', function(){
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
})