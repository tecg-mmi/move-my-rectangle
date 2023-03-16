import {Rectangle} from "./shapes/Rectangle";
import {Rgb} from "./Colors/Rgb";

// @ts-ignore
const canvas: HTMLCanvasElement = document.getElementById('my-canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const myRectangle = new Rectangle(canvas, new Rgb(230, 126, 34), {x: 40, y: 100}, 20, 50);

function main(): void {
    animate();
}

main();
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

canvas.addEventListener('mousemove', (event: MouseEvent) => {
    myRectangle.setDirectionByMousePosition({x: event.x, y: event.y});
});


function animate() {
    myRectangle.clear();
    myRectangle.update();
    myRectangle.draw();
    requestAnimationFrame(animate);
}
