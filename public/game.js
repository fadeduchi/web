const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const grid = 20;
const canvasSize = 400;

let player = { x: 0, y: 0, width: grid, height: grid };
let ghost = { x: 380, y: 380, width: grid, height: grid };
let collected = 0;
const totalArtifacts = 3;
let artifacts = [];

// Sprites desde links (ejemplos libres)
const playerImg = new Image();
playerImg.src = 'https://i.imgur.com/2yXQ0gP.png'; // caballero pixelado

const ghostImg = new Image();
ghostImg.src = 'https://i.imgur.com/p1z2JtC.png'; // fantasma pixelado

const itemImg = new Image();
itemImg.src = 'https://i.imgur.com/Ji1v8jv.png'; // artefacto pixel

// Generar artefactos
for(let i=0;i<totalArtifacts;i++){
  artifacts.push({
    x: Math.floor(Math.random()*(canvasSize/grid))*grid,
    y: Math.floor(Math.random()*(canvasSize/grid))*grid
  });
}

function draw(){
  ctx.clearRect(0,0,canvasSize,canvasSize);

  // Artefactos
  artifacts.forEach(a=>{
    ctx.drawImage(itemImg, a.x, a.y, grid, grid);
  });

  // Player
  ctx.drawImage(playerImg, player.x, player.y, grid, grid);

  // Ghost
  ctx.drawImage(ghostImg, ghost.x, ghost.y, grid, grid);
}

// Mover fantasma hacia player
function moveGhost(){
  if(ghost.x < player.x) ghost.x += grid;
  if(ghost.x > player.x) ghost.x -= grid;
  if(ghost.y < player.y) ghost.y += grid;
  if(ghost.y > player.y) ghost.y -= grid;
}

// Colisiones
function checkCollision(){
  for(let i=artifacts.length-1;i>=0;i--){
    if(player.x === artifacts[i].x && player.y === artifacts[i].y){
      artifacts.splice(i,1);
      collected++;
    }
  }

  if(player.x === ghost.x && player.y === ghost.y){
    alert("¡Perdiste! El fantasma te atrapó.");
    resetGame();
  }

  if(collected === totalArtifacts){
    alert("¡Ganaste! Escapaste con los artefactos.");
    resetGame();
  }
}

function resetGame(){
  player.x = 0; player.y = 0;
  ghost.x = 380; ghost.y = 380;
  collected = 0;
  artifacts = [];
  for(let i=0;i<totalArtifacts;i++){
    artifacts.push({
      x: Math.floor(Math.random()*(canvasSize/grid))*grid,
      y: Math.floor(Math.random()*(canvasSize/grid))*grid
    });
  }
}

document.addEventListener('keydown', e=>{
  switch(e.key){
    case 'ArrowUp': case 'w': if(player.y>0) player.y -= grid; break;
    case 'ArrowDown': case 's': if(player.y<canvasSize-grid) player.y += grid; break;
    case 'ArrowLeft': case 'a': if(player.x>0) player.x -= grid; break;
    case 'ArrowRight': case 'd': if(player.x<canvasSize-grid) player.x += grid; break;
  }
  moveGhost();
  checkCollision();
  draw();
});

draw();
