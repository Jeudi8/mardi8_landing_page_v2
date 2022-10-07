// var iframe = document.querySelector('iframe');

// (async () => {
//   iframe?.addEventListener('load', () => {
//     const video = iframe?.contentWindow?.document.getElementsByTagName('video');
//     console.log(video);
//   });
// })();

const getAverageRgb = (img) => {
  const context = document.createElement('canvas').getContext('2d');
  if (typeof img === 'string') {
    const img = new Image();
    img.setAttribute('crossOrigin', '');
    img.src = src;
    img.onload = () => {
      context.imageSmoothingEnabled = true;
      context.drawImage(img, 0, 0, 1, 1);
      console.log(context.getImageData(1, 1, 1, 1).data.slice(0, 3));
    };
  }
};

const computeFrame = (
  video: HTMLVideoElement,
  context: CanvasRenderingContext2D,
  context2: CanvasRenderingContext2D,
  delta: number
) => {
  context2.drawImage(video, 0, 0, 1, 1);
  let frame = context2.getImageData(0, 0, 1, 1);

  const rgb = frame.data;
  // console.log(frame.data);
  const e = delta / 1000;
  // videoTest.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
  // let l = frame.data.length / 4;

  // for (let i = 0; i < l; i++) {
  //   let r = frame.data[i * 4 + 0];
  //   let g = frame.data[i * 4 + 1];
  //   let b = frame.data[i * 4 + 2];
  //   if (g > 100 && r > 100 && b < 43) frame.data[i * 4 + 3] = 0;
  // }

  // context.clearRect(0, 0, canvas.width, canvas.height);
  // context.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
  // context.rect(0, 0, canvas.width, canvas.height);
  // context.putImageData(frame, 0, 0);
};

const render = (fn: (delta: number) => void) => {
  let id = undefined;
  let time = Date.now();
  const tick = (elapsed: number) => {
    const delta = elapsed - time;
    time = elapsed;
    fn(delta);

    id = requestAnimationFrame(tick);
  };

  id = requestAnimationFrame(tick);
};

const video = document.getElementById('video') as HTMLVideoElement;
const canvas = document.getElementById('canvas') as HTMLCanvasElement;

// video.addEventListener('play', (e) => {
//   const context = canvas.getContext('2d');
//   const context2 = document.createElement('canvas').getContext('2d');

//   if (!context || !context2) return console.warn('no context found');

//   context.imageSmoothingEnabled = true;
//   context2.imageSmoothingEnabled = true;

//   render((delta) => {
//     computeFrame(video, context, context2, delta);
//   });
// });
