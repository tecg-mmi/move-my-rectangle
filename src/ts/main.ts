import {Rectangle} from "./framework25/shapes/Rectangle";
import {settings} from "./settings";
import {Hsl} from "./framework25/colors/Hsl";

const app = {
    init() {
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        this.myRect = new Rectangle(
            this.ctx,
            {x: this.canvas.width / 2, y: this.canvas.height / 2},
            new Hsl(200, 40, 60),
            settings.rect.width,
            settings.rect.height,
        );
        this.myRect.draw();
        this.addEventListeners();
    },
    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });
    },
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

};

app.init();