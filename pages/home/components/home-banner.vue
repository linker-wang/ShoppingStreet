<template>
	<view class="home-banner">
		<swiper :indicator-dots="true" :autoplay="true" indicator-active-color="#ff8198" :interval="3000" :duration="1000">
			<swiper-item v-for="item, index in bannerList" :key="item" @click="clickItem(index)">
				<view class="swiper-item">
					<image class="banner-image" :src="item.image" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import { defineProps, defineEmits } from 'vue'

	/* 参数 */
	const props = defineProps({
		bannerList: {
			type: Array,
			default: () => []
		}
	})

	/* 事件 */
	const emits = defineEmits(["clickEvent"])

	/* 轮播图被点击 */
	const clickItem = (index) => {
		emits("clickEvent", index)
	}
</script>

<style lang="scss">
	.home-banner {
		margin-top: 5px;

		.banner-image {
			width: 100%;
		}
	}
</style>