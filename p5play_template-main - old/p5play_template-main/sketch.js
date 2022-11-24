var catWalk, sebWalk, youWin, person_walking_right

var gameState = 1

function preload() {
    cat_licking = loadAnimation("animations/cat licking animation/a1.png", "animations/cat licking animation/a2.png", "animations/cat licking animation/a3.png");

    cat_walking = loadAnimation("animations/cat walking animation/c1.png", "animations/cat walking animation/c2.png");

    //a key
    person_walking = loadAnimation("animations/person walking animation/b1.png", "animations/person walking animation/b2.png",
        "animations/person walking animation/b3.png", "animations/person walking animation/b4.png");


    //q key
    PickUp_cat = loadAnimation("animations/picking up cat animation/d1.png", "animations/picking up cat animation/d2.png", "animations/picking up cat animation/d3.png",
        "animations/picking up cat animation/d4.png", "animations/picking up cat animation/d5.png", "animations/picking up cat animation/d6.png",
        "animations/picking up cat animation/d7.png", "animations/picking up cat animation/d8.png", "animations/picking up cat animation/d9.png");

    you_win = loadAnimation("animations/Win animation/1.png", "animations/Win animation/2.png", "animations/Win animation/3.png",
        "animations/Win animation/4.png", "animations/Win animation/5.png", "animations/Win animation/6.png", "animations/Win animation/7.png",
        "animations/Win animation/8.png", "animations/Win animation/9.png", "animations/Win animation/10.png");
    //no key being pressed
    sebBase = loadAnimation("e1.png");

    //d key
    person_walking_right = loadAnimation("animations/person walking right/f1.png", "animations/person walking right/f2.png",
        "animations/person walking right/f3.png", "animations/person walking right/f4.png");

    //make crouch, spaggaethi mode, cat2 




}

function setup() {
    createCanvas(1879, 900);

    // sehWalkR = createSprite(5)



    catLick = createSprite(120, 828);
    catLick.scale = 0.06


    catWalk = createSprite(200, 811, 18, 85);
    catWalk.addAnimation("walking", cat_walking)
    catWalk.addAnimation("catLicking", cat_licking);

    catWalk.debug = true
    catWalk.setCollider("rectangle", 0, 0, 300, 300)
    catWalk.scale = 0.25;

    // seb = createSprite(1500,680,200,250);
    // seb.scale = 0.19;

    // sebUp = createSprite(250,680,200,300);
    // sebUp.scale = 0.25;

    youWin = createSprite(950, 500);
    youWin.addAnimation("you_win", you_win);
    youWin.scale = 0.85;
    youWin.visible = false

    sebWalk = createSprite(500, 680);
    sebWalk.addAnimation("person_walking", person_walking);
    sebWalk.addAnimation("person_walking_right", person_walking_right);
    sebWalk.addAnimation("base_stand", sebBase);
    sebWalk.addAnimation("pickUp", PickUp_cat);

    sebWalk.debug = true
    sebWalk.setCollider("rectangle", 80, 0, 180, 400)

    sebWalk.scale = 0.25;

    edges = createEdgeSprites()

}

function draw() {
    background("gray")

    if (keyDown("d")) {

        sebWalk.x = sebWalk.x + 5
        sebWalk.changeAnimation("person_walking_right")

        sebWalk.scale = 0.25

        sebWalk.setCollider("rectangle", -300, 0, 600, 1200)
    }



    if (keyDown("a")) {

        // sebWalk.velocityX = -5;

        sebWalk.x = sebWalk.x - 5


        sebWalk.changeAnimation("person_walking");
        sebWalk.scale = 0.26;

        sebWalk.setCollider("rectangle", -300, 0, 600, 1200)

    };

    if (keyDown("q") && sebWalk.isTouching(catWalk)) {
        catWalk.remove()
        sebWalk.changeAnimation("pickUp")
        sebWalk.scale = 0.25
        // gameState = 2
    }



    if (gameState == 2) {
        background("white")
        youWin.visible = true
        sebWalk.destroy()
        catWalk.destroy()
    }

    sebWalk.bounceOff(edges)



    drawSprites()


//make random chance out of 10 for catWalk to be CatLick

var num = round(random(0,9))

switch (num) {
    case 0:catWalk.changeAnimation("walking")
    break;

    case 1:catWalk.changeAnimation("walking")
    break;

    case 2:catWalk.changeAnimation("walking")
    break;

    case 3:catWalk.changeAnimation("walking")
    break;

    case 4:catWalk.changeAnimation("walking")
    break;

    case 5:catWalk.changeAnimation("walking")
    break;

    case 6:catWalk.changeAnimation("walking")
    break;

    case 7:catWalk.changeAnimation("walking")
    break;

    case 8:catWalk.changeAnimation("walking")
    break;

    case 9:catWalk.changeAnimation("licking")
    break;
    
    default:
        break;
}







}




