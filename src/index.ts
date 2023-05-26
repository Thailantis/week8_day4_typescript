import {v4 as uuidv4} from 'uuid';

class Item {
    private _id: string;
    private _name: string;
    private _price: number;
    private _description: string;

    constructor(name:string, price:number, description:string) {
        this._id = uuidv4();
        this._name = name;
        this._price = price;
        this._description = description;
    }

    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    set name(value:string) {
        this._name = value;
    }
    get price(): number {
        return this._price;
    }
    set price(value: number){
        this._price = value;
    }
    get description(): string {
        return this._description;
    }
    set description(value: string) {
        this._description = value;
    }
}

class User {
    private _id: string;
    private _name: string;
    private _age: number;
    private _cart: Item[];

    constructor(name: string, age:number) {
        this._id = uuidv4();
        this._name = name;
        this._age = age;
        this._cart = [];
    }

    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    set name(value:string) {
        this._name = value;
    }
    get age(): number {
        return this._age
    }
    set age(value:number){
        this._age = value;
    }
    get cart(): Item[] {
        return this._cart;
    }

    addToCart(item: Item): void {
        this._cart.push(item);
    }

    removeFromCart(itemId: string): void {
        this._cart = this._cart.filter((item) => item.id !== itemId);
    }

    removeQuantityFromCart(item: Item, quantity:number): void {
        const itemIndex = this._cart.findIndex((cartItem) => cartItem.id === item.id);
        if (itemIndex !== -1) {
            this._cart[itemIndex] = {...this._cart[itemIndex] };
            this._cart[itemIndex].quantity -= quantity;
            if (this._cart[itemIndex].quantity <= 0) {
                this._cart.splice(itemIndex, 1);
            }
        }
    }

    cartTotal(): number {
        return this._cart.reduce((total, item) => total + item.price, 0);
    }

    printCart(): void {
        console.log(`${this.name}'s Cart: `);
        this._cart.forEach((item) => {
            console.log(`-${item.name} - $${item.price}`);
        });
    }
}

class Shop {
    private _items: Item[];

    constructor() {
        this._items = [];
    }

    get items(): Item[] {
        return this._items;
    }
    addItem(item: Item): void {
        this._items.push(item);
    }

    removeItem(itemId: string): void {
        this._items = this._items.filter((item) => item.id !== itemId);
    }
}

const shop = new Shop();
const user = new User("Francine Smith", 40);

const itemA = new Item("Item A", 10, "Description for Item A");
const itemB = new Item("Item A", 20, "Description for Item B");
const itemC = new Item("Item C", 30, "Description for Item C");


user.addToCart(itemA);
user.addToCart(itemB);
user.addToCart(itemC);

// Print the user's cart
user.printCart();

// Remove instances of a single item from the cart
user.removeFromCart(itemB);

// Remove a specific quantity from one of the Item list from the cart
user.removeQuantityFromCart(itemA, 1);

// Print the updated cart
user.printCart();

// Calculate the total price of the items in the cart
const cartTotal = user.cartTotal();
console.log('Cart Total:', cartTotal);
