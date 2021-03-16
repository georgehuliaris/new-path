const username = document.querySelector("#username")
const saveScoreBtn = document.querySelector("#saveScoreBtn")
const finalScore = document.querySelector("#finalScore")
const mostRecentScore = localStorage.getItem("MostRecentScore")

const highScores = JSON.parse(localStorage.getItem("highScores")) || []
const MAX_HIGH_SCORES = 5

const highScoresList = document.querySelector("#highScoresList")
const highScores = JSON.parse(localStorage.getItem("highScores")) || []

highScoresList.innerHTML = 
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("")

finalScore.innerText = mostRecentScore

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e =  {
    score: mostRecentScore,
    name: username.value
}

highScores.push(score)

highScores.sort((a,b) => {
    return b.score - a.score
})

highScores.splice(5)

localStorage.setItem("highScores", JSON.stringify(highScores))
window.location.assign("/")

