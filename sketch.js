var frownImg;
var minionImg;
var transparentImg;
var normalHeartImg;
var brokenHeartImg;


function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  frownImg = loadImage("images/minionFrown.png");
  minionImg = loadImage("images/croppedminion.png");
  normalHeartImg = loadImage("images/minionheart.png");
  brokenHeartImg = loadImage("images/brokenheart.png");
}//END OF SETUP


function draw() {
  // draw stuff here
  // ellipse(width/2, height/2, 50, 50);
  rect(1120,20, 25,500);
  

}//END OF DRAW


function keyPressed(){
	if (keyCode===UP_ARROW){
		//THIS IS THE SMILING MINION
		image(minionImg,-50,0);
		//THIS IS THE NORMAL HEART
		image(normalHeartImg, 715, 355, normalHeartImg.width/10, normalHeartImg.height/10);


	}

	if (keyCode===LEFT_ARROW){
		//THIS IS THE FROWN
		image(frownImg,195,400);
		//THIS IS THE BROKEN HEART
		image(brokenHeartImg, 715, 355, brokenHeartImg.width/10, brokenHeartImg.height/10);
	} 
}

