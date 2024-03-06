<template>
	<view class="webview">
		<web-view :src="link"></web-view>
	</view>
</template>

<script setup>
	import { defineProps } from 'vue'

	const props = defineProps({
		link: {
			type: String,
			default: ""
		}
	})
</script>

<style lang="css"></style>