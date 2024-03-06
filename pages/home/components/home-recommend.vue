<template>
	<view class="home-recommend">
		<view class="recommend-item" v-for="item, index in recommendList" :key="item" @click="clickItem(index)">
			<image class="recommend-image" :src="item.image" mode="widthFix"></image>
			<text class="recommend-title">{{item.title}}</text>
		</view>
	</view>
</template>

<script setup>
	import { defineProps, defineEmits } from 'vue'

	const props = defineProps({
		recommendList: {
			type: Array,
			default: () => []
		}
	})

	const emits = defineEmits(["clickEvent"])

	/* 点击到推荐内容 */
	const clickItem = (index) => {
		emits("clickEvent", index)
	}
</script>

<style lang="scss">
	.home-recommend {
		display: flex;
		flex-flow: row nowrap;

		.recommend-item {
			flex-grow: 1;
			margin: 10px;

			.recommend-image {
				width: 100%;
			}

			.recommend-title {
				display: inline-block;
				width: 100%;
				text-align: center;
				font-size: 14px;
			}
		}
	}
</style>