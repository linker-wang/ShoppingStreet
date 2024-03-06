<template>
	<view class="home">
		<view class="banner" v-for="item in bannerList" :key="item">
			<image :src="item.image" mode="widthFix"></image>
		</view>
	</view>
</template>

<script setup>
	import { useHome } from '@/stores/useHome.js'
	import { toRefs } from "vue"
	import { onLoad } from '@dcloudio/uni-app'

	const { bannerList, getBannerData } = toRefs(useHome())

	/* 数据加载 */
	onLoad(() => {
		getBannerData.value()
	})
</script>

<style lang="css"></style>