const CONTAINER_ID = 'friendly_guide_container';
const CONTAINER_CLASS = 'friendly_guide_container';

// 创建最外层容器
function createContainer({ classWarp, onClickContainer }) {
  const attr = {
    class: `${CONTAINER_CLASS} ${classWarp}`,
    id: CONTAINER_ID,
  };

  const style = {
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
    'z-index': 999,
  };

  const containerDom = document.createElement('div');

  for (let key in attr) {
    containerDom.setAttribute(key, attr[key]);
  }

  for (let key in style) {
    containerDom.style[key] = style[key];
  }

  if (onClickContainer) {
    // 点击外层容器事件
    containerDom.addEventListener('click', onClickContainer);
  }

  return containerDom;
}

export { createContainer };
