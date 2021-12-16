<template>
	<h1 class="text-2xl font-bold">Sandwich Shop</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'pinia';

import { useResourcesStore } from '@/stores/ResourcesStore';

export default defineComponent({
	name: "SandwichShopZone",
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