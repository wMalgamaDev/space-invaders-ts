import { Player } from "./classes.js";

//Canvas
const gameWindow = document.getElementById('gameWindow') as HTMLCanvasElement;
const ctx = gameWindow.getContext('2d') as CanvasRenderingContext2D;
ctx.imageSmoothingEnabled = false;

//Input
let keys: {[key: string]: boolean} = {};
let lastKey: string;
let dir = 0;

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
    ctx?.clearRect(Math.floor(player.pos.x), player.pos.y, player.img.w, player.img.h);

    const currTime = time/1000;
    timeDelta = currTime-prevTime;
    prevTime = currTime;
    //console.log(timeDelta);

    if(!(keys["KeyA"] && keys["KeyD"])){
        lastKey = keys["KeyA"] || keys["KeyD"] ? (keys["KeyA"] ? "KeyA" : "KeyD") : "";
    }
    dir = lastKey === "KeyA" || lastKey === "KeyD" ? (lastKey === "KeyA" ? -1 : 1) : 0;

    player.pos.x = player.pos.x + dir * player.vel * timeDelta;

    ctx?.drawImage(img, player.img.sx, player.img.sy, player.img.w, player.img.h,
        Math.floor(player.pos.x), player.pos.y, player.img.w, player.img.h);

    requestAnimationFrame(gameLoop);
}

const player = new Player({
    x: gameWindow.width/2 - 4,
    y: 160,
},
    75,
{
    sx: 0,
    sy: 0,
    w: 8,
    h: 8
});
requestAnimationFrame(gameLoop);
