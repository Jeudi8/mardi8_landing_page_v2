import gsap, { Power4 } from 'gsap';

const timeline = gsap.timeline({
  paused: true,
  //   repeat: 1,
});

timeline

  .to('.rect-bottom', {
    translateY: '0',
    opacity: 1,
    duration: 2,
    ease: Power4.easeOut,
  })
  .to('.rect-bottom', {
    scale: 1,
    duration: 1,
    ease: Power4.easeOut,
  })
  .to(
    '.rect-top',
    {
      translateY: '0',
      opacity: 1,
      duration: 2,
      ease: Power4.easeOut,
    },
    '<20%'
  )
  .to(
    '.rect-left',
    {
      translateY: '0',
      translateX: '0',
      rotate: 0,
      opacity: 1,
      duration: 2,
      ease: Power4.easeOut,
    },
    '<20%'
  )
  .to(
    '.rect-right',
    {
      translateY: '0',
      translateX: '0',
      rotate: 0,
      opacity: 1,
      duration: 2,
      ease: Power4.easeOut,
    },
    '<20%'
  )
  .to(
    '.brand',
    {
      opacity: 1,
      duration: 2,
      ease: Power4.easeOut,
    },
    '<50%'
  )
  .to(
    '.brand-sub',
    {
      opacity: 1,
      duration: 2,
      ease: Power4.easeOut,
    },
    '<10%'
  );

export default { timeline };
