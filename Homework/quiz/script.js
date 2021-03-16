// make it do stuff //

let question = document.querySelector("#question");
let choices = Array.from(document.querySelectorAll(".choice-text"));
let progressText = document.querySelector("#progressText");
let scoreText = document.querySelector("#score");
let progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswer = true;
let score = 0;
let questionCount = 0
let availableQuestions = []

let questions = [
    {
        question: "What is your question?",
        choice1: "answer",
        choice2: "answer",
        choice3: "answer",
        choice4: "answer",
        answer: 3,
    },
    {
        question: "What is your question?",
        choice1: "answer",
        choice2: "answer",
        choice3: "answer",
        choice4: "answer",
        answer: 3,
    },
    {
        question: "What is your question?",
        choice1: "answer",
        choice2: "answer",
        choice3: "answer",
        choice4: "answer",
        answer: 3,
    },
    {
        question: "What is your question?",
        choice1: "answer",
        choice2: "answer",
        choice3: "answer",
        choice4: "answer",
        answer: 3,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()   
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);

        return window.location.assign("/end.html")
    }

    questionCounter++
    progressText.innerText = "Question ${questionCounter} of ${MAX_QUESTIONS}"
    progressBarFull.getElementsByClassName.width = "${questionCounter/MAX_QUESTIONS) * 100}%"

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestions = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset["number"]

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

        if(classToApply === "correct")
            incrementScore(SCORE_POINTS)

            if(classToApply === "correct") {
                incrementScore(SCORE_POINTS)
            }

            selectedChoice.parentElement.classList.add(classToApply);

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply)
                getNewQuestion()

            }, 1000)
    })
})

incrementScore = num => {
    score +=numscoreText.innerText = score
}

startGame();


// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
