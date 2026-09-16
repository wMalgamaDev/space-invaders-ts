import type { Pos, Sprite } from "./interfaces.js";

export class Player{
    pos: Pos;
    vel: number;
    dir: number;
    img: Sprite;
    constructor(pos: Pos, vel: number, dir: number, img: Sprite){
        this.pos = pos;
        this.vel = vel;
        this.dir = dir;
        this.img = img;
    }
    render(ctx: CanvasRenderingContext2D, img: HTMLImageElement){
        ctx.drawImage(img, this.img.sx, this.img.sy, this.img.w, this.img.h,
        Math.floor(this.pos.x), this.pos.y, this.img.w, this.img.h);
    }
    move(dt: number){
        this.pos.x = this.pos.x + this.dir * this.vel * dt;
    }
}