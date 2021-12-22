import { IDictionary } from "@/interfaces";
import { defineStore } from "pinia";

type GameFunction = () => void
interface MethodRegistration {
	name: string,
	interval: number,
	method: GameFunction
}

export const useGameStore = defineStore('gameStore', {
	state: () => {
		let worker = null as Worker | null
		const methods = {} as IDictionary<MethodRegistration>

		if (window.Worker) {
			worker = new Worker(new URL('@/game/worker.js', import.meta.url))
			worker.addEventListener('message', function (e) {
				if (Object.keys(methods).includes(e.data)) {
					methods[e.data].method()
				}
			})
		}

		return {
			worker: worker,
			methods: methods,
			paused: true
		}
	},
	actions: {
		registerLoop(name: string, interval: number, method: GameFunction) {
			this.methods[name] = { name, interval, method }
			if (this.paused == false) {
				this.worker?.postMessage({ name, interval })
			}
		},
		start() {
			this.paused = false
			for (const registration of Object.values(this.methods)) {
				this.worker?.postMessage({ name: registration.name, interval: registration.interval })
			}
		},
		pause() {
			this.worker?.postMessage('clear')
			this.paused = true
		}
	}
})