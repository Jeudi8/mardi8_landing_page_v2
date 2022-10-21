import gsap from 'gsap';

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
    defaults: { duration: 1, ease: 'linear' },
  })
  .to(MENU, {
    opacity: 1,
  })
  .to(
    MENU_LINK,
    {
      opacity: 0.7,
      stagger: 0.1,
      onComplete: function () {
        this.targets().forEach((el: HTMLLinkElement) => {
          el.style.opacity = '';
          el.classList.add('opacity-50');
        });
      },
    },
    '<50%'
  );

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
