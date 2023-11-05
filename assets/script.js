//main vars of the page
var startBtn = document.querySelector("#start-button");
var timerEL = document.querySelector("#time");
var questionEl = document.getElementById("game-section");
var questionIndex = 0;
var responseDiv = document.getElementById("response");
var userPoints = 0;
var timeLeft = 75;

// the quiz function - contains the questions (objects) and the functionality of the changing questions and the right and wrong
//countdown function - a countdown on the top right side of the page to signify the number pf seconds left to finish the quiz.

var timeInterval;
function countdown() {
  timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerEL.textContent = timeLeft;
      timeLeft--;
    } else {
      timerEL.textContent = "0";
      clearInterval(timeInterval);
    }
  }, 1000);
}
function deductTime() {
  timeLeft -= 5;
}

function stopTimer() {
  clearInterval(timeInterval);
  localStorage.setItem("userTime", timeLeft.toString());
}

function quiz() {
  //question list - the object that contains the quiz questions
  var questionList = [
    {
      question: "Commonly used data types do NOT include:",
      choices: ["Strings", "Boleans", "Alerts", "numbers"],
      answer: "Alerts",
    },

    {
      question:
        "The condition in an if/ else statemet is enclosed with ______ ",
      choices: ["quotes", "curly bracktes", "parenthesis", "square brackets"],
      answer: "parenthesis",
    },

    {
      question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "Terminal/Bash", "for loops", "consol.log"],
      answer: "console.log",
    },
    {
      question: "Arrays in JavaScript can be used to store _______",
      choices: [
        "Numbers and Strings",
        "Other arrays",
        "Booleans",
        "all of the above",
      ],
      answer: "all of the above",
    },
    {
      question:
        "String Values must be enclosed within _____ when being assiend to variables.",
      choices: ["Commas", "Curly brackets", "Quotes", "Parethesis"],
      answer: "Quotes",
    },
  ];

  // clearing the HTML
  questionEl.innerHTML = "";

  //declaring the question and answer options and appending them to the page
  var question1 = document.createElement("h2");
  question1.textContent = questionList[questionIndex].question;
  var listEl = document.createElement("ol");
  questionEl.appendChild(question1);
  questionEl.appendChild(listEl);

  // the for loop that creates li for the answer options - pulls from the questionList object
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
    questionIndex++;
    if (questionIndex < questionList.length) {
      question1.textContent = questionList[questionIndex].question;
      questionEl.appendChild(question1);
      questionEl.appendChild(question1);
      var answers = document.querySelectorAll(".li-class");
      for (let i = 0; i < 4; i++) {
        answers[i].textContent = questionList[questionIndex].choices[i];
      }
      questionEl.appendChild(listEl);
    } else {
      questionEl.innerHTML = "";
      var doneEL = document.createElement("h1");
      doneEL.textContent = "all done!";
      questionEl.append(doneEL);
      stopTimer();
    }
  }

  function correctAnswer() {
    responseDiv.innerText = "";
    var correctTitle = document.createElement("h2");
    correctTitle.classList.add("responseClass");
    correctTitle.textContent = "Correct";
    responseDiv.append(correctTitle);
    userPoints++;
    localStorage.setItem("userPoints", userPoints.toString());
  }
  function wrongAnswer() {
    responseDiv.innerText = "";
    var wrongTitle = document.createElement("h2");
    wrongTitle.classList.add("responseClass");
    wrongTitle.textContent = "Wrong";
    responseDiv.append(wrongTitle);
    deductTime();
  }

  for (let i = 0; i < 4; i++) {
    answerChoice[i].addEventListener("click", function (event) {
      var userAnswer = event.target.textContent;

      console.log(userAnswer);

      if (userAnswer === questionList[questionIndex].answer) {
        correctAnswer();
      } else {
        wrongAnswer();
      }
      nextQuestion();
    });
  }

  if (questionIndex >= questionList.length) {
    stopTimer();
  }
  //local storage of the user points
  var userScore =
    localStorage.getItem("userPoints") + localStorage.getItem("userTime");
  // var userScore = timeLeft + userPoints;
  console.log(userScore);
}

function startQuiz() {
  countdown();
  quiz();
}
//event listeners
startBtn.addEventListener("click", startQuiz);
