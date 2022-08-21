
const quizData = [
    {
        question: "Qno:1  What does CSS stand for?",
        a: "Colorful Style Sheet",
        b: "Creative Style Sheet",
        c: "Cascading Style Sheet",
        d: "Computing Style sheet",
        correct: "c",
    },
    {
        question: "Qno:2 What is the correct HTML for referring to an external style sheet?",
        a: "<stylesheet>mystyle.css</stylesheet>",
        b: "<link rel='stylesheet' type='text/css'href='mystyle.css'>",
        c: "<style.src='mystyle.css'/>",
        d: "style.css",
        correct: "b",
    },
    {
        question: "Qno:3 Where in an HTML document is the correct place to refer to an external style sheet?",
        a: "At the end of document",
        b: "In the <body> section",
        c: "In the <head> section",
        d: "In the <title> section",
        correct: "c",
    },
    {
        question: "Qno:4 Which HTML tag is used to define an internal style sheet?",
        a: "<script>",
        b: "<css>",
        c: "<style>",
        d: "<html>",
        correct: "c",
    },
    {
        question: "Qno:5 Which HTML attribute is used to define inline styles?",
        a: "style",
        b: "class",
        c: "font",
        d: "styles",
        correct: "a",
    },
    {
        question: " Qno:6 Which is the correct CSS syntax?",
        a: "{body:color=black;}",
        b: "{body;color:black;}",
        c: "body{color:black;}",
        d: "body:color=black;",
        correct: "d",
    },
    {
        question: "Qno:7 How do you insert a comment in a CSS file?",
        a: "*/this is a comment*/",
        b: "//this is a comment",
        c: "//this is a comment//",
        d: "``this is a comment``",
        correct: "a",
    },
    {
        question: "Qno:8 Which property is used to change the background color?",
        a: "bgcolor",
        b: "background color",
        c: "color",
        d: "lineargradient",
        correct: "b",
    },
    {
        question: "Qno:9 Which CSS property is used to change the text color of an element?",
        a: "fgcolor",
        b: "textcolor",
        c: "color",
        d: "fontcolor",
        correct: "c",
    },
    {
        question: "Qno:10 Which CSS property controls the text size?",
        a: "font size",
        b: "text sixe",
        c: "text style",
        d: "font style",
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
var startingMin = 30;
var time = startingMin * 60;

var countDowne = document.getElementById("timer");

setInterval(updateCountDown, 1000);

function updateCountDown() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    // seconds = seconds < 30 ? '0' + seconds : seconds;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDowne.innerHTML = `${minutes}:${seconds}`;
    time--;
}