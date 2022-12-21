const data = [

    {
        id: 1,
        question: "What is an array?",
        answers: [
            { answer: "A type of database", isCorrect: false },
            { answer: "A programming language", isCorrect: false },
            { answer: " A set of values stored in a specific order", isCorrect: true },
            { answer: "A type of sorting algorithm", isCorrect: false }
        ],

    },

    {
        id: 2,
        question: "What is the capital of India?",
        answers: [
            { answer: "Mumbai", isCorrect: false },
            { answer: "Delhi", isCorrect: true },
            { answer: " Kolkata", isCorrect: false },
            { answer: "Chennai", isCorrect: false }
        ],

    },

    {
        id: 3,
        question: "What is the capital of Banglades?",
        answers: [
            { answer: "Dhaka", isCorrect: true },
            { answer: "Chittagong", isCorrect: false },
            { answer: " Sylhet", isCorrect: false },
            { answer: "Josor", isCorrect: false }
        ],

    },

    {
        id: 4,
        question: "What is the capital of Pakistan?",
        answers: [
            { answer: "Peshawar ", isCorrect: false },
            { answer: "Karachi ", isCorrect: false },
            { answer: "Lahore", isCorrect: false },
            { answer: "Islamabad ", isCorrect: true }
        ],

    },
    {
        id: 5,
        question: "What is the capital of Argentina?",
        answers: [
            { answer: "Buenos Aires", isCorrect: true },
            { answer: "Santiago", isCorrect: false },
            { answer: "Montevideo", isCorrect: false },
            { answer: "Lima", isCorrect: false }
        ],

    },
    {
        id: 6,
        question: "Which of these fish is actually a fish?",
        answers: [
            { answer: "swordfish", isCorrect: true },
            { answer: "jellyfish", isCorrect: false },
            { answer: "starfish", isCorrect: false },
            { answer: "crayfish", isCorrect: false },
        ],
    },
    {
        id: 7,
        question: "A flutter is a group of:",
        answers: [
            { answer: "bees", isCorrect: false },
            { answer: "penguins", isCorrect: false },
            { answer: "butterflies", isCorrect: true },
            { answer: "camels", isCorrect: false },
        ],
    },
    {
        id: 8,
        question: "A group of which animals is referred to as a wake?",
        answers: [
            { answer: "bats", isCorrect: false },
            { answer: "vultures", isCorrect: true },
            { answer: "ants", isCorrect: false },
        ],
    },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    showQuestion(qIndex);
};

play.addEventListener("click", () => {
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain()
})

const showResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";

    resultScreen.querySelector(
        ".correct"
    ).textContent = `Correct Answers: ${correctCount}`;

    resultScreen.querySelector(
        ".wrong"
    ).textContent = `Wrong Answers: ${wrongCount}`;

    resultScreen.querySelector(".score").textContent = `Score: ${(correctCount - wrongCount) * 10
        }`;
};

const showQuestion = (qNumber) => {
    if (qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers
        .map(
            (item, index) =>
                `
  <div class="answer">
      <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
      <label for="1">${item.answer}</label>
  </div>
  `
        )
        .join("");

    selectAnswer();
};

const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach((el) => {
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value;
        });
    });
};

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswer !== null) {
            selectedAnswer === "true" ? correctCount++ : wrongCount++;
            qIndex++;
            showQuestion(qIndex);
        } else alert("Select an answer!");
    });
};

showQuestion(qIndex);
submitAnswer();