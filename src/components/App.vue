<template>
	<header class="mt-auto bg-amber-200 px-2 py-1">
		<h1 class="text-1xl">Sandwich Idler Layout Prototype</h1>
	</header>
	<div class="w-full flex flex-col sm:flex-row flex-grow overflow-hidden bg-yellow-50">
		<aside class="sm:w-1/3 w-full flex-shrink flex-grow-0 mt-4">
			<nav class="sticky top-0 px-4 w-full">
				<ul class="flex flex-col space-y-3">
					<li v-for="location in tabs" v-bind:key="location.component" v-bind:class="{active: currentTab == location.component}" v-on:click="currentTab = location.component">
						<button class="nav-button">{{ location.name }}</button>
					</li>
				</ul>
			</nav>
		</aside>
		<main role="main" class="w-full h-full flex-grow p-3 overflow-auto">
			<keep-alive>
				<component v-bind:is="currentTab"></component>
			</keep-alive>
		</main>
		<aside class="sm:w-1/2 w-full flex-shrink flex-grow-0">
			<div class="bg-yellow-200 mt-4 py-2 pl-3 rounded-tl-lg rounded-bl-lg">
				<h2 class="text-xl">Resources</h2>
				<table class="w-full">
					<thead>
						<tr>
							<th colspan="2">Grains</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Wheat</td>
							<td>24.6 lb</td>
						</tr>
						<tr>
							<td>Rye</td>
							<td>13.4 lb</td>
						</tr>
					</tbody>
				</table>
				<table class="w-full">
					<thead>
						<tr>
							<th colspan="2">Breads</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>White</td>
							<td>5 loaves</td>
						</tr>
						<tr>
							<td>Whole Grain</td>
							<td>2 loaves</td>
						</tr>
					</tbody>
				</table>
			</div>
		</aside>
	</div>
	<footer class="mt-auto bg-amber-200 px-2 py-1">
		<h1 class="text-1xl">Sandwich Idler Layout Prototype</h1>
	</footer>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import SandwichShop from './SandwichShopZone.vue'
	import Bakery from './BakeryZone.vue';
	import Farm from './FarmZone.vue';

	export default defineComponent({
		name: 'App',
		components: {
			SandwichShop,
			Bakery,
			Farm
		},
		data() {
			return {
				currentTab: "SandwichShop",
				tabs: [
					{ name: "Sandwich Shop", component: "SandwichShop" },
					{ name: "Bakery", component: "Bakery" },
					{ name: "Farm", component: "Farm" }
				]
			}
		},
	});
</script>

<style>
	.nav-button {
		@apply bg-stone-300 p-2 rounded-lg leading-none w-full hover:bg-stone-200 shadow-md;
	}

	li.active button {
		@apply bg-stone-200;
	}
</style>
