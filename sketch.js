let gameState = 1;
let ballXPos = 500;
let ballYPos = 375;
let ballXdirection = 5;
let ballYdirection = 10;
var playerScore = 0;
var aiScore = 0;
let myXPos = 20;
let myYPos = 100;
let aiXPos = 910;
let aiYPos = 100;
let ballHitX,ballHitY;
let ballHitHorizontal =100;
let ballHitVertical = 50;

function setup(){
createCanvas(950, 600);
}

function draw(){
 background(0);
let greenVal = 255;
//GAME STATE = 1 --- The Game will start with this Menu screen
if(gameState ==1){
  fill(0,255,0);
  rect(375, 250,200,100);
  fill(255);
  textSize(30);
  text("Start Game", 395,315);
  textSize(20);
  text("In order to win you must get a total of 5 points. But make sure not to get 5 points scored on your side,", 25,415);
  text(" or you’ll lose", 405,445);
  textSize(70);
  text("Pong", 395, 215);
  textSize(20);
  text("By: Sebastian Reyna, Rashawn Brown, Rayane Skiker, and Marlon Rodriguez", 100, 475);
}
//GAME STATE = 2 -- 1 OF 2 --- This will be the screen shown after the player looses
if(aiScore == 5){
   gameState = 2;
  fill(0,255,0);
  rect(375, 250,200,100);
  fill(255);
  textSize(30);
  text("Play again", 400,315);
  textSize(70);
  text("Pong", 395,215);
  fill(255,0,0);
  text("You Lost!", 325,115);
   }
//GAME STATE = 2 -- 2 OF 2 --- This will be the screen shown after the player Wins
if(playerScore == 5){
   gameState = 2;
  fill(0,255,0);
  rect(375, 250, 200, 100);
  fill(255);
  textSize(30);
  text("Play again", 400, 315);
  textSize(70);
  text("Pong", 395, 215);
  fill(0,255,0);
  text("You WIN!", 325, 115);
   }
// This is what the game will look like as it is being played.
if(gameState == 0){
// (1) Variables -------------------------------------
myLeft = myXPos;
myRight = myXPos + 20;
myTop = myYPos;
myBottom = myYPos + 100;
aiLeft = aiXPos;
aiRight = aiXPos + 20;
aiTop = aiYPos;
aiBottom = aiYPos + 100;
let aiMoveSpeed = random(-10,-8);
let aiDirection = aiMoveSpeed;
//(2) Score tracker --------------------------------------------
    fill(225);
    textSize(20);
    text("You:" + " " + playerScore, 45, 25);
    text("AI:"+ " " + aiScore, 860, 25);
if (ballXPos > 950){
    ballXPos = 500;
    ballYPos = 375;
    playerScore += 1;
    ballXdirection *= -1;
}
if(ballXPos < 1){
    ballXPos = 500;
    ballYPos = 375;
    aiScore += 1;
    ballXdirection *= -1;
}
// (3)-Bars and Ball------------------------------------
//this is what makes up the user’s Bar
fill(255);
noStroke();
ellipse(30,myYPos + 1, 20);
rect(20, myYPos, 20, 100);
ellipse(30,myYPos + 101, 20);
//this is what makes up the computer’s Bar
fill(255,0,0);
noStroke();
ellipse(920,aiYPos + 1, 20);
rect(910, aiYPos, 20, 100);
ellipse(920,aiYPos + 101, 20);
//This is a black invisible square, that helps add the trail to the ball
fill(255,255,255, 10);
rect(40,0,870,600);
//This is the ball
fill(255);
stroke(255);
ellipse(ballXPos, ballYPos, 40, 40);
// This is the ellipse that appears whenver the ball hits something
noFill();
stroke(255);
strokeWeight(1);
ellipse(ballHitX,ballHitY,ballHitHorizontal, ballHitVertical);
// This is the little background design at the center of the screen
strokeWeight(1);
stroke(200);
noFill();
ellipse(475,300, 100);
stroke(255);
line(475,0,475,112);
line(475,116,475,240);
line(475,244,475,360);
line(475,364,475,480);
line(475,484,475,600);
//(4) ball’s directions/collisions ------------------------------------------
ballXPos += ballXdirection;
ballYPos += ballYdirection;
if(ballYPos >= 600 || ballYPos <= 10){
  ballYdirection *= -1;
  if(ballYPos > 300){
    ballHitX = ballXPos;
    ballHitY = ballYPos - 20;
    ballHitVertical = 20;
    ballHitHorizontal = 70;
  }
  else{
    ballHitX = ballXPos;
    ballHitY = ballYPos + 20;
    ballHitVertical = 20;
    ballHitHorizontal = 70;
  }
}
if(ballXPos <= myRight + 20 && ballXPos >= myRight - 5 && ballYPos <= myBottom + 10 && ballYPos >= myTop - 10) {
  ballXdirection = 5;
    ballHitX = ballXPos;
    ballHitY = ballYPos + 20;
    ballHitVertical = 70;
    ballHitHorizontal = 20;
}
if(ballXPos >= aiLeft - 20 && ballXPos <= aiLeft +5 && ballYPos <= aiBottom +30 && ballYPos >= aiTop - 30){
  ballXdirection = -5;
    ballHitX = ballXPos;
    ballHitY = ballYPos - 20;
    ballHitVertical = 70;
    ballHitHorizontal = 20;
}
// (5) This area is what controls the AI’s up and down motion-------------------------------------
if (aiYPos >= 500 || aiYPos <= 20 ){
    aiDirection *= -1;
  }
if(aiYPos <= 480 && ballYPos > aiYPos && ballXPos > 300){
aiDirection = abs(aiMoveSpeed);
  }
if(aiYPos >= 20 && ballYPos < aiYPos && ballXPos > 300){
aiDirection= aiMoveSpeed;
  }
    aiYPos += aiDirection;
//(6) Just the controls for the user’s bar-----------------------------------------------------
if (keyIsDown(UP_ARROW) && myTop >= 20){
    myYPos -=10;
}
if (keyIsDown(DOWN_ARROW)&& myTop + 100 <= 580){
    myYPos +=10;
    }
  }
}

function mouseClicked(){
  //(7) this is what makes it possible to switch between modes--------------------------------
  if(mouseX > 375 && mouseX < 575 && mouseY > 250 && mouseY < 350 && gameState > 0 ){
    gameState = 0;
    playerScore = 0;
    aiScore= 0;
  }
}