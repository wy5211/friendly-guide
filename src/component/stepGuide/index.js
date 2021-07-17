import { resolveStepPosition } from '../../utils';
import { createContainer } from '../container';
import {
  createTopMask,
  createRightMask,
  createBottomMask,
  createLeftMask,
} from '../mask';
import { createTarget } from '../target';
import { createExplain } from '../explain';
import { createArrow } from '../arrow';

const stepGuide = (option) => {
  const { classWarp, onClickContainer, el } = option || {};
  // 外层容器
  var container = createContainer({ classWarp, onClickContainer });
  document.body.appendChild(container);

  // 遮罩，分四块， 上右下左
  container.appendChild(createTopMask(option));
  container.appendChild(createRightMask(option));
  container.appendChild(createBottomMask(option));
  container.appendChild(createLeftMask(option));

  // target Dom
  container.appendChild(createTarget(el));

  // 提示框 Modal 处理
  if (option.explain) {
    const explainContainer = createExplain(option);

    // 提示框 Modal 添加进去之后才能获取宽高，然后在计算定位
    container.appendChild(explainContainer);

    const explainRect = explainContainer.getBoundingClientRect();

    const explainContainerSize = {
      width: explainRect.width,
      height: explainRect.height,
    };

    // 定位信息 left top
    let explainContainerPosition = resolveStepPosition(
      option,
      explainContainerSize
    );

    for (let key in explainContainerPosition) {
      explainContainer.style[key] = `${explainContainerPosition[key]}px`;
    }
  }

  // 箭头
  let arrowEle = createArrow(option);
  container.appendChild(arrowEle);
  return container;
};

export { stepGuide };
