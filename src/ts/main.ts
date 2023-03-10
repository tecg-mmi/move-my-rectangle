import {Rectangle} from "./shapes/Rectangle";
import {Hsl} from "./Colors/Hsl";

function main(): void {
    // @ts-ignore
    const ctx: CanvasRenderingContext2D = document.getElementById('my-canvas').getContext('2d');
    const myRectangle = new Rectangle(ctx, new Hsl(120, 80, 40), {x: 40, y: 100}, 20, 50);
    myRectangle.draw();
}

main();