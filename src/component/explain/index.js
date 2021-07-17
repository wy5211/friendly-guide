import { createTitle } from './title';
import { createContent } from './content';
import { createFooter } from './footer';

const CONTAINER_EXPLAIN_ID = 'mask_guide_explain';
const CONTAINER_EXPLAIN_CLASS = 'mask_guide_explain';

const createExplain = (option) => {
  const explainOption = option.explain;

  const target = option.el.getBoundingClientRect() || {};
  let attr = {
    class: `${CONTAINER_EXPLAIN_CLASS}`,
    id: CONTAINER_EXPLAIN_ID,
  };
  const style = {
    position: 'absolute',
    left: target.left,
    top: `${target.top + target.height}px`,
    // 可以自定义宽，默认 340
    width: `${explainOption.width}px`,
    margin: '8px',
    borderRadius: '6px',
    color: '#333',
    background: '#FFF',
    boxShadow: '0px 0px 10px #fff',
  };

  const ele = document.createElement('div');

  for (let key in attr) {
    ele.setAttribute(key, attr[key]);
  }

  for (let key in style) {
    ele.style[key] = style[key];
  }

  ele.appendChild(createTitle(option));
  ele.appendChild(createContent(option));
  ele.appendChild(createFooter(option));

  return ele;
};

export { createExplain };
