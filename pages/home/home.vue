<template>
	<view class="home">
		<!-- 轮播图 -->
		<home-banner :bannerList="bannerList" @clickEvent="toBannerWebview"></home-banner>
		<!-- 推荐 -->
		<home-recommend :recommendList="recommendList" @clickEvent="toRecommendWebview"></home-recommend>
		<!-- 本周流行 -->
		<home-popular title="本周流行"></home-popular>
		<!-- 商品标签 -->
		<tab-control :tabList="['流行', '新款', '精选']" tabActiveColor="#ff8198" @changeIndex="switchTab"></tab-control>
		<!-- 商品列表 -->
		<shop-list></shop-list>
	</view>
</template>

<script setup>
	import { useHome } from '@/stores/useHome.js'
	import { toRefs } from "vue"
	import { onLoad } from '@dcloudio/uni-app'

	import HomeBanner from './components/home-banner.vue'
	import HomeRecommend from './components/home-recommend.vue'
	import HomePopular from './components/home-popular.vue'

	const { bannerList, recommendList, getBannerData, getShopListData } = toRefs(useHome())

	/* 跳转到轮播图Webview */
	const toBannerWebview = (index) => {
		uni.navigateTo({
			url: `/pages/webview/webview?link=${bannerList.value[index].link}`
		})
	}

	/* 跳转到推荐Webview */
	const toRecommendWebview = (index) => {
		uni.navigateTo({
			url: `/pages/webview/webview?link=${recommendList.value[index].link}`
		})
	}

	/* 商品标签 */
	const tabs = [
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

	/* 切换商品列表 */
	const switchTab = (index) => {
		console.log(index)
		getShopListData.value()
	}

	/* 数据加载 */
	onLoad(() => {
		getBannerData.value()
	})
</script>

<style lang="scss">
	.home {}
</style>