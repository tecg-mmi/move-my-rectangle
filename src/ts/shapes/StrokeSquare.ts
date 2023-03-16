import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";
import {position} from "../Types/position";
import {Canvas} from "../Canvas";
import {Square} from "./Square";

export class StrokeSquare extends Square {
    private readonly strokeWidth: number;

    constructor(canvas: Canvas, color: Hsl | Rgb, side: number, strokeWidth: number, position: position, speed?: number, direction?: number) {
        super(canvas, color, side, position, speed, direction)
        this.strokeWidth = strokeWidth;
    }

    draw() {
        this.ctx.strokeStyle = `${this.color}`;
        this.ctx.lineWidth = this.strokeWidth;
        this.ctx.strokeRect(this.position.x + this.strokeWidth / 2, this.position.y + this.strokeWidth / 2, this.side - this.strokeWidth, this.side - this.strokeWidth);
        return this;
    }
}