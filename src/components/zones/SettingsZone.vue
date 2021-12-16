<template>
	<h1 class="text-2xl font-bold">Settings</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: "SettingsZone",
	methods: {
		resetGame() {
			localStorage.removeItem('resources')
		}
	}
})
</script>

<style scoped>
</style>