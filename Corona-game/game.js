function load_images(){
    virus_img = new Image;  //create image
	virus_img.src = "Assets/alien1.png";

	player_img = new Image;
	player_img.src = "Assets/ufo1.png";

	gem_image = new Image;
	gem_image.src = "Assets/planet1.png";

}

function init()
{
    canvas = document.getElementById("mycanvas")
    W = 700
    H = 400
    canvas.width = W
    canvas.height = H
    pen = canvas.getContext('2d');
    console.log(pen)

    score = 20;
	game_over = false;
 // We want to create a box
// JSON Objects

e1 = {
    x : 100,
    y : 50,
    w : 60,
    h : 60,
    speed : 20,
};
e2 = {
    x : 120,
    y : 50,
    w : 60,
    h : 60,
    speed : 25,
};
e3 = {
    x : 220,
    y : 50,
    w : 60,
    h : 60,
    speed : 35,

}
e4 = {
    x : 320,
    y : 150,
    w : 60,
    h : 60,
    speed : 30,
};
e5 = {
    x : 420,
    y : 20,
    w : 60,
    h : 60,
    speed : 35,
};
e6 = {
    x : 520,
    y : 20,
    w : 60,
    h : 60,
    speed : 45,
};
player = {
    x : 20,
    y : H/2,
    w : 60,
    h : 60,
    speed : 20,
    moving : "false",
};
gem = {
    x : W-70,
    y : H/2,
    w : 60,
    h : 60,
};
enemy = [e2,e3,e4,e5,e6];

}


//Game loop

function draw(){

    pen.clearRect(0,0,W,H)
	pen.fillStyle = "red";
// pen.fillRect(bird.x,bird.y,bird.w,bird.h);
pen.drawImage(player_img,player.x,player.y,player.w,player.h); //draw player
pen.drawImage(gem_image,gem.x,gem.y,gem.w,gem.h);  // draw gem

for(let i=0;i<enemy.length;i++){    //move enemies
    pen.drawImage(virus_img,enemy[i].x,enemy[i].y,enemy[i].w,enemy[i].h);
}
//Create an event listener
canvas.addEventListener('mousedown',function(){
    console.log("You pressed the mouse");
    player.moving = true;
});
canvas.addEventListener('mouseup',function(){
    console.log("You released the mouse");
    player.moving = false;
});
//Different key
/*
document.addEventListener('keydown',function(e){
    console.log("You pressed a key");
    console.log(e);
    if(e.key=='t'){

    }
});*/


}


function isColliding(b1,b2){
	//x,y,w,h
	if(Math.abs(b1.x - b2.x)<=30 && Math.abs(b1.y-b2.y)<=30){
		return true;
	}
	return false;
}

function update(){

    if(player.moving==true){   //if player move
		player.x += player.speed;
		score += 20;
    }
    

    for(i=0;i<enemy.length;i++){
        if(isColliding(enemy[i],player)){
			score -= i*100;  // if they collide then decrease score
			if(score<0){
				game_over = true;
				alert("Game Over");
			}
    }
    }
    if(isColliding(gem,player)){
        game_over=true
        draw()
        alert("your score"+score)
    }


for(i=0;i<enemy.length;i++){
            enemy[i].y+=enemy[i].speed   // moving enemy 

        if(enemy[i].y > H - enemy[i].h || enemy[i].y<0)
            {
                enemy[i].speed*=-1;
            }
    }  

    
	pen.fillStyle = "white"; 
	pen.fillText("Score " + score,10,10); //update score 
    
}

 


function gameloop(){
   
    if(game_over == true){
    clearInterval(f);
    }

    draw();
    update();
}

//start of the game
load_images();
init();

//repeated call gameloop
var f = setInterval(gameloop,100);










