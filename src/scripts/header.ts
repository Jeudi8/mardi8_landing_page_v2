import gsap, { Power4 } from 'gsap';

let timeline = gsap.timeline({
  paused: true,
  defaults: { duration: 2, opacity: 1, ease: Power4.easeOut },
});

timeline
  .to('.rect-bottom', { translateY: '0' })
  .to('.rect-bottom', { scale: 1 })
  .to('.rect-top', { translateY: '0' }, '<50%')
  .to('.rect-left', { translateY: '0', translateX: '0', rotate: 0 }, '<20%')
  .to('.rect-right', { translateY: '0', translateX: '0', rotate: 0 }, '<20%')
  .to('.brand', {}, '<50%')
  .to('.brand-sub', {}, '<10%');

export const attach = () => {
  timeline.play();

  timeline.eventCallback('onComplete', () => {
    timeline.kill();
  });
};
