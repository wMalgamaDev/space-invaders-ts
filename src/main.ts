//Canvas
const gameWindow = document.getElementById('gameWindow') as HTMLCanvasElement;
const ctx = gameWindow.getContext('2d');

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
    const currTime = time/1000;
    timeDelta = currTime-prevTime;
    prevTime = currTime;
    //console.log(timeDelta);

    if(!(keys["KeyA"] && keys["KeyD"])){
        lastKey = keys["KeyA"] || keys["KeyD"] ? (keys["KeyA"] ? "KeyA" : "KeyD") : "";
    }
    dir = lastKey === "KeyA" || lastKey === "KeyD" ? (lastKey === "KeyA" ? -1 : 1) : 0;
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
