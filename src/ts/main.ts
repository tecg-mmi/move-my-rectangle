import {Rectangle} from "./framework25/shapes/Rectangle";
import {settings} from "./settings";
import {Hsl} from "./framework25/colors/Hsl";
import {randomFloat, randomInt} from "./framework25/helpers/random";

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
            randomFloat(0, Math.PI * 2)
        );

        this.myRect.draw();
        this.addEventListeners();

        requestAnimationFrame(() => {
            this.update();
        });

    },
    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });
        window.addEventListener('mousemove', (event) => {
            // update rotation :

            const dx = event.clientX - this.myRect.position.x;
            const dy = event.clientY - this.myRect.position.y;

            this.myRect.rotation = Math.atan2(dy, dx);

        })
    },
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },
    update() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.myRect.position.x += Math.cos(this.myRect.rotation) * settings.step;
        this.myRect.position.y += Math.sin(this.myRect.rotation) * settings.step;

        // TODO : Check Y
        if (this.myRect.position.x > this.canvas.width + this.myRect.width / 2) {
            this.myRect.position.x = -this.myRect.width / 2;
            this.myRect.position.y = randomInt(this.myRect.height / 2, this.canvas.height - this.myRect.height / 2);
        }
        this.myRect.draw();
        requestAnimationFrame(() => {
            this.update();
        })
    },

};

app.init();