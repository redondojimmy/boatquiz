var quiz = [
  {
  question: "What is the front of the boat called?",
  answer: "bow"
},
{
  question: "Which knot creates a fixed loop at the end of a rope that can be easily untied?",
  answer: "bowline"
},
{
  question: "What type of boat uses the wind to propel the vessel?",
  answer: "sailboat"
},
{
  question: "What is the device used to temporarily secure a vessel to the ground below the water?",
  answer: "anchor"
},
{
  question: "What is the left side of a boat called?",
  answer: "port"
},
{
  question: "What is the right side of a boat called?",
  answer: "starboard"
},
{
  question: "What color should the port sidelight be?",
  answer: "red"
},
{
  question: "What color should the starboard light be?",
  answer: "green"
},
{
  question: "What is the back part of a boat called?",
  answer: "stern"
},
{
  question: "What color should the stern light be?",
  answer: "white"
},
];
for (var i = 0; i < quiz.length; i++) {
 var question = quiz[i].question;
 var element = document.getElementById('question' + i);
 console.log(question, element);
 element.textContent = quiz[i].question;
 }
 function checkAnswers() {
   var correct = 0;
   var incorrect = 0;

   for(var i = 0; i < quiz.length; i++) {
     var answer = quiz[i].answer
     var input = document.getElementById('answer' + [i]).value;
     var questionSpot = document.getElementById('question' + [i]);
     if (answer == input) {
       questionSpot.className = 'correct';
       correct++;
     }
     else {
       questionSpot.className = 'incorrect';
       incorrect++;
     };
   };
 };
