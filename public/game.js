const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const grid = 20;
const canvasSize = 400;

let player = { x: 0, y: 0, color: '#00ff99' };
let ghost = { x: 380, y: 380, color: '#ff0000' };
let artifacts = [];
let collected = 0;
let totalArtifacts = 3;

// Generar artefactos
for(let i=0;i<totalArtifacts;i++){
  artifacts.push({
    x: Math.floor(Math.random()*(canvasSize/grid))*grid,
    y: Math.floor(Math.random()*(canvasSize/grid))*grid,
    color: '#ffffff'
  });
}

function draw(){
  ctx.clearRect(0,0,canvasSize,canvasSize);

  // Artefactos
  artifacts.forEach(a=>{
    ctx.fillStyle = a.color;
    ctx.fillRect(a.x, a.y, grid, grid);
  });

  // Player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, grid, grid);

  // Ghost
  ctx.fillStyle = ghost.color;
  ctx.fillRect(ghost.x, ghost.y, grid, grid);
}

// Mover fantasma hacia player
function moveGhost(){
  if(ghost.x < player.x) ghost.x += grid;
  if(ghost.x > player.x) ghost.x -= grid;
  if(ghost.y < player.y) ghost.y += grid;
  if(ghost.y > player.y) ghost.y -= grid;
}

// Revisar colisiones
function checkCollision(){
  // Player con artefactos
  for(let i=artifacts.length-1;i>=0;i--){
    if(player.x === artifacts[i].x && player.y === artifacts[i].y){
      artifacts.splice(i,1);
      collected++;
    }
  }

  // Player con ghost
  if(player.x === ghost.x && player.y === ghost.y){
    alert("¡Perdiste! El fantasma te atrapó.");
    resetGame();
  }

  // Win
  if(collected === totalArtifacts){
    alert("¡Ganaste! Escapaste con los artefactos.");
    resetGame();
  }
}

// Resetear juego
function resetGame(){
  player.x = 0; player.y = 0;
  ghost.x = 380; ghost.y = 380;
  artifacts = [];
  collected = 0;
  for(let i=0;i<totalArtifacts;i++){
    artifacts.push({
      x: Math.floor(Math.random()*(canvasSize/grid))*grid,
      y: Math.floor(Math.random()*(canvasSize/grid))*grid,
      color: '#ffffff'
    });
  }
}

// Controles
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

// Inicial
draw();
