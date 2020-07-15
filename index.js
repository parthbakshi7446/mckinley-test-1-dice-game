
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

var randomImageSource = "images/dice" + randomNumber1 + ".png"; //selecting image

document.querySelector(".img1").setAttribute("src", randomImageSource);
//picking image by putting src value

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}//if player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}//draw
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
