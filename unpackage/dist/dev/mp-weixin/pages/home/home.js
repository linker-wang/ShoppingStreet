"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_useHome = require("../../stores/useHome.js");
require("../../service/requestData.js");
require("../../service/request.js");
if (!Array) {
  const _easycom_tab_control2 = common_vendor.resolveComponent("tab-control");
  const _easycom_shop_list2 = common_vendor.resolveComponent("shop-list");
  (_easycom_tab_control2 + _easycom_shop_list2)();
}
const _easycom_tab_control = () => "../../components/tab-control/tab-control.js";
const _easycom_shop_list = () => "../../components/shop-list/shop-list.js";
if (!Math) {
  (HomeBanner + HomeRecommend + HomePopular + _easycom_tab_control + _easycom_shop_list)();
}
const HomeBanner = () => "./components/home-banner.js";
const HomeRecommend = () => "./components/home-recommend.js";
const HomePopular = () => "./components/home-popular.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const { bannerList, recommendList, getBannerData, getShopListData } = common_vendor.toRefs(stores_useHome.useHome());
    const toBannerWebview = (index) => {
      common_vendor.index.navigateTo({
        url: `/pages/webview/webview?link=${bannerList.value[index].link}`
      });
    };
    const toRecommendWebview = (index) => {
      common_vendor.index.navigateTo({
        url: `/pages/webview/webview?link=${recommendList.value[index].link}`
      });
    };
    const switchTab = (index) => {
      console.log(index);
      getShopListData.value();
    };
    common_vendor.onLoad(() => {
      getBannerData.value();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toBannerWebview),
        b: common_vendor.p({
          bannerList: common_vendor.unref(bannerList)
        }),
        c: common_vendor.o(toRecommendWebview),
        d: common_vendor.p({
          recommendList: common_vendor.unref(recommendList)
        }),
        e: common_vendor.p({
          title: "本周流行"
        }),
        f: common_vendor.o(switchTab),
        g: common_vendor.p({
          tabList: ["流行", "新款", "精选"],
          tabActiveColor: "#ff8198"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/文件/前端/代码/uniapp_project/xgShop/xgShop/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
