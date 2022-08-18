
const quizData = [
    {
        question: "Qno:1  What Does HTML stands for?",
        a: "Hyperlinks and text markup language",
        b: " Hypertext markup language",
        c: "Hyper tools and text markup language",
        d: "Home tool markup language",
        correct: "b",
    },
    {
        question: "Qno:2What is the largest heading in HTML?",
        a: "<heading>",
        b: "<head>",
        c: "<h6>",
        d: "<h1>",
        correct: "d",
    },
    {
        question: "Qno:3 What is the smallest heading in HTML?",
        a: "<heading>",
        b: "<head> ",
        c: "<h6>",
        d: "<h1>",
        correct: "c",
    },
    {
        question: "Qno:4 What is the correct HTML element for inserting a line break?",
        a: "<br>",
        b: "<bar>",
        c: "<braek>",
        d: "<lb>",
        correct: "a",
    },
    {
        question: "Qno:5 What is the correct HTML for adding a background color? ",
        a: "<body bg= 'yellow'>",
        b: "color= yellow",
        c: "<body style ='background-color :yellow;'>",
        d: "<background>yellow<background>",
        correct: "a",
    },
    {
        question: " Qno:6 Choose the correct HTML element to define important text?",
        a: "<b>",
        b: "<i>",
        c: "<strong>",
        d: "<important>",
        correct: "d",
    },
    {
        question: "Qno:7 Choose the correct HTML element to define emphasized text?",
        a: "<italic>",
        b: "<em>",
        c: "<i>",
        d: "<b>",
        correct: "b",
    },
    {
        question: "Qno:8 What is the correct HTML for creating a hyperlink?",
        a: "<a url=''>",
        b: "<a href=''>",
        c: "<a>",
        d: "<a https=''>",
        correct: "b",
    },
    {
        question: "Qno:9 Which character is used to indicate an end tag?",
        a: "^",
        b: "*",
        c: "/",
        d: "<",
        correct: "c",
    },
    {
        question: "Qno:10 Which of these element are all <table> elements?",
        a: "<table><tr><td>",
        b: " <td><table><td>",
        c: "<tr><table><td>",
        d: "<table>",
        correct: "a",
    },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
               <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    
               <button onclick="location.reload()">Reload</button>
               `
        }
    }
})