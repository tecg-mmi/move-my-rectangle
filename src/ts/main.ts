import {Rectangle} from "./shapes/Rectangle";
import {Hsl} from "./Colors/Hsl";

// @ts-ignore
const canvas: HTMLCanvasElement = document.getElementById('my-canvas');
const myRectangle = new Rectangle(canvas, new Hsl(120, 80, 40), {x: 40, y: 100}, 20, 50);

function main(): void {
    animate();
}

main();

window.addEventListener('mousemove', (e) => {

});
function animate() {
    myRectangle.clear();
    myRectangle.update();
    myRectangle.draw();
    requestAnimationFrame(animate);
}
