import selector from './selector';

const click = () => {
  console.log('enter');

  const menu = selector('#menu')[0] as HTMLElement;
  if (!menu) return;

  const hidden = menu.className.match(/hidden/);
  if (hidden) {
    document.body.style.overflowY = 'hidden';
    menu.classList.remove('hidden');
    menu.focus();
  } else {
    document.body.style.overflowY = 'auto';
    menu.classList.add('hidden');
  }
};

export const attach = (str: string) => {
  selector(str, { click });
};
