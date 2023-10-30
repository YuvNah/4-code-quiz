var startBtn = document.querySelector("#start-button");
var timerEL = document.querySelector("#time");
var questionEl = document.getElementById("game-section");
var questionIndex = 0;

var questions = [
  {
    question: "What is the capital of United Kingdom?",
    choices: ["Manchester", "Birmingham", "London"],
    answer: "Birmingham",
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

  //   var li1 = document.createElement("li");
  //   li1.textContent = "Strings";
  //   var li2 = document.createElement("li");
  //   li2.textContent = "Boleans";
  //   var li3 = document.createElement("li");
  //   li3.innerText = "Alerts";
  //   var li4 = document.createElement("li");
  //   li4.textContent = "Numbers";

  questionEl.appendChild(question1);
  questionEl.appendChild(listEl);
  //   listEl.appendChild(li2);
  //   listEl.appendChild(li3);
  //   listEl.appendChild(li4);

  var liEl = document.querySelectorAll("li");
  for (var i = 0; i < questions[questionIndex].choices.length; i++) {
    var li = document.createElement("li");
    li.textContent = questions[questionIndex].choices[i];
    li.classList.add("li-class");
    listEl.appendChild(li);
  }
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
