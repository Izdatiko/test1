<template>
	<div class="content">
		<div class="header">
			<div class="header__title">
				{{ item.name ?? '' }}
			</div>
			<div class="header__add">
				<label>
					type
					<select ref="selectRef">
						<option value="color">color</option>
						<option value="size">size</option>
						<option value="weight">weight</option>
					</select>
				</label>

				<UIButton @click="emit('create', selectRef?.value)">Add</UIButton>
			</div>
		</div>
		<div class="attributes">
			<template
				v-for="attr in itemAttr"
				:key="attr.code"
			>
				<UICard
					@remove="(event) => emit('remove', event)"
					@edit="(event) => emit('edit', event)"
					:item="attr"
				/>
			</template>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, computed } from 'vue';
import { UIButton, UICard } from '@/components/UI';

const props = defineProps<{
	item: Product;
}>();

const itemAttr = computed(() => {
	return props.item.attributes;
});

const emit = defineEmits(['create', 'remove', 'edit']);

const selectRef = ref<HTMLSelectElement>();
</script>

<style scoped lang="css">
.header {
	font-weight: bold;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.content {
	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 20px;
	width: 100%;
}
.attributes {
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.field {
	display: flex;
	gap: 5px;
}
.title {
	font-weight: bold;
}
.header__add {
	display: flex;
	gap: 10px;
	align-items: center;
}
</style>
