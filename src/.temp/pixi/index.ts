import gsap from 'gsap';
import { Application, utils, DisplayObject } from 'pixi.js';

utils.skipHello();

const resolution = window.devicePixelRatio || 1;
let elapsed = 0.0;
type update = (obj: { delta: number; elapsed: number }) => void;
const updater: update[] = [];

export const getWidth = () => window.innerWidth / resolution;
export const getHeight = () => (window.innerHeight - (window.innerHeight / 100) * 20) / resolution;
export const addChild = (child: DisplayObject) => app.stage.addChild(child);
export const update = (func: update) => updater.push(func);
export const appendTo = (selector: string) => {
    const tag = document.querySelector(selector);
    if (!tag) throw new Error('PIXI : cannot init app. Cannot appendChild to undefined');
    tag.appendChild(app.view);
};

const app = new Application({
    width: getWidth(),
    height: getHeight(),
    resolution,
    antialias: true,
    backgroundColor: 0x000,
});

app.ticker.stop();
gsap.ticker.add(() => {
    app.ticker.update();
});

app.ticker.add((delta) => {
    updater.forEach((f) => f({ delta, elapsed }));
    elapsed += delta;
});

window.addEventListener('resize', () => {
    app.renderer.resize(getWidth(), getHeight());
});

// export default init;
