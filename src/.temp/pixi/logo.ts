import gsap from 'gsap';
import { Container, Graphics } from 'pixi.js';
import { getHeight, getWidth } from '.';

const container = new Container();

const b1 = new Graphics();
let color = 0xffffff;
b1.beginFill(color);
b1.drawRect(0, 0, 20, 20);
b1.endFill();
b1.pivot.set(10, 10);
b1.rotation = Math.PI / 4;

const b3 = new Graphics();
color = 0x00ff00;
b3.beginFill(color);
b3.drawRect(20, 20, 20, 20);
b3.endFill();
b3.pivot.set(10, 10);
b3.rotation = Math.PI / 4;
b3.alpha = 1;

const b2 = new Graphics();
color = 0xff0000;
b2.beginFill(color);
b2.drawRect(-25, -5, 20, 60);
b2.endFill();
b2.pivot.set(10, 10);
// b2.rotation = Math.PI / 4;
// b2.alpha = 0;

const b4 = new Graphics();
color = 0x0000ff;
b4.beginFill(color);
b4.drawRect(25, -5, 20, 60);
b4.endFill();
b4.pivot.set(10, 10);
// b4.rotation = Math.PI / 4;
// b4.alpha = 0;

container.addChild(b1, b2, b3, b4);
container.pivot.set(10, 10);
// container.rotation = Math.PI / 4;
const x = getWidth() / 2 + 10;
const y = getHeight() / 2;
container.position.set(x, y);
container.alpha = 1;
container.scale.set(1);

// const tl = gsap.timeline();
// tl.to(container, {
//     delay: 0.1,
//     duration: 2,
//     y: getHeight() / 2,
//     alpha: 1,
//     ease: 'power2.inOut',
// }).to(container.scale, {
//     x: 1,
//     y: 1,
//     ease: 'power4.inOut',
// });
// .to(b4, {
//     x: -20,

//     ease: 'power4.inOut',
//     // onComplete: () => {
//     //     b4.pivot.set(0, 0);
//     // },
// })
// .to(b2, {
//     y: -20,
//     ease: 'power4.inOut',
// })
// .to(b4, {
//     // rotation: Math.PI / 2,
//     y: -10,
//     x: 5,

//     ease: 'power4.inOut',
// });
// .to(
//     b4.scale,
//     {
//         x: 4,

//         ease: 'power4.inOut',
//     },
//     '<'
// )
// .to(
//     b4,
//     {
//         y: 10,
//         x: 5,
//         ease: 'power4.inOut',
//     },
//     '<'
// );
// .to(container, {
//     rotation: Math.PI / 2,
// });

export default container;
