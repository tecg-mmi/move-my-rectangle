import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";
import {IPosition} from "./IPosition";

export class Rectangle {
    private readonly ctx: CanvasRenderingContext2D;
    private position: IPosition;
    private speed: number;
    private alpha: number;
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
        this.speed = 3;
        // [0 - 2*Math.PI]
        this.alpha = Math.random() * Math.PI * 2;
    }

    draw() {
        this.ctx.save(); // sauvegarde l'état actuel du contexte
        this.ctx.translate(this.position.x + this.width / 2, this.position.y + this.height / 2); // déplace l'origine du système de coordonnées au centre du rectangle
        this.ctx.rotate(this.alpha); // applique la transformation de rotation
        this.ctx.fillStyle = `${this.color}`;
        this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height); // dessine le rectangle centré sur l'origine
        this.ctx.restore(); // restaure l'état précédent du contexte
        return this;
    }

    clear() {
        //this.ctx.clearRect(this.position.x, this.position.y, this.width, this.height);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    update() {
        this.position.x += this.speed * Math.cos(this.alpha);
        this.position.y += this.speed * Math.sin(this.alpha);

        if (this.position.x <= 0 || this.position.x + this.width >= this.canvas.width) {
            this.alpha = Math.PI - this.alpha;
        }

        if (this.position.y <= 0 || this.position.y + this.height >= this.canvas.height) {
            this.alpha = -this.alpha;
        }
    }
}