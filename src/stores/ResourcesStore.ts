import { defineStore, acceptHMRUpdate } from "pinia";
import { IResource, ICategory } from '@/resources/resources'
import { IDictionary } from "@/interfaces";

export const useResourcesStore = defineStore('resourcesStore', {
	state: () => ({
		cash: { name: "Cash", quantity: 500, unlocked: true },
		resources: {} as IDictionary<IResource>,
		categories: {} as IDictionary<ICategory>
	}),
	getters: {
		unlockedBread: (state) => Object.values(state.resources).filter(resource => resource.category == "bread" && resource.unlocked),
		unlockedMeat: (state) => Object.values(state.resources).filter(resource => resource.category == "meat" && resource.unlocked)
	},
	actions: {
		loadResources(categories: ICategory[], resources: IResource[]) {
			for (const category of categories) {
				this.categories[category.id] = category
			}
			for (const resource of resources) {
				this.resources[resource.id] = resource
			}
		},
		getUnlockedResourcesByCategory(categoryId: string) {
			return Object.values(this.resources).filter(resource => resource.category == categoryId && resource.unlocked)
		},
		purchaseResource(resourceId: string) {
			const resource = this.resources[resourceId]
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