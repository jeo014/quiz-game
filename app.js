var quizLength = '3';
var qSelector = '0';
var questionNumber = '1';
var score = 
	{correct: '0',};

var questionsAndAnswers = [
	{
		question: 'Pick the fruit:',
		o1: 'Pineapple',
		o2: 'Police Officer',
		o3: 'Porcupine',
		answer: '1'
	},
	{
		question: 'Pick the animal:',
		o1: 'Orange',
		o2: 'Octopus',
		o3: 'Ocean',
		answer: '2'
	},
	{
		question: 'Pick the superhero:',
		o1: 'Catman',
		o2: 'Ratman',
		o3: 'Batman',
		answer: '3'
	}
];

var currentQuestion = (questionsAndAnswers[qSelector].question);
var currentOption1 = (questionsAndAnswers[qSelector].o1);
var currentOption2 = (questionsAndAnswers[qSelector].o2);
var currentOption3 = (questionsAndAnswers[qSelector].o3);
var currentAnswer = (questionsAndAnswers[qSelector].answer);
var currentScore = (score.correct)


function showQuestion() {
	    $(".question").html(currentQuestion);
		$("#o1").html(currentOption1);
		$("#o2").html(currentOption2);
		$("#o3").html(currentOption3);
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
	    var qSelector = qSelector++;
	    var questionNumber = questionNumber++;
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