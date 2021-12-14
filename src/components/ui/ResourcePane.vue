<template>
	<div class="bg-yellow-200 mt-4 py-2 pl-3 rounded-tl-lg rounded-bl-lg">
		<h2 class="text-xl">Resources</h2>
		<ResourcePaneTable category="Breads" :resources="Object.values(unlockedBread)" />
		<ResourcePaneTable category="Meats" :resources="Object.values(unlockedMeat)" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'pinia';
import ResourcePaneTable from './ResourcePaneTable.vue';
import { useResourcesStore } from '@/stores/ResourcesStore';

export default defineComponent({
	name: "ResourcePane",
	components: {
		ResourcePaneTable
	},
	computed: {
		...mapState(useResourcesStore, ['unlockedBread', 'unlockedMeat'])
	}
})
</script>

<style scoped>
</style>