import { defineStore } from "pinia";

export const useZoneStore = defineStore('zoneStore', {
	state: () => ({
		zones: {
			sandwichShop: { component: 'SandwichShopZone', name: 'Sandwich Shop', unlocked: true },
			market: { component: 'MarketZone', name: 'Market', unlocked: true },
			bakery: { component: 'BakeryZone', name: 'Bakery', unlocked: false },
			farm: { component: 'FarmZone', name: 'Farm', unlocked: false }
		}
	}),
	getters: {
		unlockedZones: (state) => Object.values(state.zones).filter(z => z.unlocked == true)
	}
})