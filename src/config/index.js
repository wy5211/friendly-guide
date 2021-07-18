// ./src/config/index.js
export const DEFAULT_CONFIG = {
  // 元素id
  el: null,
  // 自定义的 className
  classWarp: null,
  //top left right bottom
  position: 'bottom',
  // 点击容器的回调，点击任何地方都会触发
  onClickContainer: null,
  // 点击下一步的回调
  onClickNext: null,
  // 上一步
  onClickPrev: null,
  // 关闭回调
  onClickClose: null,
  // 下一步按钮的文字
  nextBtnText: '下一步',
  // 关闭按钮的文字
  prevBtnText: '上一步',
  // 是否显示下一步按钮
  showNext: true,
  // 是否显示下一步按钮
  showPrev: true,
  // 是否显示关闭按钮
  showClose: true,
  // 点击遮罩是否关闭
  maskClosable: true,
  // false不显示
  explain: {
    width: 340,
    title: 'title',
    content: 'content',
  },
};
