class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
       }
      form = new Form()
      form.display();
    }

  }
  play(){
    form.hide();
    textSize(30);
    text("Game Start", displayWidth/2 -10, 100)
    Player.getPlayerInfo();
    

        car1 = createSprite(displayWidth -600,displayHeight -100,50,50);
            car2 = createSprite(displayWidth -300,displayHeight -100,50,50);
              

              car1.addImage(car1Image);
              car2.addImage(car2Image);
              
              carsarray = [car1,car2]


    if(allPlayers !== undefined){
      background("white")
          image(trackimage,image(trackimage, 0,-displayHeight*4,displayWidth, displayHeight*5));
      var display_position = 130;
        var index = 0
          var x = 0
            var y = 0

      for(var plr in allPlayers){
        index = index + 1
           x = x +200
           y = displayHeight - allPlayers[plr].distance
              console.log(index)
                carsarray[index-1].x = x
                  carsarray[index-1].y = y
            if (index === player.index){
              carsarray[index-1].shapeColor = "red"; 
                  camera.position.x = displayWidth/2; 
                    camera.position.y = carsarray[index-1].y 
                    }
                
        if (plr === "player" + player.index)
           fill("red")
                else
                  fill("black");

        display_position+=20;
          textSize(15);
           text(allPlayers[plr].name + ": " + allPlayers[plr].distance, displayWidth/2 -10,display_position)
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
          player.distance +=50
             player.update();
    }
    drawSprites();
  }
}