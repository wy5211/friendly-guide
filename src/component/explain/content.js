const CONTAINER_EXPLAIN_CLASS = 'friendly_guide_explain';

const createContent = (option) => {
  const explainOption = option.explain;
  const attr = {
    class: `${CONTAINER_EXPLAIN_CLASS}_body`,
  };
  const style = {
    boxSizing: 'border-box',
    padding: '10px 20px',
    wordBreak: 'break-all',
    fontSize: '14px',
  };
  const ele = document.createElement('div');

  for (let key in attr) {
    ele.setAttribute(key, attr[key]);
  }

  for (let key in style) {
    ele.style[key] = style[key];
  }

  if (typeof explainOption.content !== 'string') {
    throw new Error('content 暂时只支持 String 类型');
  }

  ele.innerText = explainOption.content;

  return ele;
};

export { createContent };
