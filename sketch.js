var fairy, fairyI;
var star, starI;
var bg;

function preload()
{
    fairyI = loadAnimation("fairyImage1","fairyImage2");
    starI = loadImage("starImage.png");
    bg = loadImage("starNight.png");
}

function setup()
{
    background(bg);

}

function draw()
{

   
    drawSprites();
}