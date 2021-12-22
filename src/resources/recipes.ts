export interface IRecipe {
	id: string,
	name: string,
	ingredients: [
		{ resourceId: string, quantity: number }
	],
	basePrice: number,
	unlocked: true
}

export const recipes = [
	{
		id: 'hamCheeseSandwich',
		name: 'Ham & Cheese Sandwich',
		ingredients: [
			{ resourceId: 'white', quantity: 2 },
			{ resourceId: 'ham', quantity: 1 },
			{ resourceId: 'swiss', quantity: 1 },
			{ resourceId: 'iceberg', quantity: 0.05 },
			{ resourceId: 'tomato', quantity: 0.2 }
		],
		basePrice: 5.65,
		unlocked: true
	}
]