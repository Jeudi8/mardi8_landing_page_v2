import gsap, { Power4 } from 'gsap';

import selector from './selector';

const MENU = '#menu';
const MENU_LINK = '.menu-link';
let displayed = false;

const show = () => {
  const menu = selector(MENU)[0];
  if (!menu) return;
  document.body.style.overflowY = 'hidden';
  menu.classList.remove('hidden');
  menu.focus();
};

const hide = () => {
  const menu = selector(MENU)[0];
  if (!menu) return;
  document.body.style.overflowY = 'auto';
  menu.classList.add('hidden');
};

const tl = gsap
  .timeline({
    paused: true,
    defaults: { opacity: 1, ease: Power4.easeOut },
  })
  .to(MENU, { duration: 2 })
  .to(MENU_LINK, { duration: 1, stagger: 0.1, ease: 'linear' }, '<50%');

tl.eventCallback('onReverseComplete', hide);
tl.eventCallback('onStart', show);

const click = () => {
  tl.pause();
  if (displayed) tl.reverse();
  else tl.play();
  displayed = !displayed;
};

export const attach = (str: string) => {
  selector(str, { click });
};
