import { useResourcesStore } from "@/stores/ResourcesStore";
import { useZoneStore } from "@/stores/ZoneStore";

const saveGameKey = 'savegame'
const saveInterval = 5000
let saveIntervalId: number

interface ISaveResource {
	resourceId: string,
	quantity: number,
	unlocked: boolean
}

interface ISaveZone {
	zoneId: string,
	unlocked: boolean
}

interface ISaveGame {
	cash: number,
	resources: ISaveResource[],
	zones: ISaveZone[]
}

function SaveGame() {
	const resourceStore = useResourcesStore()
	const zoneStore = useZoneStore()

	const resources = SaveResources(resourceStore)
	const zones = SaveZones(zoneStore)

	const saveGame = {
		cash: resourceStore.cash.quantity,
		resources: resources,
		zones: zones
	} as ISaveGame

	localStorage.setItem(saveGameKey, JSON.stringify(saveGame))
}

function SaveResources(resourceStore: ReturnType<typeof useResourcesStore>): ISaveResource[] {
	const resources = Object.values(resourceStore.resources)
	const saveResources = new Array<ISaveResource>(resources.length)

	for (let resourceLoop = 0; resourceLoop < resources.length; resourceLoop++) {
		saveResources[resourceLoop] = {
			resourceId: resources[resourceLoop].id,
			quantity: resources[resourceLoop].quantity,
			unlocked: resources[resourceLoop].unlocked
		}
	}

	return saveResources
}

function SaveZones(zoneStore: ReturnType<typeof useZoneStore>): ISaveZone[] {
	const zones = Object.values(zoneStore.zones)
	const saveZones = new Array<ISaveZone>(zones.length)

	for (let zoneLoop = 0; zoneLoop < zones.length; zoneLoop++) {
		saveZones[zoneLoop] = {
			zoneId: zones[zoneLoop].id,
			unlocked: zones[zoneLoop].unlocked
		}
	}

	return saveZones
}

export function StartSave() {
	saveIntervalId = setInterval(() => {
		SaveGame()
	}, saveInterval)
}

export function StopSave() {
	clearInterval(saveIntervalId)
}

export function LoadSave() {
	const resourceStore = useResourcesStore()
	const zoneStore = useZoneStore()

	const saveGameString = localStorage.getItem(saveGameKey)

	if (saveGameString != null) {
		const saveGame = JSON.parse(saveGameString) as ISaveGame

		resourceStore.cash.quantity = saveGame.cash

		for (const saveResource of saveGame.resources) {
			resourceStore.resources[saveResource.resourceId].quantity = saveResource.quantity
			resourceStore.resources[saveResource.resourceId].unlocked = saveResource.unlocked
		}

		for (const saveZone of (saveGame.zones ?? new Array<ISaveZone>(0))) {
			zoneStore.zones[saveZone.zoneId].unlocked = saveZone.unlocked
		}
	}
}

export function ClearSave() {
	localStorage.removeItem(saveGameKey)
}