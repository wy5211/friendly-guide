import { attachArrowOffset, attachArrowStyle } from '../../utils';

const createArrow = (option) => {
  const ele = document.createElement('div');

  // 箭头样式
  const style = attachArrowStyle(option);
  for (let key in style) {
    ele.style[key] = style[key];
  }

  // 箭头位置
  const attachArrowPosition = attachArrowOffset(option);
  for (let key in attachArrowPosition) {
    ele.style[key] = `${attachArrowPosition[key]}px`;
  }

  return ele;
};

export { createArrow };
