function createUser(name: string, age: number): User {
    const user: User = {
        id: uuidv4(),
        name,
        age,
        cart: []
    };

    return user;
}

function createItem(name: string, price: number, description: string): Item {
    const item: Item = {
        id: uuidv4(),
        name,
        price,
        description
    };

    return item;
}

function addToCart(item: Item, user: User): void {
    user.cart.push(item);
}

function removeFromCart(item: Item, user: User):void {
    user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
}

function removeQuantityFromCart(item: Item, quantity: number, user: User): void {
    const itemIndex = user.cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1) {
        if (user.cart[itemIndex].quantity <= quantity) {
            user.cart.splice(itemIndex,1);
        } else {
            user.cart[itemIndex].quantity -= quantity;
        }
    }
}

function cartTotal(user: User):number {
    let total = 0;
    for (const item of user.cart) {
        total += item.price;
    }
    return total;
}

function printCart(user: User):void {
    console.log(`User: ${user.name}'s Cart:`);
    for (const item of user.cart) {
        console.log(`- ${item.name} (${item.price}$)`)
    }
}
