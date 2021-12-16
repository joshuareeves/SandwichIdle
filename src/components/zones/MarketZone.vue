<template>
	<h1 class="text-2xl font-bold">Marketplace</h1>
	<div v-for="category in categories" :key="category.id">
		<h2>{{ category.name }}</h2>
		<div class="grid grid-cols-3 gap-4">
			<PurchaseButton
				v-for="resource in getUnlockedResourcesByCategory(category.id)"
				:key="resource.id"
				:resource="resource"
				@purchase="onPurchaseResource"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'pinia';

import PurchaseButton from '../ui/PurchaseButton.vue';

import { useResourcesStore } from '@/stores/ResourcesStore';

export default defineComponent({
	name: "MarketZone",
	components: {
		PurchaseButton
	},
	computed: {
		...mapState(useResourcesStore, ['categories'])
	},
	methods: {
		onPurchaseResource(resourceId: string) {
			this.purchaseResource(resourceId)
		},
		...mapActions(useResourcesStore, ['getUnlockedResourcesByCategory', 'purchaseResource'])
	}
})
</script>

<style scoped>
</style>