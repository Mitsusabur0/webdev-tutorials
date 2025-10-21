
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

const jsonString = JSON.stringify(product2)
console.log(jsonString);
console.log(typeof JSON.stringify(product2))


const jsObject = JSON.parse(jsonString)
console.log(typeof jsObject)