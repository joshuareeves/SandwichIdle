export interface IResource {
	id: string,
	name: string,
	category: string,
	quantity: number,
	purchasePrice: number,
	purchaseQuantity: number,
	unlocked: boolean
}

export interface ICategory {
	id: string,
	name: string
}

export const resources = [
	//Bread
	{ id: "white", name: "White", category: "bread", quantity: 0, purchasePrice: 2, purchaseQuantity: 24, unlocked: true },
	{ id: "wheat", name: "Wheat", category: "bread", quantity: 0, purchasePrice: 3, purchaseQuantity: 24, unlocked: true },
	{ id: "rye", name: "Rye", category: "bread", quantity: 0, purchasePrice: 3.5, purchaseQuantity: 14, unlocked: false },
	{ id: "sourdough", name: "Sourdough", category: "bread", quantity: 0, purchasePrice: 3, purchaseQuantity: 20, unlocked: false },
	//Meat
	{ id: "ham", name: "Ham", category: "meat", quantity: 0, purchasePrice: 5.75, purchaseQuantity: 10, unlocked: true },
	{ id: "turkey", name: "Turkey", category: "meat", quantity: 0, purchasePrice: 5.5, purchaseQuantity: 10, unlocked: true },
	{ id: "roastBeef", name: "Roast Beef", category: "meat", quantity: 0, purchasePrice: 9, purchaseQuantity: 10, unlocked: false },
	//Dairy
	{ id: "american", name: "American Cheese", category: "dairy", quantity: 0, purchasePrice: 6, purchaseQuantity: 24, unlocked: true },
	{ id: "swiss", name: "Swiss Cheese", category: "dairy", quantity: 0, purchasePrice: 6, purchaseQuantity: 22, unlocked: true },
	//Veggie
	{ id: "iceberg", name: "Iceberg Lettuce", category: "veggie", quantity: 0, purchasePrice: 1.50, purchaseQuantity: 1, unlocked: true },
	{ id: "tomato", name: "Tomato", category: "veggie", quantity: 0, purchasePrice: 1, purchaseQuantity: 1, unlocked: true }
];

export const categories = [
	{ id: 'bread', name: 'Bread' },
	{ id: 'meat', name: 'Meat' },
	{ id: 'dairy', name: 'Dairy' },
	{ id: 'veggie', name: 'Produce' }
];