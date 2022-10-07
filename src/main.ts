import 'virtual:windi.css';
import './style.css';
import * as videoBlur from './videoBlur';
import * as sections from './sections';
import header from './header';

document.querySelectorAll('section').forEach((el) => {
  sections.observer.observe(el);
});

videoBlur.resize();
const video = document.getElementById('video-origin') as HTMLVideoElement;
video.addEventListener('play', videoBlur.play);
video.addEventListener('pause', videoBlur.pause);
video.addEventListener('seeked', videoBlur.seek);
video.addEventListener('timeupdate', videoBlur.timeupdate);
window.addEventListener('resize', videoBlur.resize);

header.timeline.play();
