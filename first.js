const questions = [
  {
    question: "How many chambers does human heart have?",
    answers: [
      { text: "One", correct: false },
      { text: "Two", correct: false },
      { text: "Three", correct: false },
      { text: "Four", correct: true },
    ],
  },
  {
    question: "What is the only mammal that can fly?",
    answers: [
      { text: "Sparrow", correct: false },
      { text: "Pigeon", correct: false },
      { text: "Bat", correct: true },
      { text: "Owel", correct: false },
    ],
  },
  {
    question: "Which is the largest continent?",
    answers: [
      { text: "Asia", correct: true },
      { text: "Africa", correct: false },
      { text: "Europe", correct: false },
      { text: "Australia", correct: false },
    ],
  },
  {
    question:
      "Which colour has the highest wavelength in the visible light spectrum?",
    answers: [
      { text: "Yellow", correct: false },
      { text: "Red", correct: true },
      { text: "Blue", correct: false },
      { text: "Violet", correct: false },
    ],
  },
  {
    question: "Who is the author of the book Harry Potter?",
    answers: [
      { text: "George R.R. Martin", correct: false },
      { text: "John Milton", correct: false },
      { text: "J.K. Rowling", correct: true },
      { text: "Toni Morrison", correct: false },
    ],
  },
  {
    question: "Which is the hottest planet in the solar system?",
    answers: [
      { text: "Mercury", correct: false },
      { text: "Venus", correct: true },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
    ],
  },
  {
    question: "Which metal is also called Quick Silver?",
    answers: [
      { text: "Silver", correct: false },
      { text: "Platinum", correct: false },
      { text: "Tungsten", correct: false },
      { text: "Mercury", correct: true },
    ],
  },
  {
    question: "Which country won the FIFA World Cup in 2018?",
    answers: [
      { text: "France", correct: true },
      { text: "Costa Rica", correct: false },
      { text: "Croaia", correct: false },
      { text: "Argentina", correct: false },
    ],
  },
  {
    question:
      "Which is the second highest mountain in the world form sea level?",
    answers: [
      { text: "Mt. K2", correct: true },
      { text: "Manaslu", correct: false },
      { text: "Mt. Everest", correct: false },
      { text: "Lhotse", correct: false },
    ],
  },
  {
    question: "Who is known as the father of Quntum Physics?",
    answers: [
      { text: "JJ Thomson", correct: false },
      { text: "Ernest Rutherford", correct: false },
      { text: "Max Plank", correct: true },
      { text: "Albert Einstein", correct: false },
    ],
  },
  {
    question: "Who wrote the play Romeo and Juliet?",
    answers: [
      { text: "Mary Shelley", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Robert Frost", correct: false },
    ],
  },
  {
    question: "Which language has the most native speakers worldwide?",
    answers: [
      { text: "English", correct: false },
      { text: "French", correct: false },
      { text: "Spanish", correct: false },
      { text: "Chinese", correct: true },
    ],
  },
  {
    question: "What is the longest river in the world?",
    answers: [
      { text: "Amazon", correct: false },
      { text: "Yangtze", correct: false },
      { text: "Huang He", correct: false },
      { text: "Nile", correct: true },
    ],
  },
  {
    question: "What is the capital city of Australia?",
    answers: [
      { text: "Canberra", correct: true },
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Brisbane", correct: false },
    ],
  },
  {
    question: "In which country was the first FIFA World Cup held?",
    answers: [
      { text: "Argentina", correct: false },
      { text: "Brazil", correct: false },
      { text: "Uruguay", correct: true },
      { text: "Spain", correct: false },
    ],
  },
  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Euro", correct: false },
      { text: "Dollar", correct: false },
      { text: "Riyal", correct: false },
      { text: "Yen", correct: true },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Fe", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Michelangelo", correct: false },
      { text: "Vincent van Gogh", correct: false },
    ],
  },
  {
    question: "What is the freezing point of water in Celsius?",
    answers: [
      { text: "-4°c", correct: false },
      { text: "0°c", correct: true },
      { text: "4°c", correct: false },
      { text: "10°c", correct: false },
    ],
  },
  {
    question: "In which year did World War II end?",
    answers: [
      { text: "1918", correct: false },
      { text: "1945", correct: true },
      { text: "1948", correct: false },
      { text: "1950", correct: false },
    ],
  },
];

const QuestionElement = document.querySelector(".question");
const AnswerElement = document.querySelector(".answersBut");
const NextButton = document.querySelector("#next");

let score = 0;
let curr_ques_indx = 0;

function startQuiz() {
  score = 0;
  curr_ques_indx = 0;
  NextButton.innerHTML = "Next";
  showQuestion();
}

function resetState() {
  NextButton.style.display = "none";
  while (AnswerElement.firstChild) {
    AnswerElement.removeChild(AnswerElement.firstChild);
  }
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[curr_ques_indx];
  let questionNO = curr_ques_indx + 1;
  QuestionElement.innerHTML = questionNO + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    AnswerElement.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", (e) => {
      const selectedBtn = e.target;
      const isCorrect = selectedBtn.dataset.correct === "true";

      if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
      } else {
        selectedBtn.classList.add("incorrect");
      }
      Array.from(AnswerElement.children).forEach((button) => {
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
        }
        button.disabled = true;
      });
      NextButton.style.display = "block";
    });
  });
}

function showScore() {
  resetState();
  QuestionElement.innerHTML = `You score  is ${score} out of ${questions.length} !`;
  NextButton.innerHTML = "Play Again";
  NextButton.style.display = "block";
}

function nextQuestion() {
  curr_ques_indx++;
  if (curr_ques_indx < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

NextButton.addEventListener("click", () => {
  if (curr_ques_indx < questions.length) {
    nextQuestion();
  } else {
    startQuiz();
  }
});

startQuiz();
