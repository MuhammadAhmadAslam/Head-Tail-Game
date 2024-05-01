alert('This is head tail game:\n Instructions:\n For doing toss write head or a tail\n if you won the toss enter what you want bat or bowl\n and enjoy your game\n if at the end true will come it means you won the match otherwise if false you are lose')
let random = Math.round(Math.random()*7);
let randomBatting;
let userBowling;
let randomBattingScore;
let batting = false;
let bowling = false;
let batcount = 0
let bowlcount = 0
//let score;
let runs = 0;
let score = 0
let toss = prompt('You are doing a Toss So Write Head Or A Tail For Toss').toLowerCase();
let headOrTail;
let tossing = Math.round(Math.random());
if(tossing == 1){
  headOrTail = 'head'.toLowerCase()
}else if(tossing == 0){
  headOrTail = 'tail'.toLowerCase()
}


let battingOrBowling;
if(toss == 'head' && headOrTail == 'head'){
  battingOrBowling = prompt('Enter what you want bowl or bat').toLowerCase();
}else if(toss == 'tail' && headOrTail == 'tail'){
  battingOrBowling = prompt('Enter what you want bowl or bat').toLowerCase();
}



//let random;
if(battingOrBowling == 'bat'){
  alert('You are now batting make runs to win');
  batting = true 
 batcount++

for (;;) {
    runs = parseInt(prompt("Enter runs:"));
  if (runs <= 6) {
    if (runs == Math.round(Math.random()*7)) {
      alert("You are OUT!");
      break;
  }

  score += runs;
  }
    // alert('Your final score is : ' + score)
}

//alert("Your final score is: " + score);

}else if(battingOrBowling == 'bowl'){
  alert('You are now bowling take wicket to win');
  bowling = true
  bowlcount++
  for(;;){
    userBowling = +prompt('You are now bowling take wickets');
    randomBatting = Math.round(Math.random()*7);
    if(userBowling == Math.round(Math.random()*7)){
      alert('You got wicket');
      break
    }
    
    
    randomBattingScore += Math.round(Math.random()*7);


  }
}else{
  alert('Enter head or a tail')
}





console.log(batcount);
if(batcount == 0){
    alert('You are now batting make runs to win');
  
 

for (;;) {
    runs = parseInt(prompt("Enter runs:"));
    if (runs <= 6) {
      
      if (runs == Math.round(Math.random()*7)) {
          alert("You are OUT!");
          break;
      }
  
      score += runs;
    }
    
    
}
}
if(bowlcount == 0){
    alert('You are now bowling take wicket to win');
    
    for(;;){
        userBowling = +prompt('You are now bowling take wickets');
      randomBatting = Math.round(Math.random()*7);
      if(userBowling == Math.round(Math.random()*7)){
        alert('You got wicket');
        
        break
      }
      
      
      randomBattingScore += Math.round(Math.random()*7);
}
}


alert(`${score} This is user score`);
alert(`${randomBatting} This is random batting score`);
alert(score > randomBatting)







