// https://css-tricks.com/tips-for-writing-animation-code-efficiently/
import gsap, { Power4 } from 'gsap';

const buildAnimations = (baseClass: string): GSAPTimeline => {
  const timeline = gsap.timeline({
    paused: true,
    defaults: { duration: 2, opacity: 1, ease: Power4.easeOut },
  });
  timeline
    .to(`${baseClass}.rect-bottom`, { translateY: '0' })
    .to(`${baseClass}.rect-bottom`, { scale: 1 })
    .to(`${baseClass}.rect-top`, { translateY: '0' }, '<50%')
    .to(`${baseClass}.rect-left`, { translateY: '0', translateX: '0', rotate: 0 }, '<20%')
    .to(`${baseClass}.rect-right`, { translateY: '0', translateX: '0', rotate: 0 }, '<20%')
    .to(`${baseClass}.logo-heading`, {}, '<50%')
    .to(`${baseClass}.logo-slogan`, {}, '<10%');

  return timeline;
};

export const attach = (baseClass: string) => {
  const timeline = buildAnimations(baseClass);
  timeline.play();

  timeline.eventCallback('onComplete', () => {
    timeline.kill();
  });
};
