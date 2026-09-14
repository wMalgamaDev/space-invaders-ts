const gameWindow = document.getElementById('gameWindow') as HTMLCanvasElement;
const ctx = gameWindow.getContext('2d');

const img: HTMLImageElement = new Image();

img.src = "./public/assets/atlas.png";