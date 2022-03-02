import {Rectangle} from "./Rectangle";

const canvas = {
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    rectangles: new Array(),
    currentPosition: {x: 0, y: 0},
    init(): void {
        this.canvas = document.querySelector('#my-canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext('2d')
        this.rectangles.push(new Rectangle({
            x: this.canvas.width / 2,
            y: this.canvas.height / 2
        }, this.context, this.canvas, this.context));
        this.addEventListeners();
        this.animate();
    },
    addEventListeners() {
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
        this.canvas.addEventListener('click', (event: MouseEvent) => {
            const rectangle: Rectangle = new Rectangle({
                x: event.clientX,
                y: event.clientY
            }, this.currentPosition, this.canvas, this.context);

            this.rectangles.push(rectangle);
        })
        this.canvas.addEventListener('mousemove', (event: MouseEvent) => {
            this.rectangles.forEach(function (rectangle: Rectangle) {
                rectangle.mousePosition = {x: event.clientX, y: event.clientY}
            })
        })
    },
    animate() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.rectangles.forEach(function (rectangle: Rectangle) {
            rectangle.update();
        })
        window.requestAnimationFrame(() => {
            this.animate();
        })
    },

}

canvas.init();