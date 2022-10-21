const WIDTH = 640;
const HEIGHT = 360;
let time = Date.now();
const videoBlur = document.getElementById('video-blur') as HTMLVideoElement;
const ctx = document.createElement('canvas').getContext('2d') as CanvasRenderingContext2D;
ctx.imageSmoothingEnabled = true;

const computeFrame = (video: HTMLVideoElement) => {
  ctx.drawImage(video, 0, 0, 5, 1);
  return ctx.getImageData(0, 0, 1, 1);
};

const mapRange = (current: number, in_min: number, in_max: number, out_min: number, out_max: number): number => {
  const mapped: number = ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  return mapped;
};

export const seek = (e: Event) => {
  const target = e.target as HTMLVideoElement;
  videoBlur.currentTime = target.currentTime;
};

export const play = (e: Event) => {
  seek(e);
  videoBlur.play();
};

export const pause = (e: Event) => {
  seek(e);
  videoBlur.pause();
};

export const resize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  let scale = Math.min(width / WIDTH, height / HEIGHT);
  scale = Math.min(scale, 1.5);
  videoBlur.style.transform = `translate(-50%, -50%) scale(${scale})`;
};

export const timeupdate = (e: Event) => {
  const target = e.target as HTMLVideoElement;
  const currentTime = Date.now();
  const delta = currentTime - time;
  time = currentTime;
  const frame = computeFrame(target);
  const r = frame.data[0];
  const g = frame.data[1];
  const b = frame.data[2];
  const sum = (r + g + b) / (255 * 3);
  const sumReverse = sum * -1 + 1;

  videoBlur.style.transitionDuration = `${delta}ms`;
  videoBlur.style.opacity = `${Math.max(0, mapRange(sumReverse, 0, 1, 0.3, 1))}`;
};

// const render = (fn: (delta: number) => void) => {
//   let id = undefined;
//   let time = Date.now();
//   const tick = (elapsed: number) => {
//     const delta = elapsed - time;
//     time = elapsed;
//     fn(delta);

//     id = requestAnimationFrame(tick);
//   };

//   id = requestAnimationFrame(tick);
// };
