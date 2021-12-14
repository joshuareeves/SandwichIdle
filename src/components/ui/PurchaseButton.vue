<template>
	<button class="button" @click="$emit('purchase', resource?.id)">Buy {{ resource?.name }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Resource } from '@/stores/ResourcesStore';

export default defineComponent({
	name: "PurchaseButton",
	props: {
		resource: { type: Object as () => Resource }
	}
})
</script>

<style scoped>
.button {
	@apply bg-stone-300 p-2 rounded-lg leading-none hover:bg-stone-200 shadow-md;
}
</style>