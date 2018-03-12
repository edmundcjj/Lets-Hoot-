

// ----------------------------Global Variables---------------------------------
var topic_quiz = "";        // Topic chosen for quiz by players
var difficulty_level = "";  // Level of difficulty chosen by players
var total_questions = 0;    // Number of total questions based on topic chosen
var current_qns_count = 1;  // Qns number of current question
var current_qns_title = ""; // Title of current question
var progress = 0;           // initial value of your progress bar
var timeout = 50;           // number of milliseconds between each frame
var increment = .5;          // increment for each frame
var maxprogress = 110;      // when to leave stop running the animation

// ------------------------------- Objects -------------------------------------
// Questions object
var quiz_questions = {
  "difficulty_level": {
    "easy": 60,
    "medium": 40,
    "hard": 30
  },
  "topics": {
    "css": [
      {
        "question_number": 1,
        "title":"What does css stands for?",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 2,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 3,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 4,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 5,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 6,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 7,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 8,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 9,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 10,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
    ],
    "html": [
      {
        "question_number": 1,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 2,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 3,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 4,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 5,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 6,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 7,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 8,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 9,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 10,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
    ],
    "JavaScript": [
      {
        "question_number": 1,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 2,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 3,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 4,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 5,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 6,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 7,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 8,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 9,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
      },
      {
        "question_number": 10,
        "title":"",
        "image": "",
        "options": {
          "option_1": "",
          "option_2": "",
          "option_3": "",
          "option_4": "",
        },
        "answer": ""
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
     "answer_correct": false
   },
   "player2": {
     "nickname": "",
     "current_pts": 0,
     "total_pts": 0,
     "answer_chosen": "",
     "answer_correct": false
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

 // Function to display game details before game starts
 function populate_game_details(){
   console.log("Populating game details now...");

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

   console.log("Finished populating game details");
 }

 // Function to display question number out of total questions
 function populate_question_of_total_question(){
   console.log("Populating question of total question now...");
   // Find out how many questions are there in each topic
   // total_questions = quiz_questions.topics[topic_quiz].length;

   // Create h1 element, assign id and populate innerHTML
   var qns_of_qns = document.createElement('h1');
   qns_of_qns.id = "getready_qnsofqns";
   qns_of_qns.innerHTML = "Question " + current_qns_count + " of " + total_questions;

   // Append h1 element to parent class
   // Display question number out of total questions
   document.getElementsByClassName('getready_header')[0].appendChild(qns_of_qns);

   console.log("Finished populating question of total question now...");
 }

 // Function to display question title
 function populate_question_title(){
   console.log("Populating question title now...");
   // Create h1 element, assign id and populate innerHTML
   var qns_title = document.createElement('h1');
   qns_title.id = "getready_qns_title";
   qns_title.innerHTML = quiz_questions.topics[topic_quiz][current_qns_count-1].title;

   // Append h1 element to parent class and display question title
   document.getElementsByClassName('game_qns_title_main')[0].appendChild(qns_title);

   // Save qns title to a global variable
   current_qns_title = quiz_questions.topics[topic_quiz][current_qns_count].title;

   console.log("Finished populating question title");
 }

 // Function to start the timer for get_ready_qns_state
 function start_timer(){
   console.log("Start progress bar animation");

   // Animate the progress bar loading
   setTimeout(function () {
        progress += increment;
        if(progress < maxprogress) {
          progress_percentage = progress.toString();
          progress_percentage = progress + "%";
          console.log("Progress = " + progress_percentage);
          document.getElementById('progress_bar').style.width = progress_percentage;
          start_timer();
        }
        else {
          // Display answering_qns_state
          toggle_state('get_ready_qns_state', 'answering_qns_state');
        }
    }, timeout);

    console.log("Finished progress bar animation");
 }

 // Function to get the quiz running
 function start_quiz(){
   // Populate qns number out of total questions
   populate_question_of_total_question();

   // Populate title of question
   populate_question_title();

   // Display get_ready_qns_state
   toggle_state('display_game_details_state', 'get_ready_qns_state');

   // Initiate the progress bar
   progress = 0;
   start_timer();

   // Loop the number of questions in each topic
   // while (current_qns_count <= total_questions) {
   //
   // }
 }



 // -----------------------------Main Game--------------------------------------
window.onload = function(){
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

    console.log("State has been toggled");
  });

  // Add event listener on startgame_bt id
  var start_game_button = document.getElementById('startgame_bt');
  start_game_button.addEventListener('click', start_quiz);
}
