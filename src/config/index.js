// ./src/config/index.js
export const DEFAULT_CONFIG = {
  // id或者Element 需要引导的元素
  el: null,
  // 自定义的 className
  classWarp: null,
  //top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
  position: 'bottom',
  onClickContainer: null, // 点击容器的回调，点击任何地方都会触发
  onClickNext: null, // 点击下一步的回调
  onClickPrev: null, // 上一步
  onClickClose: null, // 关闭按钮
  nextBtnText: '下一步', // 下一步按钮的文字
  prevBtnText: '上一步', // 关闭按钮的文字
  showNext: true, // 是否显示下一步按钮
  showPrev: true, // 是否显示下一步按钮
  showClose: true, // 是否显示关闭按钮
  maskClosable: true, // 点击遮罩是否关闭
  explain: {
    // false不显示
    width: 340,
    title: 'title',
    content: 'content',
  },
};
