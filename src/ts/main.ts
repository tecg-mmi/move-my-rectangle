import {Rectangle} from "./shapes/Rectangle";
import {Rgb} from "./Colors/Rgb";
import {Canvas} from "./Canvas";

// @ts-ignore
const canvas: Canvas = new Canvas(document.getElementById('my-canvas'));
const FlatColors = require("flat-colors")
const colors = FlatColors(Math.random() * 250, Math.random() * 250, Math.random() * 250);
const myRectangle = new Rectangle(canvas, new Rgb(colors[0], colors[1], colors[2]), {x: 40, y: 100}, 20, 50);

function main(): void {
    animate();
}

main();

window.addEventListener('mousemove', (event: MouseEvent) => {
    myRectangle.setDirectionByMousePosition({x: event.x, y: event.y});
});


function animate() {
    myRectangle.clear();
    myRectangle.update();
    myRectangle.draw();
    requestAnimationFrame(animate);
}
