
const quizData = [
    {
        question: "Qno:1  What Does JS stands for?",
        a: "JavaSript",
        b: "jascript",
        c: "jasonscripting",
        d: "josfein language",
        correct: "b",
    },
    {
        question: "Qno:2 Inside which HTML element do we put the JavaScript?",
        a: "<script>",
        b: "<scripting>",
        c: "<js>",
        d: "<javascript>",
        correct: "a",
    },
    {
        question: "Qno:3 Where is the correct place to insert a JavaScript?",
        a: "the <head> section",
        b: "the <body> section",
        c: "Both a and b",
        d: "None of them",
        correct: "b",
    },
    {
        question: "Qno:4 What is the correct syntax for referring to an external script called 'xxx.js'?",
        a: "<script href = 'xxx.js>'",
        b: "<script name = 'xxx.js>'",
        c: "<script src = 'xxx.js>'",
        d: "<script scr = 'xxx.js>'",
        correct: "a",
    },
    {
        question: "Qno:5 How do you write 'Hello World' in an alert box?",
        a: "alert('hello world')",
        b: "alertbox('hello world')",
        c: "msg('hello world')",
        d: "alert(hello world)",
        correct: "a",
    },
    {
        question: " Qno:6 How do you create a function in JavaScript?",
        a: "function=myfunction()",
        b: "function:myfunction()",
        c: "function myfunction()",
        d: "myfunction()",
        correct: "c",
    },
    {
        question: "Qno:7 How do you call a function named 'myFunction'?",
        a: "call myfunction()",
        b: "myfunction()",
        c: "myfuntion(call)",
        d: "call function myfunction()",
        correct: "b",
    },
    {
        question: "Qno:8 How to write an IF statement in JavaScript?",
        a: "if(i == 5)",
        b: "if(i ==== 5)",
        c: "if(i = 5)",
        d: "ifi == 5",
        correct: "a",
    },
    {
        question: "Qno:9 How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        a: "if(i !== 5)",
        b: "if(i !==== 5)",
        c: "if(i != 5)",
        d: "ifi !== 5",
        correct: "c",
    },
    {
        question: "Qno:10 How can you add a comment in a JavaScript?",
        a: "/* this is a comment */",
        b: "this is a commment//",
        c: "//this is a comment//",
        d: "// this is a comment",
        correct: "d",
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
var startingMin = 50;
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