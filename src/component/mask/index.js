import { clear } from '../../utils';

const MASK_RGBA = 'rgba(0,0,0,0.5)';

const onClick = (option, ele) => {
  if (!option.maskClosable) {
    return;
  }
  ele.addEventListener('click', () => {
    clear();
    if (option.onClickClose) {
      option.onClickClose();
    }
  });
};

const createTopMask = (option) => {
  // 获取目标元素的宽高 left top
  const { width, left, top } = option.el.getBoundingClientRect() || {};
  const style = {
    position: 'absolute',
    background: MASK_RGBA,
    top: 0,
    left: `${left}px`,
    width: `${width}px`,
    height: `${top}px`,
  };
  const ele = document.createElement('div');

  for (let key in style) {
    ele.style[key] = style[key];
  }

  onClick(option, ele);

  return ele;
};

const createRightMask = (option) => {
  const { width, left } = option.el.getBoundingClientRect() || {};
  const style = {
    position: 'absolute',
    background: MASK_RGBA,
    top: 0,
    left: `${left + width}px`,
    width: `${document.body.offsetWidth - left + width}px`,
    height: '100%',
  };
  const ele = document.createElement('div');

  for (let key in style) {
    ele.style[key] = style[key];
  }

  onClick(option, ele);

  return ele;
};

const createBottomMask = (option) => {
  const { width, left, top, height } = option.el.getBoundingClientRect() || {};
  const style = {
    position: 'absolute',
    background: MASK_RGBA,
    top: `${top + height}px`,
    left: `${left}px`,
    bottom: 0,
    width: `${width}px`,
  };
  const ele = document.createElement('div');

  for (let key in style) {
    ele.style[key] = style[key];
  }

  onClick(option, ele);

  return ele;
};

const createLeftMask = (option) => {
  const { left } = option.el.getBoundingClientRect() || {};
  const style = {
    position: 'absolute',
    background: MASK_RGBA,
    top: 0,
    left: 0,
    bottom: 0,
    height: '100%',
    width: `${left}px`,
  };
  const ele = document.createElement('div');

  for (let key in style) {
    ele.style[key] = style[key];
  }

  onClick(option, ele);

  return ele;
};

export { createTopMask, createRightMask, createBottomMask, createLeftMask };
