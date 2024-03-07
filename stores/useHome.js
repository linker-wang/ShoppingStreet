import { defineStore } from 'pinia'
import { request1 } from '@/service/requestData.js'

/* 商品标签 */
export const tabs = [
  {
    title: "流行",
    type: "pop"
  },
  {
    title: "新款",
    type: "new"
  },
  {
    title: "精选",
    type: "sell"
  }
]

/* 获取默认的商品列表 */
const getDefaultGoodsList = () => {
  const goodsList = {}
  tabs.forEach((item) => {
    goodsList[item.type] = {
      page: 0,
      list: []
    }
  })
  return goodsList
}

export const useHome = defineStore("home", {
  state: () => ({
    bannerList: [],
    recommendList: [],
    dKeywordList: [],
    keywordsList: [],
    goodsList: getDefaultGoodsList()
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

    /* 获取商品列表数据 */
    async getShopListData(type = "pop") {
      const page = this.goodsList[type].page + 1
      const res = await request1.get(`/home/data?type=${type}&page=${page}`)

      /* 请求成功则加入数据 */
      if (res.success) {
        this.goodsList[type].page = page
        this.goodsList[type].list.push(...res.data.list)
      }
    }
  }
})