var questions = [
{question: "What is the name for meteoroids that reach the Earth’s surface?",
 choices: [ " comet ", " meteorite ", " asteroid " , " hypertail "],
 answer: "meteorite"},
{question: "Which US president made the first telephone call to the moon?",
 choices: [" Trump " , " Eisenhower ", " Kennedy "," Nixon "],
 answer: "Nixon" },
{question: "Betelgeuse and Rigel are the two giant stars in which constellation?",
 choices: [" Drago ", " The Big Dipper "," Orion "," Pleiedes "],
 answer: "Orion"},
{question: "Hale-Bopp is classified as which type of small solar system body?",
 choices: [" comet ", " meteorite ", " asteroid ", " planet "],
 answer: "comet"},
{question: "Who were the first two astronauts that landed on the moon in 1969?",
 choices: [" Buzz Lightyear and Gus Grisholm ", " Buzz Aldrin and Neil Armstrong ", " Skip Meals and Jack Nicklaus ", " Mickey Lou and This Justin "],
 answer: "Buzz Aldrin and Neil Armstrong"},
{question: "In what month is the Earth closest to the sun?",
 choices: [" January ", " February ", " December ", " Friday "],
 answer: "January"},
{question: "In our solar system, which two planets rotate clockwise?",
 choices: [" Mercury and Venus ", " Earth and Mars ", " Venus and Uranus ", " Jupiter and Venus "],
 answer: "Venus and Uranus"},
{question: "The largest volcano ever discovered in our solar system is on which planet?",
 choices: [" Hollywood ", " Mars ", " Venus "," Earth "],
 answer: "Mars" },
{question: "How many moons does Venus have?",
 choices: [ 0 , 1 , 2 , 3 ], 
 answer: 0},
{question: "Who was the last man to walk on the moon?", 
 choices: [" Captain Eugene Cernan ", " Captain Kirk ", " Buzz Aldrin ", " Neil Armstrong "], 
 answer: "Captain Eugene Cernan"}
];
var counter = 60;

    var intervalId;

    function run() {
      intervalId = setInterval(decrement, 1000);

      $("#question0").show();
      $("#question1").show();
      $("#question2").show();
      $("#question3").show();
      $("#question4").show();
      $("#question5").show();
      $("#question6").show();
      $("#question7").show();
      $("#question8").show();
      $("#question9").show();
      
      $("#startBtn").hide();
      $("#doneBtn").show();

      
      for(var j=0; j<questions.length; j++ ) {
        var question = questions[j];
        var $newDiv = $("<h3>" + question.question + "</h3>");

        $newDiv.appendTo($("#question"+j));

        for(var i=0; i<question.choices.length; i++){
        var $newInput = $("<input type='radio'>");
          $newInput
          .attr("name", "fieldName" + j) 
          .attr("value", question.choices[i])
          .addClass("text");

          $newInput.appendTo($("#question"+j));
          $newInput.after(question.choices[i]);
        }
      }
    }

    function decrement() {

      counter--;

      $("#show-number").html("<h2> Time Left: " + counter + " seconds </h2>");

      if (counter <= 0) {

        stop();
        hideQuestion();
        showAllDone();
        alert("Time's Up!");
      }
    }

    function hideQuestion() {
      $("#question0").hide();
      $("#question1").hide();
      $("#question2").hide();
      $("#question3").hide();
      $("#question4").hide();
      $("#question5").hide();
      $("#question6").hide();
      $("#question7").hide();
      $("#question8").hide();
      $("#question9").hide();
    }

    function hideAnswer() {
      $("#correctAnswer").hide();
      $("#incorrectAnswer").hide();
      $("#unanswered").hide();
    }

    function showAllDone() {

      $("#show-number").hide();

      $("#log").text("All Done!");
      $("#correctAnswer").show();
      $("#incorrectAnswer").show();
      $("#unanswered").show();
      $("#doneBtn").hide();

      var unanswered = 0;
      var correctAnswer = 0;
      var incorrectAnswer = 0;

      for(var i=0; i<questions.length; i++) {
        var selected = $("input[type='radio'][name='fieldName" + i + "']:checked");
        if(selected.length > 0 ) {
            if(selected.val() === questions[i].answer) {
              correctAnswer++;
            } else {
              incorrectAnswer++;
            }
        } else {
          unanswered++;
        }
      }

      $("#correctAnswer").html("<span> Correct Answers: " + correctAnswer + "</span>");
      $("#incorrectAnswer").html("<span> Incorrect Answers: " + incorrectAnswer + "</span>");
      $("#unanswered").html("<span> Unanswered: " + unanswered + "</span>");

    }

    function start() {
    
      hideQuestion();
      hideAnswer();
      $("#doneBtn").hide();
      $("#startBtn").click(run);
      $("#doneBtn").click(stop);
    }

    function stop() {

      clearInterval(intervalId);
      hideQuestion();
      showAllDone();
    }
    
    $(document).ready(function() {

    start();

  })

