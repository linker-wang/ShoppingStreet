import { defineStore } from 'pinia'
import { request1 } from '@/service/requestData.js'

export const useHome = defineStore("home", {
  state: () => ({
    bannerList: [],
    recommendList: [],
    dKeywordList: [],
    keywordsList: [],
  }),
  getters: {

  },
  actions: {
    /* 获取轮播图和推荐数据 */
    async getBannerData() {
      const res = await request1.get("/home/multidata")
      this.bannerList = res?.data?.banner?.list || []
      this.recommendList = res?.data?.recommend?.list || [],
      this.dKeywordList = res?.data?.dKeyword?.list || [],
      this.keywordsList = res?.data?.weywords?.list || []
    },

    /* 获取首页商品列表 */
    async getShopListData(type = "pop", page = 1) {
      const res = await request1.get(`/home/data?type=${type}&page=${page}`)
      console.log(res.data)
    }
  }
})