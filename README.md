# OOP Cart Reborn
- Using the function built in the previous nights homework as a starting point, you are task with designing an OOP System to create a Shop with Users that can buy Items.

## Step 1: Create A Typescript Project
- Create a node project but intializing npm your your project's folder
- Make it a Typescript Project by install TypeScript
- Configure your .tsconfig to align with our recommended options for this project
- Use npm to install uuid ad the uuid types

## Step 2: Create Some Classes
- Create a class to describe a Item
   - Be sure to encapsulate your class using private attributes with public getters/setters
   - id as a string defaulted to a UUID
   - name as a string
   - price as an integer
   - description as a string

- Create a class to describe a User
    - Be sure to encapsulate your class using private attributes with public getters/setters
    - id as a string defaulted to a UUID
    - name as a string
    - age as an integer
    - cart as an array of Items

- Create a class to describe a Shop
    - Be sure to encapsulate your class using private attributes with public getters/setters
    - items as an array of Items (This will hold all the items for sale in the shop)


## Step 3: Create some methods
    - User Class Methods:
        - addToCart
            - this method will bring an object of Item Type and it will add the item to the users cart

        - removeFromCart
            - this method will bring an object of Item Type and it will remove all the instances of the item to the users cart (so the cart would have zero of these items left)

        - removeQuantityFromCart
            - this method will bring an object of Item Type and a quantity of the item to remove and it will remove the quantity amount of instances of the item to the users cart (so if the cart had 5 red hats and we pass in the red hat item and the number 3 for the quantitiy we would end up with 2 red hats left in the cart)

        - cartTotal
            - this method will calculate the total price of all items in our cart and RETURNS that value

        - printCart
            - this method will take a user and console log the items in the users cart 

    - Item Class Methods:
        - This class will not have any methods outside of getters orsetters for thisportion of the project

    - Shop Class Methods:
        - constructor
            - The constructor will create three (3) Items and add them to the list of items in the shop


## Step 4: Create Driver Code to emulate a front end user
- use the functions created to accomplish these tasks in order
- Create a Shop
- Create a User
- Create some code to add items from the shop to the users cart, print the cart and remove all of a singluar item from the cart and remove a quanitiy from a cart.
- Verify all functions work as expected, if they don't figure out why not and fix your functions.
