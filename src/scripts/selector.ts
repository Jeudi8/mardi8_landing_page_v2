const selector = (selector: string, events?: { [key in keyof ElementEventMap as string]: (e: Event) => void }) => {
  const els = document.querySelectorAll(selector);

  if (events) {
    els.forEach((el) => {
      Object.keys(events).forEach((key) => {
        el.addEventListener(key, events[key]);
      });
    });
  }

  return els;
};

export default selector;
