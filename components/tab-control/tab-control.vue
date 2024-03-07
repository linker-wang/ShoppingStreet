<template>
	<view class="tab-control">
		<template v-for="item, index in tabList" :key="item">
			<view class="tab-item"
				:style="{ color: currentIndex === index ? tabActiveColor : tabColor, borderColor: currentIndex === index ? tabActiveColor : '' }"
				@click="clickItem(index)">{{item}}</view>
		</template>
	</view>
</template>

<script setup>
	import { defineProps, defineEmits, ref, reactive } from 'vue'

	/* 参数 */
	const props = defineProps({
		tabList: {
			type: Array,
			default: () => []
		},
		tabColor: {
			type: String,
			default: "black"
		},
		tabActiveColor: {
			type: String,
			default: "red"
		},
	})

	/* 事件 */
	const emits = defineEmits(["changeIndex"])

	/* 被选择的序号  */
	const currentIndex = ref(0);

	/* 点击事件 */
	const clickItem = (index) => {
		if (currentIndex.value !== index) {
			currentIndex.value = index
			emits("changeIndex", index)
		}
	}
</script>

<style lang="scss">
	.tab-control {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
		margin-bottom: 10px;

		.tab-item {
			width: 100rpx;
			padding: 10px 0;
			text-align: center;
			border-bottom: 3px solid rgba(0, 0, 0, 0);
		}
	}
</style>