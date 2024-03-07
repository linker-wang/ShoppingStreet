"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "shop-item",
  props: {
    imgUrl: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    price: {
      type: String,
      default: ""
    },
    collectCounter: {
      type: String,
      default: "0"
    }
  },
  setup(__props) {
    const props = __props;
    const getPrice = common_vendor.computed(() => {
      return `¥${props.price}`;
    });
    return (_ctx, _cache) => {
      return {
        a: __props.imgUrl,
        b: common_vendor.t(__props.title),
        c: common_vendor.t(common_vendor.unref(getPrice)),
        d: common_assets._imports_0,
        e: common_vendor.t(__props.collectCounter)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/文件/前端/代码/uniapp_project/xgShop/xgShop/components/shop-item/shop-item.vue"]]);
wx.createComponent(Component);
