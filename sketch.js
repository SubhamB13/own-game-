var bg;
var spaceShipImg,spaceShip1,spaceShip2Img,spaceShip2,bulletImg,thunderImg;
var astroidImg,astroid,bullet,thunder;
var starImg,star;
var life = 50;
var BulletG1,BulletG2,BulletG3,BulletG4;

function preload(){
    bg = loadImage("background.jpg");
    starImg = loadImage("star.png");
    astroidImg = loadImage("astroid.png");
    spaceShipImg = loadImage("spaceship1.png");
    spaceShip2Img = loadImage("spaceship2.png");
    bulletImg = loadImage("bullet.png");
    thunderImg = loadImage("thunder.png");
}

function setup(){
    canvas = createCanvas(1690,800)

    spaceShip1 = createSprite(150,400,50,50);
    spaceShip1.addImage(spaceShipImg);
    spaceShip1.scale = 0.5;
    spaceShip1.rotation = 90;


    spaceShip2 = createSprite(1500,400,50,50);
    spaceShip2.addImage(spaceShip2Img);
    spaceShip2.scale = 0.5
    spaceShip2.rotation = -90

    astroid = createSprite(400,100,50,50);
    astroid.addImage(astroidImg);
    astroid.scale= 0.2

    star = createSprite(random(50,1500),600,50,50);
    star.addImage(starImg);
    star.scale = 0.2

    BulletG1 = new Group();
    BulletG2 = new Group();
    BulletG3 = new Group();
    BulletG4 = new Group();



}

function draw(){
    background(bg);

    spaceShip1.y = World.mouseY
    spaceShip1.x = World.mouseX

    if (frameCount)
    astroid.velocityY = 4;


    if(keyDown("w")){
        fireBullet1()
        spaceShip1.rotation = 0
    }
    if(keyDown("d")){
        fireBullet2()
        spaceShip1.rotation = 90
    }
    if(keyDown("s")){
        fireBullet3()
        spaceShip1.rotation = 180
    }

    if(keyDown("a")){
        fireBullet4()
        spaceShip1.rotation = 270
    }

    //if(BulletG.isTouching(thunder)){
        //bullet.destroy();
    //}

    fill("white")
    textSize(40)
    text("life :" + life,spaceShip1.x-220,spaceShip1.y+10)
    text.rotation = 90;
    
    if(spaceShip1.isTouching(star)){
        star.destroy();
        life += 20
    }
    
    if (keyWentDown("T")){

        thunder = createSprite(mouseX+200,mouseY,20,20)
        thunder.addImage(thunderImg);
        thunder.scale = 0.5
        
    }
    if(keyWentUp("T")){
       thunder.destroy()
    }
    //if(keyDown("W")){
        //spaceShip1.rotation += -2
   // }
    ///if(keyDown("S")){
      //  spaceShip1.rotation+=2
   // }

    drawSprites()

}

function fireBullet1(){

if ( frameCount%10 === 0){

    bullet1 = createSprite(mouseX,mouseY,10,10);
    bullet1.addImage(bulletImg);
    bullet1.scale = 0.15;
    bullet1.rotation = 0;
    bullet1.velocityY = - 8;
    bullet1.lifetime = 800;
    BulletG1.add(bullet1);
}
}

function fireBullet2(){

    if ( frameCount%10 === 0){
    
        bullet2 = createSprite(mouseX,mouseY,10,10);
        bullet2.addImage(bulletImg);
        bullet2.scale = 0.15;
        bullet2.rotation = 90;
        bullet2.velocityX = 8;
        bullet2.lifetime = 800;
        BulletG2.add(bullet2);
    }
    }
function fireBullet3(){

 if ( frameCount%10 === 0){
        
     bullet3= createSprite(mouseX,mouseY,10,10);
     bullet3.addImage(bulletImg);
     bullet3.scale = 0.15;
     bullet3.rotation = 180;
     bullet3.velocityY = 8;
     bullet3.lifetime = 800;
     BulletG3.add(bullet3);
        }
        }
    
function fireBullet4(){
  if ( frameCount%10 === 0){
                   
bullet4 = createSprite(mouseX,mouseY,10,10);
bullet4.addImage(bulletImg);
bullet4.scale = 0.15;
bullet4.rotation = 270;
 bullet4.velocityX = -8;
 bullet4.lifetime = 800;
BulletG4.add(bullet4);
     }
         }
   

    

    



    