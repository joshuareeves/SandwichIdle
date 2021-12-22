import { IDictionary } from "@/interfaces";
import { defineStore } from "pinia";

export interface IZone {
	id: string,
	component: string,
	name: string,
	unlocked: boolean
}

export const useZoneStore = defineStore('zoneStore', {
	state: () => ({
		zones: {
			sandwichShop: { id: 'sandwichShop', component: 'SandwichShopZone', name: 'Sandwich Shop', unlocked: true },
			market: { id: 'market', component: 'MarketZone', name: 'Market', unlocked: true },
			bakery: { id: 'bakery', component: 'BakeryZone', name: 'Bakery', unlocked: false },
			farm: { id: 'farm', component: 'FarmZone', name: 'Farm', unlocked: false }
		} as IDictionary<IZone>
	}),
	getters: {
		unlockedZones: (state) => Object.values(state.zones).filter(z => z.unlocked == true)
	}
})