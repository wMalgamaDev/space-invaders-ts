//Canvas
const gameWindow = document.getElementById('gameWindow') as HTMLCanvasElement;
const ctx = gameWindow.getContext('2d');

//Input
let keys: {[key: string]: boolean} = {};
let dir: boolean;

window.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    switch(e.code){
        case "KeyA":
            dir = false;
            break;
        case "KeyD":
            dir = true;
            break;
        default:
            break;
    }
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
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
