// JavaScript source code
let questionCounter = 0;
let scoreCounter = 0;

const STORE = [
    {
        question: "What is the preffered food for a fish?",
        answers: [
            "Apples",
            "String Cheese",
            "Earthworms",
            "Crackers",
        ],
        correctAnswer: "Earthworms",
        logo: "https://images.pexels.com/photos/1430123/pexels-photo-1430123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Tackle box"
    },
    {
        question: "How can you tell when a fish is biting?",
        answers: [
            "Put the pole up to your ear and listen.",
            "Yank really hard on the pole",
            "Gently tug on the line/pole and feel for movement.",
            "Let the pole go to see if it moves.",
        ],
        correctAnswer: "Gently tug on the line/pole and feel for movement.",

    },
    {
        question: "When setting up your fishing pole what is the most crucial part to check before casting?",
        answers: [
            "How flexible the pole is.",
            "How snug the grip is on the pole.",
            "Verifying it has been cleaned.",
            "Checking to see that the hook has been properly secured.",
        ],
        correctAnswer: "Checking to see that the hook has been properly secured.",

    },
    {
        question: "Aside from the hook, what is another item you would find on a pole?",
        answers: [
            "Lunchmeat hanging off the front for extra scent.",
            "Stickers on the handle to show you are the ultimate fisherman.",
            "Two reels attached for twice the fishing power.",
            "A bobber that floats in the water to keep an eye on the fish biting.",
        ],
        correctAnswer: "A bobber that floats in the water to keep an eye on the fish biting.",

    },
    {
        question: "Where is the best place to cast your line?",
        answers: [
            "In the shallow area of the water.",
            "Out in the open of the water where no other lines are.",
            "Near a grouping of trees and bushes in the water.",
            "Standing far away from the shoreline.",
        ],
        correctAnswer: "Out in the open of the water where no other lines are.",

    },
    {
        question: "How do you release a fish once it has been caught?",
        answers: [
            "Grasp the fish firmly and gently pry the hook out of it's mouth.",
            "Pull very hard on the hook and see if it releases.",
            "Cut the line and leave the hook in it's mouth.",
            "Tug really hard on the line and try to break it.",
        ],
        correctAnswer: "Grasp the fish firmly and gently pry the hook out of it's mouth.",

    },
];
















//functions




// this will start my quiz.
// this needs to select the div on start page
// it needs perform a click event when that div button is clicked
// it then needs to hide all divs and elements on page
// it will be ran once and connect to generate div
// it will start the questionCounter
// it will show the score and question counts
function startQuiz(a) {
    console.log('startQuiz is running');
    $('.buttonBox').on('click', '#startButton', function (event) {
        $('.buttonBox').remove();
        $('#nextButton').css({ display: "block" });
        $('.countQuestionScore').css({ visibility: "visible" });
        $('.questionNumber').text(questionCounter + 1);
        joinDoc();
    });
};


// this will push the renderDiv function into the DOM
function joinDoc() {
    console.log('joinDoc is running');
    $('.mainForm').html(renderForm());
};


// this is to create the div that will join the HTML doc. 
// this will return divs that will be the outline for my questions.
// the divs need to inset the Questions from STORE  
function renderForm() {
    console.log('renderForm is running');
    if (questionCounter < STORE.length) {
        return `
  <div class="questionDiv"></div>
  <div class="scoreDiv"></div>

  <form id="formHandle">
    

  <fieldset class="fieldsetQuestion" role="radiogroup">

    <legend class="questionBox">${STORE[questionCounter].question}</legend>

    <div class="answer">
    
      <label for="answerOne">
      <input type="radio" id="answerOne" role="radio" class="questionAnswer" name="answers" value="${STORE[questionCounter].answers[0]}">
         ${STORE[questionCounter].answers[0]}
      </label>
          
      <label for="answerTwo">
        <input type="radio" id="answerTwo" role="radio" class="questionAnswer" name="answers" value="${STORE[questionCounter].answers[1]}">
         ${STORE[questionCounter].answers[1]}
      </label>

      <label for="answerThree">
        <input type="radio" role="radio" id="answerThree" class="questionAnswer" name="answers" value="${STORE[questionCounter].answers[2]}">
         ${STORE[questionCounter].answers[2]}
      </label>

      <label for="answerFour">
        <input type="radio" role="radio" id="answerFour" class="questionAnswer" name="answers" value="${STORE[questionCounter].answers[3]}">
         ${STORE[questionCounter].answers[3]}

      </label>
      </div>
    </fieldset>
  </form> `

        joinDoc();
        questionCount();

    } else {
        console.log('the final portion of renderForm is running');
        showResults();
        $('.questionNumber').text(6)
    }

};


// this is also to cycle through the questions
function renderNextQuestion() {
    $('#feedbackButton').on('click', function () {
        $('.feedbackSect').toggle();
        $('.mainForm').toggle();
        $('#nextButton').toggle();
        console.log('renderNextQuestion is running.')
        joinDoc();
    })
};


// this is to update what question im on
function questionCount() {
    console.log('questionCount is running');
    questionCounter = questionCounter + 1;
    $('.questionNumber').text(questionCounter);
};

// this function needs to register the event when someone clicks an answer
function pickAnswer() {
    console.log('pickAnswer is working');
    $('#nextButton').on('click', function (event) {
        let checking = $('input[name="answers"]:checked');
        let checkedAnswer = checking.val();
        let answerPositon = STORE[questionCounter].correctAnswer;
        if (checking.length) {
            $('.mainForm').toggle();
            $('.feedbackSect').toggle();
            if (answerPositon === checkedAnswer) {
                console.log('its right');
                rightAnswer();
                incrementCount();
                questionCount();
                renderNextQuestion();
            } else {
                wrongAnswer();
                questionCount();
                renderNextQuestion();
                console.log('its wrong');
            }

        } else {
            alert('make a selection please.');

        }
    });
};



//this is to show the feedback as wrong if they did not get it correct
function wrongAnswer() {
    let answerPositon = STORE[questionCounter].correctAnswer;
    console.log('wrongAnswer is running');
    $('#nextButton').hide();
    //$('.feedbackSect').toggle();
    $('.feedbackSect').html(`<header id="feedbackHead">
    <h1>Wrong!</h1>
    <h2>The correct answer was ${answerPositon}.</h2> 
    <h2>Don't be salty there is always next time!</h2>
    </header>
    <div class="feedbackBoxBottom">
    <div class="wrongImg"></div>
    <button id="feedbackButton">Next</button> `);
};


//this is to show the feedback if the answer is correct
function rightAnswer() {
    $('#nextButton').hide();
    console.log('rightAnswer is running');
    $('.feedbackSect').html(`<header id="feedbackHead">
    <h1>Correct!</h1>
    <h2>Way to catch that fish!</h2>
    </header>
    <div class="feedbackBoxBottom">
    <div class="correctImg"></div>
    <button id="feedbackButton">Next</button> `);
};

// this should remove the current state of divs and forms and replace it with the results
function showResults() {
    $('.mainForm').toggle();
    $('#nextButton').toggle();
    if (scoreCounter >= 4) {
        $('.resultsDiv').html(`<body>
      <header id="headerScore"><h1>RESULTS</h1> 
      </header>
      <div class="resultsBox">
      <div class="resultText"><h2> You got ${scoreCounter} right. You really know your stuff!</h2></div>
      <div class="scoreImg"></div>
      <button id="restartButton">Restart Button</button>
      </div>
     </body> `)
    } else if (scoreCounter <= 2) {
        $('.resultsDiv').html(`<body>
      <header id="headerScore"><h1>RESULTS</h1> 
      </header>
      <div class="resultsBox">
      <div class="resultText"><h2> You got ${scoreCounter} right. You need to hit the water more! </h2></div>
      <div class="scoreImg"></div>
      <button id="restartButton">Try again!</button>
      </div>
     </body> `)
    } else {
        $('.resultsDiv').html(`<body>
      <header id="headerScore"><h1>RESULTS</h1> 
      </header>
      <div class="resultsBox">
      <div class="resultText"><h2> You got ${scoreCounter} correct. Are you sure you've been fishing before? </h2></div>
      <div class="scoreImg"></div>
      <button id="restartButton">Try again!</button>
      </div>
     </body> `)
    }

    console.log('showResults is running');
};



// this is to keep count and update the score 
// needs to increase when called
function incrementCount() {
    console.log('scoreCount is running');
    scoreCounter = scoreCounter + 1;
    $('.score').text(scoreCounter);
};

// this will respond to the event click and reload the page.
function restartQuiz() {
    console.log('restartQuiz is running');
    $('.resultsDiv').on('click', '#restartButton', function () {
        location.reload();
    })
};





function loadFunctions() {
    startQuiz();
    pickAnswer();
    renderForm();
    restartQuiz();
};

$(loadFunctions);









/*

// the program needs to start on the start page
// when clicked it needs to hide the current divs and keep the header
// it will need to show in the head the current question number and the score count
// the questions need to be cycled through and rendered each time
// the answer will need to be cycled through and rendered each time its called
// a feedback screen will need to be loaded when the answer is wrong
// a feedback screen will need to be loaded when the answer is correct
// the score will need to be updated with each correct answer 
// the score will need to be updated with each incorrect answer
// the questions amount will need to be updated each time a new question starts
// the quiz needs to have a restart button 


*/
