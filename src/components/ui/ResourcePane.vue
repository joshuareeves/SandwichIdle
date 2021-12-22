<template>
	<div class="bg-yellow-200 mt-4 p-2 rounded-tl-lg rounded-bl-lg">
		<h2 class="text-xl">Resources</h2>
		<table class="w-full">
			<tbody>
				<tr>
					<td class="w-1/3">Cash</td>
					<td class="w-1/3 text-center">{{ cash.quantity }}</td>
					<td class="w-1/3 text-center">0/s</td>
				</tr>
			</tbody>
		</table>
		<ResourcePaneTable
			v-for="category in categories"
			:key="category.id"
			:category="category.name"
			:resources="getUnlockedResourcesByCategory(category.id)"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'pinia';
import ResourcePaneTable from './ResourcePaneTable.vue';
import { useResourcesStore } from '@/stores/ResourcesStore';

export default defineComponent({
	name: "ResourcePane",
	components: {
		ResourcePaneTable
	},
	computed: {
		...mapState(useResourcesStore, ['categories', 'cash'])
	},
	methods: {
		...mapActions(useResourcesStore, ['getUnlockedResourcesByCategory'])
	}
})
</script>

<style scoped>
</style>