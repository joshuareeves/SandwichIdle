<template>
	<button class="button" @click="$emit('purchase', resource?.id)">{{ resource?.name }} ({{ resourcePrice }})</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IResource } from '@/resources/resources'

export default defineComponent({
	name: "PurchaseButton",
	props: {
		resource: { type: Object as () => IResource }
	},
	computed: {
		resourcePrice() {
			const priceFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })
			return priceFormatter.format(this.resource?.purchasePrice ?? 0)
		}
	}
})
</script>

<style scoped>
.button {
	@apply bg-stone-300 p-2 rounded-lg leading-none hover:bg-stone-200 shadow-md;
}
</style>