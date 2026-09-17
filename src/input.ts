let keys: {[key: string]: boolean} = {};
let lastKey = "";

window.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    lastKey = e.code;
});
window.addEventListener('keyup', (e) => {
    keys[e.code] = false;
});

export function dirInput(){
    if(!(keys["KeyA"] && keys["KeyD"])){
            lastKey = keys["KeyA"] || keys["KeyD"] ? (keys["KeyA"] ? "KeyA" : "KeyD") : "";
        }

    return lastKey === "KeyA" || lastKey === "KeyD" ? (lastKey === "KeyA" ? -1 : 1) : 0;
}