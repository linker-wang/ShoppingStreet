"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "home-recommend",
  props: {
    recommendList: {
      type: Array,
      default: () => []
    }
  },
  emits: ["clickEvent"],
  setup(__props, { emit: emits }) {
    const clickItem = (index) => {
      emits("clickEvent", index);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.recommendList, (item, index, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.title),
            c: item,
            d: common_vendor.o(($event) => clickItem(index), item)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/文件/前端/代码/uniapp_project/xgShop/xgShop/pages/home/components/home-recommend.vue"]]);
wx.createComponent(Component);
