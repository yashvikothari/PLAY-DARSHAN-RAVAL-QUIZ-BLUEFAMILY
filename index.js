// step 1 use require and/or install readlinesync
var readlinesync = require("readline-sync");
//step 2 process taking input from user
var uname = readlinesync.question("What's your name?");
//step6 remember to define sore
var score = 0;
//saved database of darshaner
var highScores = [
  {
    name: "Yashvi",
    score: 5,
  },
  {
    name: "Dipti",
    score: 5,
  },
];
//step 3 add value by giving welcome as output
console.log("Welcome ", uname, " to Quiz made for Darshaners,Blue Family ");
//step 4 define play named  function

function play(quesn, ans) {
  var ugiveans = readlinesync.question(quesn);

  if (ugiveans === ans) {
    console.log(uname, " you answered it right");
    //we should add and print score, relax no negative marking
    score = score + 1;
  } else {
    console.log(uname, "Sorry You gave wronganswer!");
    console.log("The answer was " + ans);
  }
  //as i needed below 2 lines be it if part or else i keep it in play after ifelse part completed.
  console.log("current score: ", score);
  console.log("--------------------");
}
//step 5 call play fn -- not now in v1
//play("Which city Yashvi resides in ?","Ahmedabad")

//step7 define question number as object -- be advance dont use this and go to step
// var q1 = {
//   quesn:"Which city Yashvi resides in ? ",
//   ans:"Ahmedabad"
// }
// var q2 = {
//   quesn:"Tell about Yashvi's favourite singer name. ",
//   ans:"Darshan"
// }

//step8 define question list as array and pass object

//step 9define quesnList var pass object as array

var quesnList = [
  {
    quesn:
      "Select Darshan Raval has crush on ? Type 1 if answer is Samantha Prabhu\n1 Samantha Prabhu \n2 Jhanvi Kapoor\n3 Shreya Goshal\n4 Tulsi Kumar \n ",
    ans: "1",
  },
  {
    quesn:
      "Darshan place of birth? \n1 Surat\n2	Vadodara\n3 Ahmedabad\n4 Gandhinagar \n",
    ans: "3",
  },
  {
    quesn:
      "Darshan Birthday Month.\n1 October\n2 December\n3 July\n4 August \n",
    ans: "1",
  },
  {
    quesn:
      " Darshan first song?\n1 Jab Tum Chaho \n2 Mere Chaand\n3 Pehli Mohabbat\n4 Pehli Barsaat \n",
    ans: "3",
  },
  {
    quesn:
      " Darshan Father Name ? \n1 Rajesh\n2 Rajat\n3 Ramesh\n4 Rajendra \n",
    ans: "4",
  },
];

//step10 we need loop
for (var qcounter = 0; qcounter < quesnList.length; qcounter = qcounter + 1) {
  var currentQ = quesnList[qcounter];
  play(currentQ.quesn, currentQ.ans);
}

var total = quesnList.length; //total score

console.log("Thankies!", uname, "You SCORED: ", score, " out of ", total); //finalscore

console.log(
  "Check out below high scores, if you should be there send me screenshot and I'll try to update it.It will show upto 2 names."
);

console.log("--------------------------------------------------------");
console.log("Scoreboard game is:");
console.log(
  "1.Score:" + highScores[0].score + " ,Scored by : " + highScores[0].name
);
console.log(
  "2.Score:" + highScores[1].score + " ,Scored by : " + highScores[1].name
);
