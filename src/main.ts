import { Player } from "./classes.js";

//Canvas
const gameWindow = document.getElementById('gameWindow') as HTMLCanvasElement;
const ctx = gameWindow.getContext('2d') as CanvasRenderingContext2D;
ctx.imageSmoothingEnabled = false;

//Input
let keys: {[key: string]: boolean} = {};
let lastKey: string;

window.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    lastKey = e.code;
});
window.addEventListener('keyup', (e) => {
    keys[e.code] = false;
});

//Texture Loading
const img: HTMLImageElement = new Image();
img.src = "./public/assets/atlas.png";

//Game Loop
let timeDelta = 0;
let prevTime = performance.now()/1000;

function gameLoop(time: number): void{
    ctx?.clearRect(0, 0, gameWindow.width, gameWindow.height);

    const currTime = time/1000;
    timeDelta = currTime-prevTime;
    prevTime = currTime;
    //console.log(timeDelta);

    if(!(keys["KeyA"] && keys["KeyD"])){
        lastKey = keys["KeyA"] || keys["KeyD"] ? (keys["KeyA"] ? "KeyA" : "KeyD") : "";
    }
    player.dir = lastKey === "KeyA" || lastKey === "KeyD" ? (lastKey === "KeyA" ? -1 : 1) : 0;

    player.move(timeDelta);
    player.render(ctx, img);

    requestAnimationFrame(gameLoop);
}

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
requestAnimationFrame(gameLoop);
