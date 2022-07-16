const foodBasket = [
    {
        category: "Baked Goods",
        productName: "Bread",
        brand: "Hovis",
        price: 180,
        promoted: false
    },
    {
        category: "fruit",
        productName: "Apple",
        brand: "Granny Smiths",
        price: 85,
        promoted: false
    },
    {
        category: "dairy",
        productName: "Salted Butter",
        brand: "Lurpak",
        price: 90,
        promoted: false
    }
];

const clothesBasket = [
    {
        category: "footwear",
        productName: "Safety Trainers",
        brand: "Strauss",
        price: 8000,
        colour: "white",
        promoted: true
    },
    {
        category: "trousers",
        productName: "Jeans",
        brand: "Levi",
        price: 5000,
        colour: "blue",
        promoted: false
    },
    {
        category: "jackets",
        productName: "Zip-up front",
        brand: "Adidas",
        price: 7000,
        colour: "yellow",
        promoted: false
    }
];

const outOfStock = [];

// push, pop (adding and removing from the back end of the array)

const newAnchorButter = {
    category: "dairy",
    productName: "Salted Butter",
    brand: "Anchor",
    price: 95,
    promoted: false
};

// Q1. Remove the Lurpack and put it in the outOfStock array.
// Q2. Add the newAnchorButter to replace it.

outOfStock.push(
    foodBasket.splice(
        foodBasket.findIndex((el, i) => {
            el.brand === 'Lurpack'
        }
        )
    )
);

foodBasket.push(newAnchorButter);

// unshift and shift (adding and removing from the front end of the array)
// Q3. Remove the promoted trainers from the clothesBasket; change promoted to false and then put them on the back of the array.

var promoted = clothesBasket.shift();
promoted.promoted = !promoted.promoted;
clothesBasket.push(promoted);

// Q4. In their place put these trainers:
const crookedTonguesTrainers = {
    category: "footwear",
    productName: "Panama Eagles",
    brand: "Crooked Tongues",
    price: 8200,
    colour: "brown",
    promoted: true
};

clothesBasket.unshift(crookedTonguesTrainers);

// splice (inserting in the middle)
// Q5. Insert the following two items into clothes after the promoted items:
const clothesItem1 = {
    category: "hats",
    productName: "NYC Baseball Cap",
    brand: "Adidas",
    price: 3500,
    colour: "black",
    promoted: true
};
const clothesItem2 = {
    category: "hats",
    productName: "Bandana",
    brand: "Nike",
    price: 2500,
    colour: "camoflage",
    promoted: false
};

clothesBasket.splice(
    clothesBasket.findIndex(el => el.promoted) + 1,
    0,
    clothesItem1,
    clothesItem2
);

// Q6. Remove the Granny Smith's and replace with this Pink Lady:
const pinkLady = {
    category: "fruit",
    productName: "Apple",
    brand: "Pink Lady",
    price: 80,
    promoted: true
};

foodBasket.splice(
    foodBasket.findIndex(el => el.brand === "Granny Smiths"),
    1,
    pinkLady
);

// concat (joining two arrays)
// Q.7. Create a new array called 'basket' and which is an amalgamation of both baskets.
const basket = foodBasket.concat(clothesBasket);

// forEach (ierating over an array)
// Q.8. Find the total of the basket (print to console)

var price = 0;

basket.forEach(el => {
    price += el.price;
});

console.log(`£${Math.round(price / 100)}`);

// includes (find a simple value/reference)
// Q.9. Confirm that the new basket includes clothesItem1
// productName: "NYC Baseball Cap",
basket.includes(clothesItem1);

// indexOf
// Q.10. Confirm the index of clothesItem1
basket.indexOf(clothesItem1);

// every and some
// Q.11. Confirm that every item has a price over 50p

console.log(basket.every(item => item.price > 50));

// Q.12. Check if some items have a price over £50

console.log(basket.some(item => item.price > 100 * 50));

// find and findIndex
// Q.13. Find the Bandana in the basket
console.log(basket.findIndex(item => item.productName === "Bandana"));

// Q.14. Find the index of the Yellow Addidas Jacket
console.log(basket.findIndex(item => {
    return item.brand === "Adidas"
        && item.category === "jackets"
        && item.colour === "yellow"
}
));

// filter
// Q.15. Make an array of all the promoted items
// Log it like:
// console.log("Q15. promoted", JSON.parse(JSON.stringify(promoted)));

const newArr = basket.filter(item => item.promoted);

console.log(`Q15. promoted ${JSON.stringify(newArr)}`);

// reverse
// Q.16. Reverse the order of your new promoted items array
// Log it like:
// console.log("Q16. promoted reversed", JSON.parse(JSON.stringify(promoted)));

console.log("Q16. promoted reversed", JSON.parse(
    JSON.stringify(
        newArr.reverse()
    )
));

// sort
// Q.17. Sort your basket by productName and log it
console.log(basket.sort((itemOne, itemTwo) => {
    if (itemOne.productName < itemTwo.productName) {
        return -1;
    }
    else if (itemOne.productName > itemTwo.productName) {
        return 1;
    }
    return 0;
}));

// Q.18. Sort your basket by price and log it
console.log(basket.sort((itemOne, itemTwo) => {
    if (itemOne.price < itemTwo.price) {
        return -1;
    }
    else if (itemOne.price > itemTwo.price) {
        return 1;
    }
    return 0;
}));

// map
// Q.19. From the basket, make an array called 'summary' which consists of strings which are of the format: <brand>-<product name>
const summary = basket.map(item => `${item.brand}-${item.productName}`);

// join (turning array items into a string)
// Q.20. Print a comma-separated list of the items in summary
console.log(summary.join(', '));

// slice (copying)
// Q.21. Make a copy of your basket for a friend, but only the last 3 items
const forFriend = basket.slice(basket.length - 3);


//EXTENDED TASKS
// Complete the code pen task from Tuesday
// Extend that task to ensure you are familiar with the key syntax we covered this evening

// Create a fat arrow function that accepts no parameters
const someFunction = () => {
    console.log('yay arrow functions');
};

// Create a fat arrow function that accepts one parameter
// Make one of the above return a value on a single line(rather than using return)
// Extend one of the above to use a default value
const someNewFunction = (myNum = 0) => myNum * 10

// Create a template literal string
console.log(`this is a template literal and 4 * 4 is: ${4 * 4}`);

// Create an object and use object destructing to pull parts of the data out
const data = {
    firstName: 'John',
    lastName: 'Smith',
    age: 40,
};

const { firstName, lastName, age } = data;

// Do the same for an array
const colors = ['red', 'green', 'blue'];
const [colorOne, colorTwo, colorThree] = colors;

