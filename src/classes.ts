import type { Pos, Sprite } from "./interfaces.js";

export class Player{
    pos: Pos;
    vel: number;
    img: Sprite;
    constructor(pos: Pos, vel: number, img: Sprite){
        this.pos = pos;
        this.vel = vel;
        this.img = img;
    }
}