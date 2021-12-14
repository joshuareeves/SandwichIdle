import { defineStore } from "pinia";

export const useZoneStore = defineStore('zoneStore', {
	state: () => ({
		zones: {
			sandwichShop: { component: 'SandwichShopZone', name: 'Sandwich Shop', unlocked: true },
			bakery: { component: 'BakeryZone', name: 'Bakery', unlocked: true },
			farm: { component: 'FarmZone', name: 'Farm', unlocked: true }
		}
	}),
	getters: {
		unlockedZones: (state) => Object.values(state.zones).filter(z => z.unlocked == true)
	}
})