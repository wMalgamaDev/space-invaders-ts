let keys: {[key: string]: boolean} = {};
let lastDirKey = "";

window.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    if(e.code === "KeyA" || e.code === "KeyD"){
        lastDirKey = e.code;
    }
});
window.addEventListener('keyup', (e) => {
    keys[e.code] = false;
});

export function dirInput(){
    if(!(keys["KeyA"] && keys["KeyD"])){
            lastDirKey = keys["KeyA"] || keys["KeyD"] ? (keys["KeyA"] ? "KeyA" : "KeyD") : "";
        }
    return lastDirKey === "KeyA" || lastDirKey === "KeyD" ? (lastDirKey === "KeyA" ? -1 : 1) : 0;
}