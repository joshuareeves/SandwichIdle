import { IDictionary } from "@/interfaces"

const tickInterval = 1000
const intervalIds = {} as IDictionary<number>

function main() {
	console.log('In the main loop!')
}

export function StartGame() {
	console.log('Started Game!')
	intervalIds['main'] = setInterval(main, tickInterval)
}

export function StopGame() {
	console.log('Stopped Game!')
	clearInterval(intervalIds['main'])
}