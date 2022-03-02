import {settings} from "./settings";

export class Rectangle {
    private size: { width: number, height: number }
    private positon: { x: number, y: number };
    private speed: number;
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private opacity: number;
    public direction: number;
    private color: string;
    public currentPosition: { x: number; y: number };
    private _mousePosition: { x: number, y: number };


    // @ts-ignore
    public set mousePosition(value: { x: number; y: number }) {
        this._mousePosition = value;
        this.positon.x += (this._mousePosition.x - this.positon.x) * Math.random() % 0.5;
        this.positon.y += (this._mousePosition.y - this.positon.y) * Math.random() % 0.5;

    }

    constructor(positon: { x: number; y: number }, delta: { x: number; y: number }, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.positon = positon;
        this.canvas = canvas;
        this.canvas = canvas;

        this.direction = 0;
        this.ctx = ctx;
        this._mousePosition = {x: this.positon.x, y: this.positon.y};
        this.opacity = Math.random() + 0.09;
        this.size = {
            width: settings.rectangle.minWidth + Math.ceil(Math.random() * settings.rectangle.maxWidth),
            height: settings.rectangle.minHeight + Math.ceil(Math.random() * settings.rectangle.maxHeight)
        };
        this.speed = Math.random()%0.5;
        this.color = `rgba(${settings.colors[Math.floor(Math.random() * settings.colors.length)]},${this.opacity.toFixed(2)})`;

        delta.x += this.size.width;
        delta.y += this.size.height;
        this.currentPosition = {x: delta.x, y: delta.y};
    }

    draw() {
        this.ctx.save();
        this.ctx.fillStyle = this.color;
        this.ctx.translate(this.positon.x, this.positon.y);
        this.ctx.rotate(this.direction);
        this.ctx.fillRect(-this.size.width/2, -this.size.height/2, this.size.width, this.size.height);
        this.ctx.restore();
    }
    update() {
        this.positon.x += (this._mousePosition.x - this.positon.x) * this.speed;
        this.positon.y += (this._mousePosition.y - this.positon.y) * this.speed;
        this.direction = Math.atan2(this._mousePosition.y - this.positon.y, this._mousePosition.x - this.positon.x);
        this.draw();
    }

}
