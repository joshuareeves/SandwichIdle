import { defineStore, acceptHMRUpdate } from "pinia";

export interface Resource {
	id: string,
	name: string,
	category: string,
	quantity: number,
	purchasePrice: number,
	purchaseQuantity: number,
	unlocked: boolean
}

interface Resources {
	[index: string]: Resource
}

export const useResourcesStore = defineStore('resourcesStore', {
	state: () => ({
		cash: { name: "Cash", quantity: 500, unlocked: true },
		resources: {
			//Bread
			white: { id: "white", name: "White Bread", category: "bread", quantity: 0, purchasePrice: 2, purchaseQuantity: 24, unlocked: true },
			wheat: { id: "wheat", name: "Wheat Bread", category: "bread", quantity: 0, purchasePrice: 3, purchaseQuantity: 24, unlocked: true },
			rye: { id: "rye", name: "Rye Bread", category: "bread", quantity: 0, purchasePrice: 3.5, purchaseQuantity: 14, unlocked: false },
			sourdough: { id: "sourdough", name: "Sourdough Bread", category: "bread", quantity: 0, purchasePrice: 3, purchaseQuantity: 20, unlocked: false },
			//Meat
			ham: { id: "ham", name: "Ham", category: "meat", quantity: 0, purchasePrice: 5.75, purchaseQuantity: 10, unlocked: true },
			turkey: { id: "turkey", name: "Turkey", category: "meat", quantity: 0, purchasePrice: 5.5, purchaseQuantity: 10, unlocked: true },
			roastBeef: { id: "roastBeef", name: "Roast Beef", category: "meat", quantity: 0, purchasePrice: 9, purchaseQuantity: 10, unlocked: false },
			//Dairy
			american: { id: "american", name: "American Cheese", category: "dairy", quantity: 0, purchasePrice: 6, purchaseQuantity: 24, unlocked: true },
			swiss: { id: "swiss", name: "Swiss Cheese", category: "dairy", quantity: 0, purchasePrice: 6, purchaseQuantity: 22, unlocked: true },
			//Veggie
			iceberg: { id: "iceberg", name: "Iceberg Lettuce", category: "veggie", quantity: 0, purchasePrice: 1.50, purchaseQuantity: 1, unlocked: true },
			tomato: { id: "tomato", name: "Tomato", category: "veggie", quantity: 0, purchasePrice: 1, purchaseQuantity: 1, unlocked: true }
		} as Resources
	}),
	getters: {
		unlockedBread: (state) => Object.values(state.resources).filter(resource => resource.category == "bread" && resource.unlocked),
		unlockedMeat: (state) => Object.values(state.resources).filter(resource => resource.category == "meat" && resource.unlocked)
	},
	actions: {
		purchaseResource(resourceId: string) {
			const resource = this.resources[resourceId as keyof Resources]
			if (this.cash.quantity >= resource.purchasePrice) {
				this.cash.quantity -= resource.purchasePrice
				resource.quantity += resource.purchaseQuantity
			}
		}
	}
})

if (import.meta.webpackHot) {
	import.meta.webpackHot.accept(acceptHMRUpdate(useResourcesStore, import.meta.webpackHot))
}