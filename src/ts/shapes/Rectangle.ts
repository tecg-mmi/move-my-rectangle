import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";
import {position} from "../Types/position";
import {Canvas} from "../Canvas";
import {Shape} from "./Shape";
import {Animatable} from "../Types/Animatable";

export class Rectangle extends Shape implements Animatable {
    protected readonly width: number;
    protected readonly height: number;

    constructor(canvas: Canvas, color: Hsl | Rgb, width: number, height: number, position: position, speed?: number, direction?: number) {
        super(canvas, position, speed, direction, color);
        this.width = width;
        this.height = height;
    }

    draw() {
        this.ctx.save(); // sauvegarde l'état actuel du contexte
        this.ctx.translate(Math.trunc(this.position.x + this.width / 2), Math.trunc(this.position.y + this.height / 2)); // déplace l'origine du système de coordonnées au centre du rectangle
        this.ctx.rotate(this.direction); // applique la transformation de rotation
        this.ctx.fillStyle = `${this.color}`;
        this.ctx.fillRect(-Math.trunc(this.width / 2), -Math.trunc(this.height / 2), this.width, this.height); // dessine le rectangle centré sur l'origine
        this.ctx.restore(); // restaure l'état précédent du contexte
        return this;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    update() {
        this.position.x += Math.floor(this.speed * Math.cos(this.direction));
        this.position.y += Math.floor(this.speed * Math.sin(this.direction));

        if (this.position.x <= 0 || this.position.x + this.width >= this.canvas.width) {
            this.direction = Math.PI - this.direction;
        }

        if (this.position.y <= 0 || this.position.y + this.height >= this.canvas.height) {
            this.direction = -this.direction;
        }
    }

    setDirectionByMousePosition(position: position) {
        this.direction = Math.atan2(position.y - this.position.y, position.x - this.position.x);
    }
}