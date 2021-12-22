<template>
	<header class="mt-auto bg-amber-200 px-2 py-1">
		<h1 class="text-1xl">Sandwich Idler {{ version }}</h1>
	</header>
	<div class="w-full flex flex-col sm:flex-row flex-grow overflow-hidden bg-yellow-50">
		<aside class="sm:w-1/3 w-full flex-shrink flex-grow-0 my-4 relative">
			<nav class="absolute top-0 px-4 w-full">
				<ul class="flex flex-col space-y-3">
					<li
						v-for="zone in unlockedZones"
						v-bind:key="zone.component"
						v-bind:class="{ active: currentTab == zone.component }"
						v-on:click="currentTab = zone.component"
					>
						<button class="nav-button">{{ zone.name }}</button>
					</li>
				</ul>
			</nav>
			<nav class="absolute bottom-0 px-4 w-full">
				<ul class="flex flex-col space-y-3 bottom-0">
					<li>
						<button class="nav-button" @click="currentTab = 'SettingsZone'">Settings</button>
					</li>
				</ul>
			</nav>
		</aside>
		<main role="main" class="w-full h-full flex-grow p-3 overflow-auto">
			<keep-alive>
				<component v-bind:is="currentTab"></component>
			</keep-alive>
		</main>
		<aside class="sm:w-1/2 w-full flex-shrink flex-grow-0">
			<resource-pane></resource-pane>
		</aside>
	</div>
	<footer class="mt-auto bg-amber-200 px-2 py-1">
		<h1 class="text-1xl">Sandwich Idler {{ version }}</h1>
	</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'pinia';

import SandwichShopZone from './zones/SandwichShopZone.vue'
import MarketZone from './zones/MarketZone.vue'
import BakeryZone from './zones/BakeryZone.vue'
import FarmZone from './zones/FarmZone.vue'
import SettingsZone from './zones/SettingsZone.vue';

import ResourcePane from './ui/ResourcePane.vue'

import { useZoneStore } from '@/stores/ZoneStore';
import { useResourcesStore } from '@/stores/ResourcesStore';
import { useGameStore } from '@/stores/GameStore';
import { categories, resources } from '@/resources/resources';
import { LoadSave, StartSave } from '@/save';

export default defineComponent({
	name: 'App',
	components: {
		SandwichShopZone,
		MarketZone,
		BakeryZone,
		FarmZone,
		SettingsZone,
		ResourcePane
	},
	data() {
		return {
			currentTab: "SandwichShopZone",
			version: 'α0.1.4'
		}
	},
	computed: {
		...mapState(useZoneStore, ['unlockedZones'])
	},
	methods: {
		startGame() {
			const gameStore = useGameStore()
			gameStore.start()
		},
		stopGame() {
			const gameStore = useGameStore()
			gameStore.pause()
		}
	},
	created() {
		console.log('Created!')
		const resourceStore = useResourcesStore()
		resourceStore.loadResources(categories, resources)

		LoadSave()
		StartSave()
	},
	mounted() {
		console.log('Mounted!')
	},
	unmounted() {
		console.log('Unmounted!')
	}
})
</script>

<style scoped>
.nav-button {
	@apply bg-stone-300 p-2 rounded-lg leading-none w-full hover:bg-stone-200 shadow-md;
}

li.active button {
	@apply bg-stone-200;
}
</style>
