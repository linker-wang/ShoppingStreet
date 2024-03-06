"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "tab-control",
  props: {
    tabList: {
      type: Array,
      default: () => []
    },
    tabColor: {
      type: String,
      default: "black"
    },
    tabActiveColor: {
      type: String,
      default: "red"
    }
  },
  emits: ["changeIndex"],
  setup(__props, { emit: emits }) {
    const currentIndex = common_vendor.ref(0);
    const clickItem = (index) => {
      if (currentIndex.value !== index) {
        currentIndex.value = index;
        emits("changeIndex", index);
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.tabList, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: currentIndex.value === index ? __props.tabActiveColor : __props.tabColor,
            c: currentIndex.value === index ? __props.tabActiveColor : "",
            d: common_vendor.o(($event) => clickItem(index), item),
            e: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/文件/前端/代码/uniapp_project/xgShop/xgShop/components/tab-control/tab-control.vue"]]);
wx.createComponent(Component);
