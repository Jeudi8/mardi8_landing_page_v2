import selector from './selector';

const callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    const el = entry.target as HTMLElement;

    // const minY = window.scrollY + window.innerHeight > el.offsetTop;
    // const maxY = window.scrollY < el.offsetTop + el.clientHeight;
    // if (minY && maxY) {
    //   console.log('pass top');
    //   window.addEventListener('scroll', func);
    // } else {
    //   console.log('pass bottom');
    //   window.removeEventListener('scroll', func);
    // }

    if (entry.isIntersecting) {
      el.style.opacity = '1';
    } else {
      el.style.opacity = '.3';
    }
  });
};

const observer = new IntersectionObserver(callback, {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
});

export const attach = (s: string) => {
  const sections = selector(s);

  sections.forEach((el) => {
    observer.observe(el);
  });
};
