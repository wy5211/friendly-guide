import { clear } from '../../utils';

const CONTAINER_EXPLAIN_CLASS = 'friendly_guide_explain';

const createTitleClose = (option) => {
  const attr = {
    class: `${CONTAINER_EXPLAIN_CLASS}_close`,
  };

  const style = {
    position: 'absolute',
    top: '5px',
    right: '10px',
    width: '20px',
    height: '20px',
    padding: '4px',
    color: '#ccc',
    textAlign: 'center',
    cursor: 'pointer',
  };
  const ele = document.createElement('div');

  for (let key in attr) {
    ele.setAttribute(key, attr[key]);
  }

  for (let key in style) {
    ele.style[key] = style[key];
  }

  ele.innerHTML = '×';

  // 绑定事件
  ele.addEventListener(
    'click',
    option.onClickClose ? option.onClickClose : clear
  );
  return ele;
};

const createTitle = (option) => {
  const explainOption = option.explain;

  const attr = {
    class: `${CONTAINER_EXPLAIN_CLASS}_title`,
  };

  const style = {
    padding: '10px 20px',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '400',
    borderBottom: '1px solid #dfe1e6',
  };

  const ele = document.createElement('div');

  for (let key in attr) {
    ele.setAttribute(key, attr[key]);
  }

  for (let key in style) {
    ele.style[key] = style[key];
  }

  if (
    Object.prototype.toString.call(explainOption.title) !== '[object String]'
  ) {
    ele.appendChild(explainOption.title);
  } else {
    ele.innerText = explainOption.title;
  }

  const headerCloseDom = option.showClose && createTitleClose(option);

  headerCloseDom && ele.appendChild(headerCloseDom);

  return ele;
};

export { createTitle };
