import { Player } from "./classes.js";
import { dirInput } from "./input.js";

//Canvas
const gameWindow = document.getElementById('gameWindow') as HTMLCanvasElement;
const ctx = gameWindow.getContext('2d') as CanvasRenderingContext2D;
ctx.imageSmoothingEnabled = false;

//Texture Loading
const img: HTMLImageElement = new Image();
img.src = "./public/assets/atlas.png";

const player = new Player({
    x: gameWindow.width/2 - 4,
    y: 160,
},
    75,
    0,
{
    sx: 0,
    sy: 0,
    w: 8,
    h: 8
});

//Game Loop
let timeDelta = 0;
let prevTime = performance.now()/1000;

function gameLoop(time: number): void{
    ctx.clearRect(0, 0, gameWindow.width, gameWindow.height);

    const currTime = time/1000;
    timeDelta = currTime-prevTime;
    prevTime = currTime;
    //console.log(timeDelta);

    player.dir = dirInput();
    player.move(timeDelta);
    player.render(ctx, img);

    requestAnimationFrame(gameLoop);
}

//Init
requestAnimationFrame(gameLoop);
