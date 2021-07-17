const CONTAINER_ID = 'mask_guide_container';

function clear() {
  if (document.getElementById(CONTAINER_ID)) {
    // 删除容器
    window.document.body.removeChild(document.getElementById(CONTAINER_ID));
  }
}

// 箭头的样式
function attachArrowStyle(option) {
  // 箭头方向
  let tempPositon = option.position.toLowerCase();
  const borderColor =
    tempPositon.slice(0, 1).toUpperCase() + tempPositon.slice(1);
  let style = {
    position: 'fixed',
    border: '8px solid transparent',
    width: 0,
    height: 0,
  };
  style[`border${borderColor}Color`] = '#FFF';
  return style;
}

// 箭头的定位
function attachArrowOffset(option) {
  const {
    height: target_height,
    width: target_width,
    left: target_left,
    top: target_top,
  } = option.el.getBoundingClientRect();
  const methods = {
    top() {
      return {
        left: target_left + (target_width - 16) / 2,
        top: target_top - 8,
      };
    },
    left() {
      return {
        left: target_left - 8,
        top: target_top + (target_height - 16) / 2,
      };
    },
    bottom() {
      return {
        left: target_left + (target_width - 16) / 2,
        top: target_top + target_height - 8,
      };
    },
    right() {
      return {
        left: target_left + target_width - 8,
        top: target_top + (target_height - 16) / 2,
      };
    },
  };
  return methods[option.position]();
}

// explain 的定位
function resolveStepPosition(option, introSize) {
  // introSize explain 的尺寸 width & height
  let position = option.position;

  const {
    height: target_height,
    width: target_width,
    left: target_left,
    top: target_top,
  } = option.el.getBoundingClientRect();

  // body width height
  const windowSize = {
    width: document.body.getBoundingClientRect().width,
    height: document.body.getBoundingClientRect().height,
  };

  const methods = {
    top() {
      return {
        left: target_left - (introSize.width - target_width) / 2,
        // 15 是留给箭头的位置
        top: target_top - introSize.height - 15,
      };
    },
    left() {
      return {
        left: target_left - introSize.width - 15,
        top: target_top - (introSize.height - target_height) / 2,
      };
    },
    bottom() {
      return {
        left: target_left - (introSize.width - target_width) / 2,
        top: target_top + target_height,
      };
    },
    right() {
      return {
        left: target_left + target_width,
        top: target_top - (introSize.height - target_height) / 2,
      };
    },
  };

  if (methods[position]) {
    return methods[position]();
  }

  // positon 不合法
  console.warn(`cannot resolve position: ${position}`);
  return methods.bottom();
}

export { clear, resolveStepPosition, attachArrowOffset, attachArrowStyle };
