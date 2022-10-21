import selector from './selector';

const click = () => {
  const menu = selector('#menu')[0];
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

export const attach = (id: string) => {
  const btn = selector(id, { click })[0];
  if (!btn) return;
};

export default {};
