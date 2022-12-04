//question placement for the quiz
//quizquestions in my global variable 
const quizQuestions = [
  {
    "question": "what is the $ used for",
    "a": "calling a class",
    "b": "starting a string",
    "c": "for jqury",
    "d": "all of the above",
    "correct": "c"
  },
  {
    "question": "what is API",
    "a": "Aplication programing interface",
    "b": "appointment program interaction",
    "c": "API",
    "d": "None of the Above",
    "correct": "a"
  },
  {
    "question": "what is the best tool for debugging?",
    "a": "consol",
    "b": "all of the above",
    "c": "google",
    "d": "david",
    "correct": "b"
  },
  {
    "question": "how do you start an array?",
    "a": "()",
    "b": "''",
    "c": "[]",
    "d": "||",
    "correct": "c"
  }
]

let currentQ = 0;
let score = 0;
//my aray for the quiz to make the score show once questions are answered
const userSelectedResponse = (currentQ) => {
  const optionsNL = document.querySelectorAll('.option')
  optionsNL.forEach(el => {
    if (el.checked) {
      console.log(quizQuestions[currentQ].correct);
      if (el.id === quizQuestions[currentQ].correct) {
        score++;
      }
    }

  });
  console.log(`Score ${score}`);
}






const quizLoad = (currentQ) => {


  const quizBoxData = document.getElementById('quiz--box--data');
  quizBoxData.innerHTML = `<h2 id="question">
  ${quizQuestions[currentQ].question}
</h2>
<label><input type="radio" class="option" name="answer" id="a">${quizQuestions[currentQ].a}</label>
<label><input type="radio" class="option" name="answer" id="b">${quizQuestions[currentQ].b}</label>
<label><input type="radio" class="option" name="answer" id="c">${quizQuestions[currentQ].c}</label>
<label><input type="radio" class="option" name="answer" id="d">${quizQuestions[currentQ].d}</label>`;
  document.getElementById('quiz--box').appendChild(quizBoxData)

}
//this is how we log what the user selects and we store its value 
quizLoad(currentQ);

const onSubmit = () => {
  userSelectedResponse(currentQ);
  currentQ++;
  if (currentQ >= quizQuestions.length) {
    results();
  }
  else {
    console.log(currentQ);
    quizLoad(currentQ);
  }
}

const results = () => {
  const quizBoxData = document.getElementById('quiz--box--data');
  quizBoxData.classList.add('results');
//message statment for after the quiz questions have been answered 
  quizBoxData.innerHTML = `<h3>Thanks for Playing!!</h3>
  <h3>Your Score</h3>
  <h2>${score}/${quizQuestions.length}</h2>
  <div class="progressbar">
    <p id="scorewidth"></p>
  </div>`;
  const width = score * (25 / quizQuestions.length);
  document.getElementById('scorewidth').style.width = `${width}rem`;
  const submitBtn = document.getElementById('submit');
  submitBtn.classList.add('hidden');
  const resetBtn = document.getElementById('reset');
  resetBtn.classList.remove('hidden');
}
//this is how i added the time option in javascript i wish i had more time for this project 
var timeEl = document.querySelector(".time");

//10 seconds for each question
var secondsLeft = 40;

function setTime() {
 
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Timer: "+ secondsLeft + "";

    if(secondsLeft === 0) {
   //using clear inrerval to clear the time once the time hits 0
      clearInterval(timerInterval);
    }

  }, 1000);
}
setTime()