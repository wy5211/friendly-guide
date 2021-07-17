const TARGET_ID = 'friendly_guide_target';
const TARGET_CLASS = 'friendly_guide_target';

const createTarget = (el) => {
  const { width, height, top, left } = el.getBoundingClientRect() || {};
  const style = {
    position: 'absolute',
    opacity: 1,
    top: `${top}px`,
    left: `${left}px`,
    height: `${height}px`,
    width: `${width}px`,
  };

  const attr = {
    class: TARGET_CLASS,
    id: TARGET_ID,
  };

  const ele = document.createElement('div');

  for (let key in style) {
    ele.style[key] = style[key];
  }

  for (let key in attr) {
    ele.setAttribute(key, attr[key]);
  }

  return ele;
};

export { createTarget };
