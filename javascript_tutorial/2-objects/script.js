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


// const product2 = {
//     name: 'shirt',
//     'delivery-time': 1600,
//     rating: {
//         stars: 4.5,
//         count: 87,
//     },
//     fun: function function1() {
//         console.log('Function inside object');
//     }
// };

// console.log(product2);
// console.log(product2.name);
// console.log(product2['name']);
// console.log(product2['delivery-time']);
// console.log(product2.rating.stars)
// console.log(product2['rating']['stars'])

// product2.fun()

console.log("hello".length)
console.log("hello".toUpperCase())

const object1 = {
    message: "hello"
};

const object2 = object1;

object1.message = 'good job';

console.log(object1)
console.log(object2)


const object3 = {
    message: 'good job'
};


console.log(object3 === object1);
console.log(object3.message === object1.message);

const object4 = {
    message: 'good job 4',
    price: 799,
};

// const message = object4.message
const { message, price } = object4;
console.log(message)
console.log(price)


const object5 = {
    // message: message,
    message,
    // method: function function1() {
    //     console.log('method');
    // },
    // method() {
    //     console.log('method')
    // },
    method: (hello) => {
        console.log('string method', hello)
    }

}

console.log(object5)
object5.method("hello world")
