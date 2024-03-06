"use strict";
const common_vendor = require("../common/vendor.js");
const service_requestData = require("../service/requestData.js");
const useHome = common_vendor.defineStore("home", {
  state: () => ({
    bannerList: [],
    recommendList: [],
    dKeywordList: [],
    keywordsList: []
  }),
  getters: {},
  actions: {
    /* 获取轮播图和推荐数据 */
    async getBannerData() {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const res = await service_requestData.request1.get("/home/multidata");
      this.bannerList = ((_b = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.banner) == null ? void 0 : _b.list) || [];
      this.recommendList = ((_d = (_c = res == null ? void 0 : res.data) == null ? void 0 : _c.recommend) == null ? void 0 : _d.list) || [], this.dKeywordList = ((_f = (_e = res == null ? void 0 : res.data) == null ? void 0 : _e.dKeyword) == null ? void 0 : _f.list) || [], this.keywordsList = ((_h = (_g = res == null ? void 0 : res.data) == null ? void 0 : _g.weywords) == null ? void 0 : _h.list) || [];
    },
    /* 获取首页商品列表 */
    async getShopListData(type = "pop", page = 1) {
      const res = await service_requestData.request1.get(`/home/data?type=${type}&page=${page}`);
      console.log(res.data);
    }
  }
});
exports.useHome = useHome;
