function preload() {
 firstBg=loadImage("Images/firstBg.jpg")
 startButtonImg=loadImage("Images/startButton.png")
 mainBgImg=loadImage("Images/mainBg.jpg")
 soldierImg=loadAnimation("Images/s1.png","Images/s2.png","Images/s3.png","Images/s4.png","Images/s5.png","Images/s6.png")
 mountainImg=loadImage("Images/mountain.png")
 bigDrumImg=loadImage("Images/bigDrum.png")
 chakrhImg=loadImage("Images/chakrh.png")
 smallDrumImg=loadImage("Images/smallDrum.png")
 woodPieceImg=loadImage("Images/woodPiece.jpg")
 hammerimg=loadImage("Images/hammer.png")
 woodWallImg=loadImage("Images/woodWall.png")
 flagStickImg=loadImage("Images/stick.png")
 flagImg=loadImage("Images/indianFlag.jpg")
 truckImg=loadImage("Images/truck.png")
 ropeImg=loadImage("Images/rope.png")
 armyImg=loadImage("Images/indianArmy.png")
 missionCompleteImg=loadImage("Images/missioncomplete.png")
 jumpAnimation=loadAnimation("Images/j1.png","Images/j2.png","Images/j3.png","Images/j4.png","Images/j5.png","Images/j6.png")
 endSoldierPose=loadImage("Images/endSoldierPose.png")
 missionCompleteSound=loadSound("Sounds/missionCompleteSound.mp3")
 nationalAnthem=loadSound("Sounds/Sare-Jahan-Se-Achha-Hindustan-Hamara-Seema-Mishra.mp3")
 jumpsound=loadSound("Sounds/jumpSound.wav")

 indW1Img=loadImage("Images/indW1.jpg")
 indW2Img=loadImage("Images/indW2.jpg")
 indW3Img=loadImage("Images/indW3.jpg")
 indW4Img=loadImage("Images/indW4.jpg")
 indW5Img=loadImage("Images/indW5.jpg")
 guideImg=loadImage("Images/guide.png")

 enemyBImg=loadAnimation("Images/eB1.png","Images/eB2.png","Images/eB3.png","Images/eB4.png","Images/eB5.png")
 heartImg=loadImage("Images/heart.png")
 enemyImg=loadAnimation("Images/e1.png","Images/e2.png","Images/e3.png","Images/e4.png","Images/e5.png","Images/e6.png","Images/e7.png","Images/e8.png")
 starImg=loadImage("Images/star.png")
 coinSound=loadSound("Sounds/coinSound.wav")
 soldierBulletFiredSound=loadSound("Sounds/soldierBulletFired.mp3")
 Headshotsound=loadSound("Sounds/Headshot Sound.mp3")
 playerhurtsound=loadSound("Sounds/playerhurt.wav")
gamelosses=loadSound("Sounds/gameloss.wav")

 inviBulletImg=loadImage("Images/inviBullet.png")
 soldierBulletImg=loadAnimation("Images/sB1.png","Images/sB2.png","Images/sB3.png","Images/sB4.png",)
}

function setup(){
  canvas=createCanvas(1150,720)

  indW1=createSprite(200,140)
  indW1.addImage(indW1Img)

  indW2=createSprite(1320,157)
  indW2.addImage(indW2Img)
  indW2.scale=0.7

  indW3=createSprite(2251,157)
  indW3.addImage(indW3Img)
  indW3.scale=1.6

  indW4=createSprite(3000,175)
  indW4.addImage(indW4Img)
  indW4.scale=0.9

  indW5=createSprite(4300,180)
  indW5.addImage(indW5Img)
  indW5.scale=0.5


  army=createSprite(5500,550)
  army.addImage(armyImg)
  army.visible=false

  soldierLine=createSprite(100,650,400,700)
  soldierLine.visible=false

  soldier=createSprite(100,570)
  soldier.addAnimation("abc",soldierImg)

  groundline=createSprite(500,670,10200,5)
  groundline.visible=false

  truck=createSprite(3600,570)
  truck.addImage(truckImg)
  truck.scale=0.9

  flag=createSprite(5100,540)
  flag.addImage(flagImg)
  flag.scale=0.7
  //flag.velocityY=-4

  rope=createSprite(4915,475)
  rope.addImage(ropeImg)
  rope.scale=0.7
  rope.rotation=-67

  flagstick=createSprite(5000,460)
  flagstick.addImage(flagStickImg)

 

  flagLine=createSprite(5100,265,200,5)
  flagLine.visible=false

  mountain=createSprite(-280,465)
  mountain.addImage(mountainImg)
  mountain.scale=1.5


  smallDrum1=createSprite(450,608)
  smallDrum1.addImage(smallDrumImg)

  bigDrum1=createSprite(300,592)
  bigDrum1.addImage(bigDrumImg)

  chakrh1=createSprite(800,320)
  chakrh1.addImage(chakrhImg)
  chakrh1.rotationSpeed=12

  chakrh2=createSprite(700,150)
  chakrh2.addImage(chakrhImg)
  chakrh2.rotationSpeed=12

  chakrh3=createSprite(900,150)
  chakrh3.addImage(chakrhImg)
  chakrh3.rotationSpeed=12




  woodPiece1=createSprite(1200,470)
  woodPiece1.addImage(woodPieceImg)
  woodPiece1.scale=0.18

  woodPiece2=createSprite(1241,470)
  woodPiece2.addImage(woodPieceImg)
  woodPiece2.scale=0.18

  woodPiece3=createSprite(1241+41,470)
  woodPiece3.addImage(woodPieceImg)
  woodPiece3.scale=0.18

  woodPiece4=createSprite(1241+41+41,470)
  woodPiece4.addImage(woodPieceImg)
  woodPiece4.scale=0.18

  woodPiece5=createSprite(1241+41+41+41,470)
  woodPiece5.addImage(woodPieceImg)
  woodPiece5.scale=0.18

  woodPiece6=createSprite(1241+41+41+41+41,470)
  woodPiece6.addImage(woodPieceImg)
  woodPiece6.scale=0.18

  woodPiece7=createSprite(1241+41+41+41+41+41,470)
  woodPiece7.addImage(woodPieceImg)
  woodPiece7.scale=0.18



  hammer=createSprite(1800,300)
  hammer.addImage(hammerimg)
  hammer.rotationSpeed=2

  hline1=createSprite(1670,200,100,5)
  hline1.visible=false
  hline2=createSprite(1930,200,100,5)
  hline2.visible=false




  brick1=createSprite(2100,20)
  brick1.addImage(woodPieceImg)
  brick1.scale=0.18
  brick1.rotation=90

  brick2=createSprite(2100,20+41)
  brick2.addImage(woodPieceImg)
  brick2.scale=0.18
  brick2.rotation=90

  brick3=createSprite(2100,20+41+41)
  brick3.addImage(woodPieceImg)
  brick3.scale=0.18
  brick3.rotation=90

  brick4=createSprite(2100,20+41+41+41)
  brick4.addImage(woodPieceImg)
  brick4.scale=0.18
  brick4.rotation=90

  brick5=createSprite(2100,20+41+41+41+41)
  brick5.addImage(woodPieceImg)
  brick5.scale=0.18
  brick5.rotation=90

  brick6=createSprite(2100,20+41+41+41+41+41)
  brick6.addImage(woodPieceImg)
  brick6.scale=0.18
  brick6.rotation=90

  brick7=createSprite(2100,20+41+41+41+41+41+41)
  brick7.addImage(woodPieceImg)
  brick7.scale=0.18
  brick7.rotation=90

  brick8=createSprite(2100,20+41+41+41+41+41+41+41)
  brick8.addImage(woodPieceImg)
  brick8.scale=0.18
  brick8.rotation=90

  brick9=createSprite(2100,20+41+41+41+41+41+41+41+41)
  brick9.addImage(woodPieceImg)
  brick9.scale=0.18
  brick9.rotation=90

  brick10=createSprite(2100,20+41+41+41+41+41+41+41+41+41)
  brick10.addImage(woodPieceImg)
  brick10.scale=0.18
  brick10.rotation=90


  Rbrick1=createSprite(2400,20)
  Rbrick1.addImage(woodPieceImg)
  Rbrick1.scale=0.18
  Rbrick1.rotation=90

  Rbrick2=createSprite(2400,20+41)
  Rbrick2.addImage(woodPieceImg)
  Rbrick2.scale=0.18
  Rbrick2.rotation=90

  Rbrick3=createSprite(2400,20+41+41)
  Rbrick3.addImage(woodPieceImg)
  Rbrick3.scale=0.18
  Rbrick3.rotation=90

  Rbrick4=createSprite(2400,20+41+41+41)
  Rbrick4.addImage(woodPieceImg)
  Rbrick4.scale=0.18
  Rbrick4.rotation=90

  Rbrick5=createSprite(2400,20+41+41+41+41)
  Rbrick5.addImage(woodPieceImg)
  Rbrick5.scale=0.18
  Rbrick5.rotation=90

  Rbrick6=createSprite(2400,20+41+41+41+41+41)
  Rbrick6.addImage(woodPieceImg)
  Rbrick6.scale=0.18
  Rbrick6.rotation=90

  Rbrick7=createSprite(2400,20+41+41+41+41+41+41)
  Rbrick7.addImage(woodPieceImg)
  Rbrick7.scale=0.18
  Rbrick7.rotation=90

  Rbrick8=createSprite(2400,20+41+41+41+41+41+41+41)
  Rbrick8.addImage(woodPieceImg)
  Rbrick8.scale=0.18
  Rbrick8.rotation=90

  Rbrick9=createSprite(2400,20+41+41+41+41+41+41+41+41)
  Rbrick9.addImage(woodPieceImg)
  Rbrick9.scale=0.18
  Rbrick9.rotation=90

  Rbrick10=createSprite(2400,20+41+41+41+41+41+41+41+41+41)
  Rbrick10.addImage(woodPieceImg)
  Rbrick10.scale=0.18
  Rbrick10.rotation=90

  Rbrick11=createSprite(2400,20+41+41+41+41+41+41+41+41+41+41)
  Rbrick11.addImage(woodPieceImg)
  Rbrick11.scale=0.18
  Rbrick11.rotation=90

  Mbrick1=createSprite(2351,350)
  Mbrick1.addImage(woodPieceImg)
  Mbrick1.scale=0.20

  Mbrick2=createSprite(2351-41,350)
  Mbrick2.addImage(woodPieceImg)
  Mbrick2.scale=0.20

  
  missionComplete=createSprite(5450,150)
  missionComplete.addImage(missionCompleteImg)
  missionComplete.visible=false

  cm=createSprite(5300,400)
  cm.visible=false
 

  heart1=createSprite(soldier.x-540,40)
  heart1.addImage(heartImg)
  heart1.scale=0.1

  heart2=createSprite(soldier.x-480,40)
  heart2.addImage(heartImg)
  heart2.scale=0.1

  heart3=createSprite(soldier.x-420,40)
  heart3.addImage(heartImg)
  heart3.scale=0.1

  enemy1=createSprite(2300,246)
  enemy1.addAnimation("abccde",enemyImg)

  enemyB1=createSprite(2245,193)
  enemyB1.addAnimation("fire",enemyBImg)
  enemyB1.scale=0.2
  enemyB1.rotationSpeed=25
  enemyB1.visible=false

  enemyB1Reflecter=createSprite(1800,300,5,1000)
  enemyB1Reflecter.visible=false

  touchLFE=createSprite(1500,350,5,700)
  touchLFE.visible=false

  enemy1Collider=createSprite(1470,350,5,800)
  enemy1Collider.visible=false


  enemy2=createSprite(3400,525)
  enemy2.addAnimation("abd",enemyImg)
  enemy2.visible=false

  enemyB2=createSprite(2245,193)
  enemyB2.addAnimation("fire",enemyBImg)
  enemyB2.scale=0.2
  enemyB2.rotationSpeed=25
  enemyB2.visible=false

  
  enemyB2Reflecter=createSprite(1800,300,5,1000)
  enemyB2Reflecter.visible=false

  enemy2DownLine=createSprite(3500,610,300,5)
  enemy2DownLine.visible=false

  enemy3=createSprite(3400,525)
  enemy3.addAnimation("abd",enemyImg)
  enemy3.visible=false

  enemyB3=createSprite(2245,193)
  enemyB3.addAnimation("fire",enemyBImg)
  enemyB3.scale=0.2
  enemyB3.rotationSpeed=25
  enemyB3.visible=false

  enemyB3Reflecter=createSprite(1800,300,5,1000)
  enemyB3Reflecter.visible=false

  soldierTouchLine=createSprite(2750,350,50,800)
  soldierTouchLine.visible=false




  //making star !!!

  star1=createSprite(300,470)
  star1.addImage(starImg)
  star1.scale=0.3
  star1.rotationSpeed=3

  star2=createSprite(380,480)
  star2.addImage(starImg)
  star2.scale=0.3
  star2.rotationSpeed=3

  star3=createSprite(460,510)
  star3.addImage(starImg)
  star3.scale=0.3
  star3.rotationSpeed=3

  star4=createSprite(650,620)
  star4.addImage(starImg)
  star4.scale=0.3
  star4.rotationSpeed=3

  star5=createSprite(750,620)
  star5.addImage(starImg)
  star5.scale=0.3
  star5.rotationSpeed=3

  star6=createSprite(850,620)
  star6.addImage(starImg)
  star6.scale=0.3
  star6.rotationSpeed=3

  star7=createSprite(950,620)
  star7.addImage(starImg)
  star7.scale=0.3
  star7.rotationSpeed=3

  star8=createSprite(1050,620)
  star8.addImage(starImg)
  star8.scale=0.3
  star8.rotationSpeed=3


  star9=createSprite(1200,400)
  star9.addImage(starImg)
  star9.scale=0.3
  star9.rotationSpeed=3

  star10=createSprite(1260,400)
  star10.addImage(starImg)
  star10.scale=0.3
  star10.rotationSpeed=3

  star11=createSprite(1380,400)
  star11.addImage(starImg)
  star11.scale=0.3
  star11.rotationSpeed=3

  star12=createSprite(1440,400)
  star12.addImage(starImg)
  star12.scale=0.3
  star12.rotationSpeed=3



  star13=createSprite(2600,620)
  star13.addImage(starImg)
  star13.scale=0.3
  star13.rotationSpeed=3

  star14=createSprite(2670,540)
  star14.addImage(starImg)
  star14.scale=0.3
  star14.rotationSpeed=3

  star15=createSprite(2740,460)
  star15.addImage(starImg)
  star15.scale=0.3
  star15.rotationSpeed=3

  star16=createSprite(2840,460)
  star16.addImage(starImg)
  star16.scale=0.3
  star16.rotationSpeed=3

  star17=createSprite(2795,380)
  star17.addImage(starImg)
  star17.scale=0.3
  star17.rotationSpeed=3

  star18=createSprite(2895,550)
  star18.addImage(starImg)
  star18.scale=0.3
  star18.rotationSpeed=3

  star19=createSprite(2940,630)
  star19.addImage(starImg)
  star19.scale=0.3
  star19.rotationSpeed=3

  star20=createSprite(2780,550)
  star20.addImage(starImg)
  star20.scale=0.3
  star20.rotationSpeed=3
 



inviStar=createSprite(-440,110)
inviStar.addImage(starImg)
inviStar.scale=0.3

inviBullet=createSprite(-200,40)
inviBullet.addImage(inviBulletImg)
inviBullet.scale=0.5

soldierBullet=createSprite(200,200)
soldierBullet.addAnimation("abcdd",soldierBulletImg)
soldierBullet.scale=0.5
soldierBullet.visible=false

soldierBulletReflecter=createSprite(200,300,5,1000)
soldierBulletReflecter.visible=false



fBg=createSprite(100,350)
fBg.addImage(firstBg)
fBg.scale=0.9
fBg.visible=false

startB=createSprite(250,520)
startB.addImage(startButtonImg)
startB.scale=0.9
startB.visible=false

lWall=createSprite(-435,360,80,720)
lWall.shapeColor="#FF9F2E"
lWall.visible=false
rWall=createSprite(647,360,105,720)
rWall.shapeColor="#FF9F2E"
rWall.visible=false

guide=createSprite(250,300)
guide.addImage(guideImg)
guide.visible=false

startgame=1
gamestate=1
enemyBV=0
enemyBV1=0
enemyBV3=1
star=0
life=3
soldierBulletVelocity=0
soldierBullets=11


game=0

}


function draw(){

 background(mainBgImg)

  inviStar.x=soldier.x-540

  soldierBulletReflecter.x=soldier.x+500

  if(gamestate==1){
    camera.x=soldier.x
  }
  
  if(startgame==1){
    fBg.visible=true
    startB.visible=true
    rWall.visible=true
    lWall.visible=true
    guide.visible=true
  }


  if(startgame==2){

    if(keyDown("right")){
      soldier.x=soldier.x+5
      //soldierLine.x=soldierLine.x+5
      soldierBullet.x=soldierBullet.x+5 
    }
    if(keyDown("left")){
      soldier.x=soldier.x-5
    // soldierLine.x=soldierLine.x-5
    soldierBullet.x=soldierBullet.x-5
    }

  }

  if(soldierBullet.isTouching(soldierBulletReflecter)){
    soldierBullet.x=soldier.x+60
    soldierBullet.velocityX=0
    soldierBullet.visible=false
    soldierBullets=soldierBullets-1
    
  }

  if(soldierBullets==0){
    soldierBulletReflecter.y=20000000
    soldierBullet.y=200000000
    game=1
  }

  textSize(40)
  fill("black")
  stroke("#E2D55E")
  strokeWeight(1)
  textFont("Courier")
  text(""+star,soldier.x-500,120)
  text(""+soldierBullets,soldier.x-270,60)

if(soldierBulletVelocity=0){
  soldierBullet.x=soldier.x+60
  
}

soldierBullet.y=soldier.y-35

  if(soldier.isTouching(star1)){
    star1.y=2000
    star=star+1
    coinSound.play()
  }

  if(soldier.isTouching(star2)){
    star2.y=2000
    star=star+1
    coinSound.play()
  }

  if(soldier.isTouching(star3)){
    star3.y=2000
    star=star+1
    coinSound.play()
  }

  if(soldier.isTouching(star4)){
    star4.y=2000
    star=star+1
    coinSound.play()
  }

  if(soldier.isTouching(star5)){
    star5.y=2000
    star=star+1
    coinSound.play()
  }

  if(soldier.isTouching(star6)){
    star6.y=2000
    star=star+1
    coinSound.play()
  }

  if(soldier.isTouching(star7)){
    star7.y=2000
    star=star+1
    coinSound.play()
  }

  if(soldier.isTouching(star8)){
    star8.y=2000
    star=star+1
    coinSound.play()
  }

  if(soldier.isTouching(star9)){
    star9.y=2000
    star=star+1
    coinSound.play()
  }

  if(soldier.isTouching(star10)){
    star10.y=2000
    star=star+1
    coinSound.play()
  }

  if(soldier.isTouching(star11)){
    star11.y=2000
    star=star+1
    coinSound.play()
  }

  if(soldier.isTouching(star12)){
    star12.y=2000
    star=star+1
    coinSound.play()
  }

  if(soldier.isTouching(star13)){
    star13.y=2000
    star=star+1
    coinSound.play()
  }

  if(soldier.isTouching(star14)){
    star14.y=2000
    star=star+1
    coinSound.play()
  }

  if(soldier.isTouching(star15)){
    star15.y=2000
    star=star+1
    coinSound.play()
  }

  if(soldier.isTouching(star16)){
    star16.y=2000
    star=star+1
    coinSound.play()
  }

  if(soldier.isTouching(star17)){
    star17.y=2000
    star=star+1
    coinSound.play()
  }

  if(soldier.isTouching(star18)){
    star18.y=2000
    star=star+1
    coinSound.play()
  }

  if(soldier.isTouching(star19)){
    star19.y=2000
    star=star+1
    coinSound.play()
  }

  if(soldier.isTouching(star20)){
    star20.y=2000
    star=star+1
    coinSound.play()
  }


  heart1.x=soldier.x-550
  heart2.x=soldier.x-490
  heart3.x=soldier.x-430

  inviBullet.x=soldier.x-300
  
  enemyB1Reflecter.x=enemy1.x-450
  enemyB1Reflecter.y=enemyB1.y

  enemyB2Reflecter.x=enemy2.x-450
  enemyB2Reflecter.y=enemyB2.y

  enemyB3Reflecter.x=enemy3.x-450
  enemyB3Reflecter.y=enemyB3.y

  //text("X"+star,500,200)

  

  if(enemyBV==0){
    enemyB1.x=enemy1.x-60
    enemyB1.y=enemy1.y-50
  }
  

  soldier.collide(groundline)
  soldier.collide(mountain)
  soldier.collide(bigDrum1)
  soldier.collide(smallDrum1)

  soldier.collide(woodPiece1)
  soldier.collide(woodPiece2)
  soldier.collide(woodPiece3)
  soldier.collide(woodPiece4)
  soldier.collide(woodPiece5)
  soldier.collide(woodPiece6)
  soldier.collide(woodPiece7)

  soldier.collide(brick1)
  soldier.collide(brick2)
  soldier.collide(brick3)
  soldier.collide(brick4)
  soldier.collide(brick5)
  soldier.collide(brick6)
  soldier.collide(brick7)
  soldier.collide(brick8)
  soldier.collide(brick9)
  soldier.collide(brick10)
  
  soldier.collide(Rbrick1)
  soldier.collide(Rbrick2)
  soldier.collide(Rbrick3)
  soldier.collide(Rbrick4)
  soldier.collide(Rbrick5)
  soldier.collide(Rbrick6)
  soldier.collide(Rbrick7)
  soldier.collide(Rbrick8)
  soldier.collide(Rbrick9)
  soldier.collide(Rbrick10)
  soldier.collide(Rbrick11)

  soldier.collide(Mbrick1)
  soldier.collide(Mbrick2)
  


  enemy1.collide(Mbrick1)
  enemy1.collide(Mbrick2)
  enemy1.collide(enemy1Collider)
  // enemy1.collide(groundline)
  soldierLine.x=soldier.x+100
  soldierLine.y=soldier.y
  enemy1.velocityY = enemy1.velocityY + 0.8;
  enemy2.velocityY = enemy2.velocityY + 0.8;
  enemy2.collide(enemy2DownLine)
  enemy3.velocityY = enemy3.velocityY + 0.8;
  enemy3.collide(enemy2DownLine)
  

  enemy1.collide(soldier)
  enemy2.collide(soldier)




  if(enemy1.isTouching(groundline)){
    enemy1.velocityY=0
    enemy1.velocityX=-2
  }

  if(soldier.isTouching(rope)){
    flag.velocityY=-4
    army.visible=true
    rope.y=250000
    
    soldier.y=5200
    soldier.x=20000000
    endsoldier=createSprite(5120,560)
    endsoldier.addImage(endSoldierPose)
    missionComplete.visible=true
    gamestate=2
    missionCompleteSound.play()
    
  }

  if(soldier.isTouching(touchLFE)){
    enemy1.velocityX=-2
    //touchLFE.y=200000000000000
  }

  if(gamestate==2){
    camera.x=cm.x
  }

  if(flag.isTouching(flagLine)){
    flag.velocityY=0
    flagLine.y=20000
    nationalAnthem.play()
  }

  if(hammer.isTouching(hline1)){
    hammer.rotationSpeed=2+0.2
  }
  if(hammer.isTouching(hline2)){
    hammer.rotationSpeed=22
  }
 

  if(enemy1.isTouching(soldierLine)){
    enemy1.velocityX=0
    enemyBV=1
  }


  if(enemyB1.isTouching(enemyB1Reflecter)){
    enemyB1.x=enemy1.x-60
    enemyB1.y=enemy1.y-50
    enemyB1.visible=false
    enemyB1.velocityX=0
    enemyBV=0
  }

  if(enemyBV==1){
    enemyB1.velocityX=-5
    enemyB1.visible=true
    
  }

  if(keyWentDown("up") && soldier.y >=  550) {
    soldier.velocityY = -19;
    jumpsound.play()
    soldier.addAnimation("abcd",jumpAnimation)
    
  }


  soldier.velocityY = soldier.velocityY + 0.8;


  console.log(enemy2.y)

  if(enemyBV1==0){
    enemyB2.x=enemy2.x-60
    enemyB2.y=enemy2.y-50
  }

  if(soldier.isTouching(soldierTouchLine)){
    enemy2.velocityX=-3
    enemy2.visible=true
  }

  if(enemy2.isTouching(groundline)){
    enemy2.velocityY=0
    enemy2.velocityX=-3
  }

 

  if(enemy3.isTouching(groundline)){
    enemy3.velocityY=0
    enemy3.velocityX=-3
  }

  

  if(enemy2.isTouching(soldierLine)){
    enemy2.velocityX=0
    enemyBV1=1
  }

  if(enemyBV1==1){
    enemyB2.velocityX=-5
    enemyB2.visible=true
  }

  if(enemyB2.isTouching(enemyB2Reflecter)){
    enemyB2.x=enemy2.x-60
    enemyB2.y=enemy2.y-50
    enemyB2.visible=false
    enemyB2.velocityX=0
    enemyBV1=0
  }

  if(enemy3.isTouching(soldierLine)){
    enemy3.velocityX=0
    enemyBV3=1
  }
  if(enemyBV3==1){
    enemyB3.velocityX=-5
    enemyB3.visible=true
  }

  if(enemyBV3==0){
    enemyB3.x=enemy3.x-60
    enemyB3.y=enemy3.y-50
  }

  if(enemyB3.isTouching(enemyB3Reflecter)){
    enemyB3.x=enemy3.x-60
    enemyB3.y=enemy3.y-50
    enemyB3.visible=false
    enemyB3.velocityX=0
    enemyBV3=0
  }


  if(game==0){
    if(keyWentDown("space")){
     
      soldierBulletVelocity=1
      soldierBulletFiredSound.play()
    }
  }

 

  if(soldierBulletVelocity==1){
    soldierBullet.visible=true
    soldierBullet.velocityX=9
  }

  if(soldierBullet.isTouching(enemy1)){
    Headshotsound.play()
    enemy1.y=20000000000000000000
    enemyB1.y=20000000000000000000
    soldierBullet.x=soldier.x+60
    soldierBullet.velocityX=0
    soldierBullet.visible=false
    soldierBullets=soldierBullets-1
    
  }

  if(soldierBullet.isTouching(enemy2)){
    Headshotsound.play()
    enemy2.y=20000000
    enemyB2.y=200000
    soldierBullet.x=soldier.x+60
    soldierBullet.velocityX=0
    soldierBullet.visible=false
    soldierBullets=soldierBullets-1
    enemy3.visible=true
    enemy3.velocityX=-3
    enemyB3.x=enemy3.x-60
    enemyB3.y=enemy3.y-50
    enemy3.y=525
  }

  if(soldierBullet.isTouching(enemy3)){
    Headshotsound.play()
    enemy3.y=20000000000000000000
    enemyB3.y=20000000000000000000
    soldierBullet.x=soldier.x+60
    soldierBullet.velocityX=0
    soldierBullet.visible=false
    soldierBullets=soldierBullets-1
    
  }

  if(enemyB1.isTouching(soldier)){
    life=life-1
    enemyB1.x=enemy1.x-60
    enemyB1.velocityX=-2
    playerhurtsound.play()
  }

  if(enemyB2.isTouching(soldier)){
    life=life-1
    enemyB2.x=enemy2.x-60
    enemyB2.velocityX=-2
    playerhurtsound.play()
    
  }
  if(enemyB3.isTouching(soldier)){
    life=life-1
    enemyB3.x=enemy3.x-60
    enemyB3.y=enemy3.y-50
    enemyB3.velocityX=-2
    playerhurtsound.play()
    
  }

  if(soldier.isTouching(chakrh1)){
    playerhurtsound.play()
    life=life-1
  }
  if(soldier.isTouching(chakrh2)){
    playerhurtsound.play()
    life=life-1
  }
  if(soldier.isTouching(chakrh3)){
    playerhurtsound.play()
    life=life-1
  }
  if(soldier.isTouching(hammer)){
    playerhurtsound.play()
    life=life-1
  }

  if(life===3){
    heart1.visible=true
    heart2.visible=true
    heart3.visible=true
  }

  if(life===2){
    heart1.visible=false
    heart2.visible=true
    heart3.visible=true
    
   
  }
  if(life===1){
    heart2.visible=false
    heart3.visible=true
  
    
  }
  if(life===0){
    heart3.visible=false
    gamelosses.play()
    enemy1.y=20000000
    enemy2.y=200000000
    enemy3.y=200000000
    startB.y=520
    fBg.y=350
    lWall.y=360
    rWall.y=360 
    life=3
    soldier.x=100
    startgame=1
    enemy1.y=246
    enemy1.x=2300
    enemy1.velocityX=0
    enemy2.velocityX=0
    enemy1.velocityY=0
    enemy3.velocityY=0
    enemy3.velocityX=0
    enemy1.velocityY=0
    enemyB1.y=enemy1.y-50
    enemyB2.y=enemy2.y-50
    enemyB3.y=enemy3.y-50
    guide.visible=true

  }

  if(mousePressedOver(startB)){
    startB.y=10000
    fBg.y=100000
    lWall.y=20000
    rWall.y=20000 

    startgame=2
    soldier.x=100
    soldierBullets=11
    star=0
    life=3
    enemy1.y=246
    enemy1.x=2300
    enemy2.y=525
    enemy2.x=3400
    enemy3.y=525
    enemy3.x=3400
    soldierBullet.x=soldier.x+60
    guide.visible=false
    enemy1.velocityX=0
    enemy2.velocityY=0
    enemy2.velocityX=0
   enemy1.velocityY = enemy1.velocityY + 0.8;
  enemy2.velocityY = enemy2.velocityY + 0.8;
    enemy3.velocityX=0
   enemy3.velocityY = enemy3.velocityY + 0.8;

    star1.y=470
    star2.y=480
    star3.y=510
    star4.y=620
    star5.y=620
    star6.y=620
    star7.y=620
    star8.y=620
    star9.y=400
    star10.y=400

    star11.y=400
    star12.y=400
    star13.y=620
    star14.y=540
    star15.y=460
    star16.y=460
    star17.y=380
    star18.y=550
    star19.y=630
    star20.y=550
    
  }







  drawSprites();
}