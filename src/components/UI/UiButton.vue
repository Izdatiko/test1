<template>
	<div class="btn">
		<slot />
	</div>
</template>

<style scoped>
.btn {
	display: flex;
	background: white;
	border: 1px solid black;
	border-radius: 5px;
	padding: 10px;
	margin: 10px;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
}

.btn:active {
	background-color: rgb(240, 240, 240);
	transform: scale(0.98);
}
</style>
