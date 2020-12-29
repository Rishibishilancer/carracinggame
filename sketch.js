var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game,car1,car2,carsarray,trackimage,ground,car1Image,car2Image;


function preload(){

  trackimage = loadImage("images/track.png")
  car1Image = loadImage("images/car1.png")
  car2Image = loadImage("images/car2.png")
  ground = loadImage("images/ground.png")



    
  



}

function setup(){
  canvas = createCanvas(displayWidth -50,displayHeight -50);


  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
