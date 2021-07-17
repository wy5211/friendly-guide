// foot.js
import { clear } from '../../utils';

const CONTAINER_EXPLAIN_CLASS = 'friendly_guide_explain';

function createNextButton(option) {
  const attr = {
    class: `${CONTAINER_EXPLAIN_CLASS}_next_button`,
  };

  if (option.nextBtnColor && typeof option.nextBtnColor !== 'string') {
    throw new Error('按钮颜色为 String 类型');
  }

  const style = {
    padding: '3px 6px',
    backgroundColor: option.nextBtnColor || '#1890FF',
    border: `1px solid ${option.nextBtnColor || '#1890FF'}`,
    color: '#FFF',
    borderRadius: '3px',
  };

  const ele = document.createElement('button');

  for (let key in attr) {
    ele.setAttribute(key, attr[key]);
  }

  for (let key in style) {
    ele.style[key] = style[key];
  }

  if (typeof option.nextBtnText !== 'string') {
    throw new Error(
      '下一步按钮，是 string 类型，若不需要请将 showNext 置为 false'
    );
  }

  ele.innerText = option.nextBtnText;

  // 绑定事件
  ele.addEventListener(
    'click',
    option.onClickNext ? option.onClickNext : clear
  );

  return ele;
}

function createPrevButton(option) {
  const attr = {
    class: `${CONTAINER_EXPLAIN_CLASS}_prev_button`,
  };

  if (option.prevBtnColor && typeof option.prevBtnColor !== 'string') {
    throw new Error('按钮颜色为 String 类型');
  }

  const style = {
    padding: '3px 6px',
    color: '#333',
    backgroundColor: option.prevBtnColor || '#c4c6cc',
    border: `1px solid ${option.prevBtnColor || '#c4c6cc'}`,
    borderRadius: '3px',
    marginRight: '8px',
  };
  const ele = document.createElement('button');

  for (let key in attr) {
    ele.setAttribute(key, attr[key]);
  }

  for (let key in style) {
    ele.style[key] = style[key];
  }

  if (typeof option.prevBtnText !== 'string') {
    throw new Error(
      '上一步按钮，是 string 类型，若不需要请将showPrev置为 false'
    );
  }

  ele.innerText = option.prevBtnText;

  // 绑定事件
  ele.addEventListener(
    'click',
    option.onClickPrev ? option.onClickPrev : clear
  );

  return ele;
}

const createFooter = (option) => {
  if (!option.showNext && !option.showPrev) {
    return document.createElement('div');
  }

  const attr = {
    class: `${CONTAINER_EXPLAIN_CLASS}_footer`,
  };
  const style = {
    boxSizing: 'border-box',
    padding: '0px 20px 20px 20px',
    textAlign: 'center',
  };
  const ele = document.createElement('div');

  for (let key in attr) {
    ele.setAttribute(key, attr[key]);
  }

  for (let key in style) {
    ele.style[key] = style[key];
  }

  if (option.showPrev) {
    ele.appendChild(createPrevButton(option));
  }

  if (option.showNext) {
    ele.appendChild(createNextButton(option));
  }

  return ele;
};

export { createFooter };
