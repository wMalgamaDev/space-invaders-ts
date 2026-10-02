import type { Vec2, Sprite} from "./interfaces.js";

export class Entity{
    pos: Vec2;
    vel: number;
    dir: Vec2;
    img: Sprite;
    center: Vec2;
    constructor(pos: Vec2, vel: number, dir: Vec2, img: Sprite){
        this.pos = pos;
        this.vel = vel;
        this.dir = dir;
        this.img = img;
        this.center = {x: pos.x + img.w/2, y: pos.y + img.h/2};
    }
    render(ctx: CanvasRenderingContext2D, img: HTMLImageElement){
        ctx.drawImage(img, this.img.sx, this.img.sy, this.img.w, this.img.h,
        Math.floor(this.pos.x), this.pos.y, this.img.w, this.img.h);
    }
    moveX(dt: number){
        this.pos.x = this.pos.x + this.dir.x * this.vel * dt;
        this.center.x = this.pos.x + this.img.w/2;
    }
    moveY(dt: number){
        this.pos.y = this.pos.y + this.dir.y * this.vel * dt;
        this.center.y = this.pos.y + this.img.h/2;
    }
    move(dt: number){
        this.moveX(dt);
        this.moveY(dt);
    }
}

export class Player extends Entity{
}