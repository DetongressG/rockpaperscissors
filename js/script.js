$(".play").click(function(){
  let userInput=$(".input").val()
  $(".userChoice").text(userInput)
  let randomNumber=Math.ceil(Math.random()*3)
  if(randomNumber===1){
    $(".computerChoice").text("rock")
  } else if(randomNumber===2){
    $(".computerChoice").text("paper")
  } else if(randomNumber===3){
    $(".computerChoice").text("scissors")
  }
  
  //If the user chooses rock and the computer chooses scissors, the user wins
  if(userInput==="rock" && randomNumber===3 ){
    $(".result").text("User Wins")
  } else if(userInput==="rock" && randomNumber===2){
    $(".result").text("Computer Wins")
  } else if(userInput==="paper" && randomNumber===3){
    $(".result").text("Computer Wins")
  } 
})