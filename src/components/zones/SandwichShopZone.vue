<template>
	<h1 class="text-2xl font-bold">This is the sandwich shop!</h1>
	<div class="grid grid-cols-4 gap-2">
		<PurchaseButton
			v-for="resource in unlockedBread"
			:key="resource.id"
			:resource="resource"
			@purchase="onPurchaseResource"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'pinia';

import PurchaseButton from '../ui/PurchaseButton.vue';

import { useResourcesStore } from '@/stores/ResourcesStore';

export default defineComponent({
	name: "SandwichShopZone",
	components: {
		PurchaseButton
	},
	data() {
		return {
			resourceStore: useResourcesStore()
		}
	},
	computed: {
		...mapState(useResourcesStore, ['unlockedBread'])
	},
	methods: {
		onPurchaseResource(resourceId: string) {
			this.purchaseResource(resourceId)
		},
		...mapActions(useResourcesStore, ['purchaseResource'])
	}
})
</script>

<style scoped>
.button {
	@apply bg-stone-300 p-2 rounded-lg leading-none hover:bg-stone-200 shadow-md;
}
</style>