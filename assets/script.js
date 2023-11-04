var startBtn = document.querySelector("#start-button");
var timerEL = document.querySelector("#time");
var questionEl = document.getElementById("game-section");
var questionIndex = 0;

// console.log(questions[1].choices[2]);

// for (var i = 0; i < questionList[questionIndex].choices.length; i++) {
//   console.log(questions[questionIndex].choices[i]);
// }
function quiz() {
  var questionList = [
    {
      question: "What is not a common data type?",
      choices: ["Strings", "Boleans", "alerts", "numbers"],
      answer: "Boleans",
    },

    {
      question: "What is the capital of United States?",
      choices: ["California", "New York", "Miami", "Florida"],
      answer: "California",
    },

    {
      question: "another question",
      choices: ["1", "2", "3", "4"],
      answer: "4",
    },
  ];

  questionEl.innerHTML = "";
  // console.log(questionList[questionIndex].question);
  // console.log(questionIndex);
  // questionIndex++;

  var question1 = document.createElement("h2");
  question1.textContent = questionList[questionIndex].question;
  //questionEl.textContent = document.body.appendChild(question1);

  var listEl = document.createElement("ol");

  questionEl.appendChild(question1);
  questionEl.appendChild(listEl);

  for (var i = 0; i < questionList[questionIndex].choices.length; i++) {
    var li = document.createElement("li");
    li.textContent = questionList[questionIndex].choices[i];
    li.classList.add("li-class");
    listEl.appendChild(li);
    var liEl = document.querySelectorAll("li");
  }
  var answerChoice = document.querySelectorAll(".li-class");

  // this function will call the next question after the user answered the last, regardless of right or wrong answer
  function nextQuestion(event) {
    console.log("test");

    for (var i = 0; i < questionList[questionIndex].question.length; i++) {
      question1.textContent = questionList[i].question;
    }
    questionEl.appendChild(question1);
  }
  for (let i = 0; i < 4; i++) {
    answerChoice[i].addEventListener("click", nextQuestion);
  }
  // if correct answer add "corect" under the next question
  //if wrong answer add "wrong" and deduct time off the timer
  // when out of questions time = 0 and the time left = points

  // if ((event.target.textContent = questionList[questionIndex].answer)) {
  //   console.log("yay");
  // }
  // }

  // li.addEventListener("click", nextQuestion);
}

//countdown function - a countdown on the top right side of the page to signify the number pf seconds left to finish the quiz.
function countdown() {
  var timeLeft = 75;

  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerEL.textContent = timeLeft;
      timeLeft--;
    } else {
      timerEL.textContent = "0";
      clearInterval(timeInterval);
    }
  }, 1000);
}

//event listeners
startBtn.addEventListener("click", countdown);
startBtn.addEventListener("click", quiz);
