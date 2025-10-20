// const product = {
//     name: 'socks',
//     price: 1090,
// };

// console.log(product)
// console.log(product.price)

// product.price = 9900;
// console.log(`The ${product.name} are $${product.price}.`)

// product.color = 'red';
// console.log(product);

// delete product.color;
// console.log(product);


const product2 = {
    name: 'shirt',
    'delivery-time': 1600,
    rating: {
        stars: 4.5,
        count: 87,
    },
    fun: function function1() {
        console.log('Function inside object');
    }
};

console.log(product2);
console.log(product2.name);
console.log(product2['name']);
console.log(product2['delivery-time']);
console.log(product2.rating.stars)
console.log(product2['rating']['stars'])

product2.fun()