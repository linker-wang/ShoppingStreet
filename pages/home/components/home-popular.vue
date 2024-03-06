<template>
	<view class="home-popular">
		<image class="popular-image" src="@/static/recommend_bg.jpg" mode="widthFix"></image>
	</view>
</template>

<script setup>
	import { defineProps } from 'vue'

	const props = defineProps({
		title: {
			type: String,
			default: "default"
		}
	})
</script>

<style lang="scss">
	.home-popular {

		.popular-image {
			width: 100%;
		}
	}
</style>