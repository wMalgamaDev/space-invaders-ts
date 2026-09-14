const gameWindow = document.getElementById('gameWindow') as HTMLCanvasElement;
const ctx = gameWindow.getContext('2d');

const img: HTMLImageElement = new Image();
img.src = "./public/assets/atlas.png";

let timeDelta = 0;
let prevTime = performance.now()/1000;

function gameLoop(time: number): void{
    const currTime = time/1000;
    timeDelta = currTime-prevTime;
    prevTime = currTime;
    //console.log(timeDelta);
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
