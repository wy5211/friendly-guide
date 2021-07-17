import { DEFAULT_CONFIG } from './config';
import { clear } from './utils';
import { stepGuide } from './component/stepGuide';

function guide(config) {
  clear();

  // 合并参数
  let option = Object.assign({}, DEFAULT_CONFIG, config);
  if (config.explain) {
    option.explain = Object.assign({}, DEFAULT_CONFIG.explain, config.explain);
  }

  if (typeof option.el !== 'string') {
    throw new Error('目标元素的 id 有误！');
  }

  option.el = document.getElementById(option.el);

  if (option.el === null) {
    throw new Error('未找到目标元素id对应的dom');
  }

  let ele = stepGuide(option);

  document.body.appendChild(ele);

  return ele;
}

const close = clear;

export { guide, close };
