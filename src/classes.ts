import type { Vec2, Sprite} from "./interfaces.js";

export class Entity{
    pos: Vec2;
    vel: number;
    dir: Vec2;
    img: Sprite;
    constructor(pos: Vec2, vel: number, dir: Vec2, img: Sprite){
        this.pos = pos;
        this.vel = vel;
        this.dir = dir;
        this.img = img;
    }
    render(ctx: CanvasRenderingContext2D, img: HTMLImageElement){
        ctx.drawImage(img, this.img.sx, this.img.sy, this.img.w, this.img.h,
        Math.floor(this.pos.x), this.pos.y, this.img.w, this.img.h);
    }
    moveX(dt: number){
        this.pos.x = this.pos.x + this.dir.x * this.vel * dt;
    }
    moveY(dt: number){
        this.pos.y = this.pos.y + this.dir.y * this.vel * dt;
    }
    move(dt: number){
        this.moveX(dt);
        this.moveY(dt);
    }
}

export class Player extends Entity{
}