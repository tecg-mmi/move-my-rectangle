import {Rectangle} from "./shapes/Rectangle";
import {Rgb} from "./Colors/Rgb";
import {Canvas} from "./Canvas";
import {Animate} from "./Animate";

function main(): void {
    const canvas: Canvas = new Canvas(document.getElementById('my-canvas') as HTMLCanvasElement);
    const FlatColors = require("flat-colors");
    const colors = FlatColors(Math.random() * 250, Math.random() * 250, Math.random() * 250);
    const animation = new Animate();
    const myRectangle = new Rectangle(canvas, new Rgb(colors[0], colors[1], colors[2]), 10, 50, {x: 40, y: 100}, 3);
    animation.registerForAnimation(myRectangle);
    animation.start();
    window.addEventListener('mousemove', (event: MouseEvent) => {
        myRectangle.setDirectionByMousePosition({x: event.x, y: event.y});
    });
}

main();
