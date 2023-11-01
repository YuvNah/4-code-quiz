var startBtn = document.querySelector("#start-button");
var timerEL = document.querySelector("#time");
var questionEl = document.getElementById("game-section");
var questionIndex = 0;

var questions = [
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
];
// console.log(questions[1].choices[2]);

// for (var i = 0; i < questions[questionIndex].choices.length; i++) {
//   console.log(questions[questionIndex].choices[i]);
// }
function quiz() {
  questionEl.innerHTML = "";
  // console.log(questions[questionIndex].question);
  // console.log(questionIndex);
  // questionIndex++;

  var question1 = document.createElement("h2");
  question1.textContent = questions[questionIndex].question;
  //questionEl.textContent = document.body.appendChild(question1);

  var listEl = document.createElement("ol");

  questionEl.appendChild(question1);
  questionEl.appendChild(listEl);

  for (var i = 0; i < questions[questionIndex].choices.length; i++) {
    var li = document.createElement("li");
    li.textContent = questions[questionIndex].choices[i];
    li.classList.add("li-class");
    listEl.appendChild(li);
    var liEl = document.querySelectorAll("li");
  }

  function test() {
    console.log("test");
  }
  listEl.addEventListener("click", test);
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
