<template>
	<view class="home">
		<!-- 轮播图 -->
		<home-banner :bannerList="bannerList" @clickEvent="toBannerWebview"></home-banner>
		<!-- 推荐 -->
		<home-recommend :recommendList="recommendList" @clickEvent="toRecommendWebview"></home-recommend>
		<!-- 本周流行 -->
		<home-popular title="本周流行"></home-popular>
		<!-- 商品标签 -->
		<tab-control :tabList="tabList" tabActiveColor="#ff8198" @changeIndex="switchTab"></tab-control>
		<!-- 商品列表 -->
		<uni-grid :column="2" :square="false" :showBorder="false" :highlight="false">
			<template v-for="item, index in currentShopList" :key="item">
				<uni-grid-item :index="index">
					<shop-item :imgUrl="item.show.img" :title="item.title" :price="item.price"
						:collectCounter="item.cfav.toString()" @click="toShopWebview(item.clientUrl)"></shop-item>
				</uni-grid-item>
			</template>
		</uni-grid>
	</view>
</template>

<script setup>
	import { useHome, tabs } from '@/stores/useHome.js'
	import { ref, toRef, toRefs } from "vue"
	import { onLoad, onReachBottom } from '@dcloudio/uni-app'

	import HomeBanner from './components/home-banner.vue'
	import HomeRecommend from './components/home-recommend.vue'
	import HomePopular from './components/home-popular.vue'

	const { bannerList, recommendList, goodsList, getBannerData, getShopListData } = toRefs(useHome())

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

	/* 跳转到商品详情webView */
	const toShopWebview = (link) => {
		uni.navigateTo({
			url: `/pages/webview/webview?link=${link}`
		})
	}

	/* 商品标签列表 */
	const tabList = tabs.map((item) => {
		return item.title
	})

	/* 当前被选商品列表 */
	const currentShopList = ref(goodsList.value.pop.list)
	/* 被选商品列表的序号 */
	const currentShopListIndex = ref(0)

	/* 切换商品列表 */
	const switchTab = (index) => {
		const type = tabs[index].type
		currentShopList.value = goodsList.value[type].list
		currentShopListIndex.value = index
	}

	/* 数据加载 */
	onLoad(() => {
		/* 请求轮播图等数据 */
		getBannerData.value()

		/* 首次请求商品列表数据 */
		tabs.forEach((item) => {
			getShopListData.value(item.type)
		})
	})

	/* 接触到页面底部 */
	onReachBottom(() => {
		/* 加载下一页商品列表 */
		getShopListData.value(tabs[currentShopListIndex.value].type)
	})
</script>

<style lang="scss">
	.home {

		.shop-image {
			width: 100%;
		}
	}
</style>