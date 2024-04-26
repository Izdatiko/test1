<template>
	<div class="box">
		<div
			class="box__title"
			v-if="title"
		>
			{{ title ?? '' }}
		</div>

		<div
			class="box__body"
			:class="{ 'box__body-column': isColumn }"
		>
			<slot />
		</div>
	</div>
</template>
<script setup lang="ts">
defineProps<{
	title?: string;
	isColumn?: boolean;
}>();
</script>
<style>
.box {
	margin-top: 12px;
	position: relative;
	width: 100%;
}
.box__body {
	box-sizing: border-box;
	min-width: 200px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 12px;
	padding: 16px;
	border-radius: 6px;
	background: #fff;
	border: 1px solid #d0d5dd;
}

.box__body-column {
	align-items: flex-start;
	flex-direction: column;
}
</style>
