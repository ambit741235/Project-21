var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box, edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(698,588,200,20);
    surface1.shapeColor = "green";

    surface2 = createSprite(488,588,200,20);
    surface2.shapeColor = "Magenta";

    surface3 = createSprite(278,588,200,20);
    surface3.shapeColor = rgb(255,128,0);

    surface4 = createSprite(68,588,200,20);
    surface4.shapeColor = "blue";

    //create box sprite and give velocity
    box = createSprite(random(20,750),288,20,20);
    box.shapeColor = "white";
    box.velocityX = 4;
    box.velocityY = 4;
}

function draw() {
    background(rgb(169,169,169));
    drawSprites();

    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "green";
        music.play();
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "Magenta";
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = rgb(255,128,0);
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "blue";
    }
}
