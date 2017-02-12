var quizLength = 3;
var qSelector = 0;
var questionNumber = 1;
var score = 
	{correct: 0,};

var questionsAndAnswers = [
	{
		question: 'Pick the fruit:',
		options: ['Pineapple', 'Police Officer', 'Porcupine'],
		answer: 'Pineapple'
	},
	{
		question: 'Pick the animal:',
		options: ['Orange','Octopus','Ocean'],
		answer: 'Octopus'
	},
	{
		question: 'Pick the superhero:',
		options: ['Catman','Ratman','Batman'],
		answer: 'Batman'
	}
];

var currentQuestion = (questionsAndAnswers[qSelector].question);
var currentOptions = (questionsAndAnswers[qSelector].options);
var currentAnswer = (questionsAndAnswers[qSelector].answer);
var currentScore = (score.correct)

function setCurrentQuestion() {
	currentQuestion = (questionsAndAnswers[qSelector].question);
	currentOptions = (questionsAndAnswers[qSelector].options);
	currentAnswer = (questionsAndAnswers[qSelector].answer);
	currentScore = (score.correct);
}

function formatOption(optionArray) {
	for (var i=0; i < optionArray.length; i++){
		return '<br><input type="radio" id="' + optionArray[i] + 
		'" name="options" value="' + optionArray[i] + '"><label id="'
		+ optionArray[i] +'">' + optionArray[i] + '</label></br>'		
	}
};

function showQuestion() {
	setCurrentQuestion();
    $(".question").html(currentQuestion);
	$(".options").html(formatOption(currentOptions));
	$(".upper-notification").html("Your score is " + currentScore + " of " + quizLength);
}

function initiateGame() {
	$(".begin").on("click", function() {
    	$(".question-template").removeClass("hidden");
    	$(".welcome-message").addClass("hidden");
    	showQuestion();
	});
}

function questionSubmit() {
	$(".submit").on("click", function() {
		if ($('input[name="options"]:checked').val() == currentAnswer) {
			score.correct++;
			$(".section-paragraph").html("Yeah! You answered the last question correctly!");
	    }
	    else {
	     	$(".section-paragraph").html("Bummer! Your last answer was incorrect.");
	    };
	    qSelector = qSelector + 1;
	    questionNumber = questionNumber + 1;
	    showQuestion();
	    console.log(questionNumber);
	    console.log(qSelector);
	});
}

// end game
if (questionNumber > quizLength) {
  $(".question-template").addClass("hidden");
  $(".section-paragraph").html("Game Over. You scored " + score.correct + " out of " + quizLength);
  $(".lower-notification").append('<br><button class="reload">Begin Again</button></br>');
};
  
$(".js-results-message").on("click", ".reload", function(){
  location.reload();
})

$(function(){
	initiateGame();
	questionSubmit();
})