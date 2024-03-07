<template>
	<view class="shop-item">
		<!-- #ifdef H5 -->
		<img class="shop-image" :src="imgUrl" />
		<!-- #endif -->
		<!-- #ifndef H5 -->
		<image class="shop-image" :lazy-load="true" :src="imgUrl" mode="widthFix"></image>
		<!-- #endif -->
		<view class="shop-title">{{title}}</view>
		<view class="other-info">
			<view class="shop-price">{{getPrice}}</view>
			<image class="star-icon" src="@/static/images/common/favor.png" mode="heightFix"></image>
			<view class="collect-counter">{{collectCounter}}</view>
		</view>
	</view>
</template>

<script setup>
	import { defineProps, computed } from 'vue'

	/* 参数 */
	const props = defineProps({
		imgUrl: {
			type: String,
			default: ""
		},
		title: {
			type: String,
			default: ""
		},
		price: {
			type: String,
			default: ""
		},
		collectCounter: {
			type: String,
			default: "0"
		}
	})

	const getPrice = computed(() => {
		return `¥${props.price}`
	})
</script>

<style lang="scss">
	@import "../../styles/variable.scss";

	.shop-item {
		display: flex;
		flex-flow: column nowrap;
		padding: 5px;
		font-size: 14px;

		.shop-image {
			width: 100%;
			border-radius: 5px;
		}

		.shop-title {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			margin-top: 10px;
		}

		.other-info {
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;
			margin-top: 5px;

			.shop-price {
				margin-right: 5px;
				color: $gTintColor;
			}

			.star-icon {
				height: 14px;
				margin-right: 2px;
			}

			.collect-counter {}
		}
	}
</style>