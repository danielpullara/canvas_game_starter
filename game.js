/*
  Code modified from:
  http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/
  using graphics purchased from vectorstock.com
*/

/* Initialization.
Here, we create and add our "canvas" to the page.
We also load all of our images. 
*/
//this is a test//

let canvas;
let ctx;

let speedX = 6;
let speedY = 9;


let secondMonsterSpeedX = 9;
let secondMonsterSpeedY = 6;

let thirdMonsterSpeedX = 12;
let thirdMonsterSpeedY = 12;


let ballspeedX = 8.5;
let ballspeedY = 8.5;



let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", reset);

let resultArea = document.getElementById("resultArea");
let score = 0;

let health = document.getElementById("health");


canvas = document.getElementById("canvas");

//canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 1100;
canvas.height = 600;
//document.body.appendChild(canvas);

let bgReady, heroReady, monsterReady, ballReady, bossReady, thirdMonsterReady, secondMonsterReady, gameOverReady, playAgainReady, winnerReady,tenHeartReady,nineHeartReady, eightHeartReady, sevenHeartReady, sixHeartReady, fiveHeartReady, fourHeartReady, threeHeartReady, twoHeartReady, heartReady;
let bgImage, heroImage, monsterImage, ballImage, bossImage, thirdMonsterImage, secondMonsterImage, gameOverImage, playAgainImage, winnerImage,tenHeartImage,nineHeartImage, eightHeartImage, sevenHeartImage, sixHeartImage, fiveHeartImage, fourHeartImage, threeHeartImage, twoHeartImage, heartImage;

let startTime = Date.now();
const SECONDS_PER_ROUND = 30;
let elapsedTime = 0;

let limitX = canvas.width - 36;
let limitY = canvas.height - 36;

let heroX = canvas.width / 2.15;
let heroY = canvas.height / 1.35;

let fourthMonsterX = Math.abs(Math.floor(Math.random() * canvas.width) - 32);
let fourthMonsterY = Math.abs(Math.floor(Math.random() * canvas.height) - 32);

let thirdMonsterX = Math.abs(Math.floor(Math.random() * canvas.width) - 32);
let thirdMonsterY = Math.abs(Math.floor(Math.random() * canvas.height) - 32);

let secondMonsterX = Math.abs(Math.floor(Math.random() * canvas.width) - 32);
let secondMonsterY = Math.abs(Math.floor(Math.random() * canvas.height) - 32);

let ballX = Math.abs(Math.floor(Math.random() * canvas.width) - 32);
let ballY = Math.abs(Math.floor(Math.random() * canvas.height) - 32);

let monsterX = Math.abs(Math.floor(Math.random() * canvas.width) - 32);
let monsterY = Math.abs(Math.floor(Math.random() * canvas.height) - 32);



//var sprites = [];



// function Bullet() {
//   this.x = heroX+15;
//   this.y = heroY-15;
//   this.alive = true;
//   this.init = function() {
//     // Update position
//     this.x += 5;
//     sprites.push(this);
//   };
//   this.render = function() {
//     if (this.alive) {
//       // Render only if the bullet is alive (aka on screen)
//       ctx.fillStyle = "blue";
//       ctx.drawImage(this.x, this.y, 5, 5);
//       // ctx.fillRect(this.x, this.y, 5, 5);
//     }
//   };
//   this.update = function() {
//     if (this.alive) {
//       // update the x value only if the object is alive
//       this.x += 7;
//         this.y = (Math.sin(this.x) * 34) + (canvas.height / 2);


//       // Check if the bullet is on screen
//       if (this.x > canvas.width) {
//         this.alive = false;
//       }
//     }
//   };
// }

// function createBullet() {
//   let bullets = new Bullet();
//   bullets.init();
// }

function reset() {
  score = 0;
  //resultArea.innerHTML = `Score : ${score}`;
  health.value = 100
  gameOverReady = false;
  playAgainReady = false;
  heroReady = true;
  ballReady = true;
  monsterReady = true;
  secondMonsterReady =false;
  thirdMonsterReady = false;
  
  render();
  console.log('after reset gameOverReady', gameOverReady)
  // loadImages();
}
console.log(gameOverReady)

function loadImages() {

  bgImage = new Image();
  bgImage.onload = function () {
    // show the background image

    bgReady = true
  };

  bgImage.src = "images/background1.png";

  tenHeartImage = new Image();
  tenHeartImage.onload = function () {
    // show the hero image

    tenHeartReady = true;
  };
  tenHeartImage.src = "images/heart.png";

  nineHeartImage = new Image();
  nineHeartImage.onload = function () {
    // show the hero image

  nineHeartReady = true;
  };
  nineHeartImage.src = "images/heart.png";

  eightHeartImage = new Image();
  eightHeartImage.onload = function () {
    // show the hero image

    eightHeartReady = true;
  };
  eightHeartImage.src = "images/heart.png";

  sevenHeartImage = new Image();
  sevenHeartImage.onload = function () {
    // show the hero image

    sevenHeartReady = true;
  };

  sevenHeartImage.src = "images/heart.png";

  sixHeartImage = new Image();
  sixHeartImage.onload = function () {
    // show the hero image

    sixHeartReady = true;
  };

  sixHeartImage.src = "images/heart.png";

  fiveHeartImage = new Image();
  fiveHeartImage.onload = function () {
    // show the hero image

    fiveHeartReady = true;
  };

  fiveHeartImage.src = "images/heart.png";

  fourHeartImage = new Image();
  fourHeartImage.onload = function () {
    // show the hero image

    fourHeartReady = true;
  };

  fourHeartImage.src = "images/heart.png";

  threeHeartImage = new Image();
  threeHeartImage.onload = function () {
    // show the hero image

    threeHeartReady = true;
  };

  threeHeartImage.src = "images/heart.png";

  twoHeartImage = new Image();
  twoHeartImage.onload = function () {
    // show the hero image

    twoHeartReady = true;
  };

  twoHeartImage.src = "images/heart.png";


  heartImage = new Image();
  heartImage.onload = function () {
    // show the hero image

    heartReady = true;
  };

  heartImage.src = "images/heart.png";


  playAgainImage = new Image();
  playAgainImage.onload = function () {
    // show the hero image

    playAgainReady = false;
  };

  playAgainImage.src = "images/play-again.png";

  gameOverImage = new Image();
  gameOverImage.onload = function () {
    // show the hero image

    gameOverReady = false;
    console.log('gameOverReady', gameOverReady)
  };

  gameOverImage.src = "images/game-over.png";



  heroImage = new Image();
  heroImage.onload = function () {
    // show the hero image

    heroReady = true;
    console.log('heroReady', heroReady)


  };
  heroImage.src = "images/hero1.png";

  monsterImage = new Image();
  monsterImage.onload = function () {
    // show the monster image


    monsterReady = true;
  };
  monsterImage.src = "images/monster1.png";

  secondMonsterImage = new Image();
  secondMonsterImage.onload = function () {
    // show the monster image


    secondMonsterReady = false;
  };
  secondMonsterImage.src = "images/secondMonster.png";

  thirdMonsterImage = new Image();
  thirdMonsterImage.onload = function () {
    // show the monster image


    thirdMonsterReady = false;
  };

  thirdMonsterImage.src = "images/thirdMonster.png";

  winnerImage = new Image();
  winnerImage.onload = function () {
    // show the monster image


    winnerReady = false;
  };
  winnerImage.src = "images/winner.png";

  ballImage = new Image();
  ballImage.onload = function () {
    // show the ball image


    ballReady = true;
  };
  ballImage.src = "images/ball1.png";

}

/** 
 * Setting up our characters.
 * 
 * Note that heroX represents the X position of our hero.
 * heroY represents the Y position.
 * We'll need these values to know where to "draw" the hero.
 * 
 * The same applies to the monster.
 */


/** 
 * Keyboard Listeners
 * You can safely ignore this part, for now. 
 * 
 * This is just to let JavaScript know when the user has pressed a key.
*/
let keysDown = {};
function setupKeyboardListeners() {
  // Check for keys pressed where key represents the keycode captured
  // For now, do not worry too much about what's happening here. 

  addEventListener("keydown", function (key) {
    keysDown[key.keyCode] = true;
  }, false)


  addEventListener("keyup", function (key) {
    delete keysDown[key.keyCode];
  }, false);


}



/**
 *  Update game objects - change player position based on key pressed
 *  and check to see if the monster has been caught!
 *  
 *  If you change the value of 5, the player will move at a different rate.
 */
let update = function () {
  // Update the time.
  elapsedTime = Math.floor((Date.now() - startTime) / 1000);


  if (38 in keysDown) { // Player is holding up key
    heroY -= 7;
  }
  if (40 in keysDown) { // Player is holding down key
    heroY += 7;
  }
  if (37 in keysDown) { // Player is holding left key
    heroX -= 7;
  }
  if (39 in keysDown) { // Player is holding right key
    heroX += 7;
  }

  // if (32 in keysDown){
  //   createBullet();
  // }

  if (heroX > limitX) {
    heroX = 0;
  }
  if (heroX < 0) {
    heroX = limitX;
  }

  if (heroY > limitY) {
    heroY = 0;
  }

  if (heroY < 0) {
    heroY = limitY
  }

  // Check if player and monster collided. Our images
  // are about 32 pixels big.

  if (
    heroX <= (ballX + 32)
    && ballX <= (heroX + 32)
    && heroY <= (ballY + 32)
    && ballY <= (heroY + 32)
  ) {
    // Pick a new location for the monster.
    // Note: Change this to place the monster at a new, random location.
    score += 1;
    //resultArea.innerHTML = `Score : ${score}`;
    ballX = Math.abs(Math.floor(Math.random() * canvas.width) - 32);
    ballY = Math.abs(Math.floor(Math.random() * canvas.height) - 32);

  }
  if (
    heroX <= (thirdMonsterX + 33)
    && thirdMonsterX <= (heroX + 33)
    && heroY <= (thirdMonsterY + 33)
    && thirdMonsterY <= (heroY + 33)
  ) {
    health.value -= 2;
  }
  if (
    heroX <= (secondMonsterX + 33)
    && secondMonsterX <= (heroX + 33)
    && heroY <= (secondMonsterY + 33)
    && secondMonsterY <= (heroY + 33)
  ) {
    health.value -= 2;
  }

  if (
    heroX <= (monsterX + 33)
    && monsterX <= (heroX + 33)
    && heroY <= (monsterY + 33)
    && monsterY <= (heroY + 33)
  ) {
    health.value -= 2;
  }
  
  // Moves the Monster
  monsterX = monsterX + speedX;
  monsterY = monsterY + speedY;

  if (monsterX >= canvas.width - 33) {
    speedX = - speedX;
  } else if (monsterY >= canvas.height - 33) {
    speedY = -speedY;
  } else if (monsterX <= 1) {
    speedX = -speedX;
  } else if (monsterY <= 0) {
    speedY = -speedY;
  }

  secondMonsterX = secondMonsterX + secondMonsterSpeedX;
  secondMonsterY = secondMonsterY + secondMonsterSpeedY;

  if (secondMonsterX >= canvas.width - 32) {
    secondMonsterSpeedX = -secondMonsterSpeedX;
  } else if (secondMonsterY > canvas.height - 32) {
    secondMonsterSpeedY = -secondMonsterSpeedY;
  } else if (secondMonsterX < 1) {
    secondMonsterSpeedX = -secondMonsterSpeedX;
  } else if (secondMonsterY < 0) {
    secondMonsterSpeedY = -secondMonsterSpeedY;
  }

  thirdMonsterX = thirdMonsterX + thirdMonsterSpeedX;
  thirdMonsterY = thirdMonsterY + thirdMonsterSpeedY;

  if (thirdMonsterX >= canvas.width - 32) {
    thirdMonsterSpeedX = -thirdMonsterSpeedX;
  } else if (thirdMonsterY > canvas.height - 32) {
    thirdMonsterSpeedY = -thirdMonsterSpeedY;
  } else if (thirdMonsterX <= 1) {
    thirdMonsterSpeedX = -thirdMonsterSpeedX;
  } else if (thirdMonsterY <= 0) {
    thirdMonsterSpeedY = -thirdMonsterSpeedY;
  }

  ballX = ballX + ballspeedX;
  ballY = ballY + ballspeedY;

  if (ballX > canvas.width - 32) {
    ballspeedX = -ballspeedX;
  } else if (ballX < 1) {
    ballspeedX = - ballspeedX;
  } else if (ballY < 0) {
    ballspeedY = -ballspeedY;
  } else if (ballY > canvas.height - 32) {
    ballspeedY = -ballspeedY;
  }

  if (score >= 5) {
    secondMonsterReady = true;
  }
  if (score >= 10) {
    thirdMonsterReady = true;
  }
  


  if (score === 15) {
    winnerReady = true
    heroReady = false;
    ballReady = false;
    monsterReady = false;
    secondMonsterReady = false;
    thirdMonsterReady = false;
    gameOverReady = false;
    playAgainReady = false;
  } else if (health.value === 0) {
    gameOverReady = true;
    playAgainReady = true;
    heroReady = false;
    ballReady = false;
    monsterReady = false;
    secondMonsterReady = false;
    thirdMonsterReady = false;
    
  }

  if (health.value <= 10) {
    tenHeartReady = false;
  }
  if (health.value <= 20) {
    nineHeartReady = false;
  }
  if (health.value <= 30) {
    eightHeartReady = false;
  }
  if (health.value <= 40) {
    sevenHeartReady = false;
  }
  if (health.value <= 50) {
    sixHeartReady = false;
  }
  if (health.value <= 60) {
    fiveHeartReady = false;
  }
  if (health.value <= 70) {
    fourHeartReady = false;
  }
  if (health.value <= 80) {
    threeHeartReady = false;
  }
  if (health.value <= 90) {
    twoHeartReady = false;
  }
  if (health.value <= 100) {
    heartReady = false;
  }

}

  // console.log(sprites)

  // if(sprites.length > 0){
  //   for (var ix = sprites.length-1; ix>=0; ix--) {
  //     sprites[ix].render();
  //   }
  // }

/**
 * This function, render, runs as often as possible.
 */
var render = function () {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
    ctx.drawImage(bgImage, 0, 360);
    ctx.drawImage(bgImage, 600, 0);
    ctx.drawImage(bgImage, 600, 360);
  }
  if (playAgainReady) {
    ctx.drawImage(playAgainImage, 325, 200);

  }

  if (gameOverReady) {
    console.log('gameoverinside render', gameOverReady)
    ctx.drawImage(gameOverImage, 260, 25);
  }
  if (winnerReady) {
    ctx.drawImage(winnerImage, 400, 200);
  }
  if (heroReady) {
    ctx.drawImage(heroImage, heroX, heroY);

  }
  if (monsterReady) {
    ctx.drawImage(monsterImage, monsterX, monsterY);
  }
  if (ballReady) {
    ctx.drawImage(ballImage, ballX, ballY);
  }
  if (secondMonsterReady) {
    ctx.drawImage(secondMonsterImage, secondMonsterX, secondMonsterY);

  }
  if (thirdMonsterReady) {
    ctx.drawImage(thirdMonsterImage, thirdMonsterX, thirdMonsterY);

  }

  if (tenHeartReady) {
  ctx.drawImage(heartImage, 1060, 0);
  }

  if (nineHeartReady) {
    ctx.drawImage(heartImage, 1030, 0);
  }

  if (eightHeartReady) {

    ctx.drawImage(heartImage, 1000, 0);
  }

  if (sevenHeartReady) {
    ctx.drawImage(heartImage, 970, 0);
  }

  if (sixHeartReady) {
    ctx.drawImage(heartImage, 940, 0);
  }

  if (fiveHeartReady) {
    ctx.drawImage(heartImage, 910, 0);
  }

  if (fourHeartReady) {
    ctx.drawImage(heartImage, 880, 0);
  }

  if (threeHeartReady) {
    ctx.drawImage(heartImage, 850, 0);
  }

  if (twoHeartReady) {
    ctx.drawImage(heartImage, 820, 0);
  }

  if (heartReady) {
  ctx.drawImage(heartImage, 790, 0);
}

  ctx.fillText(`Your Health:`, 700, 20);
  ctx.fillStyle = "white";
  ctx.fillText(`Your Score: ${score}`, 20, 20);
  ctx.fillStyle = "white";
  // // ctx.clearRect(0, 0, canvas.width, canvas.height);
  // if(sprites.length > 0){
  //   for (var ix = sprites.length-1; ix>=0; ix--) {
  //     sprites[ix].render();
  //   }
  // }
};



/**
 * The main game loop. Most every game will have two distinct parts:
 * update (updates the state of the game, in this case our hero and monster)
 * render (based on the state of our game, draw the right things)
 */
var main = function () {
  // console.log('main still running')
  update();
  render();
  // Request to do this again ASAP. This is a special method
  // for web browsers. 
  requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame.
// Safely ignore this line. It's mostly here for people with old web browsers.
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
loadImages();
setupKeyboardListeners();
main();