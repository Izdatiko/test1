<template>
	<div class="main">
		<item-list
			:items="data"
			class="sidebar"
			@click="(item: Product) => selectedItem = item"
		/>
		<item-content
			v-if="selectedItem"
			:item="selectedItem"
			@create="onClick"
			@edit="(item) => crudItem(item, item.type)"
			@remove="(item) => crudItem(item, item.type)"
		/>
	</div>
</template>

<script setup lang="ts">
import { ItemList, ItemContent } from '@/components';
import Data from '@/api/mockData';
import { ref, watch } from 'vue';

const data = ref(Data);

const selectedItem = ref<Product | null>(null);

const crudItem = (item: Attribute, type: 'edit' | 'remove') => {
	if (!selectedItem.value) return;
	if (type === 'remove') {
		selectedItem.value.attributes = selectedItem.value.attributes.filter((attr) => attr.id !== item.id);
	} else {
		selectedItem.value.attributes = selectedItem.value.attributes.map((attr) => (attr.id === item.id ? item : attr));
	}
};

const onClick = (value: AttributeType) => {
	switch (value) {
		case 'color': {
			selectedItem.value?.attributes.push({
				id: Date.now(),
				code: 'new code',
				name: 'new field',
				color: 'color',
			});
			break;
		}
		case 'size': {
			selectedItem.value?.attributes.push({
				id: Date.now(),
				code: 'new code',
				name: 'new field',
				size: {
					width: 0,
					height: 0,
				},
			});
			break;
		}
		case 'weight': {
			selectedItem.value?.attributes.push({
				id: Date.now(),
				code: 'new code',
				name: 'new field',
				weight: 0,
			});
			break;
		}
	}
};
</script>

<style scoped lang="css">
.main {
	display: flex;
	gap: 20px;
}
.sidebar {
	width: auto;
}
</style>
