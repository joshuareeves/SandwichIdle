<template>
	<table class="w-full">
		<thead>
			<tr>
				<th colspan="2">{{ category }}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="resource in resources" :key="resource.name">
				<td>{{ resource.name }}</td>
				<td>{{ resource.quantity }}</td>
			</tr>
		</tbody>
	</table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Resource {
	name: string
	quantity: number
}

export default defineComponent({
	name: "ResourcePane",
	props: {
		category: String,
		resources: { type: Object as () => Resource[] }
	}
})
</script>

<style scoped>
</style>