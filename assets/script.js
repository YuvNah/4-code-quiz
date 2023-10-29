var startBtn = document.querySelector("#start-button");
var timerEL = document.querySelector("#time");
var questionEl = document.getElementById("game-section");

console.log(questionEl);

function quiz() {
  // questionEl.innerHTML =
  // "<h2>Commonly used data types do not include <h2/> <ul> <li> test <li> another optio <li> sdsdsdf";
  var question1 = document.createElement("h2");
  question1.textContent = "Commonly used data types do not include";
  //questionEl.textContent = document.body.appendChild(question1);

  var listEl = document.createElement("ol");

  var li1 = document.createElement("li");
  li1.textContent = "answer";
  var li2 = document.createElement("li");
  li2.textContent = "answer 2";
  var li3 = document.createElement("li");
  li3.innerText = "answer 3";
  var li4 = document.createElement("li");
  li4.textContent = "answer 4";

  questionEl.appendChild(question1);
  questionEl.appendChild(listEl);
  listEl.appendChild(li1);
  listEl.appendChild(li2);
  listEl.appendChild(li3);
  listEl.appendChild(li4);

  var liEl = document.querySelectorAll("li");
  console.log(liEl);
  for (var i = 0; i < liEl.length; i++) {
    var li = liEl[i];
    //li.style.color = "red";
    li.style.border = "solid 1px var(--brown)";
    li.style.padding = "15px";
    li.style.margin = "3px";
    li.style.listStyle = "none";
    li.style.background = "var(--lightteal";
  }
}

//countdown function - a countdown on the top right side of the page to signify the number pf seconds left to finish the quiz.
function countdown() {
  var timeLeft = 5;

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

startBtn.addEventListener("click", countdown);
startBtn.addEventListener("click", quiz);
