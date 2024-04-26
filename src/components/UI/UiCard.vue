<template>
	<UIBox>
		<div class="card__wrapper">
			<div class="card__info">
				<div class="card__field">
					<span class="title">code:</span>
					<input
						v-model="attr.code"
						:disabled="!isEdit"
					/>
				</div>

				<div class="card__field">
					<span class="title">name:</span>
					<input
						v-model="attr.name"
						:disabled="!isEdit"
					/>
				</div>

				<div
					v-if="isColorAttribute(attr)"
					class="card__field"
				>
					<span class="title">color:</span>
					<input
						v-model="attr.color"
						:disabled="!isEdit"
					/>
				</div>
				<div
					v-if="isWeightAttribute(attr)"
					class="card__field"
				>
					<span class="title">weight:</span>
					<input
						v-model="attr.weight"
						:disabled="!isEdit"
					/>
				</div>
				<div
					v-if="isSizeAttribute(attr)"
					class="card__field"
				>
					<span class="title">size:</span>
					<span>
						<input
							v-model="attr.size.width"
							type="number"
							:disabled="!isEdit"
						/>
						x
						<input
							v-model="attr.size.height"
							type="number"
							:disabled="!isEdit"
						/>
					</span>
				</div>
			</div>
			<div class="card__buttons">
				<UIButton
					class="button button--primary"
					@click="cardHandler('edit')"
				>
					{{ !isEdit ? 'Edit' : 'Accept' }}
				</UIButton>
				<UIButton
					class="button"
					@click="cardHandler('remove')"
				>
					Remove
				</UIButton>
			</div>
		</div>
	</UIBox>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { UIBox, UIButton } from '.';

const props = defineProps<{
	item: Attribute;
}>();

const isEdit = ref<boolean>(false);

const attr = ref<Attribute>(props.item);

const emit = defineEmits(['remove', 'edit']);

const cardHandler = (method: 'edit' | 'remove') => {
	if (method === 'edit') {
		isEdit.value = !isEdit.value;
	}
	emit(method, { ...attr.value, type: method });
};

const isColorAttribute = (attribute: Attribute): attribute is ColorAttribute => {
	return (attribute as ColorAttribute).color !== undefined;
};

const isWeightAttribute = (attribute: Attribute): attribute is WeightAttribute => {
	return (attribute as WeightAttribute).weight !== undefined;
};

const isSizeAttribute = (attribute: Attribute): attribute is SizeAttribute => {
	return (attribute as SizeAttribute).size !== undefined;
};
</script>

<style scoped>
.card__wrapper {
	display: flex;
	justify-content: space-between;
	gap: 10px;
	align-items: center;
	width: 100%;
}

.card__info {
	display: flex;
	gap: 5px;
}

.card__buttons {
	display: flex;
	gap: 10px;
}

.card__field {
	display: flex;
	gap: 2px;
	align-items: center;
}
</style>
