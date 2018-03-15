
// ----------------------------Global Variables---------------------------------
var topic_quiz = "";                          // Topic chosen for quiz by players
var difficulty_level = "";                    // Level of difficulty chosen by players
var total_questions = 0;                      // Number of total questions based on topic chosen
var current_qns_count = 0;                    // Qns number of current question
var current_qns_title = "";                   // Title of current question
var rounds_of_answer = 0;                     // variable to determine whether its player 1 or 2 turn's to answer
var progress = 0;                             // initial value of your progress bar
var timeout = 50;                             // number of milliseconds between each frame
var increment = 2;                            // value increment for each frame
var maxprogress = 152;                        // when to leave, stop running the animation
var time_to_answer = 0;                       // Current time in secs to answer question
var timer;                                    // Interval timer for countdown timer
var replay_counter = 0;                       // To keep track the number of times the game has been replayed
var reset_counter = 0;                        // To keep track the number of times the game has been reset
var correct_answer_emoji_image = "img/correct_answer_emoji.png";
var wrong_answer_emoji_image = "img/wrong_answer_emoji.png";

// ------------------------------- Objects -------------------------------------
// Questions object
var quiz_questions = {
  "difficulty_level": {
    "easy": 20,
    "medium": 10,
    "hard": 5
  },
  "topics": {
    "random": [
      {
        "question_number": 1,
        "title":"HTML tag for the largest heading?",
        "image": "img/random/qns_1_image.jpg",
        "options": {
          "option_1": "Head",
          "option_2": "h1",
          "option_3": "h6",
          "option_4": "Header",
        },
        "answer": "option_2",
        "rounds_of_answer": 0,
        "reference_link": "https://www.w3schools.com/html/html_headings.asp"
      },
      {
        "question_number": 2,
        "title":"CSS value to make a text bold?",
        "image": "img/random/qns_2_image.PNG",
        "options": {
          "option_1": "bold",
          "option_2": "margin",
          "option_3": "3rem",
          "option_4": "br",
        },
        "answer": "option_1",
        "rounds_of_answer": 0,
        "reference_link": "https://www.w3schools.com/html/html_formatting.asp"
      },
      {
        "question_number": 3,
        "title":"CSS value to make a text italic?",
        "image": "img/random/qns_3_image.PNG",
        "options": {
          "option_1": "padding",
          "option_2": "italy",
          "option_3": "italic",
          "option_4": "padding",
        },
        "answer": "option_3",
        "rounds_of_answer": 0,
        "reference_link": "https://www.w3schools.com/html/html_formatting.asp"
      },
      {
        "question_number": 4,
        "title":"C in CSS stands for?",
        "image": "img/random/qns_4_image.jpg",
        "options": {
          "option_1": "Casdacing",
          "option_2": "Calling",
          "option_3": "Castle",
          "option_4": "Cascading",
        },
        "answer": "option_4",
        "rounds_of_answer": 0,
        "reference_link": "https://www.w3schools.com/css/css_intro.asp"
      },
      {
        "question_number": 5,
        "title":"HTML tag to create drop-down list?",
        "image": "img/random/qns_5_image.PNG",
        "options": {
          "option_1": "select",
          "option_2": "options",
          "option_3": "drop-down",
          "option_4": "selection",
        },
        "answer": "option_1",
        "rounds_of_answer": 0,
        "reference_link": "https://www.w3schools.com/tags/tag_select.asp"
      },
      {
        "question_number": 6,
        "title":"Child element of select tag?",
        "image": "img/random/qns_6_image.PNG",
        "options": {
          "option_1": "drop-down",
          "option_2": "li",
          "option_3": "option",
          "option_4": "ol",
        },
        "answer": "option_3",
        "rounds_of_answer": 0,
        "reference_link": "https://www.w3schools.com/tags/tag_select.asp"
      },
      {
        "question_number": 7,
        "title":"Syntax of comments in CSS?",
        "image": "img/random/qns_7_image.PNG",
        "options": {
          "option_1": "//",
          "option_2": "/*  */",
          "option_3": "///",
          "option_4": "/",
        },
        "answer": "option_2",
        "rounds_of_answer": 0,
        "reference_link": "https://css-tricks.com/snippets/css/comments-in-css/"
      },
      {
        "question_number": 8,
        "title":"Property to change font color?",
        "image": "img/random/qns_8_image.PNG",
        "options": {
          "option_1": "font-color",
          "option_2": "color",
          "option_3": "background",
          "option_4": "image",
        },
        "answer": "option_2",
        "rounds_of_answer": 0,
        "reference_link": "https://www.w3schools.com/css/css_text.asp"
      },
      {
        "question_number": 9,
        "title":"Property to change left margin?",
        "image": "img/random/qns_9_image.PNG",
        "options": {
          "option_1": "margin-left",
          "option_2": "padding",
          "option_3": "border",
          "option_4": "margin",
        },
        "answer": "option_1",
        "rounds_of_answer": 0,
        "reference_link": "https://www.w3schools.com/css/css_margin.asp"
      },
      {
        "question_number": 10,
        "title":"HTML tag to make unordered list?",
        "image": "img/random/qns_10_image.png",
        "options": {
          "option_1": "li",
          "option_2": "ul",
          "option_3": "ol",
          "option_4": "select",
        },
        "answer": "option_2",
        "rounds_of_answer": 0,
        "reference_link": "https://www.w3schools.com/tags/tag_ul.asp"
      },
    ],
    "html": [
      {
        "question_number": 1,
        "title":"HTML tag to define content aside from main content",
        "image": "",
        "options": {
          "option_1": "legend",
          "option_2": "body",
          "option_3": "header",
          "option_4": "aside",
        },
        "answer": "option_4",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
      {
        "question_number": 2,
        "title":"HTML element to group body content in a table",
        "image": "",
        "options": {
          "option_1": "tbody",
          "option_2": "tfoot",
          "option_3": "thead",
          "option_4": "theader",
        },
        "answer": "option_1",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
      {
        "question_number": 3,
        "title":"Alternative tag to make text bold",
        "image": "",
        "options": {
          "option_1": "bold",
          "option_2": "double",
          "option_3": "strong",
          "option_4": "dark",
        },
        "answer": "option_3",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
      {
        "question_number": 4,
        "title":"Types of elements in a HTML form",
        "image": "",
        "options": {
          "option_1": "Input",
          "option_2": "Text",
          "option_3": "Submit",
          "option_4": "ALL",
        },
        "answer": "option_4",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
      {
        "question_number": 5,
        "title":"Fundamental tag in a HTML block",
        "image": "",
        "options": {
          "option_1": "!DOCTYPE",
          "option_2": "HTML",
          "option_3": "BODY",
          "option_4": "P",
        },
        "answer": "option_1",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
      {
        "question_number": 6,
        "title":"Define special style in HTML, use __?",
        "image": "",
        "options": {
          "option_1": "class",
          "option_2": "id",
          "option_3": "padding",
          "option_4": "tr",
        },
        "answer": "option_2",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
      {
        "question_number": 7,
        "title":"Element 'em' defines ___ text",
        "image": "",
        "options": {
          "option_1": "Normal",
          "option_2": "Strong",
          "option_3": "Exponent",
          "option_4": "Emphasized",
        },
        "answer": "option_4",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
      {
        "question_number": 8,
        "title":"No. of attributes required for div element",
        "image": "",
        "options": {
          "option_1": "0",
          "option_2": "1",
          "option_3": "2",
          "option_4": "3",
        },
        "answer": "option_1",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
      {
        "question_number": 9,
        "title":"Article defined with ___ tag",
        "image": "",
        "options": {
          "option_1": "title",
          "option_2": "header",
          "option_3": "caption",
          "option_4": "article",
        },
        "answer": "option_4",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
      {
        "question_number": 10,
        "title":"Data type of an array is",
        "image": "",
        "options": {
          "option_1": "Char",
          "option_2": "int",
          "option_3": "object",
          "option_4": "NaN",
        },
        "answer": "option_3",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
    ],
    "javaScript": [
      {
        "question_number": 1,
        "title":"Built-in method to assess each array element",
        "image": "",
        "options": {
          "option_1": "while()",
          "option_2": "for()",
          "option_3": "forEach()",
          "option_4": "None",
        },
        "answer": "option_3",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
      {
        "question_number": 2,
        "title":"Built-in method to convert to string",
        "image": "",
        "options": {
          "option_1": "toValue()",
          "option_2": "toString()",
          "option_3": "toNumber()",
          "option_4": "ALL",
        },
        "answer": "option_2",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
      {
        "question_number": 3,
        "title":"Funcion to combine 2 strings & return new string",
        "image": "",
        "options": {
          "option_1": "add()",
          "option_2": "merge()",
          "option_3": "concat()",
          "option_4": "None",
        },
        "answer": "option_3",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
      {
        "question_number": 4,
        "title":"Function to extract a section of a string",
        "image": "",
        "options": {
          "option_1": "split()",
          "option_2": "slice()",
          "option_3": "replace()",
          "option_4": "search()",
        },
        "answer": "option_2",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
      {
        "question_number": 5,
        "title":"Method to remove last array element",
        "image": "",
        "options": {
          "option_1": "push()",
          "option_2": "pop()",
          "option_3": "merge()",
          "option_4": "add()",
        },
        "answer": "option_2",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
      {
        "question_number": 6,
        "title":"Method to add new elements to start of array",
        "image": "",
        "options": {
          "option_1": "shift()",
          "option_2": "unshift()",
          "option_3": "add()",
          "option_4": "marge()",
        },
        "answer": "option_2",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
      {
        "question_number": 7,
        "title":"Can you access Cookie using javascript?",
        "image": "",
        "options": {
          "option_1": "True",
          "option_2": "False",
          "option_3": "None",
          "option_4": "ALL",
        },
        "answer": "option_1",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
      {
        "question_number": 8,
        "title":"Which event fires whenever a control loses focus?",
        "image": "",
        "options": {
          "option_1": "onclick",
          "option_2": "onmove",
          "option_3": "onblur",
          "option_4": "onchange",
        },
        "answer": "option_3",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
      {
        "question_number": 9,
        "title":"Math.random() returns ___",
        "image": "",
        "options": {
          "option_1": "Values 0-1",
          "option_2": "Values 0-1000",
          "option_3": "Values 0-100",
          "option_4": "Values 0-10",
        },
        "answer": "option_1",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
      {
        "question_number": 10,
        "title":"What is the result of a?",
        "image": "img/javascript/qns_10_image.png",
        "options": {
          "option_1": "0",
          "option_2": "1",
          "option_3": "2",
          "option_4": "3",
        },
        "answer": "option_2",
        "rounds_of_answer": 0,
        "reference_link": ""
      },
    ]
  }
 }

 // Players object
 var players = {
   "player1": {
     "nickname": "",
     "current_pts": 0,
     "total_pts": 0,
     "answer_chosen": "",
     "answer_correct": false,
     "answering_now": false,
     "correct_answers": 0
   },
   "player2": {
     "nickname": "",
     "current_pts": 0,
     "total_pts": 0,
     "answer_chosen": "",
     "answer_correct": false,
     "answering_now": false,
     "correct_answers": 0
   }
 }

 // ------------------------------- Functions ----------------------------------
 // Function to change state
 function toggle_state(current_state, next_state){
   console.log("Toggling state display...");
   document.getElementById(current_state).style.display = "none";
   document.getElementById(next_state).style.display = "inline";
   console.log("Finished toggling state display...");
 }

 // Function to get players nickname
 function get_players_nickname(){
   console.log("Retrieving players nickname now...");
   players.player1.nickname = document.getElementById('player1_nickname').value;
   players.player2.nickname = document.getElementById('player2_nickname').value;
   console.log("Player 1 Nickname: " + players.player1.nickname);
   console.log("Player 2 Nickname: " + players.player2.nickname);
 }

 // Function to get topic quiz and difficulty level selection
 function get_game_details(){
   console.log("Retrieving values of drop down list now...");

   topic_quiz = document.getElementById('topic_quiz_selection').value;
   topic_quiz = topic_quiz.toLowerCase();
   console.log("Topic quiz chosen: " + topic_quiz);
   difficulty_level = document.getElementById('difficulty_level_selection').value;
   difficulty_level = difficulty_level.toLowerCase();
   console.log("Difficulty level chosen: " + difficulty_level);

   // Find out how many questions are there in each topic
   total_questions = quiz_questions.topics[topic_quiz].length;
   console.log("Total questions = " + total_questions);

   console.log("Finished retrieving values of drop down list");
 }

 // Function to start the text animation during display_game_details_state
 function start_get_ready_text_animation(){
   // Wrap every letter in a span
  $('.ml11 .letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  anime.timeline({loop: true})
    .add({
      targets: '.ml11 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.ml11 .line',
      translateX: [0,$(".ml11 .letters").width()],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: '.ml11 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: function(el, i) {
        return 34 * (i+1)
      }
    }).add({
      targets: '.ml11',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
  }

 // Function to display game details before game starts
 function populate_game_details(){
   console.log("Populating game details now...");
   if (reset_counter > 0) {
     // Populate content for display_game_details_state
     document.getElementById('player1_name_display').innerHTML = "P1: " + players.player1.nickname;
     document.getElementById('player2_name_display').innerHTML = "P2: " + players.player2.nickname;
   }
   else {
     // Create 2 h2 elements to display the player 1 and 2 nicknames
     var player1_name = document.createElement('h2');
     var player2_name = document.createElement('h2');

     // Assign ids to the h2 elements created above
     player1_name.id = "player1_name_display";
     player2_name.id = "player2_name_display";

     // Populate their innerHTML with the appriopriate text
     player1_name.innerHTML = "P1: " + players.player1.nickname;
     console.log(player1_name);
     player2_name.innerHTML = "P2: " + players.player2.nickname;
     console.log(player2_name);

     // Append the h2 elements to the parent class
     document.getElementsByClassName('game_players_names')[0].appendChild(player1_name);
     document.getElementsByClassName('game_players_names')[0].appendChild(player2_name);
   }
   console.log("Finished populating game details");
 }

 // Function to display question number out of total questions
 function populate_question_of_total_question(){
   console.log("Populating question of total question now...");
   if (reset_counter > 0) {
     // Update h1 element with the correct qns number
     document.getElementById('getready_qnsofqns').innerHTML = "Question " + (current_qns_count+1) + " of " + total_questions;
   }
   else if (replay_counter > 0) {
     // Update h1 element with the correct qns number
     document.getElementById('getready_qnsofqns').innerHTML = "Question " + (current_qns_count+1) + " of " + total_questions;
   }
   else {
     // Create h1 element, assign id and populate innerHTML
     var qns_of_qns = document.createElement('h1');
     qns_of_qns.id = "getready_qnsofqns";
     qns_of_qns.innerHTML = "Question " + (current_qns_count+1) + " of " + total_questions;

     // Append h1 element to parent class
     // Display question number out of total questions
     document.getElementsByClassName('getready_header')[0].appendChild(qns_of_qns);
   }

   console.log("Finished populating question of total question now...");
 }

 // Function to display question title
 function populate_question_title(){
   console.log("Populating question title now...");
   if (reset_counter > 0) {
     // Update h1 element with the correct qns title
     document.getElementById('getready_qns_title').innerHTML = quiz_questions.topics[topic_quiz][current_qns_count].title;

     // Save qns title to a global variable
     current_qns_title = quiz_questions.topics[topic_quiz][current_qns_count].title;
   }
   else if (replay_counter > 0) {
     // Update h1 element with the correct qns title
     document.getElementById('getready_qns_title').innerHTML = quiz_questions.topics[topic_quiz][current_qns_count].title;

     // Save qns title to a global variable
     current_qns_title = quiz_questions.topics[topic_quiz][current_qns_count].title;
   }
   else {
     // Create h1 element, assign id and populate innerHTML
     var qns_title = document.createElement('h1');
     qns_title.id = "getready_qns_title";
     qns_title.innerHTML = quiz_questions.topics[topic_quiz][current_qns_count].title;

     // Append h1 element to parent class and display question title
     document.getElementsByClassName('game_qns_title_main')[0].appendChild(qns_title);

     // Save qns title to a global variable
     current_qns_title = quiz_questions.topics[topic_quiz][current_qns_count].title;
   }

   console.log("Finished populating question title");
 }

 // Function to start the timer for get_ready_qns_state
 function start_get_ready_state_timer(){
   // Animate the progress bar loading
   setTimeout(function () {
        progress += increment;
        if(progress < maxprogress) {
          progress_percentage = progress.toString();
          progress_percentage = progress + "%";
          document.getElementById('progress_bar').style.width = progress_percentage;
          start_get_ready_state_timer();
        }
        else {
          console.log("Finished progress bar animation");

          // Update whose turn is it to answer now, swticth to player 1
          decide_whose_turn_to_answer();

          // Populate content for answering_qns_state for player1
          populate_answering_content_for_player1();

          // Display answering_qns_state
          toggle_state('get_ready_qns_state', 'answering_qns_state');

          // Start timer countdown for answering_qns_state
          start_answering_timer();
        }
    }, timeout);
 }

 // Function to start the timer countdown for answering_qns_state as well as
 // Handle events for skip button and option chosen by player
 function start_answering_timer(){
   // Initialize the answering timer based on the difficulty level chosen by players
   time_to_answer = quiz_questions.difficulty_level[difficulty_level];
   console.log("Current time to answer question = " + time_to_answer);

   // Code to animate the countdown timer
   timer = setInterval(function() {
   document.getElementById('answering_timer').innerHTML = time_to_answer;
   console.log("Time left to answer: " + time_to_answer);
   time_to_answer--;

   // Code to handle skip button event
   document.getElementById('answering_skipbt').addEventListener('click', skip_button_handler);

   // Code to handle option chosen event
   document.getElementById('answering_option_1').addEventListener('click', option1_handler);
   document.getElementById('answering_option_2').addEventListener('click', option2_handler);
   document.getElementById('answering_option_3').addEventListener('click', option3_handler);
   document.getElementById('answering_option_4').addEventListener('click', option4_handler);
   if(time_to_answer == -1) {
     // Timer has reached 0, clear the timeout
     clearInterval(timer);

     // Player 1 currently still answering but timer has reached 0
     // Save player1 object attributes with the necessary data
     // Refresh content for player 2
     if (players.player1.answering_now === true && players.player2.answering_now === false) {
       // Update Player 1 answer_correct
       players.player1.answer_correct = false;

       // Update player1 current points for the question
       players.player1.current_pts = 0;

       // Update player 1 total points
       players.player1.total_pts += players.player1.current_pts;

       // Update whose turn is it to answer now, switch to player 2 turn to answer
       decide_whose_turn_to_answer();

       // Refresh content for answering_qns_state
       populate_answering_content_for_player2();

       // Refresh answering_qns_state timer for player 2
       start_answering_timer();
     }
     // Player 2 currently still answering but timer has reached 0
     // Save player2 object attributes with the necessary data
     // Toggle state to result_qns_state and increment current_qns_count by 1
     else if (players.player1.answering_now === false && players.player2.answering_now === true) {
       // Update Player 2 answer_correct
       players.player2.answer_correct = false;

       // No answer chosen, update player2 current points for the question to 0
       players.player2.current_pts = 0;

       // Update player 2 total points
       players.player2.total_pts += players.player2.current_pts;

       // Populate content for results page
       populate_results();

       // Populate content for results_modal
       populate_modal();

       // Toggle state to result_qns_state
       toggle_state('answering_qns_state', 'result_qns_state');
      }
    }
 }, 1000);
}

// Function to populate content for the modal
function populate_modal(){
  console.log("Populating content for the modal");
  
  // To display the question in the modal
  document.getElementById('question_title').innerHTML = quiz_questions.topics[topic_quiz][current_qns_count].title;

  // To search for the value of the correct option for the current question and display it in the modal
  var current_answer = quiz_questions.topics[topic_quiz][current_qns_count].answer;
  console.log("Current question answer is " + current_answer);
  var current_answer_value = quiz_questions.topics[topic_quiz][current_qns_count].options[current_answer];
  console.log("Current answer value is " + current_answer_value);
  document.getElementById('modal_correct_answer').innerHTML = "Answer is: " + current_answer_value;

  // Display the reference link in the modal
  document.getElementById('modal_answer_reference_link').href = quiz_questions.topics[topic_quiz][current_qns_count].reference_link;
  console.log("Finished populating content for the modal");
}

 // Function to handle option1 click event
function option1_handler(){
  clearInterval(timer);
  if (players.player1.answering_now === true && players.player2.answering_now === false) {
    // Update player1 answer_chosen object attribute
    players.player1.answer_chosen = "option_1";
    console.log("Player 1 has chosen option 1");

    // Update Player 1 answer_correct variable depending what player 1 has chosen
    if (quiz_questions.topics[topic_quiz][current_qns_count].answer === "option_1") {
      // Display happy face beside the option selected by player 1
      document.getElementById('answering_option1_correct_emoji').style.display = "inline";
      document.getElementById('answering_option1_wrong_emoji').style.display = "none";
      console.log("Displayed happy face beside option 1 for player 1");

      // Player 1 has chosen the correct answer, increment correct_answers by 1
      players.player1.answer_correct = true;
      console.log("Player 1 has selected the correct answer");
      players.player1.correct_answers += 1;

      // Update player1 current points for the question
      players.player1.current_pts = 50;
      console.log("Player 1 current points for this question = " + players.player1.current_pts);

      // Update player 1 total points
      players.player1.total_pts += players.player1.current_pts;
      console.log("Player 1 total points = " + players.player1.total_pts);
    }
    else {
      // Display unhappy face beside the option selected by the player
      document.getElementById('answering_option1_correct_emoji').style.display = "none";
      document.getElementById('answering_option1_wrong_emoji').style.display = "inline";
      console.log("Displayed unhappy face beside option 1 for player 1");

      players.player1.answer_correct = false;
      console.log("Player 1 has chosen the incorrect answer");

      // Update player1 current points for the question
      players.player1.current_pts = 0;
      console.log("Player 1 current points for this question = " + players.player1.current_pts);

      // Update player 1 total points
      players.player1.total_pts += players.player1.current_pts;
      console.log("Player 1 total points = " + players.player1.total_pts);
    }

    // Set timeout of 1 second for player 1 after choosing option 1
    var player1_option1_timeout = setTimeout(function(){
      console.log("Setting 1 second timeout for player 1 choosing option 1");

      // Set display of emojis to none
      document.getElementById('answering_option1_correct_emoji').style.display = "none";
      document.getElementById('answering_option1_wrong_emoji').style.display = "none";
      console.log("Finished setting the emojis display to none after player 1 has answered");

      // Update whose turn is it to answer now
      decide_whose_turn_to_answer();
      console.log("Switched to player 2 turn to answer");

      // Refresh content for answering_qns_state
      populate_answering_content_for_player2();
      console.log("Populated content for player 2 turn's to answer");

      // Refresh answering_qns_state timer for player 2
      start_answering_timer();
    }, 1000);
  }
  else if (players.player1.answering_now === false && players.player2.answering_now === true) {
    // Update player2 answer_chosen object attribute
    players.player2.answer_chosen = "option_1";
    console.log("Player 2 has chosen option 1");

    // Update Player 2 answer_correct variable depending what player 2 has chosen
    if (quiz_questions.topics[topic_quiz][current_qns_count].answer === "option_1") {
      // Display happy face beside the option selected by player 2
      document.getElementById('answering_option1_correct_emoji').style.display = "inline";
      document.getElementById('answering_option1_wrong_emoji').style.display = "none";
      console.log("Displayed happy face beside option 1 for player 2");

      // Player 2 has chosen the correct answer, increment correct_answers by 1
      players.player2.answer_correct = true;
      console.log("Player 2 has chosen the correct answer");
      players.player2.correct_answers += 1;

      // Update player2 current points for the question
      players.player2.current_pts = 50;
      console.log("Player 2 current points for this question = " + players.player2.current_pts);

      // Update player 2 total points
      players.player2.total_pts += players.player2.current_pts;
      console.log("Player 2 total points = " + players.player2.total_pts);
    }
    else {
      // Display unhappy face beside the option selected by the player
      document.getElementById('answering_option1_correct_emoji').style.display = "none";
      document.getElementById('answering_option1_wrong_emoji').style.display = "inline";
      console.log("Displayed unhappy face beside option 1 for player 2");

      players.player2.answer_correct = false;
      console.log("Player 2 has chosen the incorrect answer");

      // Update player2 current points for the question
      players.player2.current_pts = 0;
      console.log("Player 2 current points for this question = " + players.player2.current_pts);

      // Update player 2 total points
      players.player2.total_pts += players.player2.current_pts;
      console.log("Player 2 total points = " + players.player2.total_pts);
    }

    // Set timeout of 1 second for player 2 after choosing option 1
    var player2_option1_timeout = setTimeout(function(){
      console.log("Setting 1 second timeout for player 2 choosing option 1");

      // Populate content for results page
      populate_results();
      console.log("Populated results for results page");

      // Populate content for results_modal
      populate_modal();

      // Toggle state to result_qns_state
      toggle_state('answering_qns_state', 'result_qns_state');

      // Set display of emojis to none
      document.getElementById('answering_option1_correct_emoji').style.display = "none";
      document.getElementById('answering_option1_wrong_emoji').style.display = "none";
      console.log("Finished setting emojis display to none after player 2 has answered");
    }, 1000);
  }
}

 // Function to handle option2 click event
function option2_handler(){
  clearInterval(timer);
  if (players.player1.answering_now === true && players.player2.answering_now === false) {
    // Update player1 answer_chosen object attribute
    players.player1.answer_chosen = "option_2";
    console.log("Player 1 has chosen option 2");

    // Update Player 1 answer_correct variable depending what player 1 has chosen
    if (quiz_questions.topics[topic_quiz][current_qns_count].answer === "option_2") {
      // Display happy face beside the option selected by the player
      document.getElementById('answering_option2_correct_emoji').style.display = "inline";
      document.getElementById('answering_option2_wrong_emoji').style.display = "none";
      console.log("Displayed happy face beside option 2 for player 1");

      // Player 1 chose the correct option - option 2
      players.player1.answer_correct = true;
      console.log("Player 1 has selected the correct answer");
      players.player1.correct_answers += 1;

      // Update player1 current points for the question
      players.player1.current_pts = 50;
      console.log("Player 1 current points for this question = " + players.player1.current_pts);

      // Update player 1 total points
      players.player1.total_pts += players.player1.current_pts;
      console.log("Player 1 total points = " + players.player1.total_pts);
    }
    else {
      // Display unhappy face beside the option selected by the player
      document.getElementById('answering_option2_correct_emoji').style.display = "none";
      document.getElementById('answering_option2_wrong_emoji').style.display = "inline";
      console.log("Displayed unhappy face beside option 2 for player 1");

      players.player1.answer_correct = false;
      console.log("Player 1 has chosen the incorrect answer");

      // Update player1 current points for the question
      players.player1.current_pts = 0;
      console.log("Player 1 current points for this question = " + players.player1.current_pts);

      // Update player 1 total points
      players.player1.total_pts += players.player1.current_pts;
      console.log("Player 1 total points = " + players.player1.total_pts);
    }

    // Set 1 second timeout for player 1 choosing option 2
    var player1_option2_timeout = setTimeout(function(){
      // Set display of emojis to none
      document.getElementById('answering_option2_correct_emoji').style.display = "none";
      document.getElementById('answering_option2_wrong_emoji').style.display = "none";
      console.log("Finished setting emojis display to none after player 1 has answered");

      // Update whose turn is it to answer now
      decide_whose_turn_to_answer();
      console.log("Switched to player 2 turn to answer");

      // Refresh content for answering_qns_state
      populate_answering_content_for_player2();
      console.log("Populated content for player 2 turn's to answer");

      // Refresh answering_qns_state timer for player 2
      start_answering_timer();
    }, 1000);
  }
  else if (players.player1.answering_now === false && players.player2.answering_now === true) {
    // Update player2 answer_chosen object attribute
    players.player2.answer_chosen = "option_2";
    console.log("Player 2 has chosen option 2");

    // Update Player 2 answer_correct variable depending what player 2 has chosen
    if (quiz_questions.topics[topic_quiz][current_qns_count].answer === "option_2") {
      // Display happy face beside the option selected by the player
      document.getElementById('answering_option2_correct_emoji').style.display = "inline";
      document.getElementById('answering_option2_wrong_emoji').style.display = "none";
      console.log("Displayed happy face beside option 2 for player 2");

      players.player2.answer_correct = true;
      console.log("Player 2 has chosen the correct answer");
      players.player2.correct_answers += 1;

      // Update player2 current points for the question
      players.player2.current_pts = 50;
      console.log("Player 2 current points for this question = " + players.player2.current_pts);

      // Update player 2 total points
      players.player2.total_pts += players.player2.current_pts;
      console.log("Player 2 total points = " + players.player2.total_pts);
    }
    else {
      // Display unhappy face beside the option selected by the player
      document.getElementById('answering_option2_correct_emoji').style.display = "none";
      document.getElementById('answering_option2_wrong_emoji').style.display = "inline";
      console.log("Displayed unhappy face beside option 2 for player 2");

      players.player2.answer_correct = false;
      console.log("Player 2 has chosen the incorrect answer");

      // Update player2 current points for the question
      players.player2.current_pts = 0;
      console.log("Player 2 current points for this question = " + players.player2.current_pts);

      // Update player 2 total points
      players.player2.total_pts += players.player2.current_pts;
      console.log("Player 2 total points = " + players.player2.total_pts);
    }

    // Set 1 second timeout for player 2 choosing option 2
    var player2_option2_timeout = setTimeout(function(){
      // Populate content for results page
      populate_results();
      console.log("Populated results for results page");

      // Populate content for results_modal
      populate_modal();

      // Toggle state to result_qns_state
      toggle_state('answering_qns_state', 'result_qns_state');

      // Set display of emojis to none
      document.getElementById('answering_option2_correct_emoji').style.display = "none";
      document.getElementById('answering_option2_wrong_emoji').style.display = "none";
      console.log("Finished setting emojis display to none after player 2 has answered");
    }, 1000);
  }
}

 // Function to handle option3 click event
function option3_handler(){
  clearInterval(timer);
  if (players.player1.answering_now === true && players.player2.answering_now === false) {
    // Update player1 answer_chosen object attribute
    players.player1.answer_chosen = "option_3";
    console.log("Player 1 has chosen option 3");

    // Update Player 1 answer_correct variable depending what player 1 has chosen
    if (quiz_questions.topics[topic_quiz][current_qns_count].answer === "option_3") {
      // Display happy face beside the option selected by the player
      document.getElementById('answering_option3_correct_emoji').style.display = "inline";
      document.getElementById('answering_option3_wrong_emoji').style.display = "none";
      console.log("Displayed happy face beside option 3 for player 1");

      // Player 1 chose the right answer
      players.player1.answer_correct = true;
      console.log("Player 1 has selected the correct answer");
      players.player1.correct_answers += 1;

      // Update player1 current points for the question
      players.player1.current_pts = 50;
      console.log("Player 1 current points for this question = " + players.player1.current_pts);

      // Update player 1 total points
      players.player1.total_pts += players.player1.current_pts;
      console.log("Player 1 total points = " + players.player1.total_pts);
    }
    else {
      // Display unhappy face beside the option selected by the player
      document.getElementById('answering_option3_correct_emoji').style.display = "none";
      document.getElementById('answering_option3_wrong_emoji').style.display = "inline";
      console.log("Displayed unhappy face beside option 3 for player 1");

      // Player 1 chose the wrong answer
      players.player1.answer_correct = false;
      console.log("Player 1 has chosen the incorrect answer");

      // Update player1 current points for the question
      players.player1.current_pts = 0;
      console.log("Player 1 current points for this question = " + players.player1.current_pts);

      // Update player 1 total points
      players.player1.total_pts += players.player1.current_pts;
      console.log("Player 1 total points = " + players.player1.total_pts);
    }

    // Set 1 second timeout for player 1 choosing option 3
    var player1_option3_timeout = setTimeout(function(){
      // Set display of emojis to none
      document.getElementById('answering_option3_correct_emoji').style.display = "none";
      document.getElementById('answering_option3_wrong_emoji').style.display = "none";
      console.log("Finished setting emojis display to none after player 1 has answered");

      // Update whose turn is it to answer now
      decide_whose_turn_to_answer();
      console.log("Switched to player 2 turn to answer");

      // Refresh content for answering_qns_state
      populate_answering_content_for_player2();
      console.log("Populated content for player 2 turn's to answer");

      // Refresh answering_qns_state timer for player 2
      start_answering_timer();
    }, 1000);
  }
  else if (players.player1.answering_now === false && players.player2.answering_now === true) {
    // Update player2 answer_chosen object attribute
    players.player2.answer_chosen = "option_3";
    console.log("Player 2 has chosen option 3");

    // Update Player 2 answer_correct variable depending what player 2 has chosen
    if (quiz_questions.topics[topic_quiz][current_qns_count].answer === "option_3") {
      // Display happy face beside the option selected by the player
      document.getElementById('answering_option3_correct_emoji').style.display = "inline";
      document.getElementById('answering_option3_wrong_emoji').style.display = "none";
      console.log("Displayed happy face beside option 3 for player 2");

      // Player 2 chose the right answer
      players.player2.answer_correct = true;
      console.log("Player 2 has chosen the correct answer");
      players.player2.correct_answers += 1;

      // Update player2 current points for the question
      players.player2.current_pts = 50;
      console.log("Player 2 current points for this question = " + players.player2.current_pts);

      // Update player 2 total points
      players.player2.total_pts += players.player2.current_pts;
      console.log("Player 2 total points = " + players.player2.total_pts);
    }
    else {
      // Display unhappy face beside the option selected by the player
      document.getElementById('answering_option3_correct_emoji').style.display = "none";
      document.getElementById('answering_option3_wrong_emoji').style.display = "inline";
      console.log("Displayed unhappy face beside option 3 for player 2");

      // Player 2 chose the wrong answer
      players.player2.answer_correct = false;
      console.log("Player 2 has chosen the incorrect answer");

      // Update player2 current points for the question
      players.player2.current_pts = 0;
      console.log("Player 2 current points for this question = " + players.player2.current_pts);

      // Update player 2 total points
      players.player2.total_pts += players.player2.current_pts;
      console.log("Player 2 total points = " + players.player2.total_pts);
    }

    // Set 1 second timeout for player 2 choosing option 3
    var player2_option3_timeout = setTimeout(function(){
      // Populate content for results page
      populate_results();
      console.log("Populated results for results page");

      // Populate content for results_modal
      populate_modal();

      // Toggle state to result_qns_state
      toggle_state('answering_qns_state', 'result_qns_state');

      // Set display of emojis to none
      document.getElementById('answering_option3_correct_emoji').style.display = "none";
      document.getElementById('answering_option3_wrong_emoji').style.display = "none";
      console.log("Finished setting emojis display to none after player 2 has answered");
    }, 1000);
  }
}

 // Function to handle option4 click event
function option4_handler(){
  clearInterval(timer);
  if (players.player1.answering_now === true && players.player2.answering_now === false) {
    // Update player1 answer_chosen object attribute
    players.player1.answer_chosen = "option_4";
    console.log("Player 1 has chosen option 4");

    // Update Player 1 answer_correct variable depending what player 1 has chosen
    if (quiz_questions.topics[topic_quiz][current_qns_count].answer === "option_4") {
      // Display happy face beside the option selected by the player
      document.getElementById('answering_option4_correct_emoji').style.display = "inline";
      document.getElementById('answering_option4_wrong_emoji').style.display = "none";
      console.log("Displayed happy face beside option 4 for player 1");

      // Player 1 chose the right answer
      players.player1.answer_correct = true;
      console.log("Player 1 has selected the correct answer");
      players.player1.correct_answers += 1;

      // Update player1 current points for the question
      players.player1.current_pts = 50;
      console.log("Player 1 current points for this question = " + players.player1.current_pts);

      // Update player 1 total points
      players.player1.total_pts += players.player1.current_pts;
      console.log("Player 1 total points = " + players.player1.total_pts);
    }
    else {
      // Display unhappy face beside the option selected by the player
      document.getElementById('answering_option4_correct_emoji').style.display = "none";
      document.getElementById('answering_option4_wrong_emoji').style.display = "inline";
      console.log("Displayed unhappy face beside option 4 for player 1");

      // Player 1 chose the wrong answer
      players.player1.answer_correct = false;
      console.log("Player 1 has chosen the incorrect answer");

      // Update player1 current points for the question
      players.player1.current_pts = 0;
      console.log("Player 1 current points for this question = " + players.player1.current_pts);

      // Update player 1 total points
      players.player1.total_pts += players.player1.current_pts;
      console.log("Player 1 total points = " + players.player1.total_pts);
    }

    // Set 1 second timeout for player 1 choosing option 4
    var player1_option4_timeout = setTimeout(function(){
      // Set display of emojis to none
      document.getElementById('answering_option4_correct_emoji').style.display = "none";
      document.getElementById('answering_option4_wrong_emoji').style.display = "none";
      console.log("Finished setting emojis display to none after player 1 has answered");

      // Update whose turn is it to answer now
      decide_whose_turn_to_answer();
      console.log("Switched to player 2 turn to answer");

      // Refresh content for answering_qns_state
      populate_answering_content_for_player2();
      console.log("Populated content for player 2 turn's to answer");

      // Refresh answering_qns_state timer for player 2
      start_answering_timer();
    }, 1000);
  }
  else if (players.player1.answering_now === false && players.player2.answering_now === true) {
    // Update player2 answer_chosen object attribute
    players.player2.answer_chosen = "option_4";
    console.log("Player 2 has chosen option 4");

    // Update Player 2 answer_correct variable depending what player 2 has chosen
    if (quiz_questions.topics[topic_quiz][current_qns_count].answer === "option_4") {
      // Display happy face beside the option selected by the player
      document.getElementById('answering_option4_correct_emoji').style.display = "inline";
      document.getElementById('answering_option4_wrong_emoji').style.display = "none";
      console.log("Displayed happy face beside option 4 for player 2");

      // Player 2 chose the right answer
      players.player2.answer_correct = true;
      console.log("Player 2 has chosen the correct answer");
      players.player2.correct_answers += 1;

      // Update player2 current points for the question
      players.player2.current_pts = 50;
      console.log("Player 2 current points for this question = " + players.player2.current_pts);

      // Update player 2 total points
      players.player2.total_pts += players.player2.current_pts;
      console.log("Player 2 total points = " + players.player2.total_pts);
    }
    else {
      // Display unhappy face beside the option selected by the player
      document.getElementById('answering_option4_correct_emoji').style.display = "none";
      document.getElementById('answering_option4_wrong_emoji').style.display = "inline";
      console.log("Displayed unhappy face beside option 4 for player 2");

      // Player 2 chose the wrong answer
      players.player2.answer_correct = false;
      console.log("Player 2 has chosen the incorrect answer");

      // Update player2 current points for the question
      players.player2.current_pts = 0;
      console.log("Player 2 current points for this question = " + players.player2.current_pts);

      // Update player 2 total points
      players.player2.total_pts += players.player2.current_pts;
      console.log("Player 2 total points = " + players.player2.total_pts);
    }

    // Set 1 second timeout for player 2 after choosing option 4
    var player2_option4_timeout = setTimeout(function(){
      // Populate content for results page
      populate_results();
      console.log("Populated results for results page");

      // Populate content for results_modal
      populate_modal();

      // Toggle state to result_qns_state
      toggle_state('answering_qns_state', 'result_qns_state');

      // Set display of emojis to none
      document.getElementById('answering_option4_correct_emoji').style.display = "none";
      document.getElementById('answering_option4_wrong_emoji').style.display = "none";
      console.log("Finished setting emojis display to none after player 2 has answered");
    }, 1000);
  }
}

// Function to handle skip button click event during answering_qns_state
function skip_button_handler(){
  clearInterval(timer);
  // Player 1 click skip button, edit player 1 object attributes and refresh content for player 2
  if (players.player1.answering_now === true && players.player2.answering_now === false) {
    // Update player 1 answer_correct variable
    players.player1.answer_correct = false;

    // Update player 1 points for current question and total points
    players.player1.current_pts = 0;
    players.player1.total_pts += players.player1.current_pts;

    // Update whose turn is it to answer now
    decide_whose_turn_to_answer();
    console.log("Switched to player 2 turn to answer");

    // Refresh content for answering_qns_state
    populate_answering_content_for_player2();
    console.log("Populated content for player 2 turn's to answer");

    // Refresh answering_qns_state timer for player 2
    start_answering_timer();
  }
  // Player 2 click skip button, populate content for result_qns_state
  else if (players.player1.answering_now === false && players.player2.answering_now === true) {
    // Update player 2 answer_correct variable
    players.player2.answer_correct = false;

    // Update player 2 points for current question and total points
    players.player2.current_pts = 0;
    players.player2.total_pts += players.player2.current_pts;

    // Populate content for results page
    populate_results();
    console.log("Populated results for results page");

    // Populate content for results_modal
    populate_modal();

    // Toggle state to result_qns_state
    toggle_state('answering_qns_state', 'result_qns_state');
  }
}

// Function to populate result_qns_state
function populate_results(){
  // Display current question title
  document.getElementById('result_qns_title').innerHTML = quiz_questions.topics[topic_quiz][current_qns_count].title;

  // Display players name on the results page
  document.getElementById('result_player1_name').innerHTML = players.player1.nickname;
  document.getElementById('result_player2_name').innerHTML = players.player2.nickname;

  // Display outcome of answer chosen by player 1
  if (players.player1.answer_correct === false) {
    // Player 1 answer is incorrect
    document.getElementById('result_answer_p1_outcome').innerHTML = "INCORRECT";
    // Display the reveal button so that player 1 can reveal the correct answer explanation
    document.getElementById('result_p1_reveal').style.display = "inline";
  }
  else if (players.player1.answer_correct === true) {
    // Player 1 answer is correct
    document.getElementById('result_answer_p1_outcome').innerHTML = "CORRECT";
  }

  // Scenario where both players have the equal total score
  if (players.player1.total_pts === players.player2.total_pts) {
    document.getElementById('result_player1_placing').innerHTML = "1ST PLACE";
    document.getElementById('result_player2_placing').innerHTML = "1ST PLACE";
    document.getElementById('result_player1_pts_ahead_behind').innerHTML = "0 PTS DIFF";
    document.getElementById('result_player2_pts_ahead_behind').innerHTML = "0 PTS DIFF";
  }

  // Display placing for player 1
  if (players.player1.total_pts < players.player2.total_pts) {
    console.log("P1 total points = " + players.player1.total_pts);
    console.log("P2 total points = " + players.player2.total_pts);
    document.getElementById('result_player1_placing').innerHTML = "2ND PLACE";
    var player1_point_behind = players.player2.total_pts - players.player1.total_pts;
    document.getElementById('result_player1_pts_ahead_behind').innerHTML = player1_point_behind + " PTS BEHIND";
  }
  else if (players.player1.total_pts > players.player2.total_pts) {
    console.log("P1 total points = " + players.player1.total_pts);
    console.log("P2 total points = " + players.player2.total_pts);
    document.getElementById('result_player1_placing').innerHTML = "1ST PLACE";
    var player1_point_ahead = players.player1.total_pts - players.player2.total_pts;
    document.getElementById('result_player1_pts_ahead_behind').innerHTML = player1_point_ahead + " PTS AHEAD";
  }
  else if (players.player1.total_pts === 0) {
    console.log("P1 total points = " + players.player1.total_pts);
    console.log("P2 total points = " + players.player2.total_pts);
    document.getElementById('result_player1_placing').innerHTML = "0TH PLACE";
    document.getElementById('result_player1_pts_ahead_behind').innerHTML = "0 PTS DIFF";
  }

  // Display current points attained by player 1 for the current question
  document.getElementById('result_player1_pts').innerHTML = players.player1.current_pts + " pts";
  players.player1.current_pts = 0;

  // Display outcome of answer chosen by player 2
  if (players.player2.answer_correct === false) {
    // Player 2 answer is incorrect
    document.getElementById('result_answer_p2_outcome').innerHTML = "INCORRECT";
    // Display the reveal button so that player 1 can reveal the correct answer explanation
    document.getElementById('result_p2_reveal').style.display = "inline";
  }
  else if (players.player2.answer_correct === true) {
    // Player 1 answer is correct
    document.getElementById('result_answer_p2_outcome').innerHTML = "CORRECT";
  }

  // Display placing for player 2
  if (players.player2.total_pts < players.player1.total_pts) {
    console.log("P1 total points = " + players.player1.total_pts);
    console.log("P2 total points = " + players.player2.total_pts);
    document.getElementById('result_player2_placing').innerHTML = "2ND PLACE";
    var player2_point_behind = players.player1.total_pts - players.player2.total_pts;
    document.getElementById('result_player2_pts_ahead_behind').innerHTML = player2_point_behind + " PTS BEHIND";
  }
  else if (players.player2.total_pts > players.player1.total_pts) {
    console.log("P1 total points = " + players.player1.total_pts);
    console.log("P2 total points = " + players.player2.total_pts);
    document.getElementById('result_player2_placing').innerHTML = "1ST PLACE";
    var player2_point_ahead = players.player2.total_pts - players.player1.total_pts;
    document.getElementById('result_player2_pts_ahead_behind').innerHTML = player2_point_ahead + " PTS AHEAD";
  }
  else if (players.player2.total_pts === 0) {
    console.log("P1 total points = " + players.player1.total_pts);
    console.log("P2 total points = " + players.player2.total_pts);
    document.getElementById('result_player2_placing').innerHTML = "0TH PLACE";
    document.getElementById('result_player2_pts_ahead_behind').innerHTML = "0 PTS DIFF";
  }

  // Display current points attained by player 2 for the current question
  document.getElementById('result_player2_pts').innerHTML = players.player2.current_pts + " pts";
  players.player2.current_pts = 0;
}

// Function to get the quiz running
function populate_quiz_question(){
 // Populate qns number out of total questions, e.g. Q 1 of 10
 populate_question_of_total_question();

 // Populate title of question
 populate_question_title();

 // Start the loop through the quiz questions
 console.log("Current question count = " + current_qns_count);
 loop_through_quiz_questions();
}

// Function to start the loop through all the questions in the topic chosen
function loop_through_quiz_questions(){
   console.log("Looping questions in progress..., round " + current_qns_count);

   // First question encountered
   if (current_qns_count === 0) {
     // Display get_ready_qns_state from display_game_details_state
     toggle_state('display_game_details_state', 'get_ready_qns_state');

     // Initiate the progress bar for get ready state
     progress = 0;
     start_get_ready_state_timer();
   }
   else if (current_qns_count > 0) {
     // Initiate the progress bar for get ready state
     progress = 0;
     start_get_ready_state_timer();
   }

   // Add event listener to next button in result_qns_state to populate content and toggle the display
   document.getElementById('result_qns_nextbt').addEventListener('click', results_nextbt_handler);

   // Add event listener to the next button in score_board_state
   document.getElementById('scoreboard_nextbt').addEventListener('click', scoreboard_nextbt_handler);
}

// Function to handle click event for next button in score_board_state
// Decide which state should it go to depending on the current_qns_count
function scoreboard_nextbt_handler(){
  console.log("Handling scoreboard next button...");

  // Still have questions remaining in the topic, go back to get_ready_qns_state
  if (current_qns_count <= 8) {
    // Increment current_qns_count by 1
    current_qns_count += 1;
    console.log("Question " + current_qns_count + " will be displayed in the next round");

    // Populate content for get_ready_qns_state
    document.getElementById('getready_qnsofqns').innerHTML = "Question " + (current_qns_count+1) + " of " + total_questions;
    document.getElementById('getready_qns_title').innerHTML = quiz_questions.topics[topic_quiz][current_qns_count].title;

    // Toggle state to get_ready_qns_state
    toggle_state('score_board_state', 'get_ready_qns_state');

    // Reset the width of progress loader bar to 0%, before moving on to get_ready_qns_state
    document.getElementById('progress_bar').style.width = "0%";

    // Set the display of the reveal button in result_qns_state to none
    document.getElementById('result_p1_reveal').style.display = "none";
    document.getElementById('result_p2_reveal').style.display = "none";

    // Continue looping through the questions in the topic
    loop_through_quiz_questions();
  }
  // Last question encountered, go to gameover_state
  else if (current_qns_count === 9) {
    // Populate content for gameover_state
    populate_gameover();

    // Toggle state to gameover_state
    toggle_state('score_board_state', 'gameover_state');

    // Add event listener for buttons in gameover_state
    document.getElementById('gameover_replay_bt').addEventListener('click', replay_game_handler);
    document.getElementById('gameover_reset_bt').addEventListener('click', reset_game_handler);
  }
}

// Function to handle replay button click event
function replay_game_handler(){
  // Reset current_qns_count to 0
  current_qns_count = 0;

  // Reset certain player1 and 2 object attributes
  players.player1.current_pts = 0;
  players.player1.total_pts = 0;
  players.player1.answer_chosen = "";
  players.player1.answer_correct = false;
  players.player1.answering_now = false;
  players.player1.correct_answers = 0;

  players.player2.current_pts = 0;
  players.player2.total_pts = 0;
  players.player2.answer_chosen = "";
  players.player2.answer_correct = false;
  players.player2.answering_now = false;
  players.player2.correct_answers = 0;

  // Reset get_ready_qns_state progress loader bar width to 0%
  document.getElementById('progress_bar').style.width = "0%";

  // Populate content for display_game_details_state
  document.getElementById('player1_name_display').innerHTML = "P1: " + players.player1.nickname;
  document.getElementById('player2_name_display').innerHTML = "P2: " + players.player2.nickname;

  // Increment replay counter by 1 to indicate how many times the game has been replayed
  replay_counter += 1;

  // Toggle state to display_game_details_state
  toggle_state('gameover_state', 'display_game_details_state');

  // Add event listener on startgame_bt id
  var start_game_button = document.getElementById('startgame_bt');
  start_game_button.addEventListener('click', populate_quiz_question);
}

// Function to reset players object attributes
function reset_players_object(){
  // Reset players object
  players.player1.nickname = "";
  players.player1.current_pts = 0;
  players.player1.total_pts = 0;
  players.player1.answer_chosen = "";
  players.player1.answer_correct = false;
  players.player1.answering_now = false;
  players.player1.correct_answers = 0;

  players.player2.nickname = "";
  players.player2.current_pts = 0;
  players.player2.total_pts = 0;
  players.player2.answer_chosen = "";
  players.player2.answer_correct = false;
  players.player2.answering_now = false;
  players.player2.correct_answers = 0;
}

// Function to hndle reset button click event
function reset_game_handler(){
  // Reset current_qns_count to 0
  current_qns_count = 0;

  // Reset players object data values
  reset_players_object();

  // Reset get_ready_qns_state progress loader bar width to 0%
  document.getElementById('progress_bar').style.width = "0%";

  // Reset input fields to be empty for set_player_details_state
  document.getElementById('player1_nickname').value = "";
  document.getElementById('player2_nickname').value = "";

  // Reset drop down list to default in set_game_details_state
  document.getElementById("topic_quiz_selection").selectedIndex = "0";
  document.getElementById("difficulty_level_selection").selectedIndex = "0";

  // // Reset content for get_ready_qns_state to it's default state
  // var qns_number_header = document.getElementsByClassName('getready_header');
  // qns_number_header.removeChild(qns_number_header.firstChild);
  // var qns_name = document.getElementsByClassName('game_qns_title_main');
  // qns_name.removeChild(qns_name.firstChild);

  // Increment reset_counter by 1
  reset_counter += 1;

  // Toggle state to set_player_details_state
  toggle_state('gameover_state', 'set_player_details_state');

  // Start game from the beginning state
  start_game();
}

// Function to populate gameover_state
function populate_gameover(){
  // Populate player 1 and 2 name
  // Player 2 --> 2nd place, Player 1 --> 1st place
  if (players.player1.total_pts > players.player2.total_pts) {
    document.getElementById('gameover_podium_2nd_place_name').innerHTML = players.player2.nickname;
    document.getElementById('gameover_podium_1st_place_name').innerHTML = players.player1.nickname;

    // Populate total points for both players
    document.getElementById('podium_2nd_points').innerHTML = players.player2.total_pts;
    document.getElementById('podium_1st_points').innerHTML = players.player1.total_pts;

    // Populate number of questions that players have chosen the correct answer
    document.getElementById('podium_2nd_qns_correct').innerHTML = players.player2.correct_answers + " out of 10";
    document.getElementById('podium_1st_qns_correct').innerHTML = players.player1.correct_answers + " out of 10";
  }
  // Player 2 --> 1st place, Player 1 --> 2nd place
  else if (players.player1.total_pts < players.player2.total_pts) {
    document.getElementById('gameover_podium_2nd_place_name').innerHTML = players.player1.nickname;
    document.getElementById('gameover_podium_1st_place_name').innerHTML = players.player2.nickname;

    // Populate total points for both players
    document.getElementById('podium_2nd_points').innerHTML = players.player1.total_pts;
    document.getElementById('podium_1st_points').innerHTML = players.player2.total_pts;

    // Populate number of questions that players have chosen the correct answer
    document.getElementById('podium_2nd_qns_correct').innerHTML = players.player1.correct_answers + " out of 10";
    document.getElementById('podium_1st_qns_correct').innerHTML = players.player2.correct_answers + " out of 10";
  }
}

// Function to start podium animation
// function start_podium_animation(){
// }

// Function to handle click event for next button in result_qns_state - populate content for scoreboard
function results_nextbt_handler(){
  console.log("Populating scoreboard content...");
  // Populate scoreboard content for player 1
  document.getElementById('scoreboard_p1_name').innerHTML = players.player1.nickname;
  document.getElementById('scoreboard_p1_points').innerHTML = players.player1.total_pts;

  // Populate scoreboard content for player 2
  document.getElementById('scoreboard_p2_name').innerHTML = players.player2.nickname;
  document.getElementById('scoreboard_p2_points').innerHTML = players.player2.total_pts;
  console.log("Finished populating scoreboard content...");

  // Toggle state to score_board_state
  toggle_state('result_qns_state', 'score_board_state');
}

// Function to decide whose turn is it to answer now - player 1 always goes first
function decide_whose_turn_to_answer(){
  // Player 1's turn to answer
  if (rounds_of_answer === 0) {
    console.log("Rounds of answer for current question = " + rounds_of_answer);
    rounds_of_answer += 1;
    players.player1.answering_now = true;
    players.player2.answering_now = false;
  }
  // Player 2's turn to answer
  else if (rounds_of_answer === 1) {
    console.log("Rounds of answer for current question = " + rounds_of_answer);
    rounds_of_answer += 1;
    players.player1.answering_now = false;
    players.player2.answering_now = true;
    rounds_of_answer = 0;
  }
}

// Function to refresh content for answering_qns_state
function populate_answering_content_for_player2(){
  // Display its player 2's turn to answer
  document.getElementById('answering_player_turn').innerHTML = players.player2.nickname + "'s turn to answer...";

  // Populate image for current question
  var current_qns_image = quiz_questions.topics[topic_quiz][current_qns_count].image;
  // Assign the image src attribute based on it's id
  document.getElementById('answering_qns_img').src = current_qns_image;

  // Populate the 4 options for current question
  var option1 = quiz_questions.topics[topic_quiz][current_qns_count].options.option_1;
  var option2 = quiz_questions.topics[topic_quiz][current_qns_count].options.option_2;
  var option3 = quiz_questions.topics[topic_quiz][current_qns_count].options.option_3;
  var option4 = quiz_questions.topics[topic_quiz][current_qns_count].options.option_4;
  // Assign the innerHTML of the 4 options based on it's id
  document.getElementById('answering_option1').innerHTML = option1;
  document.getElementById('answering_option2').innerHTML = option2;
  document.getElementById('answering_option3').innerHTML = option3;
  document.getElementById('answering_option4').innerHTML = option4;
}

// Function to populate content for answering_qns_state
function populate_answering_content_for_player1(){
  if (current_qns_count === 0) {
    if (replay_counter > 0) {
      document.getElementById('answering_qns_title').innerHTML = current_qns_title;
      document.getElementById('answering_player_turn').innerHTML = players.player1.nickname + "'s turn to answer...";
    }
    else if (reset_counter > 0) {
      document.getElementById('answering_qns_title').innerHTML = current_qns_title;
      document.getElementById('answering_player_turn').innerHTML = players.player1.nickname + "'s turn to answer...";
    }
    else {
      // Create h5 element for current question title
      var current_qns = document.createElement('h5');
      current_qns.id = "answering_qns_title";
      current_qns.innerHTML = current_qns_title;

      // Append created h5 element to parent
      document.getElementsByClassName('game_answering_header')[0].appendChild(current_qns);

      // Create h5 element for whose turn is to answer current question
      var currentQns_whose_turn = document.createElement('h5');
      currentQns_whose_turn.id = "answering_player_turn";
      // Player 1's turn to answer
      currentQns_whose_turn.innerHTML = players.player1.nickname + "'s turn to answer...";
      document.getElementsByClassName('game_player_turn')[0].appendChild(currentQns_whose_turn);
    }
  }
  else if (current_qns_count > 0) {
    // Update question title and whose turn it is to answer now
    document.getElementById('answering_qns_title').innerHTML = quiz_questions.topics[topic_quiz][current_qns_count].title;
    document.getElementById('answering_player_turn').innerHTML = players.player1.nickname + "'s turn to answer...";
  }

  // Populate timer for answering_qns_state
  if (difficulty_level === "easy") {
   var time_to_answer_easy = quiz_questions.difficulty_level.easy;
   document.getElementById('answering_timer').innerHTML = time_to_answer_easy;
   time_to_answer = time_to_answer_easy;
  }
  else if (difficulty_level === "medium") {
   var time_to_answer_medium = quiz_questions.difficulty_level.medium;
   document.getElementById('answering_timer').innerHTML = time_to_answer_medium;
   time_to_answer = time_to_answer_medium;
  }
  else if (difficulty_level === "hard") {
   var time_to_answer_hard = quiz_questions.difficulty_level.hard;
   document.getElementById('answering_timer').innerHTML = time_to_answer_hard;
   time_to_answer = time_to_answer_hard;
  }

  // Populate image for current question
  var current_qns_image = quiz_questions.topics[topic_quiz][current_qns_count].image;
  // Assign the image src attribute based on it's id
  document.getElementById('answering_qns_img').src = current_qns_image;

  // Populate the 4 options for current question
  var option1 = quiz_questions.topics[topic_quiz][current_qns_count].options.option_1;
  var option2 = quiz_questions.topics[topic_quiz][current_qns_count].options.option_2;
  var option3 = quiz_questions.topics[topic_quiz][current_qns_count].options.option_3;
  var option4 = quiz_questions.topics[topic_quiz][current_qns_count].options.option_4;
  // Assign the innerHTML of the 4 options based on it's id
  document.getElementById('answering_option1').innerHTML = option1;
  document.getElementById('answering_option2').innerHTML = option2;
  document.getElementById('answering_option3').innerHTML = option3;
  document.getElementById('answering_option4').innerHTML = option4;
}

// Function to start the game running from the first state onwards
function start_game(){
  // Make the first state visible - set_player_details_state
  document.getElementById('set_player_details_state').display = "inline";

  // Add event listener on set_player_details_nextbt id
  var playerdetails_nextbt = document.getElementById('set_player_details_nextbt');
  playerdetails_nextbt.addEventListener('click', function(){
    console.log("Set player details next button activated");

    // Retrieve players nickname and save it to object
    get_players_nickname();

    console.log("After get_players_nickname function");

    // Set next state to be displayed - set_game_details_state
    toggle_state('set_player_details_state', 'set_game_details_state');

    console.log("State has been toggled");
  });

  // Add event listener on game_details_nextbt id
  var gamedetails_nextbt = document.getElementById('game_details_nextbt');
  gamedetails_nextbt.addEventListener('click', function(){
    console.log("set_game_details_state next button activated");

    // Retrieve topic and difficulty level and save it to global variable
    get_game_details();

    // Populate content for display_game_details_state before it is displayed
    populate_game_details();

    // Set next state to be displayed - display_game_details_state
    toggle_state('set_game_details_state', 'display_game_details_state');

    // Start the text animation for display_game_details_state
    start_get_ready_text_animation();

    console.log("State has been toggled");
  });

  // Add event listener on startgame_bt id
  var start_game_button = document.getElementById('startgame_bt');
  start_game_button.addEventListener('click', populate_quiz_question);
}

// -----------------------------Main Game--------------------------------------
window.onload = function(){
  start_game();
}
