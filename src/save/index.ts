import { useResourcesStore } from "@/stores/ResourcesStore";

const saveGameKey = 'savegame'
const saveInterval = 5000
let saveIntervalId: number

interface ISaveResource {
	resourceId: string,
	quantity: number
}

interface ISaveGame {
	cash: number,
	resources: ISaveResource[]
}

export function StartSave() {
	saveIntervalId = setInterval(() => {
		const resourceStore = useResourcesStore()
		const resources = Object.values(resourceStore.resources)
		const saveResources = new Array<ISaveResource>(resources.length)

		for (let resourceLoop = 0; resourceLoop < resources.length; resourceLoop++) {
			saveResources[resourceLoop] = { resourceId: resources[resourceLoop].id, quantity: resources[resourceLoop].quantity }
		}

		const saveGame = {
			cash: resourceStore.cash.quantity,
			resources: saveResources
		} as ISaveGame

		localStorage.setItem(saveGameKey, JSON.stringify(saveGame))
	}, saveInterval)
}

export function StopSave() {
	clearInterval(saveIntervalId)
}

export function LoadSave() {
	const resourceStore = useResourcesStore()
	const saveGameString = localStorage.getItem(saveGameKey)

	if (saveGameString != null) {
		const saveGame = JSON.parse(saveGameString) as ISaveGame
		for (const saveResource of saveGame.resources) {
			resourceStore.resources[saveResource.resourceId].quantity = saveResource.quantity
		}
		resourceStore.cash.quantity = saveGame.cash
	}
}

export function ClearSave() {
	localStorage.removeItem(saveGameKey)
}