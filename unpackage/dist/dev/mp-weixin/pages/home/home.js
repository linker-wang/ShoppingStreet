"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_useHome = require("../../stores/useHome.js");
require("../../service/requestData.js");
require("../../service/request.js");
if (!Array) {
  const _easycom_tab_control2 = common_vendor.resolveComponent("tab-control");
  const _easycom_shop_item2 = common_vendor.resolveComponent("shop-item");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_tab_control2 + _easycom_shop_item2 + _easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_tab_control = () => "../../components/tab-control/tab-control.js";
const _easycom_shop_item = () => "../../components/shop-item/shop-item.js";
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (HomeBanner + HomeRecommend + HomePopular + _easycom_tab_control + _easycom_shop_item + _easycom_uni_grid_item + _easycom_uni_grid)();
}
const HomeBanner = () => "./components/home-banner.js";
const HomeRecommend = () => "./components/home-recommend.js";
const HomePopular = () => "./components/home-popular.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const { bannerList, recommendList, goodsList, getBannerData, getShopListData } = common_vendor.toRefs(stores_useHome.useHome());
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
    const toShopWebview = (link) => {
      common_vendor.index.navigateTo({
        url: `/pages/webview/webview?link=${link}`
      });
    };
    const tabList = stores_useHome.tabs.map((item) => {
      return item.title;
    });
    const currentShopList = common_vendor.ref(goodsList.value.pop.list);
    const currentShopListIndex = common_vendor.ref(0);
    const switchTab = (index) => {
      const type = stores_useHome.tabs[index].type;
      currentShopList.value = goodsList.value[type].list;
      currentShopListIndex.value = index;
    };
    common_vendor.onLoad(() => {
      getBannerData.value();
      stores_useHome.tabs.forEach((item) => {
        getShopListData.value(item.type);
      });
    });
    common_vendor.onReachBottom(() => {
      getShopListData.value(stores_useHome.tabs[currentShopListIndex.value].type);
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
          tabList: common_vendor.unref(tabList),
          tabActiveColor: "#ff8198"
        }),
        h: common_vendor.f(currentShopList.value, (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => toShopWebview(item.clientUrl), item),
            b: "aae0eed2-6-" + i0 + "," + ("aae0eed2-5-" + i0),
            c: common_vendor.p({
              imgUrl: item.show.img,
              title: item.title,
              price: item.price,
              collectCounter: item.cfav.toString()
            }),
            d: "aae0eed2-5-" + i0 + ",aae0eed2-4",
            e: common_vendor.p({
              index
            }),
            f: item
          };
        }),
        i: common_vendor.p({
          column: 2,
          square: false,
          showBorder: false,
          highlight: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/文件/前端/代码/uniapp_project/xgShop/xgShop/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
