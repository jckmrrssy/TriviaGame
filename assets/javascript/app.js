
 

// Question objects
let question1 = {
    question: "When did the vikings play their first season in the NFL?",
    answers: [1980, 1959, 1961, 1963],
    correct: 2, 
};

let question2 = {
    question: "How many superbowls have the Vikings played in?",
    answers: [0,1,2,4],
    correct: 3,
};

let question3 = {
    question: 'What jersey number did Fran Tarkenton wear?',
    answers:[10, 24, 16, 7],
    correct: 0,
};

let question4 = {
    question: "Where did Randy Moss play college football?",
    answers:['Ohio State', 'USC', 'Miami', 'Marshall'],
    correct: 3,
};

let question5 = {
    question: "What was the nickname given to the Vikings defense in the 1970s?",
    answers:['The Gunners', 'Purple people eaters', 'Yellow people eaters', 'Hungry people eaters'],
    correct: 1,
};

// Defining an array with each question object 
let questionArray = [question1, question2, question3, question4, question5];
// Defining question counter & number correct variables 
var questionCounter = 0;
var numberCorrect = 0;
// Declaring interval variable to use with setInterval later & starting clock running as false 
var interval;


// Functions and such 
$(document).ready(function() {
    var shown = "start"; 
    $("#timer").hide();
    $("#questionHead").hide();
    
    // Start button listener / display function
    $("#startBtn").on('click', function () {
        if (shown === "start") {
        $("#startBtn").hide();
        $("#timer").show();
        $("#questionHead").show();
        shown = 'questions';
        questionRunner();
        start();
        };
    });



   // Function to start the loop through the questions 
    let questionRunner = function () {
        // Loop through each object in the questionArray
        for (i=0; i < questionArray.length; i++) {
            let displayedQuestion = questionArray[questionCounter].question;
            // Display current question in question div 
            $("#questionHead").text(displayedQuestion);
            // Get answer array length from each object
            let displayedAnswers = questionArray[questionCounter].answers.length;
                // Append choices to DOM, add classes for click listeners & values to check if correct later
                for (i=0; i < displayedAnswers; i++ ) {
                    var answer = questionArray[questionCounter].answers[i];
                    var list = $("<button>" + answer + "</button>");
                    list.addClass('theChoices');
                    list.attr("value", i);
                    $("#choices").append(list);
                };
                   
    }};





   
});

var time = 30;

var start = function () {
    time = 30;
    $("#timer").text("Time remaining: " + time);
    intervalId = setInterval(countdown, 1000);
};

var countdown = function () {
    time--;
    $("#timer").text("Time remaining: " + time);
    if (time === 0) {
        stop();

        questionCounter++;
        document.questionRunner();
    }
};

var stop = function () {
    clearInterval(intervalId);
};
