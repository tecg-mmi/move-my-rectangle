import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";
import {IPosition} from "./IPosition";

export class Rectangle {
    private readonly ctx: CanvasRenderingContext2D;
    private position: IPosition;

    private speed: number;
    private readonly width: number;
    private readonly height: number;
    color: Hsl | Rgb;
    private canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement, color: Hsl | Rgb, position: IPosition, width: number, height: number) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.position = position;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = 2;
    }

    draw() {
        this.ctx.fillStyle = `${this.color}`;
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        return this;
    }

    clear() {
        this.ctx.clearRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.position.x += this.speed;
        this.position.y += this.speed;
        if (this.position.x === this.canvas.width - this.width || this.position.x === 0) {
            this.speed = -this.speed;
        }
    }
}