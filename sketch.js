var canvas,box1,box2,box3,box4,box5;
var music,ball,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(830,600);

    //create 4 different surfaces
    box1=createSprite(740,580,150,20);
    box1.shapeColor="blue";

    box2=createSprite(580,580,150,20);
    box2.shapeColor="red";
    
    box3=createSprite(420,580,150,20);
    box3.shapeColor="green";

     box4=createSprite(260,580,150,20);
     box4.shapeColor="yellow";

     box5=createSprite(100,580,150,20);
     box5.shapeColor="indigo";

     ball=createSprite(random(20,750),100,40,40)
     ball.shapeColor="white";
     ball.velocityX=4;
     ball.velocityY=4;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges=createEdgeSprites();
    ball.bounceOff(edges)

    if (box1.isTouching(ball)&&ball.bounceOff(box1)){
        ball.shapeColor="blue"
        music.play();
    }
    if (box2.isTouching(ball)&&ball.bounceOff(box2)){
        ball.shapeColor="red"
        music.play();
    }
    if (box3.isTouching(ball)&&ball.bounceOff(box3)){
        ball.shapeColor="green"
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }
    if (box4.isTouching(ball)&&ball.bounceOff(box4)){
        ball.shapeColor="yellow"
        music.play();
    }
    if (box5.isTouching(ball)&&ball.bounceOff(box5)){
        ball.shapeColor="indigo"
        music.play();
    }
    drawSprites();
    //add condition to check if box touching surface and make it box
}
