var player,playerimg;
var bg;
var bed;
function preload(){
    bg = loadImage("pixil-frame-0.png");
    playerimg = loadImage("stand-1.png");
}
function setup(){
    createCanvas(1200,600)
    player = createSprite(800,900,50,50);
    player.addImage(playerimg);
    player.scale=2.0
    bed = createSprite(200,600,20,20);
    bed.shapeColor="red"
    bed.debug = true;
    player.debug = true;
    player.setCollider("rectangle",1500,1500,1500,1500);
    //bed.setCollider("rectangle",500,500,500,500);
}
function draw(){
    background(bg);
    if(keyDown("A")){
        player.x = player.x - 5
    }
    if(keyDown("D")){
        player.x = player.x+5;
    }
    if(player.isTouching(bed)){
        textSize(40);
        fill("black")
        text("today was tiring", 400,400)
        
    }
    drawSprites()
}
