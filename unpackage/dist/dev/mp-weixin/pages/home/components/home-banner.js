"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "home-banner",
  props: {
    bannerList: {
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
        a: common_vendor.f(__props.bannerList, (item, index, i0) => {
          return {
            a: item.image,
            b: item,
            c: common_vendor.o(($event) => clickItem(index), item)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/文件/前端/代码/uniapp_project/xgShop/xgShop/pages/home/components/home-banner.vue"]]);
wx.createComponent(Component);
